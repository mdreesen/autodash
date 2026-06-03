<!--
  AUTODASH COURIER ON-DEMAND DISPATCH SCREEN
  PAGES/DRIVER/DASHBOARD.VUE
-->
<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

// --- 1. DRIVER LIFE-CYCLE STATES ---
const isOnline = ref(false)
const pendingOrders = ref([])
const activeJob = ref(null)
const isUpdatingStatus = ref(false)
let hardwareWatchId = null
let sseSource = null

// --- 2. INITIALIZE AND SYNC STATE FROM MONGOOSE ON MOUNT ---
onMounted(async () => {
  try {
    const driverState = await $fetch('/api/driver/me')

    if (driverState.success && driverState.user) {
      isOnline.value = !!driverState.user.isAvailable

      if (isOnline.value) {
        // 🔥 CRITICAL FIX: Pull existing orders from DB AND open the live connection stream
        await syncAvailableJobsFromDatabase()
        establishLiveSseStream()
        startHardwareLocationTracking()
      }

      if (driverState.activeOrder) {
        activeJob.value = driverState.activeOrder
        disconnectLiveSseStream() // Close active radar stream when mid-delivery
      }
    }
  } catch (err) {
    console.error('Initialization handshake with cluster faulted:', err)
  }
})

// --- 3. DATABASE FETCH SNAPSHOT SEED ---
async function syncAvailableJobsFromDatabase() {
  try {
    console.log('🔄 [Driver Dashboard] Syncing available jobs from Atlas...')
    // Hits your unassigned orders endpoint
    const response = await $fetch('/api/driver/available-orders')
    if (response.success && Array.isArray(response.orders)) {
      pendingOrders.value = response.orders
      console.log(`✅ [Driver Dashboard] Seeded ${response.orders.length} unassigned jobs from DB.`)
    }
  } catch (err) {
    console.error('❌ Failed fetching active database job states:', err)
  }
}

// --- 4. STREAM SEED MECHANISMS (SSE ENGINES) ---
function establishLiveSseStream() {
  if (!process.client || sseSource) return

  const driverId = "6a1f377861d1ee56fc110dab"
  sseSource = new EventSource(`/api/stream?role=driver&id=${driverId}`)

  sseSource.addEventListener('new_job', (event) => {
    console.log('📡 [Driver Dashboard SSE] Raw job packet intercepted at browser window!')
    const jobOffer = JSON.parse(event.data)

    console.log('📊 Active Job State on Frontend:', activeJob.value)
    console.log('📦 Job Offer Content:', jobOffer)

    if (!activeJob.value) {
      // Check to ensure we don't display duplicate cards if already loaded by the REST query
      const matchExists = pendingOrders.value.some(order => order._id === jobOffer._id)
      if (!matchExists) {
        pendingOrders.value.unshift(jobOffer)
        console.log('✅ Offer successfully pushed into pendingOrders array.')
      }
    } else {
      console.warn('⚠️ Offer dropped on frontend because activeJob block is not empty.')
    }
  })

  sseSource.addEventListener('connected', (event) => {
    console.log('🟢 [Driver Dashboard SSE] Connection stream pipeline successfully locked down 200 OK.')
  })

  sseSource.onerror = () => {
    console.warn('⚠️ Telemetry pipeline disrupted. Re-establishing link stream layer...')
    disconnectLiveSseStream()
    setTimeout(establishLiveSseStream, 3000)
  }
}

function disconnectLiveSseStream() {
  if (sseSource) {
    sseSource.close()
    sseSource = null
    console.log('📡 [Live Stream] Closed driver event stream connection cleanly.')
  }
}

// --- 5. TOGGLE AVAILABILITY (MONGODB HANDSHAKE) ---
async function toggleDutyStatus() {
  if (isUpdatingStatus.value) return
  isUpdatingStatus.value = true

  try {
    const response = await $fetch('/api/driver/toggle-availability', {
      method: 'POST',
      body: { isAvailable: isOnline.value }
    })

    if (response.success) {
      if (isOnline.value) {
        // 🔥 CRITICAL FIX: Fetch jobs immediately when flipping to online duty
        await syncAvailableJobsFromDatabase()
        establishLiveSseStream()
      } else {
        disconnectLiveSseStream()
        pendingOrders.value = []
      }
    }
  } catch (error) {
    console.error('Failed to cycle driver network registry:', error)
    isOnline.value = !isOnline.value
  } finally {
    isUpdatingStatus.value = false
  }
}

