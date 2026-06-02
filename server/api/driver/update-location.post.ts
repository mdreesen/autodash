/**
 * AUTODASH DRIVER GEOLOCATION RADAR TRACKING ENDPOINT
 * NITRO SERVER ROUTE // POST REQUEST // LIVE COORDINATE TELEMETRY
 */
import type { Model } from 'mongoose'
import UserImport from '../../database/models/User'

const User = UserImport as Model<any>

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const user = event.context.user

  // 1. Role Verification Gate
  if (!user?._id || user.role !== 'driver') {
    throw createError({
      statusCode: 403,
      message: 'Access denied. Location telemetry updates reserved for fleet couriers.'
    })
  }

  const { longitude, latitude } = body
  if (longitude === undefined || latitude === undefined) {
    throw createError({
      statusCode: 400,
      message: 'Missing explicit hardware spatial coordinates.'
    })
  }

  try {
    // 2. Update the Driver's real-time coordinate position index fields
    await User.findByIdAndUpdate(user._id, {
      $set: {
        isAvailable: true, // Mark them active in the matching pool
        currentLocation: {
          type: 'Point',
          coordinates: [Number(longitude), Number(latitude)] // MongoDB standard: [lng, lat]
        }
      }
    })

    return {
      success: true,
      timestamp: new Date().toISOString()
    }

  } catch (error: any) {
    console.error('Failed to log hardware location telemetry payload:', error)
    throw createError({
      statusCode: 500,
      message: 'Telemetry pipeline save failure.'
    })
  }
})