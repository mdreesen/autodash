/**
 * DYNAMIC PROFILE & ACTIVE TASK HANDSHAKE RECOVERY LAYOUT
 * SERVER/API/DRIVER/ME.GET.TS
 */
import mongoose, { type Model } from 'mongoose'
import UserImport from '../../database/models/User'
import PartsOrderImport from '../../database/models/PartsOrder'

const User = UserImport as Model<any>
const PartsOrder = PartsOrderImport as Model<any>

export default defineEventHandler(async (event) => {
  const user = event.context.user
  const driverId = user?._id || new mongoose.Types.ObjectId("6a1f377861d1ee56fc110dab")

  try {
    // 1. Fetch current database states for this driver document
    const driverRecord = await User.findById(driverId).select('-password').lean()
    if (!driverRecord) {
      return { success: false, message: 'Driver document footprint missing.' }
    }

    // 2. CRITICAL LIFE-CYCLE FIX: Check if driver was left assigned to an open delivery job before refresh
    // Includes both 'accepted' and 'in_transit' so current journey steps survive browser reloads
    const activeOrderRecord = await PartsOrder.findOne({
      driverId: driverId,
      status: { $in: ['accepted', 'in_transit'] }
    }).lean()

    // Map the database names cleanly to UI property variables if found
    let formattedActiveJob = null
    if (activeOrderRecord) {
      const rawStoreName = activeOrderRecord.supplier?.storeName || 'Commercial Warehouse'
      
      // Dynamic store formatting fallback handler
      let displayStoreName = rawStoreName
      if (rawStoreName.toLowerCase() === 'oreilly') displayStoreName = "O'Reilly Auto Parts"
      else if (rawStoreName.toLowerCase() === 'napa') displayStoreName = "NAPA Auto Parts"
      else if (rawStoreName.toLowerCase() === 'autozone') displayStoreName = "AutoZone Auto Parts"

      formattedActiveJob = {
        _id: activeOrderRecord._id.toString(),
        // Now dynamically handles any custom string input passed up by the order payload form!
        nearestSupplier: displayStoreName,
        destination: {
          name: activeOrderRecord.deliveryLocation?.bayInstructions || "Workshop Destination",
          address: activeOrderRecord.deliveryLocation?.address || "Address Missing"
        },
        // Feeds the complete pricing breakdown structure straight into the driver portal template
        pricing: {
          driverPayout: activeOrderRecord.pricing?.driverPayout || 11.13,
          deliveryFee: activeOrderRecord.pricing?.deliveryFee || 13.91
        },
        status: activeOrderRecord.status
      }
    }

    return {
      success: true,
      user: driverRecord,
      activeOrder: formattedActiveJob
    }

  } catch (error: any) {
    console.error('❌ Driver profile hydration collapsed:', error)
    throw createError({
      statusCode: 500,
      message: 'Internal profile data lookup fault.'
    })
  }
})