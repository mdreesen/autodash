<script setup>
import { ref, onMounted, computed } from 'vue'

const historyData = ref({ metrics: { completedRuns: 0, lifetimeEarnings: 0 }, logs: [] })
const isLoading = ref(true)
const activeFilter = ref('all') // 'all' | 'completed' | 'active'

// --- 1. POPULATE HISTORICAL RECOREDS FROM DATABASE PLUGIN ---
async function fetchArchivedLogs() {
  isLoading.value = true
  try {
    const data = await $fetch('/api/driver/history')
    if (data.success) {
      historyData.value = data
    }
  } catch (err) {
    console.error('Failed to link up dashboard historical matrices:', err)
  } finally {
    isLoading.value = false
  }
}

// --- 2. REACTIVE FILTER FILTERING LOGIC ---
const filteredLogs = computed(() => {
  if (activeFilter.value === 'completed') {
    return historyData.value.logs.filter(log => log.status === 'completed')
  }
  if (activeFilter.value === 'active') {
    return historyData.value.logs.filter(log => log.status === 'accepted')
  }
  return historyData.value.logs
})

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
}

onMounted(() => {
  fetchArchivedLogs()
})
</script>

<template>
  <div class="min-h-screen bg-gray-50/60 pb-24 text-gray-900 font-sans">
    
    <header class="p-4 bg-white border-b border-gray-100 sticky top-0 z-50 flex items-center justify-between shadow-xs">
      <div class="flex items-center space-x-3">
        <button @click="$router.push('/driver/dashboard')" class="p-2 hover:bg-gray-50 rounded-full transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-gray-700">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <h1 class="text-base font-black tracking-tight text-gray-900">Job History Logs</h1>
      </div>
    </header>

    <main class="max-w-md mx-auto p-4 space-y-5">
      
      <section class="grid grid-cols-2 gap-4">
        <div class="bg-white p-4 border border-gray-100 rounded-2xl shadow-xs space-y-1">
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Completed Runs</p>
          <p class="text-2xl font-black text-zinc-900 tracking-tight">
            {{ isLoading ? '...' : historyData.metrics.completedRuns }}
          </p>
        </div>
        <div class="bg-white p-4 border border-gray-100 rounded-2xl shadow-xs space-y-1">
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Lifetime Payout</p>
          <p class="text-2xl font-black text-emerald-600 tracking-tight">
            ${{ isLoading ? '...' : historyData.metrics.lifetimeEarnings.toFixed(2) }}
          </p>
        </div>
      </section>

      <section class="flex bg-gray-200/60 p-1 rounded-xl">
        <button 
          @click="activeFilter = 'all'"
          class="flex-1 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all select-none"
          :class="activeFilter === 'all' ? 'bg-white text-zinc-900 shadow-xs' : 'text-gray-400 hover:text-gray-600'"
        >
          All ({{ historyData.logs.length }})
        </button>
        <button 
          @click="activeFilter = 'completed'"
          class="flex-1 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all select-none"
          :class="activeFilter === 'completed' ? 'bg-white text-zinc-900 shadow-xs' : 'text-gray-400 hover:text-gray-600'"
        >
          Completed
        </button>
        <button 
          @click="activeFilter = 'active'"
          class="flex-1 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all select-none"
          :class="activeFilter === 'active' ? 'bg-white text-zinc-900 shadow-xs' : 'text-gray-400 hover:text-gray-600'"
        >
          Active
        </button>
      </section>

      <section class="space-y-4">
        <div v-if="isLoading" class="py-16 text-center space-y-3">
          <div class="w-8 h-8 border-2 border-zinc-900/10 border-t-zinc-900 rounded-full animate-spin mx-auto"></div>
          <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">Hydrating logs ledger...</p>
        </div>

        <div v-else-if="filteredLogs.length === 0" class="py-16 text-center bg-white border border-gray-100 rounded-2xl p-6">
          <p class="text-xs font-bold text-gray-700 tracking-wide uppercase">No Historical Entries Found</p>
          <p class="text-[11px] text-gray-400 mt-1 max-w-[240px] mx-auto leading-normal">
            Any contracts you accept or fulfill will be securely saved right here for accounting and logging purposes.
          </p>
        </div>

        <div 
          v-else
          v-for="log in filteredLogs"
          :key="log._id"
          class="bg-white border border-gray-100 rounded-2xl p-4 shadow-xs space-y-3 transition-colors hover:border-gray-200/80"
        >
          <div class="flex items-start justify-between border-b border-gray-50 pb-2.5">
            <div class="space-y-0.5">
              <p class="text-[11px] font-black text-gray-800 tracking-tight truncate max-w-[240px]">{{ log.vehicleSpecs }}</p>
              <p class="text-[9px] text-gray-400 font-mono font-medium">{{ formatDate(log.timestamp) }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm font-black tracking-tight" :class="log.status === 'completed' ? 'text-emerald-600' : 'text-orange-500'">
                +${{ log.payout.toFixed(2) }}
              </p>
              <span 
                class="text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded mt-1 inline-block"
                :class="log.status === 'completed' ? 'bg-emerald-50 text-emerald-600' : log.status === 'accepted' ? 'bg-orange-50 text-orange-500' : 'bg-gray-100 text-gray-500'"
              >
                {{ log.status }}
              </span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 text-[11px] pt-0.5">
            <div>
              <span class="text-[9px] text-gray-400 font-bold uppercase tracking-wider block">Pickup</span>
              <p class="font-extrabold text-gray-700 truncate mt-0.5">{{ log.supplier }}</p>
            </div>
            <div>
              <span class="text-[9px] text-gray-400 font-bold uppercase tracking-wider block">Dropoff Shop</span>
              <p class="font-extrabold text-gray-700 truncate mt-0.5">{{ log.destination }}</p>
            </div>
          </div>

          <div class="bg-gray-50 rounded-xl p-2 text-[10px] font-medium text-gray-500 border border-gray-100/60 truncate">
            Manifest: {{ log.manifestText }}
          </div>
        </div>
      </section>

    </main>
  </div>
</template>