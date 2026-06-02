<script setup lang="ts">
const isLoading = ref(false)

// Form State Container
const orderForm = ref({
  year: '',
  make: '',
  model: '',
  storeName: 'O\'Reilly Auto Parts',
  storeAddress: '',
  commercialOrderNumber: '',
  manifestText: '',
  deliveryAddress: '',
  bayInstructions: ''
})

const storeOptions = [
  { label: 'O\'Reilly Auto Parts', value: 'O\'Reilly Auto Parts' },
  { label: 'NAPA Auto Parts', value: 'NAPA Auto Parts' },
  { label: 'AutoZone', value: 'AutoZone' },
  { label: 'Advance Auto Parts', value: 'Advance Auto Parts' },
  { label: 'Factory Direct / Independent Distributor', value: 'Independent' }
]

const submitOrderRequest = async () => {
  if (!orderForm.value.commercialOrderNumber || !orderForm.value.deliveryAddress) {
    alert('Please fill out the pre-paid Commercial Order Number and Delivery Address.')
    return
  }
  
  isLoading.value = true
  try {
    // This will hit your future Nitro order creation pipeline endpoint
    const response = await $fetch('/api/orders/create', {
      method: 'POST',
      body: orderForm.value
    })
    
    alert('Parts delivery request broadcasted successfully to nearby drivers!')
    
    // Clear out form fields on success
    orderForm.value.commercialOrderNumber = ''
    orderForm.value.manifestText = ''
  } catch (error) {
    console.error('Failed to dispatch order:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-[#020203] text-white pb-12 font-sans selection:bg-[#30cf43] selection:text-black">
    <div class="sticky top-0 z-50 bg-[#020203]/80 backdrop-blur-md border-b border-white/5 px-4 py-4 flex items-center justify-between">
      <div>
        <h1 class="text-lg font-black tracking-tight flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-[#30cf43] animate-pulse"></span>
          AutoDash Courier
        </h1>
        <p class="text-[10px] text-zinc-500 font-mono tracking-wide uppercase">On-Demand Commercial Parts Delivery</p>
      </div>
      <div class="bg-zinc-900 border border-white/10 px-2.5 py-1 rounded-full text-[10px] font-mono text-[#30cf43]">
        MVP Protocol v1.0
      </div>
    </div>

    <div class="max-w-md mx-auto px-4 mt-6 space-y-6">
      <div class="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 space-y-4">
        <div class="flex items-center gap-2 border-b border-white/5 pb-2">
          <div class="text-[#30cf43] text-xs font-mono font-black">01 //</div>
          <h2 class="text-xs font-black uppercase tracking-wider text-zinc-400">Vehicle Target Specifications</h2>
        </div>

        <div class="grid grid-cols-3 gap-3">
          <div>
            <label class="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Year</label>
            <input v-model="orderForm.year" type="number" placeholder="2018" class="w-full bg-zinc-900 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#30cf43] text-white placeholder:text-zinc-600" />
          </div>
          <div class="col-span-2">
            <label class="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Make</label>
            <input v-model="orderForm.make" type="text" placeholder="Ford (e.g.)" class="w-full bg-zinc-900 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#30cf43] text-white placeholder:text-zinc-600" />
          </div>
        </div>

        <div>
          <label class="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Model Name / Sub-Trim</label>
          <input v-model="orderForm.model" type="text" placeholder="F-150 Raptor Ecoboost" class="w-full bg-zinc-900 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#30cf43] text-white placeholder:text-zinc-600" />
        </div>
      </div>

      <div class="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 space-y-4">
        <div class="flex items-center gap-2 border-b border-white/5 pb-2">
          <div class="text-[#30cf43] text-xs font-mono font-black">02 //</div>
          <h2 class="text-xs font-black uppercase tracking-wider text-zinc-400">Parts Store Pickup Coordinates</h2>
        </div>

        <div>
          <label class="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Auto Supply Partner</label>
          <select v-model="orderForm.storeName" class="w-full bg-zinc-900 border border-white/10 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#30cf43] text-white">
            <option v-for="option in storeOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>

        <div>
          <label class="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Parts Store Specific Address</label>
          <input v-model="orderForm.storeAddress" type="text" placeholder="2400 US-2, Kalispell, MT" class="w-full bg-zinc-900 border border-white/10 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#30cf43] text-white placeholder:text-zinc-600" />
        </div>

        <div class="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-xl space-y-2">
          <label class="block text-[11px] font-black text-yellow-400 uppercase tracking-wider">
            Commercial Account Order Verification #
          </label>
          <input v-model="orderForm.commercialOrderNumber" type="text" placeholder="Ex: NAPA-849202" class="w-full bg-zinc-950 border border-yellow-500/30 rounded-xl px-3 py-2.5 text-sm font-mono text-yellow-400 placeholder:text-zinc-700 focus:outline-none focus:border-yellow-400 uppercase" />
          <p class="text-[10px] text-zinc-500 leading-tight">The driver will display this alphanumeric signature string to the parts counter associate to claim the pre-paid parcel box.</p>
        </div>
      </div>

      <div class="bg-zinc-900/40 border border-white/5 rounded-2xl p-5 space-y-4">
        <div class="flex items-center gap-2 border-b border-white/5 pb-2">
          <div class="text-[#30cf43] text-xs font-mono font-black">03 //</div>
          <h2 class="text-xs font-black uppercase tracking-wider text-zinc-400">Manifest Contents & Target Destination</h2>
        </div>

        <div>
          <label class="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Manifest Line-Items (Optional Memo)</label>
          <textarea v-model="orderForm.manifestText" rows="3" placeholder="2x Front Brake Rotors&#10;1x Ceramic Brake Pad Set" class="w-full bg-zinc-900 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#30cf43] text-white placeholder:text-zinc-600 resize-none leading-relaxed" />
        </div>

        <div>
          <label class="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Drop-off Destination Address</label>
          <input v-model="orderForm.deliveryAddress" type="text" placeholder="Dave's Auto Repair, 120 Main St." class="w-full bg-zinc-900 border border-white/10 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#30cf43] text-white placeholder:text-zinc-600" />
        </div>

        <div>
          <label class="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Bay Number / Delivery Instructions</label>
          <input v-model="orderForm.bayInstructions" type="text" placeholder="Bring straight back around to Lift Bay 3" class="w-full bg-zinc-900 border border-white/10 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#30cf43] text-white placeholder:text-zinc-600" />
        </div>
      </div>

      <div class="bg-gradient-to-r from-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-4 flex items-center justify-between shadow-xl">
        <div>
          <div class="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Calculated Route Overhead</div>
          <div class="text-xl font-black text-[#30cf43] font-mono mt-0.5">$14.50</div>
        </div>
        <div class="text-right text-[10px] text-zinc-400 max-w-[180px] leading-tight font-medium">
          Based on auto supplier distance calculations to destination zone coordinates.
        </div>
      </div>

      <button :disabled="isLoading" @click="submitOrderRequest" class="w-full bg-[#30cf43] text-black font-black uppercase text-xs tracking-wider py-4 rounded-xl shadow-lg shadow-[#30cf43]/10 hover:bg-[#2cb93c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
        <svg v-if="isLoading" class="animate-spin h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        {{ isLoading ? 'Broadcasting Job Vector...' : 'Authorize Express Parts Pickup' }}
      </button>
    </div>
  </div>
</template>