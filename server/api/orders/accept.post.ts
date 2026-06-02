/**
 * AUTODASH COURIER GIG ACQUISITION GATEWAY
 * NITRO SERVER ROUTE // POST REQUEST // ATOMIC LOCKING
 */
import type { Model } from 'mongoose'
import PartsOrderImport from '../../database/models/PartsOrder'

const PartsOrder = PartsOrderImport as Model<any>

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const user = event.context.user

  // 1. Role-Based Security Verification
  if (!user?._id || user.role !== 'driver') {
    throw createError({
      statusCode: 403,
      message: 'Access denied. Only registered fleet couriers can claim open market routes.'
    })
  }

  const { orderId } = body
  if (!orderId) {
    throw createError({
      statusCode: 400,
      message: 'Missing unique target order identification hash parameter.'
    })
  }

  try {
    // 2. RUN ATOMIC TRANSACTION LOCK MUTATION
    // We strictly match on {_id: orderId, status: 'placed'} so that if another driver
    // already updated the status, this query fails to find a match and returns null.
    const securedOrder = await PartsOrder.findOneAndUpdate(
      {
        _id: orderId,
        status: 'placed' 
      },
      {
        $set: {
          driverId: user._id,
          status: 'accepted',
          acceptedAt: new Date()
        }
      },
      {
        new: true, // Returns the freshly updated document configuration properties
        runValidators: true
      }
    )

    // 3. Collision Resolution Exception Check
    if (!securedOrder) {
      throw createError({
        statusCode: 409, // Conflict state code match identifier
        message: 'Route ticket collision. This delivery run was already claimed by another active driver.'
      })
    }

    // 4. Return Final Validation Payload Matrix
    return {
      success: true,
      message: 'Route vector locked down successfully. Dispatching supplier manifest access details.',
      order: {
        id: securedOrder._id,
        status: securedOrder.status,
        commercialOrderNumber: securedOrder.supplier.commercialOrderNumber,
        storeAddress: securedOrder.supplier.storeAddress,
        deliveryAddress: securedOrder.deliveryLocation.address
      }
    }

  } catch (error: any) {
    console.error('Driver dispatch ticket lock acquisition failure:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal pipeline validation error during route claim negotiation.'
    })
  }
})