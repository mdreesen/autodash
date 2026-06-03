/**
 * AUTODASH DISPATCH FULFILLMENT CLOSURE
 * SERVER/API/ORDERS/COMPLETE-JOB.POST.TS
 */
import mongoose, { type Model } from 'mongoose'
import PartsOrderImport from '../../database/models/PartsOrder'

const PartsOrder = PartsOrderImport as Model<any>

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { orderId } = body

  if (!orderId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Order ID parameter missing from closure payload.'
    })
  }

  try {
    const completedOrder = await PartsOrder.findByIdAndUpdate(
      new mongoose.Types.ObjectId(orderId),
      {
        $set: {
          status: 'completed',
          updatedAt: new Date()
        }
      },
      { returnDocument: 'after' }
    )

    console.log(`🏁 [Logistics Core] Order ${orderId} marked completed. Cargo dropped off.`);

    // REAL-TIME PUSH: Close out the buyer's tracking panel view cleanly
    EventHub.sendToBuyer(orderId, 'status_update', { status: 'completed' })

    return { success: true, order: completedOrder }

  } catch (error: any) {
    console.error('❌ Failed to finalize order completion lifecycle:', error)
    throw createError({
      statusCode: 500,
      message: error.message || 'Database state modification faulted.'
    })
  }
})