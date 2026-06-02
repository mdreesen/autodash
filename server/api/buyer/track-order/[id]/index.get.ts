/**
 * AUTODASH BUYER TRACKING GATEWAY
 * NITRO SERVER ROUTE // GET REQUEST // MULTI-COLLECTION JOIN
 */
import type { Model } from 'mongoose'
import PartsOrderImport from '../../../../database/models/PartsOrder'
import UserImport from '../../../../database/models/User'

const PartsOrder = PartsOrderImport as Model<any>
const User = UserImport as Model<any>

export default defineEventHandler(async (event) => {
  const user = event.context.user
  const orderId = getRouterParam(event, 'id')

  // 1. Session Verification
  if (!user?._id) {
    throw createError({ statusCode: 401, message: 'Authentication missing.' })
  }

  try {
    // 2. Locate the target order record entry
    const order = await PartsOrder.findById(orderId).lean()
    if (!order) {
      throw createError({ statusCode: 404, message: 'Order manifest not found.' })
    }

    // 3. Privacy Safeguard: Ensure only the original buyer can track it
    if (order.buyerId.toString() !== user._id && user.role !== 'admin') {
      throw createError({ statusCode: 403, message: 'Unauthorized tracking vector match.' })
    }

    // 4. Extract Assigned Driver Tracking Telemetry Points
    let driverCoordinates = null
    let driverName = 'Searching for nearest driver...'

    if (order.driverId) {
      const assignedDriver = await User.findById(order.driverId).select('name currentLocation').lean()
      if (assignedDriver) {
        driverName = assignedDriver.name
        // Pull out the [lng, lat] coordinate map parameters safely
        if (assignedDriver.currentLocation?.coordinates) {
          driverCoordinates = assignedDriver.currentLocation.coordinates
        }
      }
    }

    // 5. Package and emit the unified active telemetry payload
    return {
      success: true,
      status: order.status,
      supplierName: order.supplier.storeName,
      deliveryAddress: order.deliveryLocation.address,
      manifestSummary: order.manifestText,
      driverProfile: {
        name: driverName,
        coordinates: driverCoordinates // Sends [longitude, latitude] to frontend map renders
      }
    }

  } catch (error: any) {
    console.error('Buyer tracking query faulted:', error)
    throw createError({ statusCode: 500, message: 'Failed to synchronize tracking feed.' })
  }
})