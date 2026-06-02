/**
 * COURIER PROFILE & ACTIVE TASK HANDSHAKE RECOVERY LAYOUT
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

    // 2. Check if this driver was left assigned to an open delivery job before refresh
    const activeOrderRecord = await PartsOrder.findOne({
      driverId: driverId,
      status: 'accepted'
    }).lean()

    // Map the database names cleanly to UI property variables if found
    let formattedActiveJob = null
    if (activeOrderRecord) {
      formattedActiveJob = {
        _id: activeOrderRecord._id.toString(),
        nearestSupplier: activeOrderRecord.supplier?.storeName === 'oreilly' 
          ? "O'Reilly Auto Parts" 
          : activeOrderRecord.supplier?.storeName === 'napa' 
            ? "NAPA Auto Parts" 
            : "AutoZone Auto Parts",
        destination: {
          name: activeOrderRecord.deliveryLocation?.bayInstructions || "Workshop Destination",
          address: activeOrderRecord.deliveryLocation?.address || "Address Missing"
        },
        pricing: activeOrderRecord.pricing?.deliveryFee || 14.50,
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