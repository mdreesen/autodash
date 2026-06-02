<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const orderId = route.params.id

// Core Reactive States
const orderData = ref(null)
const mapContainer = ref(null)
let leafletMap = null
let driverMarker = null
let trackingInterval = null

// --- 1. FETCH RADAR TELEMETRY FROM MONGOOSE PLUGINS ---
async function fetchLiveTrackingMetrics() {
  try {
    // 🔥 FIX: Replaced the dash syntax with a clean forward-slash directory path
    const data = await $fetch(`/api/orders/track/${orderId}`)
    if (data.success) {
      orderData.value = data
      
      // Dynamic Marker Manipulation Loops
      if (leafletMap && data.driver?.coords) {
        if (!driverMarker) {
          const L = window.L
          driverMarker = L.marker(data.driver.coords, {
            icon: L.divIcon({
              html: `<div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white font-bold text-xs">🚗</div>`,
              className: '',
              iconSize: [32, 32],
              iconAnchor: [16, 16]
            })
          }).addTo(leafletMap).bindPopup("Courier Tracking Live")
        } else {
          // Smoothly move the courier vehicle on update triggers
          driverMarker.setLatLng(data.driver.coords)
        }
      }
    }
  } catch (err) {
    console.error('Tracking pipeline sync dropped:', err)
  }
}

// --- 2. MOUNT LEAFLET MAP CONTAINERS ON CLIENT HYDRATION ---
onMounted(() => {
  // Inject stylesheet into the head dynamically to guarantee zero SSR hydration crashes
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
  document.head.appendChild(link)

  // Append OpenStreetMap core scripts
  const script = document.createElement('script')
  script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
  script.onload = async () => {
    await fetchLiveTrackingMetrics()
    
    if (!orderData.value) return

    const L = window.L
    const manifest = orderData.value.manifest

    // Initialize map canvas focus rules
    leafletMap = L.map(mapContainer.value, {
      zoomControl: false,
      attributionControl: false
    }).setView(manifest.supplierCoords, 12)

    // Load ultra-clean high performance grayscale map tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 20
    }).addTo(leafletMap)

    // Append Fixed Store Node Marker
    L.marker(manifest.supplierCoords, {
      icon: L.divIcon({
        html: `<div class="w-7 h-7 bg-zinc-900 rounded-lg flex items-center justify-center text-white shadow-md border border-zinc-700 font-bold text-[10px]">🏪</div>`,
        className: '', 
        iconSize: [28, 28], 
        iconAnchor: [14, 14]
      })
    }).addTo(leafletMap).bindPopup(`Pickup: ${manifest.supplierName}`)

    // Append Fixed Destination Fleet Workshop Marker
    L.marker(manifest.destinationCoords, {
      icon: L.divIcon({
        html: `<div class="w-7 h-7 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-md border-2 border-white font-bold text-xs">🛠️</div>`,
        className: '', 
        iconSize: [28, 28], 
        iconAnchor: [14, 14]
      })
    }).addTo(leafletMap).bindPopup(`Destination: ${manifest.destinationName}`)

    // Auto-frame map boundaries so all route points fit cleanly on-screen
    const bounds = L.latLngBounds([manifest.supplierCoords, manifest.destinationCoords])
    leafletMap.fitBounds(bounds, { padding: [40, 40] })

    // Poll the backend database for live coordinates updates every 4 seconds
    trackingInterval = setInterval(fetchLiveTrackingMetrics, 4000)
  }
  document.head.appendChild(script)
})

onUnmounted(() => {
  if (trackingInterval) clearInterval(trackingInterval)
})
</script>

<template>
  <div class="min-h-screen bg-gray-50/40 pb-24 text-gray-900 font-sans">
    
    <header class="flex items-center p-4 bg-white border-b border-gray-100 sticky top-0 z-50">
      <button 
        class="p-2 hover:bg-gray-50 rounded-full transition-colors mr-2" 
        @click="$router.push('/buyer/order')"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 text-gray-800">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <div>
        <h1 class="text-sm font-black text-gray-900 uppercase tracking-tight">Track Delivery Run</h1>
        <p class="text-[10px] text-gray-400 font-mono mt-0.5">Manifest: #{{ orderId.substring(18) }}</p>
      </div>
    </header>

    <main class="max-w-md mx-auto p-4 space-y-4">
      
      <section class="w-full h-64 bg-gray-100 rounded-3xl border border-gray-100 overflow-hidden shadow-xs relative z-10">
        <div ref="mapContainer" class="w-full h-full"></div>
      </section>

      <section class="bg-white border border-gray-100 rounded-2xl p-5 shadow-xs text-center space-y-2">
        <p class="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Current Status Check</p>
        <h2 class="text-lg font-black text-gray-900 leading-tight max-w-[280px] mx-auto">
          <span v-if="orderData?.status === 'placed'">Awaiting driver assignment...</span>
          <span v-else-if="orderData?.status === 'accepted'">A courier is heading to the auto parts counter!</span>
          <span v-else-if="orderData?.status === 'completed'">Cargo delivery complete.</span>
          <span v-else>Order in dispatch transit.</span>
        </h2>
        
        <div class="w-full h-1.5 bg-gray-100 rounded-full mt-3 overflow-hidden relative">
          <div 
            class="h-full bg-orange-500 rounded-full transition-all duration-500" 
            :class="orderData?.status === 'placed' ? 'w-1/3' : orderData?.status === 'accepted' ? 'w-2/3' : 'w-full'"
          ></div>
        </div>
      </section>

      <section v-if="orderData?.driver" class="bg-white border border-gray-100 rounded-2xl p-4 shadow-xs flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-base">👦🏼</div>
          <div>
            <p class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Assigned Fleet Courier</p>
            <h4 class="text-sm font-black text-gray-800 mt-0.5">{{ orderData.driver.name }}</h4>
          </div>
        </div>
        <a 
          :href="`tel:4065550199`" 
          class="p-3 bg-gray-50 border border-gray-100 hover:bg-gray-100 rounded-xl transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-gray-700">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.622s.151-3.161 3.278-3.161h1.761c.475 0 .88.341.95.81l.739 5.176c.07.488-.176.963-.592 1.22l-2.012 1.24a15.176 15.176 0 006.18 6.18l1.24-2.012c.257-.416.732-.662 1.22-.592l5.176.739c.479.07.82.475.82.95v1.761c0 3.127-3.161 3.278-3.161 3.278C6.162 21.75 2.25 17.838 2.25 6.622z" />
          </svg>
        </a>
      </section>

      <section class="bg-white border border-gray-100 rounded-2xl p-5 shadow-xs space-y-4 text-sm">
        <h3 class="text-xs font-black text-gray-400 uppercase tracking-wider pb-2 border-b border-gray-50">Logistical Invoices</h3>
        
        <div class="space-y-0.5">
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Source Pickup Point</p>
          <p class="font-extrabold text-gray-800">{{ orderData?.manifest?.supplierName || 'Locating...' }}</p>
        </div>

        <div class="space-y-0.5">
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Your Drop-Off Spot Target</p>
          <p class="font-extrabold text-gray-800">{{ orderData?.manifest?.destinationName || 'Locating...' }}</p>
        </div>

        <div class="space-y-1">
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Package Contents Manifest</p>
          <div class="p-3 bg-gray-50 rounded-xl border border-gray-100 font-medium text-gray-600 text-xs">
            {{ orderData?.manifest?.parts || 'Loading item specs...' }}
          </div>
        </div>
      </section>

    </main>
  </div>
</template>