// --- 6. REAL-TIME HARDWARE TELEMETRY STREAMING ---
function startHardwareLocationTracking() {
  if (!process.client || !navigator.geolocation) {
    console.warn('⚠️ Geolocation sensors unavailable on this client device.')
    return
  }

  hardwareWatchId = navigator.geolocation.watchPosition(
    async (position) => {
      const { longitude, latitude, heading, speed } = position.coords
      console.log(`🛰️ [GPS Hardware] Motion detected: [${longitude}, ${latitude}]`)

      try {
        await $fetch(`${getApiUrl()}/api/driver/update-location`, {
          method: 'POST',
          body: { coordinates: [longitude, latitude], heading: heading || 0, speed: speed || 0 }
        })
      } catch (err) {
        console.error('❌ Failed to stream hardware telemetry to server:', err)
      }
    },
    (error) => {
      console.error('❌ GPS sensor hardware fault:', error.message)
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }
  )
}

function stopHardwareLocationTracking() {
  if (hardwareWatchId && typeof window !== 'undefined') {
    navigator.geolocation.clearWatch(hardwareWatchId)
    hardwareWatchId = null
    console.log('📡 [GPS Hardware] Telemetry stream detached cleanly.')
  }
}

watch(isOnline, (online) => {
  if (online) {
    startHardwareLocationTracking()
  } else {
    stopHardwareLocationTracking()
  }
})

// --- 7. JOB LIFECYCLE INTERACTION ACTIONS ---
async function acceptHotShotJob(orderId) {
  try {
    const data = await $fetch(`/api/orders/accept-job`, {
      method: 'POST',
      body: { orderId }
    })
    if (data.success) {
      const selected = pendingOrders.value.find(o => o._id === orderId)
      activeJob.value = {
        ...selected,
        status: 'accepted'
      }
      pendingOrders.value = []
      disconnectLiveSseStream()
    }
  } catch (error) {
    console.error('Failed to claim target dispatch item:', error)
  }
}

async function pickupCargo() {
  try {
    const data = await $fetch('/api/orders/pickup-job', {
      method: 'POST',
      body: { orderId: activeJob.value._id }
    })
    if (data.success) {
      activeJob.value.status = 'in_transit'
    }
  } catch (error) {
    console.error('Failed to update cargo pickup validation status:', error)
  }
}

async function completeDelivery() {
  try {
    await $fetch(`/api/orders/complete-job`, {
      method: 'POST',
      body: { orderId: activeJob.value._id }
    })
    activeJob.value = null
    pendingOrders.value = []
    if (isOnline.value) {
      await syncAvailableJobsFromDatabase()
      establishLiveSseStream()
    }
  } catch (error) {
    console.error('Failed to finalize delivery state:', error)
  }
}

onUnmounted(() => {
  disconnectLiveSseStream()
  stopHardwareLocationTracking()
})
</script>

