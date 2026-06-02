<!-- pages/driver/orders/[id].vue -->
<script setup lang="ts">
import { Geolocation } from '@capacitor/geolocation';

interface ActiveOrder {
  _id: string
  status: 'placed' | 'accepted' | 'picking-up' | 'in-transit' | 'delivered'
  vehicle: { year: number; make: string; model: string }
  supplier: { storeName: string; storeAddress: string; commercialOrderNumber: string }
  deliveryLocation: { address: string; bayInstructions: string }
  pricing: { driverPayout: number }
  manifestText: string
}

const route = useRoute()
const orderId = route.params.id as string
const orderData = ref<ActiveOrder | null>(null)
const isLoading = ref(true)
const isUpdating = ref(false)

// Fetch the targeted order details from the database layer
const fetchCurrentRouteDetails = async () => {
  try {
    // We will build this simple single-order GET endpoint next
    const data = await $fetch<{ success: boolean; order: ActiveOrder }>(`/api/orders/${orderId}`)
    if (data?.success) {
      orderData.value = data.order
    }
  } catch (error) {
    console.error('Error synchronizing active route manifest:', error)
    alert('Failed to load active tracking details.')
  } finally {
    isLoading.value = false
  }
}

// Advance the delivery workflow state machine
const advanceOrderStatusStep = async (nextStatus: 'picking-up' | 'in-transit' | 'delivered') => {
  isUpdating.value = true
  try {
    const data = await $fetch<{ success: boolean }>(`/api/orders/${orderId}/status`, {
      method: 'POST',
      body: { status: nextStatus }
    })
    
    if (data?.success) {
      if (nextStatus === 'delivered') {
        alert('Route completed successfully! Payout credited to ledger.')
        navigateTo('/driver/dashboard')
      } else {
        await fetchCurrentRouteDetails()
      }
    }
  } catch (error) {
    console.error('Failed to transition logistics step:', error)
  } finally {
    isUpdating.value = false
  }
};

let gpsWatcherId: string | null = null

// Initializes the live coordinate hardware stream
const initializeLiveGpsStream = async () => {
  try {
    // 1. Check/Request native OS-level permission popups automatically
    const permissions = await Geolocation.requestPermissions()
    if (permissions.location !== 'granted') {
      console.warn('OS geolocation authorizations withheld by device controller.')
      return
    }

    // 2. Open a persistent hardware stream socket link channel
    gpsWatcherId = await Geolocation.watchPosition(
      {
        enableHighAccuracy: true, // Use high-precision GPS sensors rather than coarse cell tower pings
        timeout: 10000,
        maximumAge: 0
      },
      async (position) => {
        if (position?.coords) {
          const { longitude, latitude } = position.coords
          
          // 3. Fire-and-forget background coordinate tracking transmissions straight to Nitro
          await $fetch('/api/driver/update-location', {
            method: 'POST',
            body: { longitude, latitude }
          }).catch(err => console.error('Telemetry broadcast dropped:', err))
        }
      }
    )
    console.log(`GPS telemetry streaming live. Watcher ID footprint registered: ${gpsWatcherId}`)
  } catch (error) {
    console.error('Failed to initialize native GPS hardware layer:', error)
  }
}

// Clear the GPS watcher tracking memory loops when the component unmounts
const stopLiveGpsStream = async () => {
  if (gpsWatcherId) {
    await Geolocation.clearWatch({ id: gpsWatcherId })
    gpsWatcherId = null
    console.log('GPS hardware tracking sensor telemetry powered down safely.')
  }
}

// Watch order status updates to selectively switch the GPS battery power cycles on/off
watch(() => orderData.value?.status, (newStatus) => {
  if (newStatus === 'in-transit') {
    initializeLiveGpsStream()
  } else if (newStatus === 'delivered') {
    stopLiveGpsStream()
  }
})

// Lifecycle clean hook management safeguards

onMounted(() => {
  fetchCurrentRouteDetails()
});

onUnmounted(() => {
  stopLiveGpsStream()
})
</script>

