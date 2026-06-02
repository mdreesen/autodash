/**
 * COURIER ARCHIVAL DISPATCH HISTORY LOGS
 * SERVER/API/DRIVER/HISTORY.GET.TS
 */
import mongoose, { type Model } from 'mongoose'
import PartsOrderImport from '../../database/models/PartsOrder'

const PartsOrder = PartsOrderImport as Model<any>

export default defineEventHandler(async (event) => {
  // Pulls the authenticated user identity directly from local middleware contexts
  const user = event.context.user
  const driverId = user?._id || new mongoose.Types.ObjectId("6a1f377861d1ee56fc110dab")

  try {
    // 1. Fetch all historical order entries linked to this specific driver
    const totalHistoryLogs = await PartsOrder.find({ driverId })
      .sort({ createdAt: -1 })
      .lean()

    // 2. Compute live aggregate analytics summaries
    let totalCompletions = 0
    let totalLifetimePayout = 0

    const formattedOrders = totalHistoryLogs.map((order: any) => {
      const driverCut = order.pricing?.driverPayout || 0
      const isDone = order.status === 'completed'

      if (isDone) {
        totalCompletions++
        totalLifetimePayout += driverCut
      }

      // Safe normalization for supplier storefront branding strings
      const rawStore = (order.supplier?.storeName || '').toLowerCase()
      let cleanStoreName = "AutoZone Auto Parts"
      if (rawStore.includes('oreilly')) cleanStoreName = "O'Reilly Auto Parts"
      if (rawStore.includes('napa')) cleanStoreName = "NAPA Auto Parts"

      return {
        _id: order._id.toString(),
        timestamp: order.createdAt || new Date(),
        vehicleSpecs: `${order.vehicle?.year || ''} ${order.vehicle?.make || ''} ${order.vehicle?.model || 'Vehicle'}`.trim(),
        supplier: cleanStoreName,
        destination: order.deliveryLocation?.bayInstructions || "Fleet Workshop",
        manifestText: order.manifestText || "Commercial Auto Components",
        payout: Number(driverCut.toFixed(2)),
        status: order.status || 'placed'
      }
    })

    return {
      success: true,
      metrics: {
        completedRuns: totalCompletions,
        lifetimeEarnings: Number(totalLifetimePayout.toFixed(2))
      },
      logs: formattedOrders
    }

  } catch (error: any) {
    console.error('❌ Failed to compile courier order history matrix:', error)
    throw createError({
      statusCode: 500,
      message: error.message || 'Failed to fetch historical logistics logs.'
    })
  }
})