<template>
  <div class="min-h-screen bg-gray-50/60 pb-28 text-gray-900 font-sans">

    <!-- HEADER -->
    <header class="p-4 bg-white border-b border-gray-100 sticky top-0 z-50 flex items-center justify-between shadow-xs">
      <div class="flex items-center space-x-2">
        <div class="w-2 h-2 rounded-full transition-colors duration-300"
          :class="isOnline ? 'bg-emerald-500 animate-pulse' : 'bg-gray-300'"></div>
        <h1 class="text-base font-black tracking-tight text-gray-900">Courier Driver Portal</h1>
      </div>

      <div class="flex items-center">
        <label class="relative inline-flex items-center cursor-pointer select-none">
          <input type="checkbox" v-model="isOnline" @change="toggleDutyStatus" :disabled="isUpdatingStatus"
            class="sr-only peer" />
          <div
            class="w-24 h-9 bg-gray-200 rounded-full relative transition-colors duration-200 peer-checked:bg-emerald-500 peer-focus:outline-none">
            <div
              class="absolute top-[4px] left-[4px] bg-white rounded-full h-7 w-11 transition-all transform duration-200"
              :class="isOnline ? 'translate-x-[44px]' : 'translate-x-0'"></div>
            <div
              class="absolute inset-0 flex items-center justify-between px-3.5 text-[10px] font-black uppercase tracking-wider pointer-events-none select-none">
              <span :class="isOnline ? 'text-transparent' : 'text-gray-500'">Offline</span>
              <span :class="isOnline ? 'text-white ml-auto' : 'text-transparent'">Online</span>
            </div>
          </div>
        </label>
      </div>
    </header>

    <main class="max-w-md mx-auto p-4">

      <!-- STATE A: DRIVER IS OFFLINE -->
      <div v-if="!isOnline" class="py-20 text-center space-y-4">
        <div
          class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400 shadow-inner">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8"
            stroke="currentColor" class="w-7 h-7">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l5.859-5.859m5.348 8.017a3.75 3.75 0 11-5.348-5.348m5.348 5.348L20.25 21.75l-3.745-4.012M12 5.25V3m3.75 3l-1.5 1.5M9.75 6l1.5 1.5" />
          </svg>
        </div>
        <div class="space-y-1">
          <h3 class="text-sm font-extrabold text-gray-800 uppercase tracking-wide">You are Offline</h3>
          <p class="text-xs text-gray-400 max-w-[260px] mx-auto leading-normal">
            Flip the duty toggle on the header navigation frame to start streaming live hardware telemetry and receive
            incoming logistics offers.
          </p>
        </div>
      </div>

      <!-- STATE B: ACTIVE ACCEPTED RUN PROGRESS WIZARD -->
      <div v-else-if="activeJob" class="space-y-4 pt-2">
        <div
          class="bg-gray-950 text-white border border-gray-800 rounded-2xl p-5 shadow-xl space-y-5 relative overflow-hidden">
          <div class="absolute top-0 inset-x-0 h-1.5 bg-orange-500"></div>

          <div class="flex items-center justify-between border-b border-white/10 pb-3">
            <div class="space-y-0.5">
              <span
                class="text-[9px] uppercase font-black tracking-widest bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded">
                {{ activeJob.status === 'in_transit' ? 'Cargo In Transit' : 'Route Secured' }}
              </span>
              <p class="text-[10px] text-gray-500 font-mono mt-0.5">Manifest ID: #{{ activeJob._id.substring(18) }}</p>
            </div>
            <div class="text-right">
              <span class="text-2xl font-black text-white tracking-tight">${{ activeJob.pricing?.driverPayout ?
                activeJob.pricing.driverPayout.toFixed(2) : Number(activeJob.pricing || 14.50).toFixed(2) }}</span>
            </div>
          </div>

          <div
            class="space-y-4 relative pl-5 before:absolute before:left-[5px] before:top-[6px] before:bottom-[6px] before:w-[1.5px] before:bg-zinc-800">
            <div class="text-xs relative">
              <div class="absolute w-2 h-2 rounded-full bg-orange-500 -left-[20px] top-[4px]"
                :class="activeJob.status === 'accepted' ? 'ring-4 ring-orange-500/20 animate-pulse' : ''"></div>
              <p class="text-[10px] font-bold text-gray-500 uppercase tracking-wider">01 / Commercial Warehouse Pickup
              </p>
              <p class="font-extrabold text-sm text-zinc-200 mt-0.5">{{ activeJob.nearestSupplier ||
                activeJob.supplier?.storeName || 'AutoZone Auto Parts' }}</p>
            </div>
            <div class="text-xs relative">
              <div class="absolute w-2 h-2 rounded-full bg-emerald-500 -left-[20px] top-[4px]"
                :class="activeJob.status === 'in_transit' ? 'ring-4 ring-emerald-500/20 animate-pulse' : ''"></div>
              <p class="text-[10px] font-bold text-gray-500 uppercase tracking-wider">02 / Destination Fleet Workshop
              </p>
              <p class="font-extrabold text-sm text-zinc-200 mt-0.5">{{ activeJob.destination?.name ||
                activeJob.deliveryLocation?.bayInstructions || 'Workshop Target' }}</p>
              <p class="text-[11px] text-zinc-400 font-medium mt-0.5 leading-relaxed">{{ activeJob.destination?.address
                || activeJob.deliveryLocation?.address || 'Evergreen Region, MT' }}</p>
            </div>
          </div>

          <div class="pt-2 border-t border-white/5">
            <button v-if="activeJob.status === 'accepted'" @click="pickupCargo"
              class="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs rounded-xl uppercase tracking-wider shadow-md transition-all active:scale-[0.99]">
              Confirm Parts Loaded (Depart Store)
            </button>
            <button v-else-if="activeJob.status === 'in_transit'" @click="completeDelivery"
              class="w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-black text-xs rounded-xl uppercase tracking-wider shadow-md transition-all active:scale-[0.99]">
              Confirm Cargo Drop-Off (Arrived)
            </button>
          </div>
        </div>
      </div>

      <!-- STATE C: ONLINE RADAR SCANNING RADAR OFFERS FEED -->
      <div v-else class="space-y-4">
        <div v-if="pendingOrders.length === 0" class="py-24 text-center space-y-4">
          <div
            class="w-10 h-10 border-[3px] border-orange-500/10 border-t-orange-500 rounded-full animate-spin mx-auto">
          </div>
          <div class="space-y-0.5">
            <p class="text-xs font-bold text-gray-700 tracking-wide uppercase">Radar Stream Active</p>
            <p class="text-[11px] text-gray-400">Awaiting commercial workshop dispatches...</p>
          </div>
        </div>

        <div v-for="order in pendingOrders" :key="order._id"
          class="bg-white border border-gray-100 rounded-2xl p-4 shadow-xs space-y-4">
          <div class="flex items-center justify-between border-b border-gray-50 pb-3">
            <div class="space-y-0.5">
              <span
                class="text-[9px] font-black text-orange-600 bg-orange-50 px-2 py-0.5 rounded uppercase tracking-wider">Hot-Shot
                Offer</span>
              <p class="text-[11px] text-gray-400 font-mono font-medium">Manifest ID: #{{ order._id.substring(18) }}</p>
            </div>
            <div class="text-right">
              <p class="text-2xl font-black text-gray-900 tracking-tight">${{ order.pricing?.driverPayout ?
                order.pricing.driverPayout.toFixed(2) : Number(order.pricing || 14.50).toFixed(2) }}</p>
            </div>
          </div>

          <div
            class="space-y-3.5 relative pl-4.5 before:absolute before:left-[4px] before:top-[6px] before:bottom-[6px] before:w-[1.5px] before:bg-gray-100">
            <div class="text-xs">
              <p class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Pickup Warehouse</p>
              <p class="font-extrabold text-gray-800 mt-0.5">{{ order.nearestSupplier || order.supplier?.storeName ||
                'AutoZone Auto Parts' }}</p>
            </div>
            <div class="text-xs">
              <p class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Delivery Destination</p>
              <p class="font-extrabold text-gray-800 mt-0.5">{{ order.destination?.name ||
                order.deliveryLocation?.bayInstructions || 'Workshop Target' }}</p>
              <p class="text-[11px] text-gray-400 font-medium mt-0.5 truncate max-w-[280px]">{{
                order.destination?.address || order.deliveryLocation?.address || 'Evergreen Region, MT' }}</p>
            </div>
          </div>

          <button @click="acceptHotShotJob(order._id)"
            class="w-full py-3 bg-gray-900 text-white font-extrabold text-xs rounded-xl uppercase tracking-wider shadow-sm hover:bg-gray-800 transition-all">
            Accept & Route Courier
          </button>
        </div>
      </div>
    </main>

    <!-- NAVIGATION FOOTER BLOCK -->
    <nav class="fixed bottom-0 inset-x-0 bg-white border-t border-gray-100 pb-safe shadow-lg z-40">
      <div class="max-w-md mx-auto grid grid-cols-2 h-16 text-center">
        <button @click="$router.push('/driver/dashboard')"
          class="flex flex-col items-center justify-center space-y-1 text-orange-500 font-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
            stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="text-[10px] uppercase tracking-wider">Radar Dash</span>
        </button>
        <button @click="$router.push('/driver/history')"
          class="flex flex-col items-center justify-center space-y-1 text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.2"
            stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="text-[10px] uppercase tracking-wider">Earnings Log</span>
        </button>
      </div>
    </nav>

  </div>
</template>