<script setup>
import { ref, onUnmounted, watch } from 'vue'

// --- 1. DRIVER LIFE-CYCLE STATES ---
const isOnline = ref(false)
const pendingOrders = ref([])
const activeJob = ref(null)
const isUpdatingStatus = ref(false)
let pollingInterval = null

// --- 2. TOGGLE AVAILABILITY (MONGODB HANDSHAKE) ---
async function toggleDutyStatus() {
  isUpdatingStatus.value = true
  try {
    // Passes the status registration shift directly to the backend database handler
    const response = await $fetch('/api/driver/toggle-availability', {
      method: 'POST',
      body: { isAvailable: isOnline.value }
    })
    
    if (response.success) {
      if (isOnline.value) {
        startOrderPolling()
      } else {
        stopOrderPolling()
        pendingOrders.value = []
      }
    }
  } catch (error) {
    console.error('Failed to cycle driver network registry:', error)
    // Rollback checkbox toggle state if connection drops
    isOnline.value = !isOnline.value
  } finally {
    isUpdatingStatus.value = false
  }
}

// --- 3. LIVE ORDER POLLING RADAR DETECTOR ---
async function pollPendingOrders() {
  if (!isOnline.value || activeJob.value) return
  try {
    const data = await $fetch('/api/driver/fetch-jobs')
    if (data.success) {
      pendingOrders.value = data.orders || []
    }
  } catch (err) {
    console.error('Telemetry stream failed to fetch available pool:', err)
  }
}

function startOrderPolling() {
  pollPendingOrders() // Run immediately on online shift
  pollingInterval = setInterval(pollPendingOrders, 4000) // Re-fetch coordinates and requests every 4 seconds
}

function stopOrderPolling() {
  if (pollingInterval) {
    clearInterval(pollingInterval)
    pollingInterval = null
  }
}

// --- 4. JOB LIFECYCLE INTERACTION ACTIONS ---
async function acceptHotShotJob(orderId) {
  try {
    const data = await $fetch(`/api/orders/accept-job`, {
      method: 'POST',
      body: { orderId }
    })
    if (data.success) {
      // Pin targeted contract details straight to driver viewport
      activeJob.value = pendingOrders.value.find(o => o._id === orderId)
      pendingOrders.value = []
      stopOrderPolling()
    }
  } catch (error) {
    console.error('Failed to claim target dispatch item:', error)
  }
}

async function completeDelivery() {
  try {
    await $fetch(`/api/orders/complete-job`, {
      method: 'POST',
      body: { orderId: activeJob.value._id }
    })
    activeJob.value = null
    // Instantly switch back on background radar loops if still online
    if (isOnline.value) startOrderPolling()
  } catch (error) {
    console.error('Failed to finalize delivery state:', error)
  }
}

// Lifecycle Memory Guard: Kill standard interval routines if user leaves page
onUnmounted(() => stopOrderPolling())
</script>

