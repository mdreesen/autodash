/**
 * AUTODASH HOT-SHOT DISPATCH ORDER PROVISIONING GATEWAY
 * SERVER/API/ORDERS/CREATE.POST.TS
 */
import type { Model } from 'mongoose'
import PartsOrderImport from '../../database/models/PartsOrder'
import { connectDB } from "../../database/mongodb";

const PartsOrder = PartsOrderImport as Model<any>

// Global geo-coordinate coordinates map matching strict schema strings
const HUB_COORDINATE_MAP: Record<string, [number, number]> = {
  "O'Reilly": [-114.1974, 48.3644],
  "AutoZone": [-114.3292, 48.1965],
  "NAPA": [-114.3324, 48.4022]
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // Pulls the authenticated user identity directly from local middleware contexts
  const user = event.context.user

  // Session Tracing & Security Verification
  if (!user?._id) {
    throw createError({
      statusCode: 401,
      message: 'Authentication trace missing. Please log in to request couriers.'
    })
  }

  // Extract structured parameters matching the new DoorDash-style client payload
  const { vehicle, parts, destination, pricing } = body

  // Core payload safety validations
  if (!vehicle || !vehicle.year || !vehicle.make || !vehicle.model) {
    throw createError({
      statusCode: 400,
      message: 'Target vehicle specifications are missing or incomplete.'
    })
  }

  if (!parts || !parts.trim()) {
    throw createError({
      statusCode: 400,
      message: 'Parts line items or manifest text cannot be empty.'
    })
  }

  if (!destination || !destination.name || !destination.address || !destination.coordinates) {
    throw createError({
      statusCode: 400,
      message: 'Destination workshop destination vectors are missing.'
    })
  }

  try {
    await connectDB();

    // 1. Map to Capitalized Schema Enum String Variants ('AutoZone' | 'NAPA' | "O'Reilly")
    let schemaStoreEnum = "AutoZone"
    let fullDisplayAddress = "740 US Hwy 2 W, Kalispell, MT"

    if (destination.name.includes("Whitefish")) {
      schemaStoreEnum = "NAPA"
      fullDisplayAddress = "6435 US-93, Whitefish, MT"
    } else if (destination.name.includes("Glacier") || destination.name.includes("Columbia Falls")) {
      schemaStoreEnum = "O'Reilly"
      fullDisplayAddress = "1405 9th St W, Columbia Falls, MT"
    }

    const supplierCoords = HUB_COORDINATE_MAP[schemaStoreEnum] as [number, number]

    // 2. Compute financial platform and payout splits dynamically from the passed quote
    const finalDeliveryFee = pricing ? Number(pricing) : 14.50
    const DRIVER_CUT_RATIO = 0.85
    
    const driverPayout = Number((finalDeliveryFee * DRIVER_CUT_RATIO).toFixed(2))
    const platformCut = Number((finalDeliveryFee - driverPayout).toFixed(2))

    // 3. Write structured document matching schema validation parameters
    const newOrder = await PartsOrder.create({
      buyerId: user._id, 
      driverId: null,
      
      vehicle: {
        year: Number(vehicle.year),
        make: vehicle.make,
        model: vehicle.model
      },
      
      supplier: {
        storeName: schemaStoreEnum, // 🔥 UPDATED: Shifted to capitalized string format to satisfy schema enum constraints
        storeAddress: fullDisplayAddress,
        commercialOrderNumber: `AUTO-${Math.floor(100000 + Math.random() * 900000)}`
      },
      
      manifestText: parts,
      
      deliveryLocation: {
        address: destination.address,
        bayInstructions: destination.name,
        geoPoint: {
          type: 'Point',
          coordinates: [Number(destination.coordinates[0]), Number(destination.coordinates[1])] // [longitude, latitude]
        }
      },
      
      status: 'placed', // Retained original schema validation status keyword
      
      pricing: {
        deliveryFee: finalDeliveryFee,
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