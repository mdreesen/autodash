import type { Model } from 'mongoose'
import PartsOrderImport from '../../database/models/PartsOrder'

const PartsOrder = PartsOrderImport as Model<any>

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // FIXED: Pulls the user identity directly from our new local middleware context
  const user = event.context.user

  // Session Tracing & Security Verification
  if (!user?._id) {
    throw createError({
      statusCode: 401,
      message: 'Authentication trace missing. Please log in to request couriers.'
    })
  }

  const {
    year,
    make,
    model,
    storeName,
    storeAddress,
    commercialOrderNumber,
    manifestText,
    deliveryAddress,
    bayInstructions,
    lng,
    lat
  } = body

  if (!year || !make || !model || !storeAddress || !commercialOrderNumber || !manifestText || !deliveryAddress) {
    throw createError({
      statusCode: 400,
      message: 'All core logistical fields must be completed to initialize dispatch vectors.'
    })
  }

  try {
    const baseDeliveryFee = 14.50
    const driverCutPercentage = 0.85
    
    const driverPayout = Number((baseDeliveryFee * driverCutPercentage).toFixed(2)) // $12.33
    const platformCut = Number((baseDeliveryFee - driverPayout).toFixed(2))         // $2.17

    const targetLongitude = lng ? Number(lng) : -114.2846 
    const targetLatitude = lat ? Number(lat) : 48.2231

    const newOrder = await PartsOrder.create({
      buyerId: user._id, // Tracks the authenticated buyer
      driverId: null,
      
      vehicle: {
        year: Number(year),
        make,
        model
      },
      
      supplier: {
        storeName,
        storeAddress,
        commercialOrderNumber: commercialOrderNumber.toUpperCase().trim()
      },
      
      manifestText,
      
      deliveryLocation: {
        address: deliveryAddress,
        bayInstructions: bayInstructions || '',
        geoPoint: {
          type: 'Point',
          coordinates: [targetLongitude, targetLatitude]
        }
      },
      
      status: 'placed',
      
      pricing: {
        deliveryFee: baseDeliveryFee,
        driverPayout,
        platformCut
      }
    })

    return {
      success: true,
      message: 'Logistics manifest generated. Order broadcasted to active regional drivers.',
      orderId: newOrder._id,
      pricingDetails: newOrder.pricing
    }

  } catch (error: any) {
    console.error('Parts order creation lifecycle aborted:', error)
    throw createError({
      statusCode: 500,
      message: error.message || 'Failed to process delivery request manifest.'
    })
  }
})