<script setup>
import { supplierLocations, destinationShops } from '~/utils/mockLocations'

// Active Reactive States
const selectedSupplier = ref(supplierLocations[0])
const selectedDestination = ref(destinationShops[0])

const estimatedRate = ref(14.50)
const calculatedDistance = ref(0)
const isLoading = ref(false)

// Dynamic API Trigger Matrix
async function calculateDynamicRoutePrice() {
  isLoading.value = true
  try {
    const data = await $fetch('/api/orders/calculate-rate', {
      method: 'POST',
      body: {
        supplierCoords: selectedSupplier.value.coordinates,
        destinationCoords: selectedDestination.value.coordinates
      }
    })
    
    if (data.success) {
      estimatedRate.value = data.estimatedRate
      calculatedDistance.value = data.distanceMiles
    }
  } catch (error) {
    console.error('Pricing lookup engine faulted:', error)
  } finally {
    isLoading.value = false
  }
}

// Watchers: Automatically re-run the matrix when a dropdown selection modifies
watch([selectedSupplier, selectedDestination], () => {
  calculateDynamicRoutePrice()
}, { immediate: true }) // Triggers immediately on view load
</script>

<template>
  <div class="p-4 space-y-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
    <h1 class="text-xl font-bold text-gray-900">Create Hot-Shot Parts Order</h1>

    <div class="space-y-1">
      <label class="text-xs font-semibold text-gray-500 uppercase">Pickup Location</label>
      <select 
        v-model="selectedSupplier" 
        class="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <option v-for="shop in supplierLocations" :key="shop.name" :value="shop">
          {{ shop.name }}
        </option>
      </select>
    </div>

    <div class="space-y-1">
      <label class="text-xs font-semibold text-gray-500 uppercase">Delivery Destination</label>
      <select 
        v-model="selectedDestination" 
        class="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <option v-for="shop in destinationShops" :key="shop.name" :value="shop">
          {{ shop.name }}
        </option>
      </select>
    </div>

    <div class="p-4 border border-gray-100 rounded-xl bg-gray-50/50 space-y-1 relative">
      <div v-if="isLoading" class="absolute inset-0 bg-white/60 flex items-center justify-center rounded-xl text-xs text-orange-500 font-semibold">
        Recalculating route metrics...
      </div>
      
      <p class="text-xs uppercase tracking-wider text-gray-400 font-medium">Estimated Delivery Rate</p>
      <div class="flex items-baseline space-x-2">
        <h2 class="text-3xl font-extrabold text-gray-900">${{ estimatedRate.toFixed(2) }}</h2>
        <span class="text-xs font-medium text-gray-400">USD</span>
      </div>
      <p class="text-xs text-gray-500">
        Calculated dispatch distance: <strong class="text-gray-700">{{ calculatedDistance }} miles</strong> across Flathead valley routing grids.
      </p>
    </div>

    <button class="w-full py-4 bg-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-colors">
      Confirm & Dispatch Carrier
    </button>
  </div>
</template>