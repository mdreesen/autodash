/**
 * AUTODASH SYSTEM LOGISTICS BRAIN
 * AUTOMATED PROXIMITY WAREHOUSE ROUTING & PRICING DISPATCH ENGINE
 * SERVER/API/ORDERS/AUTO-DISPATCH-QUOTE.POST.TS
 */

// Define the hardcoded regional commercial parts hubs on the server
const MONTA_AUTOMOTIVE_HUBS = [
    {
      name: "O'Reilly Auto Parts - Columbia Falls",
      coordinates: [-114.1974, 48.3644]
    },
    {
      name: "AutoZone Auto Parts - Kalispell",
      coordinates: [-114.3292, 48.1965]
    },
    {
      name: "NAPA Auto Parts - Whitefish",
      coordinates: [-114.3324, 48.4022]
    }
  ]
  
  // Haversine Formula helper to calculate distance over sphere vectors
  function calculateDistanceInMiles(coords1: [number, number], coords2: [number, number]): number {
    const toRad = (value: number) => (value * Math.PI) / 180
    const R = 3956 // Radius of the Earth in miles
  
    const dLat = toRad(coords2[1] - coords1[1])
    const dLon = toRad(coords2[0] - coords1[0])
    
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(coords1[1])) *
        Math.cos(toRad(coords2[1])) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2)
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }
  
  export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { destinationCoords } = body // Expected: [longitude, latitude]
  
    if (!destinationCoords || !Array.isArray(destinationCoords) || destinationCoords.length !== 2) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Malforming routing matrix payload. Destination coordinates required.'
      })
    }
  
    let closestHub = MONTA_AUTOMOTIVE_HUBS[0]
    let shortestDistance = Infinity
  
    // 1. Loop through regional inventory supply locations to find the closest point
    for (const hub of MONTA_AUTOMOTIVE_HUBS) {
      const distance = calculateDistanceInMiles(hub.coordinates as [number, number], destinationCoords as [number, number])
      if (distance < shortestDistance) {
        shortestDistance = distance
        closestHub = hub
      }
    }
  
    // 2. Apply DoorDash-style base and linear tracking fees
    const BASE_FEE = 7.00
    const PER_MILE_RATE = 1.50
    
    const rawCost = BASE_FEE + (shortestDistance * PER_MILE_RATE)
    const finalDeliveryRate = Math.max(BASE_FEE, Math.round(rawCost * 100) / 100)
  
    // 3. Dispatch data back to your responsive mobile frontend layout
    return {
      success: true,
      nearestSupplier: closestHub?.name,
      distanceMiles: Math.round(shortestDistance * 10) / 10,
      estimatedRate: finalDeliveryRate
    }
  })