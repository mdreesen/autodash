/**
 * AUTODASH SINGLE ORDER MANIFEST FETCH ROUTE
 * NITRO SERVER ROUTE // GET REQUEST // PARAMETERIZED SLUG
 */
import type { Model } from 'mongoose'
import PartsOrderImport from '../../../database/models/PartsOrder'

const PartsOrder = PartsOrderImport as Model<any>

export default defineEventHandler(async (event) => {
  const user = event.context.user
  
  // 1. Session Authorization Gate
  if (!user?._id) {
    throw createError({
      statusCode: 401,
      message: 'Authentication signature missing.'
    })
  }

  // 2. Extract the dynamic router ID parameter slug segment
  const orderId = getRouterParam(event, 'id')

  try {
    // 3. Look up the order profile entry record
    const order = await PartsOrder.findById(orderId).lean()

    if (!order) {
      throw createError({
        statusCode: 404,
        message: 'Logistics order profile not found in active indexes.'
      })
    }

    // 4. Multi-Tenant Privacy Separation Check
    // Ensures arbitrary users cannot spy on other drivers' or shops' order values
    const isBuyer = order.buyerId.toString() === user._id
    const isAssignedDriver = order.driverId && order.driverId.toString() === user._id
    const isAdmin = user.role === 'admin'

    if (!isBuyer && !isAssignedDriver && !isAdmin) {
      throw createError({
        statusCode: 403,
        message: 'Access denied. You are not authorized to track this delivery manifest route.'
      })
    }

    return {
      success: true,
      order
    }

  } catch (error: any) {
    console.error('Failed to resolve order data extraction:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Database lookup pipeline exception.'
    })
  }
})