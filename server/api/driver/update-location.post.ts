/**
 * LIVE COURIER TELEMETRY INGESTION GATEWAY & SSE REAL-TIME STREAM PIPELINE
 * SERVER/API/DRIVER/UPDATE-LOCATION.POST.TS
 */
import mongoose, { type Model } from 'mongoose'
import UserImport from '../../database/models/User'
import PartsOrderImport from '../../database/models/PartsOrder'
import { connectDB } from "../../database/mongodb";

const User = UserImport as Model<any>
const PartsOrder = PartsOrderImport as Model<any>

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { coordinates } = body // Expected format from watchPosition: [longitude, latitude]

  const user = event.context.user
  const driverId = user?._id || new mongoose.Types.ObjectId("6a1f377861d1ee56fc110dab")

  if (!coordinates || !Array.isArray(coordinates) || coordinates.length !== 2) {
    throw createError({
      statusCode: 400,
      message: 'Invalid coordinate payload formatting. Requires GeoJSON [lng, lat] numerical array.'
    })
  }

  try {
    await connectDB();

    // 1. Perform a targeted, atomic write directly to the user's location sub-object
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

    // 2. REAL-TIME PUSH: Look for an open accepted or in-transit order for this courier
    // Using the explicitly typed PartsOrder model avoids the linter bugs seen in input_file_0.png!
    const activeOrder = await PartsOrder.findOne({
      driverId: driverId,
      status: { $in: ['accepted', 'in_transit'] }
    }).select('_id').lean()

    // 3. If an active run is in progress, pipe the coordinates directly to the buyer's map view
    if (activeOrder) {
      EventHub.sendToBuyer(activeOrder._id.toString(), 'location_update', {
        // Inverts to Leaflet [latitude, longitude] array orientation rules
        coords: [Number(coordinates[1]), Number(coordinates[0])]
      })
    }

    return { success: true }
  } catch (error: any) {
    console.error('Telemetry write fault:', error)
    throw createError({ 
      statusCode: 500, 
      message: 'Failed to commit telemetry coordinates and broadcast real-time streaming updates.' 
    })
  }
})