<script setup>
import { ref, watch } from 'vue'

// Target Workshop locations owned or utilized by buyers
const buyerWorkshops = [
  {
    name: "Big Mountain Repair (Evergreen)",
    address: "Evergreen Region, Kalispell, MT",
    coordinates: [-114.2846, 48.2231]
  },
  {
    name: "Whitefish Automotive Care",
    address: "W 2nd St, Whitefish, MT 59937",
    coordinates: [-114.3411, 48.4114]
  },
  {
    name: "Glacier Field Service Garage",
    address: "Nucleus Ave, Columbia Falls, MT 59912",
    coordinates: [-114.1832, 48.3712]
  }
]

// --- REACTIVE STATE STORAGE BINDINGS ---
const year = ref('2022')
const make = ref('Ford')
const modelName = ref('F-150')
const partsRequested = ref('') // Text area for line item parts requests

const selectedDestination = ref(buyerWorkshops[0])

// Dynamic Valuation Vectors (Now calculated via backend proximity dispatch lookup)
const estimatedRate = ref(0.00)
const calculatedDistance = ref(0)
const nearestSupplierFound = ref('')
const isCalculating = ref(false)

// --- DOOR-DASH STYLE AUTO DISPATCH HANDSHAKE ---
async function fetchAutoDispatchMetrics() {
  isCalculating.value = true
  try {
    // The backend now takes the buyer's destination and automatically calculates
    // the distance to the closest optimized commercial parts provider.
    const response = await $fetch('/api/orders/auto-dispatch-quote', {
      method: 'POST',
      body: {
        destinationCoords: selectedDestination.value.coordinates
      }
    })
    
    if (response.success) {
      estimatedRate.value = response.estimatedRate
      calculatedDistance.value = response.distanceMiles
      nearestSupplierFound.value = response.nearestSupplier
    }
  } catch (err) {
    console.error('Failed to resolve dynamic delivery cost vectors:', err)
  } finally {
    isCalculating.value = false
  }
}

// Automatically recalculate route metrics whenever the buyer changes their delivery destination
watch(selectedDestination, () => {
  fetchAutoDispatchMetrics()
}, { immediate: true })

async function handleConfirmOrder() {
  try {
    const orderPayload = {
      vehicle: { year: year.value, make: make.value, model: modelName.value },
      parts: partsRequested.value,
      destination: selectedDestination.value,
      pricing: estimatedRate.value
    }
    
    // Dispatches payload cleanly to your newly fixed backend server file
    const data = await $fetch('/api/orders/create', {
      method: 'POST',
      body: orderPayload
    })
    
    // 🔥 FIX: Redirect directly to your real tracking screen structure!
    if (data.success && data.orderId) {
      useRouter().push(`/buyer/track-order/${data.orderId}`)
    }
  } catch (error) {
    console.error('Order creation failed:', error)
  }
}
</script>

<template>
  <div class="min-h-screen bg-white pb-24 text-gray-900 font-sans">
    <header class="flex items-center justify-between p-4 bg-white border-b border-gray-100 sticky top-0 z-50">
      <button class="p-2 hover:bg-gray-50 rounded-full transition-colors" @click="$router.back()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 text-gray-800"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
      </button>
      <h1 class="text-base font-bold text-gray-900 tracking-tight">Request Hot-Shot Delivery</h1>
      <div class="w-9 h-9 flex items-center justify-center rounded-full bg-orange-50 text-orange-600 font-bold text-xs">MB</div>
    </header>

    <main class="max-w-md mx-auto p-4 space-y-6">
      
      <section class="border border-gray-100 rounded-2xl p-4 bg-white shadow-xs space-y-4">
        <div class="flex items-center space-x-2 pb-2 border-b border-gray-50">
          <span class="text-xs font-black text-orange-500 bg-orange-50 px-2 py-0.5 rounded-md">01</span>
          <h3 class="text-sm font-bold tracking-tight text-gray-800 uppercase">Target Vehicle</h3>
        </div>
        <div class="grid grid-cols-3 gap-3">
          <input type="text" v-model="year" placeholder="Year" class="w-full p-3 border border-gray-100 bg-gray-50/50 rounded-xl text-sm" />
          <input type="text" v-model="make" placeholder="Make" class="w-full p-3 border border-gray-100 bg-gray-50/50 rounded-xl text-sm col-span-2" />
        </div>
        <input type="text" v-model="modelName" placeholder="Model (e.g. F-150)" class="w-full p-3 border border-gray-100 bg-gray-50/50 rounded-xl text-sm" />
      </section>

      <section class="border border-gray-100 rounded-2xl p-4 bg-white shadow-xs space-y-4">
        <div class="flex items-center space-x-2 pb-2 border-b border-gray-50">
          <span class="text-xs font-black text-orange-500 bg-orange-50 px-2 py-0.5 rounded-md">02</span>
          <h3 class="text-sm font-bold tracking-tight text-gray-800 uppercase">Parts Needed</h3>
        </div>
        <textarea 
          v-model="partsRequested" 
          rows="2" 
          placeholder="List required parts here (e.g., Starter motor, front brake pads...)" 
          class="w-full p-3 border border-gray-100 bg-gray-50/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 resize-none"
        ></textarea>
      </section>

      <section class="border border-gray-100 rounded-2xl p-4 bg-white shadow-xs space-y-4">
        <div class="flex items-center space-x-2 pb-2 border-b border-gray-50">
          <span class="text-xs font-black text-orange-500 bg-orange-50 px-2 py-0.5 rounded-md">03</span>
          <h3 class="text-sm font-bold tracking-tight text-gray-800 uppercase">Your Shop Location</h3>
        </div>
        <select v-model="selectedDestination" class="w-full p-3 border border-gray-100 bg-gray-50/50 rounded-xl text-sm font-medium text-gray-800">
          <option v-for="shop in buyerWorkshops" :key="shop.name" :value="shop">{{ shop.name }}</option>
        </select>
      </section>

      <section class="p-4 border border-gray-100 rounded-2xl bg-gray-50/50 space-y-1 relative overflow-hidden">
        <div v-if="isCalculating" class="absolute inset-0 bg-white/75 flex items-center justify-center rounded-2xl text-xs font-bold text-orange-500">
          Finding nearest supplier node...
        </div>
        <p class="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Estimated Delivery Cost</p>
        <div class="flex items-baseline space-x-1">
          <h2 class="text-3xl font-black text-gray-900">${{ estimatedRate.toFixed(2) }}</h2>
        </div>
        <p class="text-[11px] text-gray-400 leading-normal" v-if="nearestSupplierFound">
          Sourced automatically from <strong class="text-gray-600 font-semibold">{{ nearestSupplierFound }}</strong> ({{ calculatedDistance }} miles away).
        </p>
      </section>

      <button @click="handleConfirmOrder" class="w-full py-4 bg-orange-500 text-white font-extrabold text-sm rounded-2xl shadow-lg uppercase tracking-wide">
        Submit Hot-Shot Request
      </button>

    </main>
  </div>
</template>