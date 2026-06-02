/**
 * AUTODASH LIVE ORDER & COURIER TRACKING PIPELINE
 * SERVER/API/ORDERS/TRACK/[ID].GET.TS
 */
import type { Model } from 'mongoose'
import PartsOrderImport from '../../../../database/models/PartsOrder'
import UserImport from '../../../../database/models/User'
import { connectDB } from "../../../../database/mongodb";

const PartsOrder = PartsOrderImport as Model<any>
const User = UserImport as Model<any>

export default defineEventHandler(async (event) => {
  // Extract the raw hex ID from the restful URL structure
  const orderId = getRouterParam(event, 'id')

  try {
    await connectDB();

    // 1. Fetch the active order manifest document
    const order = await PartsOrder.findById(orderId).lean()
    if (!order) {
      throw createError({ statusCode: 404, message: 'Order tracking manifest not found.' })
    }

    // Default Fallbacks for Supplier Coordinates
    const supplierCoords = order.supplier?.storeName === 'NAPA' 
      ? [-114.3324, 48.4022] 
      : order.supplier?.storeName === "O'Reilly"
        ? [-114.1974, 48.3644]
        : [-114.3292, 48.1965] // AutoZone Kalispell default

    let driverCoords = null

    // 2. If a driver has accepted, pull their live telemetry coordinates from MongoDB
    if (order.driverId) {
      const driver = await User.findById(order.driverId).select('currentLocation name').lean()
      if (driver?.currentLocation?.coordinates) {
        // Invert to [lat, lng] format directly for Leaflet's consumption
        driverCoords = [driver.currentLocation.coordinates[1], driver.currentLocation.coordinates[0]]
      }
    }

    return {
      success: true,
      status: order.status,
      manifest: {
        supplierName: order.supplier?.storeName || 'Auto Parts Vendor',
        supplierCoords: [supplierCoords[1], supplierCoords[0]], // [lat, lng]
        destinationName: order.deliveryLocation?.bayInstructions || 'Workshop Target',
        destinationCoords: [order.deliveryLocation?.geoPoint?.coordinates[1], order.deliveryLocation?.geoPoint?.coordinates[0]], // [lat, lng]
        parts: order.manifestText || 'Commercial Parts Payload'
      },
      driver: driverCoords ? {
        name: order.driverName || 'Michael Dreesen',
        coords: driverCoords
      } : null
    }

  } catch (error: any) {
    console.error('❌ Tracking coordinate sync aborted:', error)
    throw createError({ 
      statusCode: 500, 
      message: error.message || 'Failed to extract tracking parameters.' 
    })
  }
})