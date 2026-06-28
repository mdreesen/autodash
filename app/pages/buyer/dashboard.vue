<script setup>
import { ref, onMounted } from 'vue'
import { formatDate } from '~/utils/date';

definePageMeta({
  layout: 'buyer',
});

const dashboardData = ref({ live: [], history: [] })
const isLoading = ref(true)

async function fetchBuyerFleetMetrics() {
  isLoading.value = true
  try {
    const data = await $fetch('/api/buyer/dashboard')
    if (data.success) {
      dashboardData.value = data
    }
  } catch (err) {
    console.error('Failed to link up buyer dashboard matrices:', err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchBuyerFleetMetrics()
})
</script>

<template>
  <div class="min-h-screen bg-gray-50/60 pb-24 text-gray-900 font-sans">

    <main class="max-w-md mx-auto p-4 space-y-6">
      
      <!-- LOADING BOUNDARY SPINNER -->
      <div v-if="isLoading" class="py-24 text-center space-y-3">
        <div class="w-8 h-8 border-2 border-orange-500/10 border-t-orange-500 rounded-full animate-spin mx-auto"></div>
        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">Compiling manifest ledger...</p>
      </div>

      <template v-else>
        
        <!-- ========================================== -->
        <!-- PANEL SECTION 1: LIVE ON-DEMAND DISPATCHES -->
        <!-- ========================================== -->
        <section class="space-y-3">
          <div class="flex items-center justify-between">
            <h3 class="text-xs font-black text-gray-400 uppercase tracking-wider">Active Dispatches</h3>
            <span class="text-[10px] font-bold bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full">
              {{ dashboardData.live.length }} Active
            </span>
          </div>

          <!-- State A: No Active Parts Runs -->
          <div v-if="dashboardData.live.length === 0" class="p-6 text-center bg-white border border-gray-100 rounded-2xl">
            <p class="text-xs font-bold text-gray-700 tracking-wide uppercase">All Clear Right Now</p>
            <p class="text-[11px] text-gray-400 mt-1 max-w-[220px] mx-auto leading-normal">
              No live parts deliveries are currently en route to your service bays.
            </p>
          </div>

          <!-- State B: Render Active Dispatches Stack -->
          <div 
            v-else
            v-for="run in dashboardData.live"
            :key="run._id"
            class="bg-white border-2 border-orange-500/20 rounded-2xl p-4 shadow-xs space-y-4 relative overflow-hidden"
          >
            <div class="absolute top-0 left-0 bottom-0 w-1 bg-orange-500"></div>

            <div class="flex items-start justify-between">
              <div class="space-y-0.5 pl-1">
                <span 
                  class="text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded"
                  :class="run.status === 'accepted' ? 'bg-emerald-50 text-emerald-600 animate-pulse' : 'bg-gray-100 text-gray-500'"
                >
                  {{ run.status === 'accepted' ? 'Courier Assigned' : 'Awaiting Driver' }}
                </span>
                <h4 class="font-extrabold text-sm text-gray-800 mt-1.5">{{ run.vehicleInfo }}</h4>
                <p class="text-[11px] text-gray-400 font-medium font-mono">From: {{ run.supplierName }}</p>
              </div>
              <p class="text-lg font-black text-gray-900 tracking-tight">${{ run.totalCost.toFixed(2) }}</p>
            </div>

            <!-- Mini Description Details block -->
            <div class="bg-gray-50 rounded-xl p-3 text-xs border border-gray-100/60 flex items-center justify-between">
              <div class="truncate max-w-[180px]">
                <span class="text-[8px] font-bold text-gray-400 uppercase tracking-block block">Cargo Item</span>
                <span class="font-bold text-gray-600 truncate block mt-0.5">{{ run.partsManifest }}</span>
              </div>
              <div>
                <span class="text-[8px] font-bold text-gray-400 uppercase tracking-block text-right block">Bay Target</span>
                <span class="font-bold text-gray-600 block mt-0.5 text-right">{{ run.bayInstructions }}</span>
              </div>
            </div>

            <!-- Live Track Button Trigger Link -->
            <button 
              @click="$router.push(`/buyer/track-order/${run._id}`)"
              class="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white font-extrabold text-xs rounded-xl uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors shadow-xs"
            >
              <span>Launch Live Radar Map</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </section>

        <!-- ========================================== -->
        <!-- PANEL SECTION 2: ARCHIVAL HISTORICAL RUNS  -->
        <!-- ========================================== -->
        <section class="space-y-3">
          <h3 class="text-xs font-black text-gray-400 uppercase tracking-wider">Completed Delivery Logs</h3>

          <!-- State A: Empty Log History -->
          <div v-if="dashboardData.history.length === 0" class="p-8 text-center bg-white border border-gray-100 rounded-2xl">
            <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">No Archive Available</p>
          </div>

          <!-- State B: Render Completed Log Rows -->
          <div 
            v-else
            v-for="log in dashboardData.history"
            :key="log._id"
            class="bg-white border border-gray-100 rounded-2xl p-4 shadow-2xs space-y-3 transition-colors hover:border-gray-200"
          >
            <div class="flex items-start justify-between border-b border-gray-50 pb-2.5">
              <div class="space-y-0.5">
                <p class="text-xs font-black text-gray-800 tracking-tight">{{ log.vehicleInfo }}</p>
                <p class="text-[9px] text-gray-400 font-mono font-medium">{{ formatDate(log.timestamp) }}</p>
              </div>
              <div class="text-right">
                <p class="text-sm font-black text-emerald-600 tracking-tight">${{ log.totalCost.toFixed(2) }}</p>
                <span class="text-[7px] font-black uppercase tracking-widest bg-gray-100 text-gray-500 px-1 py-0.5 rounded mt-0.5 inline-block">
                  Arrived
                </span>
              </div>
            </div>

            <!-- Delivery Summary Specifications Grid -->
            <div class="grid grid-cols-2 gap-4 text-[11px]">
              <div>
                <span class="text-[8px] text-gray-400 font-bold uppercase tracking-wider block">Supplier Counter</span>
                <p class="font-extrabold text-gray-600 mt-0.5 truncate">{{ log.supplierName }}</p>
              </div>
              <div>
                <span class="text-[8px] text-gray-400 font-bold uppercase tracking-wider block">Manifest Content</span>
                <p class="font-extrabold text-gray-600 mt-0.5 truncate">{{ log.partsManifest }}</p>
              </div>
            </div>
          </div>
        </section>

      </template>
    </main>

    <!-- STICKY MOBILE BOTTOM NAVIGATION BAR -->
    <nav class="fixed bottom-0 inset-x-0 bg-white border-t border-gray-100 pb-safe shadow-lg z-40">
      <div class="max-w-md mx-auto grid grid-cols-2 h-16 text-center">
        
        <!-- Tab 1: Workshop Fleet Command Center -->
        <button 
          @click="$router.push('/buyer/dashboard')"
          class="flex flex-col items-center justify-center space-y-1 transition-colors select-none"
          :class="$route.path === '/buyer/dashboard' ? 'text-orange-500 font-black' : 'text-gray-400 hover:text-gray-600'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <span class="text-[10px] uppercase tracking-wider">Fleet Hub</span>
        </button>

        <!-- Tab 2: Drop a Fresh Parts Hot-Shot Request -->
        <button 
          @click="$router.push('/buyer/order')"
          class="flex flex-col items-center justify-center space-y-1 transition-colors select-none"
          :class="$route.path === '/buyer/order' ? 'text-orange-500 font-black' : 'text-gray-400 hover:text-gray-600'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span class="text-[10px] uppercase tracking-wider">New Request</span>
        </button>

      </div>
    </nav>
  </div>
</template>