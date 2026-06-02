/**
 * COMMERCIAL BUYER FLEET COMMAND GATEWAY
 * SERVER/API/BUYER/DATABASE.GET.TS
 */
import type { Model } from 'mongoose'
import PartsOrderImport from '../../database/models/PartsOrder'

const PartsOrder = PartsOrderImport as Model<any>

export default defineEventHandler(async (event) => {
  try {
    // In a full setup, this matches event.context.user.workshopId. 
    // For local testing, we fetch all orders across the regional fleet account.
    const allOrders = await PartsOrder.find()
      .sort({ createdAt: -1 })
      .lean()

    const liveDispatches = []
    const pastDeliveries = []

    for (const order of allOrders) {
      // Clean up the auto parts store display labels
      const rawStore = (order.supplier?.storeName || '').toLowerCase()
      let cleanStoreName = "AutoZone Auto Parts"
      if (rawStore.includes('oreilly')) cleanStoreName = "O'Reilly Auto Parts"
      if (rawStore.includes('napa')) cleanStoreName = "NAPA Auto Parts"

      const formattedOrder = {
        _id: order._id.toString(),
        timestamp: order.createdAt || new Date(),
        supplierName: cleanStoreName,
        partsManifest: order.manifestText || "Commercial Components",
        vehicleInfo: `${order.vehicle?.year || ''} ${order.vehicle?.make || ''} ${order.vehicle?.model || 'Fleet Unit'}`.trim(),
        totalCost: order.pricing?.total || order.pricing?.deliveryFee || 24.50,
        status: order.status || 'placed',
        bayInstructions: order.deliveryLocation?.bayInstructions || "Main Repair Bay"
      }

      // Route the order to the correct UI display panel block based on lifecycle state
      if (order.status === 'placed' || order.status === 'accepted') {
        liveDispatches.push(formattedOrder)
      } else if (order.status === 'completed') {
        pastDeliveries.push(formattedOrder)
      }
    }

    return {
      success: true,
      live: liveDispatches,
      history: pastDeliveries
    }

  } catch (error: any) {
    console.error('❌ Failed to compile buyer fleet matrix:', error)
    throw createError({
      statusCode: 500,
      message: error.message || 'Internal fleet processing database fault.'
    })
  }
})