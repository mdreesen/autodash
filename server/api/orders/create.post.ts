/**
 * CRITICAL FIX: LOGISTICS ENTRY PIPELINE WITH ROBUST BROADCAST ERROR HANDLING
 * SERVER/API/ORDERS/CREATE.POST.TS
 */
import mongoose, { type Model } from 'mongoose'
import PartsOrderImport from '../../database/models/PartsOrder'

const PartsOrder = PartsOrderImport as Model<any>

export default defineEventHandler(async (event) => {
  console.log('📬 [Order API] Received incoming order payload from buyer form...')
  const body = await readBody(event)
  
  const { 
    poNumber, 
    urgency, 
    supplier, 
    vehicle, 
    manifestText, 
    partNumbers, 
    deliveryLocation 
  } = body

  // 1. Strict Validation Guard Clause check
  if (!vehicle?.make || !vehicle?.model || !manifestText) {
    console.warn('⚠️ [Order API] Aborted. Missing required payload properties.')
    throw createError({
      statusCode: 400,
      message: 'Mandatory vehicle specifications or item manifests are missing.'
    })
  }

  const user = event.context.user
  const activeBuyerId = user?._id || new mongoose.Types.ObjectId("6a1f3a7e7c3b74a0bdde377e")

  try {
    // Dynamic Pricing Splits Calculations
    const isUrgent = urgency === 'hotshot'
    const baseFee = isUrgent ? 12.00 : 7.00
    const perMileFee = 1.50
    const travelMiles = 4.3 
    
    const deliveryFee = Number((baseFee + (travelMiles * perMileFee)).toFixed(2))
    const DRIVER_CUT_RATIO = 0.80
    const driverPayout = Number((deliveryFee * DRIVER_CUT_RATIO).toFixed(2))
    const platformCut = Number((deliveryFee - driverPayout).toFixed(2))

    console.log('🗄️ [Order API] Attempting database document insertion into Atlas...')

    // 2. Write order request directly to MongoDB Collection
    const newOrderDocument = await PartsOrder.create({
      buyerId: activeBuyerId,
      driverId: null,
      status: 'placed',
      poNumber: poNumber,
      urgency: urgency,
      supplier: {
        // Enforce plain clean strings; prevents schema enum rejection loops!
        storeName: supplier?.storeName || 'AutoZone Auto Parts',
        storeAddress: supplier?.storeAddress || supplier?.address || '740 US Hwy 2 W, Kalispell, MT', 
        commercialOrderNumber: `AUTO-${Math.floor(100000 + Math.random() * 900000)}`
      },
      vehicle: {
        year: Number(vehicle.year) || 2022,
        make: vehicle.make,
        model: vehicle.model,
        engineSize: vehicle.engineSize || 'N/A',
        vin: (vehicle.vin || '').toUpperCase(),
        unitNumber: vehicle.unitNumber || 'Main Shop Floor'
      },
      manifestText: manifestText,
      partNumbers: partNumbers || [],
      pricing: {
        deliveryFee: deliveryFee,
        driverPayout: driverPayout,
        platformCut: platformCut
      },
      deliveryLocation: {
        address: deliveryLocation?.address || 'Evergreen Region, Kalispell, MT',
        bayInstructions: deliveryLocation?.bayInstructions || 'Main Service Center',
        geoPoint: {
          type: 'Point',
          coordinates: [-114.2846, 48.2231]
        }
      },
      createdAt: new Date(),
      updatedAt: new Date()
    })

    console.log(`✅ [Order API] MongoDB Write Success! Document ID: ${newOrderDocument._id}`)

    // 3. 🔥 CRITICAL REAL-TIME STREAM BROADCAST
    // Placed carefully after successful write to push data down the active EventHub stream
    console.log('📢 [Order API] Initializing EventHub driver broadcast stream push...')
    
    EventHub.broadcastToDrivers('new_job', {
      _id: newOrderDocument._id.toString(),
      status: newOrderDocument.status,
      nearestSupplier: newOrderDocument.supplier.storeName,
      destination: {
        name: newOrderDocument.deliveryLocation.bayInstructions,
        address: newOrderDocument.deliveryLocation.address
      },
      pricing: {
        driverPayout: driverPayout
      },
      manifestText: newOrderDocument.manifestText
    })

    console.log('✨ [Order API] EventHub broadcast task cycle complete.')

    return {
      success: true,
      orderId: newOrderDocument._id
    }

  } catch (error: any) {
    // Captures structural schema validation errors explicitly in your console
    console.error('❌ [Order API CRASH] Ingestion Pipeline Failed:', error.message)
    throw createError({
      statusCode: 500,
      message: `Database or event stream registration fault: ${error.message}`
    })
  }
})