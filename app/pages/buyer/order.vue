<!--
  AUTODASH COMMERCIAL BUYER DISPATCH SYSTEM ORDER CREATION
  PAGES/BUYER/ORDER.VUE
-->
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isSubmitting = ref(false)

// --- 1. REACTIVE FORM STATE MANAGEMENT ---
const orderForm = ref({
  poNumber: '',
  urgency: 'hotshot',
  supplierId: 'autozone-kalispell',
  vehicle: {
    year: '',
    make: '',
    model: '',
    engineSize: '',
    vin: '',
    unitNumber: ''
  },
  manifestText: '', 
  partNumbers: ''
})

// --- 2. LOCALIZED GEOFENCED SHOP LOCATIONS ---
const SHOP_LOCATIONS = [
  { id: 'big-mountain-evergreen', name: 'Big Mountain Repair (Evergreen)', address: 'Evergreen Region, Kalispell, MT' },
  { id: 'flathead-automotive', name: 'Flathead Valley Auto (South Kalispell)', address: 'South Kalispell, MT' }
]
const selectedShopId = ref('big-mountain-evergreen')

// --- 3. DYNAMIC PRICING STATE ---
const deliveryCost = ref(11.13) 

// --- 4. DISPATCH AUTHORIZATION PIPELINE ---
async function dispatchHotShotRequest() {
  if (!orderForm.value.vehicle.make || !orderForm.value.vehicle.model || !orderForm.value.manifestText) {
    alert('Please fulfill all mandatory fields including Year, Make, Model, and Parts Description.')
    return
  }
  
  isSubmitting.value = true
  try {
    const selectedShop = SHOP_LOCATIONS.find(s => s.id === selectedShopId.value)
    
    const payload = {
      poNumber: orderForm.value.poNumber || `RO-${Math.floor(1000 + Math.random() * 9000)}`,
      urgency: orderForm.value.urgency,
      supplier: {
        storeName: 'AutoZone Auto Parts',
        address: '740 US Hwy 2 W, Kalispell, MT 59901'
      },
      vehicle: {
        year: Number(orderForm.value.vehicle.year) || 2022,
        make: orderForm.value.vehicle.make,
        model: orderForm.value.vehicle.model,
        engineSize: orderForm.value.vehicle.engineSize || 'N/A',
        vin: orderForm.value.vehicle.vin.toUpperCase(),
        unitNumber: orderForm.value.vehicle.unitNumber || 'Main Shop Floor'
      },
      manifestText: orderForm.value.manifestText, 
      partNumbers: orderForm.value.partNumbers ? orderForm.value.partNumbers.split(',').map(p => p.trim()).filter(Boolean) : [],
      deliveryLocation: {
        address: selectedShop.address,
        bayInstructions: selectedShop.name
      }
    }

    const response = await $fetch('/api/orders/create', {
      method: 'POST',
      body: payload
    })

    if (response.success) {
      router.push('/buyer/dashboard')
    }
  } catch (err) {
    console.error('Logistics Core rejection:', err.response?._data || err)
    alert(`Submission Rejection: ${err.response?._data?.message || 'Check database validation params.'}`)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-50/40 pb-28 text-gray-900 font-sans antialiased">
    
    <!-- TOP STICKY COMPACT NAVBAR -->
    <header class="p-4 bg-white border-b border-gray-100/80 sticky top-0 z-50 flex items-center justify-between shadow-xs">
      <button @click="$router.push('/buyer/dashboard')", class="p-2 hover:bg-gray-50 rounded-full transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-gray-800">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <h1 class="text-sm font-black tracking-tight text-gray-900 mx-auto transform -translate-x-3">Request Hot-Shot Delivery</h1>
      <div class="w-7 h-7 rounded-full bg-orange-100 text-orange-600 font-bold text-[10px] flex items-center justify-center uppercase">MB</div>
    </header>

    <main class="max-w-md mx-auto p-4 space-y-5">
      
      <!-- ========================================== -->
      <!-- SECTION 01: TARGET VEHICLE SPECIFICATIONS  -->
      <!-- ========================================== -->
      <section class="bg-white border border-gray-100 rounded-3xl p-5 shadow-2xs space-y-4">
        <div class="flex items-center space-x-2.5">
          <span class="bg-orange-50 text-orange-600 text-[10px] font-black tracking-wider px-2 py-0.5 rounded-md uppercase">01</span>
          <h3 class="text-xs font-black text-gray-800 uppercase tracking-wider">Target Vehicle Specs</h3>
        </div>
        
        <!-- Year, Make input row -->
        <div class="grid grid-cols-2 gap-3.5">
          <input v-model="orderForm.vehicle.year" type="number" placeholder="Year" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-xs font-bold text-gray-800 focus:outline-none focus:border-orange-500 transition-colors" />
          <input v-model="orderForm.vehicle.make" type="text" placeholder="Make" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-xs font-bold text-gray-800 focus:outline-none focus:border-orange-500 transition-colors" />
        </div>

        <!-- Model, Engine input row -->
        <div class="grid grid-cols-2 gap-3.5">
          <input v-model="orderForm.vehicle.model" type="text" placeholder="Model" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-xs font-bold text-gray-800 focus:outline-none focus:border-orange-500 transition-colors" />
          <input v-model="orderForm.vehicle.engineSize" type="text" placeholder="Engine size (e.g. 5.7L)" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-xs font-bold text-gray-800 focus:outline-none focus:border-orange-500 transition-colors" />
        </div>

        <!-- Full-Width VIN Input Field -->
        <input v-model="orderForm.vehicle.vin" type="text" placeholder="VIN (17-Digit Identifier)" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-xs font-mono font-bold tracking-wide uppercase text-gray-800 focus:outline-none focus:border-orange-500 transition-colors" maxlength="17" />

        <!-- Target Bay / Unit Description -->
        <input v-model="orderForm.vehicle.unitNumber" type="text" placeholder="Bay Target / Fleet Unit # (e.g. Bay 3 / White Silverado)" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-xs font-bold text-gray-800 focus:outline-none focus:border-orange-500 transition-colors" />
      </section>

      <!-- ========================================== -->
      <!-- SECTION 02: PARTS CONTENT MANIFEST INPUT   -->
      <!-- ========================================== -->
      <section class="bg-white border border-gray-100 rounded-3xl p-5 shadow-2xs space-y-4">
        <div class="flex items-center space-x-2.5">
          <span class="bg-orange-50 text-orange-600 text-[10px] font-black tracking-wider px-2 py-0.5 rounded-md uppercase">02</span>
          <h3 class="text-xs font-black text-gray-800 uppercase tracking-wider">Parts & Account Info</h3>
        </div>

        <!-- Manifest textual string block -->
        <div class="relative">
          <input 
            v-model="orderForm.manifestText" 
            type="text" 
            placeholder="Parts description (e.g. Front Brake Pads)" 
            class="w-full bg-white border border-gray-200 rounded-xl pl-4 pr-12 py-4 text-xs font-bold text-gray-800 focus:outline-none focus:border-orange-500 transition-colors" 
          />
          <div class="absolute right-3.5 top-1/2 transform -translate-y-1/2 text-gray-300">✨</div>
        </div>

        <!-- SKU part numbers, PO numbers input row -->
        <div class="grid grid-cols-2 gap-3.5">
          <input v-model="orderForm.partNumbers" type="text" placeholder="SKUs/Part numbers (optional)" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-xs font-mono text-gray-600 focus:outline-none focus:border-orange-500 transition-colors" />
          <input v-model="orderForm.poNumber" type="text" placeholder="PO / Repair Order #" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-xs font-bold text-gray-800 focus:outline-none focus:border-orange-500 transition-colors" />
        </div>
      </section>

      <!-- ========================================== -->
      <!-- SECTION 03: REGIONAL SHOP GEOFENCED DROP   -->
      <!-- ========================================== -->
      <section class="bg-white border border-gray-100 rounded-3xl p-5 shadow-2xs space-y-4">
        <div class="flex items-center space-x-2.5">
          <span class="bg-orange-50 text-orange-600 text-[10px] font-black tracking-wider px-2 py-0.5 rounded-md uppercase">03</span>
          <h3 class="text-xs font-black text-gray-800 uppercase tracking-wider">Your Shop Location</h3>
        </div>

        <div class="space-y-1 relative">
          <select 
            v-model="selectedShopId" 
            class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-xs font-bold text-gray-800 focus:outline-none focus:border-orange-500 appearance-none transition-colors"
          >
            <option v-for="shop in SHOP_LOCATIONS" :key="shop.id" :value="shop.id">
              {{ shop.name }}
            </option>
          </select>
          <div class="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
          </div>
        </div>
      </section>

      <!-- ========================================== -->
      <!-- SUMMARY & DYNAMIC BILLING CALCULATOR UNIT -->
      <!-- ========================================== -->
      <section class="bg-white border border-gray-100 rounded-3xl p-5 shadow-2xs space-y-1">
        <p class="text-[9px] font-black uppercase text-gray-400 tracking-wider">Estimated Delivery Cost</p>
        <div class="flex items-baseline space-x-1">
          <span class="text-2xl font-black text-gray-900 tracking-tight">${{ deliveryCost.toFixed(2) }}</span>
        </div>
        <p class="text-[10px] text-gray-400 font-medium leading-normal pt-1">
          Sourced automatically from <span class="font-bold text-gray-600">AutoZone Auto Parts - Kalispell</span> (2.8 miles away).
        </p>
      </section>

      <!-- TRANSACTION TRIGGER SUBMIT ACTION -->
      <button 
        @click="dispatchHotShotRequest"
        :disabled="isSubmitting"
        class="w-full py-4 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-200 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-md transition-all active:scale-[0.995] flex items-center justify-center"
      >
        <span v-if="isSubmitting">Processing Dispatch Registry...</span>
        <span v-else>Submit Hot-Shot Request</span>
      </button>

    </main>
  </div>
</template>