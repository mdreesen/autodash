/**
 * AUTODASH DELIVERY RATE CALCULATOR
 * SERVER/API/ORDERS/CALCULATE-RATE.POST.TS
 */
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { supplierCoords, destinationCoords } = body // Expected formats: [lng, lat]
  
    if (!supplierCoords || !destinationCoords) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid coordinate payloads provided.'
      })
    }
  
    // 1. Calculate Straight-Line Distance via Haversine Formula (Miles)
    const toRad = (value: number) => (value * Math.PI) / 180
    const R = 3956 // Radius of the Earth in miles
  
    const dLat = toRad(destinationCoords[1] - supplierCoords[1])
    const dLon = toRad(destinationCoords[0] - supplierCoords[0])
    
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(supplierCoords[1])) *
        Math.cos(toRad(destinationCoords[1])) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2)
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const distanceInMiles = R * c
  
    // 2. Apply Real-World Commercial Pricing Matrices
    const BASE_FEE = 7.00
    const PER_MILE_RATE = 1.50
    
    // Calculate raw cost, keeping a minimum ceiling of the Base Fee
    const calculatedRate = BASE_FEE + (distanceInMiles * PER_MILE_RATE)
    
    // Clean up floating point rounding issues for clean monetary currency rendering
    const finalDeliveryRate = Math.max(BASE_FEE, Math.round(calculatedRate * 100) / 100)
  
    return {
      success: true,
      distanceMiles: Math.round(distanceInMiles * 10) / 10,
      estimatedRate: finalDeliveryRate
    }
  })