<template>
  <div class="min-h-screen bg-[#F8F9FA] text-[#1A1D20] pb-32 font-sans antialiased">
    
    <!-- Top Persistent Structural Navigation Strip -->
    <div class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-200/80 px-4 py-4 flex items-center justify-between shadow-sm">
      <div class="flex items-center gap-3">
        <button @click="navigateTo('/driver/dashboard')" class="text-zinc-400 hover:text-zinc-900 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
        <div>
          <h1 class="text-sm font-black text-zinc-900 uppercase tracking-tight">Active Job Matrix</h1>
          <p class="text-[10px] text-zinc-400 font-mono">ID: {{ orderId.slice(-6).toUpperCase() }}</p>
        </div>
      </div>
      <div v-if="orderData" class="text-right">
        <div class="text-lg font-black text-[#FF5A00] font-mono">${{ orderData.pricing.driverPayout.toFixed(2) }}</div>
        <div class="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">Route Value</div>
      </div>
    </div>

    <!-- Full Screen Skeleton Loading State -->
    <div v-if="isLoading" class="max-w-md mx-auto px-4 py-12 text-center text-zinc-400 animate-pulse font-medium text-xs uppercase tracking-widest">
      Synchronizing Core Manifest Vector...
    </div>

    <div v-else-if="orderData" class="max-w-md mx-auto px-4 mt-5 space-y-4">
      
      <!-- LOGISTICAL PROGRESSION HUD TRACKER -->
      <div class="bg-white border border-zinc-200/60 rounded-2xl p-5 shadow-sm space-y-4">
        <h2 class="text-xs font-extrabold text-zinc-400 uppercase tracking-widest">Active Leg Timeline</h2>
        
        <div class="flex items-center justify-between relative px-2">
          <!-- Baseline background track connect bar -->
          <div class="absolute left-0 right-0 h-0.5 bg-zinc-100 top-3 z-0"></div>
          
          <!-- State Bubble 1: Accepted -->
          <div class="flex flex-col items-center gap-1.5 relative z-10">
            <div class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border" :class="orderData.status !== 'placed' ? 'bg-zinc-900 border-zinc-900 text-white' : 'bg-white border-zinc-200 text-zinc-400'">✓</div>
            <span class="text-[9px] font-black uppercase tracking-wider text-zinc-800">Claimed</span>
          </div>

          <!-- State Bubble 2: At Store Counter -->
          <div class="flex flex-col items-center gap-1.5 relative z-10">
            <div class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border transition-all" :class="['picking-up', 'in-transit', 'delivered'].includes(orderData.status) ? 'bg-zinc-900 border-zinc-900 text-white' : 'bg-white border-zinc-200 text-zinc-400'">2</div>
            <span class="text-[9px] font-black uppercase tracking-wider" :class="orderData.status === 'picking-up' ? 'text-[#FF5A00]' : 'text-zinc-400'">At Store</span>
          </div>

          <!-- State Bubble 3: In Flight -->
          <div class="flex flex-col items-center gap-1.5 relative z-10">
            <div class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border transition-all" :class="['in-transit', 'delivered'].includes(orderData.status) ? 'bg-zinc-900 border-zinc-900 text-white' : 'bg-white border-zinc-200 text-zinc-400'">3</div>
            <span class="text-[9px] font-black uppercase tracking-wider" :class="orderData.status === 'in-transit' ? 'text-[#FF5A00]' : 'text-zinc-400'">En Route</span>
          </div>
        </div>
      </div>

      <!-- LEG 1 DETAILED DIRECTIONS: THE COMMERCIAL PARTS COUNTER -->
      <div v-if="['accepted', 'picking-up'].includes(orderData.status)" class="bg-white border border-zinc-200/80 rounded-2xl p-5 shadow-sm space-y-4 animate-fadeIn">
        <div class="flex items-center gap-2 border-b border-zinc-100 pb-2.5">
          <div class="w-5 h-5 rounded bg-zinc-900 text-white flex items-center justify-center font-bold text-xs font-mono">A</div>
          <h3 class="text-xs font-extrabold text-zinc-400 uppercase tracking-widest">Step 1: Supplier Pickup</h3>
        </div>

        <div>
          <h4 class="text-sm font-black text-zinc-900">{{ orderData.supplier.storeName }}</h4>
          <p class="text-xs text-zinc-500 font-medium mt-0.5">{{ orderData.supplier.storeAddress }}</p>
        </div>

        <!-- Verification Alphanumeric Token Voucher Box -->
        <div class="bg-zinc-50 border border-zinc-200/60 rounded-xl p-4 text-center space-y-1">
          <div class="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Show Counter Associate This Code</div>
          <div class="text-xl font-black text-zinc-900 font-mono tracking-wider select-all px-2 py-1 bg-white border border-zinc-100 rounded-lg inline-block uppercase">
            {{ orderData.supplier.commercialOrderNumber }}
          </div>
          <p class="text-[10px] text-zinc-400 leading-tight max-w-[240px] mx-auto pt-1">This is a pre-paid house commercial account parcel. Do not exchange cash or credit cards.</p>
        </div>

        <button 
          v-if="orderData.status === 'accepted'"
          @click="advanceOrderStatusStep('picking-up')"
          :disabled="isUpdating"
          class="w-full bg-[#1A1D20] text-white font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all"
        >
          I Have Arrived at the Parts Counter
        </button>

        <button 
          v-if="orderData.status === 'picking-up'"
          @click="advanceOrderStatusStep('in-transit')"
          :disabled="isUpdating"
          class="w-full bg-[#FF5A00] text-white font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-md shadow-[#FF5A00]/10"
        >
          Confirm Cargo Secured & Begin Delivery
        </button>
      </div>

      <!-- LEG 2 DETAILED DIRECTIONS: THE REPAIR GARAGE DROP-OFF -->
      <div v-if="orderData.status === 'in-transit'" class="bg-white border border-zinc-200/80 rounded-2xl p-5 shadow-sm space-y-4 animate-fadeIn">
        <div class="flex items-center gap-2 border-b border-zinc-100 pb-2.5">
          <div class="w-5 h-5 rounded bg-[#FF5A00] text-white flex items-center justify-center font-bold text-xs font-mono">B</div>
          <h3 class="text-xs font-extrabold text-zinc-400 uppercase tracking-widest">Step 2: Workshop Drop-off</h3>
        </div>

        <div>
          <h4 class="text-sm font-black text-zinc-900">Destination Workshop Target</h4>
          <p class="text-xs text-zinc-500 font-medium mt-0.5">{{ orderData.deliveryLocation.address }}</p>
        </div>

        <div v-if="orderData.deliveryLocation.bayInstructions" class="p-3.5 bg-zinc-50 border-l-4 border-[#FF5A00] rounded-r-xl space-y-1">
          <div class="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Specific Bay Directives</div>
          <p class="text-xs font-semibold text-zinc-700 italic leading-relaxed">
            "{{ orderData.deliveryLocation.bayInstructions }}"
          </p>
        </div>

        <!-- Cargo Manifest Payload Box Reminder Tray -->
        <div class="bg-zinc-50/50 border border-zinc-100 rounded-xl p-3 text-[11px] text-zinc-500 space-y-1">
          <span class="font-bold text-zinc-400 uppercase text-[9px] tracking-wide block">Verification Parts Check</span>
          <p class="font-semibold text-zinc-600 truncate">{{ orderData.manifestText }}</p>
          <p class="text-[10px] font-medium font-mono text-zinc-400">Vehicle Profile: {{ orderData.vehicle.year }} {{ orderData.vehicle.make }} {{ orderData.vehicle.model }}</p>
        </div>

        <button 
          @click="advanceOrderStatusStep('delivered')"
          :disabled="isUpdating"
          class="w-full bg-[#FF5A00] text-white font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-[#FF5A00]/10 hover:bg-[#e04f00] transition-all"
        >
          Confirm Drop-off & Complete Route
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>