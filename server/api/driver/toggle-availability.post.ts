/**
 * COURIER NETWORK STATUS GATEWAY
 * SERVER/API/DRIVER/TOGGLE-AVAILABILITY.POST.TS
 */
import mongoose, { type Model } from 'mongoose'
import UserImport from '../../database/models/User'
import { connectDB } from "../../database/mongodb";

const User = UserImport as Model<any>

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { isAvailable } = body

  // Pulls the authenticated user identity directly from local middleware contexts
  const user = event.context.user

  // Fallback safety for local testing. (Ensures it is a pristine, correctly cast object identifier)
  let targetDriverId = user?._id

  if (!targetDriverId) {
    // Falls back to a validated schema conversion of your user identity string
    targetDriverId = new mongoose.Types.ObjectId("6a1f377861d1ee56fc110dab")
  }

  if (isAvailable === undefined) {
    throw createError({
      statusCode: 400,
      message: 'Missing isAvailable availability boolean property.'
    })
  }

  try {
    await connectDB();

    // Update the database document fields in real-time
    const updatedUser = await User.findByIdAndUpdate(
      targetDriverId,
      { $set: { isAvailable: !!isAvailable } },
      { 
        // 🔥 FIX 1: Silences the Mongoose warning by utilizing the updated spec option
        returnDocument: 'after', 
        runValidators: true 
      }
    )

    if (!updatedUser) {
      throw createError({
        statusCode: 404,
        message: 'No matching registered courier user document found.'
      })
    }

    console.log(`📡 [Availability Engine] Updated database for ${updatedUser.name}: isAvailable is now ${updatedUser.isAvailable}`)

    return {
      success: true,
      currentState: updatedUser.isAvailable
    }

  } catch (error: any) {
    console.error('❌ Failed to change driver database visibility status:', error)
    throw createError({
      statusCode: 500,
      message: error.message || 'Database state modification faulted.'
    })
  }
})