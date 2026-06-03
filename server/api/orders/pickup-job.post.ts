/**
 * AUTODASH COURIER CARGO PICKUP CONFIRMATION
 * SERVER/API/ORDERS/PICKUP-JOB.POST.TS
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
            message: 'Missing transaction parameters. orderId required.'
        })
    }

    try {
        // Advanced order status to 'in_transit' to signal cargo is on the move
        const updatedOrder = await PartsOrder.findOneAndUpdate(
            {
                _id: new mongoose.Types.ObjectId(orderId),
                status: 'accepted' // Guard clause: can only pick up an accepted order
            },
            {
                $set: {
                    status: 'in_transit',
                    updatedAt: new Date()
                }
            },
            { returnDocument: 'after' }
        )

        if (!updatedOrder) {
            throw createError({
                statusCode: 400,
                message: 'Order cannot be picked up. Invalid status transition.'
            })
        }

        console.log(`📦 [Logistics Core] Order ${orderId} is now IN TRANSIT on the road.`);

        // REAL-TIME PUSH: Update buyer's tracking progress bar instantly
        EventHub.sendToBuyer(orderId, 'status_update', { status: 'in_transit' })

        return { success: true, status: updatedOrder.status };

    } catch (error: any) {
        console.error('❌ Failed to transition order to transit state:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            message: error.message || 'Internal logistics processing fault.'
        })
    }
})