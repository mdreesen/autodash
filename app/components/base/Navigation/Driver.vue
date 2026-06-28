<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

const isOnline = ref(false);

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
});

</script>
<template>
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
</template>