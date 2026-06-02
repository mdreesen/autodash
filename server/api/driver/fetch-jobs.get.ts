import type { Model } from 'mongoose'
import PartsOrderImport from '../../database/models/PartsOrder'

const PartsOrder = PartsOrderImport as Model<any>

export default defineEventHandler(async (event) => {
  try {
    // 1. Fetch live unassigned records from MongoDB Atlas
    const activeOffers = await PartsOrder.find({ 
      status: 'placed',
      driverId: null 
    })
    .sort({ createdAt: -1 })
    .lean()

    console.log(`📡 [Radar Engine] Live database query found ${activeOffers.length} unassigned orders.`)

    // 2. Safely translate database schemas into clean UI model data
    const formattedOrders = activeOffers.map(order => {
      // Safe fallback calculations for delivery fee matrices
      const deliveryFee = order.pricing?.deliveryFee || 14.50
      const BASE_FEE = 7.00
      const PER_MILE_RATE = 1.50
      const calculatedDistance = (deliveryFee - BASE_FEE) / PER_MILE_RATE

      // Enforce strict lowercase checks to capture any casing variants safely
      const rawStoreName = (order.supplier?.storeName || '').toLowerCase()
      let readableStoreName = "AutoZone Auto Parts"

      if (rawStoreName.includes('oreilly') || rawStoreName.includes('o\'reilly')) {
        readableStoreName = "O'Reilly Auto Parts"
      } else if (rawStoreName.includes('napa')) {
        readableStoreName = "NAPA Auto Parts"
      }

      // Extract the destination variables cleanly matching your database nesting rules
      const locationBlock = order.deliveryLocation || {}
      
      // Determine a readable title for the workshop destination layout card
      const destinationTitle = locationBlock.bayInstructions || "Commercial Fleet Workshop"

      return {
        _id: order._id.toString(), // Coerces ObjectId to flat string for clean Vue tracking keys
        nearestSupplier: readableStoreName,
        destination: {
          name: destinationTitle, // 🔥 Explicitly matches your dashboard layout card loop!
          address: locationBlock.address || "Address Not Specified"
        },
        distanceMiles: calculatedDistance > 0 ? Math.round(calculatedDistance * 10) / 10 : 3.2,
        pricing: deliveryFee,
        status: order.status
      }
    })

    return {
      success: true,
      orders: formattedOrders
    }

  } catch (error: any) {
    console.error('❌ Driver job board sync broken:', error)
    return {
      success: false,
      orders: [],
      message: error.message || 'Internal pipeline validation fault.'
    }
  }
})