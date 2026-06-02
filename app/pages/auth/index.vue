<!-- pages/auth/index.vue -->
<script setup lang="ts">
// Form toggle state: true = Login view, false = Signup view
const isLoginView = ref(true)
const isLoading = ref(false)
const errorMessage = ref('')

// Unified Form State Model
const authForm = ref({
  name: '',
  email: '',
  password: '',
  role: 'buyer'
})

const handleAuthAction = async () => {
  errorMessage.value = ''

  if (!authForm.value.email || !authForm.value.password) {
    errorMessage.value = 'Please complete all required fields.'
    return
  }
  if (!isLoginView.value && !authForm.value.name) {
    errorMessage.value = 'Name entry is required for account provisioning.'
    return
  }

  isLoading.value = true
  const targetEndpoint = isLoginView.value ? '/api/auth/login' : '/api/auth/signup'

  try {
    const response = await $fetch<any>(targetEndpoint, {
      method: 'POST',
      body: isLoginView.value
        ? { email: authForm.value.email, password: authForm.value.password }
        : authForm.value
    })

    if (response.success) {
      if (response.user.role === 'driver') {
        navigateTo('/driver/dashboard')
      } else {
        navigateTo('/buyer/order')
      }
    }
  } catch (error: any) {
    console.error('Authentication gate exception:', error)
    errorMessage.value = error.data?.message || 'Authentication failed. Verify credentials.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-[#F8F9FA] text-[#1A1D20] font-sans flex flex-col justify-between pb-8 px-4 antialiased">

    <!-- Top Brand Header Block -->
    <div class="pt-16 text-center max-w-sm mx-auto w-full">
      <div
        class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white border border-zinc-200/80 mb-3 shadow-sm">
        <div class="w-6 h-6 rounded-lg bg-[#FF5A00] flex items-center justify-center text-white font-black text-xs">
          A
        </div>
      </div>
      <h1 class="text-xl font-black tracking-tight text-zinc-900">
        AutoDash <span class="text-[#FF5A00]">Courier</span>
      </h1>
      <p class="text-xs text-zinc-400 mt-1 font-semibold max-w-[240px] mx-auto leading-normal">
        On-demand commercial vehicle parts delivery orchestration pipeline.
      </p>
    </div>

    <!-- Centralized Form Interface Housing -->
    <div class="max-w-sm w-full mx-auto bg-white border border-zinc-200/60 rounded-3xl p-6 shadow-md my-auto">

      <!-- Sliding Tab Selector -->
      <div
        class="bg-zinc-100/80 p-1 rounded-xl border border-zinc-200/40 flex items-center mb-6 relative overflow-hidden">
        <button @click="isLoginView = true; errorMessage = ''" type="button"
          class="w-1/2 text-xs font-bold uppercase tracking-wider py-2.5 rounded-lg z-10 transition-colors duration-200"
          :class="isLoginView ? 'text-zinc-900 font-extrabold' : 'text-zinc-400 hover:text-zinc-600'">
          Sign In
        </button>
        <button @click="isLoginView = false; errorMessage = ''" type="button"
          class="w-1/2 text-xs font-bold uppercase tracking-wider py-2.5 rounded-lg z-10 transition-colors duration-200"
          :class="!isLoginView ? 'text-zinc-900 font-extrabold' : 'text-zinc-400 hover:text-zinc-600'">
          Register
        </button>

        <!-- Sliding Indicator Pill -->
        <div
          class="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-white border border-zinc-200/40 rounded-lg shadow-sm transition-transform duration-300 ease-out"
          :class="isLoginView ? 'translate-x-0' : 'translate-x-full'"></div>
      </div>

      <!-- Action Feedback Notification Bar -->
      <div v-if="errorMessage"
        class="mb-5 p-3.5 bg-red-500/5 border border-red-500/10 rounded-xl text-xs text-red-500 font-semibold leading-tight flex items-center gap-2 animate-fadeIn">
        <span class="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
        {{ errorMessage }}
      </div>

      <form @submit.prevent="handleAuthAction" class="space-y-4">

        <!-- REGISTRATION FIELDS: NAME & ROLE -->
        <div v-if="!isLoginView" class="space-y-4 class-animate-fadeIn">
          <div>
            <label class="block text-[11px] font-bold text-zinc-600 mb-1">Full Professional Name</label>
            <input v-model="authForm.name" type="text" placeholder="Alex Mercer"
              class="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#FF5A00] focus:bg-white text-zinc-900 placeholder:text-zinc-400 transition-all" />
          </div>

          <div>
            <label class="block text-[11px] font-bold text-zinc-600 mb-1.5">Platform Role Type</label>
            <div class="grid grid-cols-2 gap-3">
              <label
                class="border rounded-xl p-3 flex flex-col items-center gap-0.5 cursor-pointer transition-all bg-zinc-50"
                :class="authForm.role === 'buyer' ? 'border-[#FF5A00] bg-[#FF5A00]/5 ring-1 ring-[#FF5A00]/10' : 'border-zinc-200 opacity-70'">
                <input type="radio" v-model="authForm.role" value="buyer" class="hidden" />
                <span class="text-xs font-bold text-zinc-800 uppercase tracking-wide">Shop Buyer</span>
                <span class="text-[9px] text-zinc-400 text-center mt-0.5 leading-none">I order parts</span>
              </label>

              <label
                class="border rounded-xl p-3 flex flex-col items-center gap-0.5 cursor-pointer transition-all bg-zinc-50"
                :class="authForm.role === 'driver' ? 'border-[#FF5A00] bg-[#FF5A00]/5 ring-1 ring-[#FF5A00]/10' : 'border-zinc-200 opacity-70'">
                <input type="radio" v-model="authForm.role" value="driver" class="hidden" />
                <span class="text-xs font-bold text-zinc-800 uppercase tracking-wide">Courier</span>
                <span class="text-[9px] text-zinc-400 text-center mt-0.5 leading-none">I deliver logs</span>
              </label>
            </div>
          </div>
        </div>

        <!-- CONSTANT AUTHENTICATION FIELDS -->
        <div>
          <label class="block text-[11px] font-bold text-zinc-600 mb-1">Email Address</label>
          <input v-model="authForm.email" type="email" autocomplete="email" placeholder="name@company.com"
            class="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#FF5A00] focus:bg-white text-zinc-900 placeholder:text-zinc-400 transition-all" />
        </div>

        <div>
          <label class="block text-[11px] font-bold text-zinc-600 mb-1">Password Shield</label>
          <input v-model="authForm.password" type="password" autocomplete="current-password" placeholder="••••••••••••"
            class="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#FF5A00] focus:bg-white text-zinc-900 placeholder:text-zinc-400 transition-all font-mono" />
        </div>

        <!-- DoorDash Style Accent Submit Trigger -->
        <button :disabled="isLoading" type="submit"
          class="w-full bg-[#FF5A00] text-white font-extrabold text-xs uppercase tracking-wider py-4 rounded-xl shadow-md shadow-[#FF5A00]/10 hover:bg-[#e04f00] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6">
          <svg v-if="isLoading" class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
          </svg>
          {{ isLoading ? 'Verifying Context...' : (isLoginView ? 'Unlock Platform Access' : 'Create Fleet Account') }}
        </button>
      </form>
    </div>

    <!-- Bottom Compliance Footer -->
    <div class="text-center w-full max-w-xs mx-auto">
      <p class="text-[9px] font-bold tracking-wider text-zinc-400 uppercase font-mono">
        Secured Layer // Authorized App Wrappers Only
      </p>
    </div>
  </div>
</template>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>