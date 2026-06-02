/**
 * LIVE COURIER TELEMETRY INGESTION GATEWAY
 * SERVER/API/DRIVER/UPDATE-LOCATION.POST.TS
 */
import mongoose, { type Model } from 'mongoose'
import UserImport from '../../database/models/User'

const User = UserImport as Model<any>

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { coordinates } = body // Expected format: [longitude, latitude]

  const user = event.context.user
  const driverId = user?._id || new mongoose.Types.ObjectId("6a1f377861d1ee56fc110dab")

  if (!coordinates || !Array.isArray(coordinates) || coordinates.length !== 2) {
    throw createError({
      statusCode: 400,
      message: 'Invalid coordinate payload formatting. Requires GeoJSON [lng, lat] numerical array.'
    })
  }

  try {
    // Perform a targeted, atomic write directly to the user's location sub-object
    await User.findByIdAndUpdate(
      driverId,
      {
        $set: {
          'currentLocation.type': 'Point',
          'currentLocation.coordinates': [Number(coordinates[0]), Number(coordinates[1])],
          isAvailable: true
        }
      }
    )

    return { success: true }
  } catch (error: any) {
    console.error('Telemetry write fault:', error)
    throw createError({ statusCode: 500, message: 'Failed to commit telemetry coordinates.' })
  }
})