<template>
  <div class="min-h-screen bg-gray-50/60 pb-24 text-gray-900 font-sans">
    
    <header class="p-4 bg-white border-b border-gray-100 sticky top-0 z-50 flex items-center justify-between shadow-xs">
      <div class="flex items-center space-x-2">
        <div class="w-2 h-2 rounded-full transition-colors duration-300" :class="isOnline ? 'bg-emerald-500 animate-pulse' : 'bg-gray-300'"></div>
        <h1 class="text-base font-black tracking-tight text-gray-900">Courier Driver Portal</h1>
      </div>

      <div class="flex items-center">
        <label class="relative inline-flex items-center cursor-pointer select-none">
          <input 
            type="checkbox" 
            v-model="isOnline" 
            @change="toggleDutyStatus"
            :disabled="isUpdatingStatus"
            class="sr-only peer"
          />
          <div class="w-24 h-9 bg-gray-200 rounded-full relative transition-colors duration-200 peer-checked:bg-emerald-500 peer-focus:outline-none">
            <div class="absolute top-[4px] left-[4px] bg-white rounded-full h-7 w-11 transition-all transform duration-200" :class="isOnline ? 'translate-x-[44px]' : 'translate-x-0'"></div>
            <div class="absolute inset-0 flex items-center justify-between px-3.5 text-[10px] font-black uppercase tracking-wider pointer-events-none select-none">
              <span :class="isOnline ? 'text-transparent' : 'text-gray-500'">Offline</span>
              <span :class="isOnline ? 'text-white ml-auto' : 'text-transparent'">Online</span>
            </div>
          </div>
        </label>
      </div>
    </header>

    <main class="max-w-md mx-auto p-4">
      
      <div v-if="!isOnline" class="py-20 text-center space-y-4">
        <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400 shadow-inner">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-7 h-7">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l5.859-5.859m5.348 8.017a3.75 3.75 0 11-5.348-5.348m5.348 5.348L20.25 21.75l-3.745-4.012M12 5.25V3m3.75 3l-1.5 1.5M9.75 6l1.5 1.5" />
          </svg>
        </div>
        <div class="space-y-1">
          <h3 class="text-sm font-extrabold text-gray-800 uppercase tracking-wide">You are Offline</h3>
          <p class="text-xs text-gray-400 max-w-[260px] mx-auto leading-normal">
            Flip the duty toggle on the header navigation frame to start receiving incoming logistics offers across the valley.
          </p>
        </div>
      </div>

      <div v-else-if="activeJob" class="space-y-4 pt-2">
        <div class="bg-gray-950 text-white border border-gray-800 rounded-2xl p-5 shadow-xl space-y-5 relative overflow-hidden">
          
          <div class="absolute top-0 inset-x-0 h-1.5 bg-orange-500"></div>

          <div class="flex items-center justify-between border-b border-white/10 pb-3">
            <div class="space-y-0.5">
              <span class="text-[9px] uppercase font-black tracking-widest bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded">Active Cargo Cargo</span>
              <p class="text-[10px] text-gray-500 font-mono">ID: {{ activeJob._id }}</p>
            </div>
            <div class="text-right">
              <span class="text-2xl font-black text-white tracking-tight">${{ activeJob.pricing.toFixed(2) }}</span>
            </div>
          </div>
          
          <div class="space-y-4 relative pl-5 before:absolute before:left-[5px] before:top-[6px] before:bottom-[6px] before:w-[1.5px] before:bg-zinc-800">
            <div class="text-xs relative">
              <div class="absolute w-2 h-2 rounded-full bg-orange-500 -left-[20px] top-[4px] ring-4 ring-orange-500/10"></div>
              <p class="text-[10px] font-bold text-gray-500 uppercase tracking-wider">01 / Commercial Warehouse Pickup</p>
              <p class="font-extrabold text-sm text-zinc-200 mt-0.5">{{ activeJob.nearestSupplier }}</p>
            </div>
            <div class="text-xs relative">
              <div class="absolute w-2 h-2 rounded-full bg-emerald-500 -left-[20px] top-[4px] ring-4 ring-emerald-500/10"></div>
              <p class="text-[10px] font-bold text-gray-500 uppercase tracking-wider">02 / Destination Fleet Workshop</p>
              <p class="font-extrabold text-sm text-zinc-200 mt-0.5">{{ activeJob.destination.name }}</p>
              <p class="text-[11px] text-zinc-400 font-medium mt-0.5 leading-relaxed">{{ activeJob.destination.address }}</p>
            </div>
          </div>

          <button 
            @click="completeDelivery"
            class="w-full py-3.5 bg-orange-500 text-white font-black text-xs rounded-xl uppercase tracking-wider shadow-md hover:bg-orange-600 active:scale-[0.99] transition-all"
          >
            Confirm Cargo Drop-Off (Arrived)
          </button>
        </div>
      </div>

      <div v-else class="space-y-4">
        
        <div v-if="pendingOrders.length === 0" class="py-24 text-center space-y-4">
          <div class="w-10 h-10 border-[3px] border-orange-500/10 border-t-orange-500 rounded-full animate-spin mx-auto"></div>
          <div class="space-y-0.5">
            <p class="text-xs font-bold text-gray-700 tracking-wide uppercase">Radar Stream Active</p>
            <p class="text-[11px] text-gray-400">Awaiting real-world buyer parts requests...</p>
          </div>
        </div>

        <div 
          v-for="order in pendingOrders" 
          :key="order._id"
          class="bg-white border border-gray-100 rounded-2xl p-4 shadow-xs space-y-4 transition-all hover:border-gray-200/80"
        >
          <div class="flex items-center justify-between border-b border-gray-50 pb-3">
            <div class="space-y-0.5">
              <span class="text-[9px] font-black text-orange-600 bg-orange-50 px-2 py-0.5 rounded uppercase tracking-wider">Hot-Shot Offer</span>
              <p class="text-[11px] text-gray-400 font-mono font-medium">Est. Distance: {{ order.distanceMiles }} miles</p>
            </div>
            <div class="text-right">
              <p class="text-2xl font-black text-gray-900 tracking-tight">${{ order.pricing.toFixed(2) }}</p>
              <p class="text-[9px] uppercase font-bold text-emerald-500 tracking-widest mt-0.5">Guaranteed Net</p>
            </div>
          </div>

          <div class="space-y-3.5 relative pl-4.5 before:absolute before:left-[4px] before:top-[6px] before:bottom-[6px] before:w-[1.5px] before:bg-gray-100">
            <div class="text-xs">
              <p class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Pickup Warehouse</p>
              <p class="font-extrabold text-gray-800 mt-0.5">{{ order.nearestSupplier }}</p>
            </div>
            <div class="text-xs">
              <p class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Delivery Destination</p>
              <p class="font-extrabold text-gray-800 mt-0.5">{{ order.destination.name }}</p>
              <p class="text-[11px] text-gray-400 font-medium mt-0.5 truncate max-w-[280px]">{{ order.destination.address }}</p>
            </div>
          </div>

          <button 
            @click="acceptHotShotJob(order._id)"
            class="w-full py-3 bg-gray-900 text-white font-extrabold text-xs rounded-xl uppercase tracking-wider shadow-sm hover:bg-gray-800 active:scale-[0.99] transition-all"
          >
            Accept & Route Courier
          </button>
        </div>

      </div>
    </main>
  </div>
</template>