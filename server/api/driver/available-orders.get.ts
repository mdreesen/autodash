/**
 * AUTODASH DRIVER ACTIVE DISPATCH FEED
 * NITRO SERVER ROUTE // GET REQUEST
 */
import type { Model } from 'mongoose'
import PartsOrderImport from '../../database/models/PartsOrder'

const PartsOrder = PartsOrderImport as Model<any>

export default defineEventHandler(async (event) => {
  const user = event.context.user

  // 1. Role-Based Security Verification
  if (!user?._id || user.role !== 'driver') {
    throw createError({
      statusCode: 403,
      message: 'Access denied. Authorized fleet couriers only.'
    })
  }

  try {
    // 2. Fetch all orders waiting for a pickup, sorted by newest first
    const openOrders = await PartsOrder.find({ status: 'placed' })
      .sort({ createdAt: -1 })
      .populate('buyerId', 'name') // Pulls the shop name or mechanic's name cleanly
      .lean()

    return {
      success: true,
      orders: openOrders
    }
  } catch (error: any) {
    console.error('Failed to stream active dispatch vector:', error)
    throw createError({
      statusCode: 500,
      message: 'Error fetching open market order catalog.'
    })
  }
})