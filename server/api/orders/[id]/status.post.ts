/**
 * AUTODASH DELIVERY LOGISTICAL STATE TRANSITION HANDLER
 * NITRO SERVER ROUTE // POST REQUEST // AUDIT TIMESTAMPS
 */
import type { Model } from 'mongoose'
import PartsOrderImport from '../../../database/models/PartsOrder'

const PartsOrder = PartsOrderImport as Model<any>

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const user = event.context.user
  const orderId = getRouterParam(event, 'id')

  // 1. Structural Verification Gateway
  if (!user?._id || user.role !== 'driver') {
    throw createError({
      statusCode: 403,
      message: 'Access denied. Only the assigned courier can mutate transit parameters.'
    })
  }

  const { status: nextStatus } = body
  const validStatuses = ['picking-up', 'in-transit', 'delivered', 'cancelled']
  
  if (!nextStatus || !validStatuses.includes(nextStatus)) {
    throw createError({
      statusCode: 400,
      message: 'Invalid or missing target lifecycle state modification directive.'
    })
  }

  try {
    // 2. Locate the target order and ensure this driver owns the assignment contract
    const order = await PartsOrder.findById(orderId)

    if (!order) {
      throw createError({ statusCode: 404, message: 'Target order context record missing.' })
    }

    if (order.driverId.toString() !== user._id) {
      throw createError({ 
        statusCode: 403, 
        message: 'Security breach attempt. This tracking route vector belongs to another fleet courier.' 
      })
    }

    // 3. Compute Lifecycle Progress Timestamps
    order.status = nextStatus

    if (nextStatus === 'picking-up' && !order.pickedUpAt) {
      // Driver arrived at auto supplier parts service counter counter desk
      order.pickedUpAt = new Date()
    } else if (nextStatus === 'delivered' && !order.deliveredAt) {
      // Parcel package box safely rested within designated mechanic lift workshop bay
      order.deliveredAt = new Date()
    }

    // 4. Commit updates directly to MongoDB instance storage sets
    await order.save()

    return {
      success: true,
      message: `Logistics pipeline successfully advanced to state: ${nextStatus}`,
      currentStatus: order.status
    }

  } catch (error: any) {
    console.error('Lifecycle status advance transaction state failure:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Data mutations aborted during transaction phase.'
    })
  }
})