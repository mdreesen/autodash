/**
 * AUTODASH COURIER DISPATCH ACCEPTANCE ENGINE
 * SERVER/API/ORDERS/ACCEPT-JOB.POST.TS
 */
import mongoose, { type Model } from 'mongoose'
import PartsOrderImport from '../../database/models/PartsOrder'
import { connectDB } from "../../database/mongodb";

const PartsOrder = PartsOrderImport as Model<any>

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { orderId } = body

  // Pulls the authenticated user identity directly from local middleware contexts
  const user = event.context.user

  // Fallback safety for local testing (Targets your driver ID seamlessly)
  const driverId = user?._id || new mongoose.Types.ObjectId("6a1f377861d1ee56fc110dab")

  if (!orderId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing target validation payload. orderId required.'
    })
  }

  try {
    await connectDB();

    // Atomically find the order AND ensure it hasn't been snatched up by another driver yet
    const finalizedOrder = await PartsOrder.findOneAndUpdate(
      {
        _id: new mongoose.Types.ObjectId(orderId),
        status: 'placed',
        driverId: null
      },
      {
        $set: {
          driverId: driverId,
          status: 'accepted',
          updatedAt: new Date()
        }
      },
      {
        returnDocument: 'after' // Uses modern non-deprecated spec option
      }
    )

    // Race condition guard: If no document matched, another driver beat them to it
    if (!finalizedOrder) {
      throw createError({
        statusCode: 409, // Conflict state
        statusMessage: 'This hot-shot dispatch offer has already been claimed by another driver.'
      })
    }

    console.log(`📦 [Logistics Core] Order ${orderId} successfully locked by driver ${driverId}`)

    return {
      success: true,
      message: 'Hot-shot dispatch route secured. Proceeding to supplier counter.',
      order: finalizedOrder
    }

  } catch (error: any) {
    console.error('❌ Failed to assign driver dispatch contract:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal logistics distribution fault.'
    })
  }
})