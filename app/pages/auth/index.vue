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
  role: 'buyer' // Default role selection matrix entry
})

const handleAuthAction = async () => {
  errorMessage.value = ''
  
  // Validation Checks
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
    const response = await $fetch(targetEndpoint, {
      method: 'POST',
      body: isLoginView.value 
        ? { email: authForm.value.email, password: authForm.value.password }
        : authForm.value
    })

    if (response.success) {
      // Role-Based Router Redirection Gateway
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
  <div class="min-h-screen bg-[#020203] text-white font-sans flex flex-col justify-between pb-8 px-4 selection:bg-[#30cf43] selection:text-black">
    
    <div class="pt-16 text-center max-w-sm mx-auto w-full">
      <div class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 mb-4 shadow-inner">
        <span class="w-3 h-3 rounded-full bg-[#30cf43] shadow-[0_0_12px_#30cf43]"></span>
      </div>
      <h1 class="text-2xl font-black tracking-tight uppercase">
        AutoDash <span class="text-[#30cf43]">Courier</span>
      </h1>
      <p class="text-xs text-zinc-500 mt-1 font-medium max-w-[240px] mx-auto leading-relaxed">
        On-demand commercial vehicle parts delivery orchestration pipeline.
      </p>
    </div>

    <div class="max-w-sm w-full mx-auto bg-zinc-900/30 border border-white/5 rounded-3xl p-6 shadow-2xl backdrop-blur-sm my-auto">
      
      <div class="bg-zinc-950 p-1 rounded-xl border border-white/5 flex items-center mb-6 relative overflow-hidden">
        <button 
          @click="isLoginView = true; errorMessage = ''"
          type="button"
          class="w-1/2 text-xs font-bold uppercase tracking-wider py-2.5 rounded-lg z-10 transition-colors duration-300"
          :class="isLoginView ? 'text-black font-black' : 'text-zinc-400 hover:text-white'"
        >
          Sign In
        </button>
        <button 
          @click="isLoginView = false; errorMessage = ''"
          type="button"
          class="w-1/2 text-xs font-bold uppercase tracking-wider py-2.5 rounded-lg z-10 transition-colors duration-300"
          :class="!isLoginView ? 'text-black font-black' : 'text-zinc-400 hover:text-white'"
        >
          Register
        </button>
        
        <div 
          class="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-[#30cf43] rounded-lg shadow-md transition-transform duration-300 ease-out"
          :class="isLoginView ? 'translate-x-0' : 'translate-x-full'"
        ></div>
      </div>

      <div v-if="errorMessage" class="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-xs text-red-400 font-medium leading-tight flex items-center gap-2">
        <span class="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
        {{ errorMessage }}
      </div>

      <form @submit.prevent="handleAuthAction" class="space-y-4">
        
        <div v-if="!isLoginView" class="space-y-4 animate-fadeIn">
          <div>
            <label class="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1.5">Full Professional Name</label>
            <input v-model="authForm.name" type="text" placeholder="Alex Mercer" class="w-full bg-zinc-950 border border-white/10 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:border-[#30cf43] text-white placeholder:text-zinc-700 transition-colors" />
          </div>

          <div>
            <label class="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1.5">Application Platform Profile Role</label>
            <div class="grid grid-cols-2 gap-3">
              <label 
                class="border rounded-xl p-3 flex flex-col items-center gap-1 cursor-pointer transition-all bg-zinc-950"
                :class="authForm.role === 'buyer' ? 'border-[#30cf43] bg-[#30cf43]/5' : 'border-white/10 opacity-60'"
              >
                <input type="radio" v-model="authForm.role" value="buyer" class="hidden" />
                <span class="text-xs font-bold text-white uppercase tracking-wider">Shop / Buyer</span>
                <span class="text-[9px] text-zinc-500 text-center leading-none mt-0.5">I need parts delivered</span>
              </label>

              <label 
                class="border rounded-xl p-3 flex flex-col items-center gap-1 cursor-pointer transition-all bg-zinc-950"
                :class="authForm.role === 'driver' ? 'border-[#30cf43] bg-[#30cf43]/5' : 'border-white/10 opacity-60'"
              >
                <input type="radio" v-model="authForm.role" value="driver" class="hidden" />
                <span class="text-xs font-bold text-white uppercase tracking-wider">Courier / Driver</span>
                <span class="text-[9px] text-zinc-500 text-center leading-none mt-0.5">I drop off part orders</span>
              </label>
            </div>
          </div>
        </div>

        <div>
          <label class="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1.5">Email Address Endpoint</label>
          <input v-model="authForm.email" type="email" autocomplete="email" placeholder="name@company.com" class="w-full bg-zinc-950 border border-white/10 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:border-[#30cf43] text-white placeholder:text-zinc-700 transition-colors" />
        </div>

        <div>
          <label class="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1.5">Secure Shield Password</label>
          <input v-model="authForm.password" type="password" autocomplete="current-password" placeholder="••••••••••••" class="w-full bg-zinc-950 border border-white/10 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:border-[#30cf43] text-white placeholder:text-zinc-700 transition-colors font-mono" />
        </div>

        <button :disabled="isLoading" type="submit" class="w-full bg-[#30cf43] text-black font-black uppercase text-xs tracking-wider py-4 rounded-xl shadow-lg shadow-[#30cf43]/5 hover:bg-[#2cb93c] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6">
          <svg v-if="isLoading" class="animate-spin h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {{ isLoading ? 'Verifying Directives...' : (isLoginView ? 'Unlock Platform Access' : 'Provision Fleet Account') }}
        </button>
      </form>
    </div>

    <div class="text-center w-full max-w-xs mx-auto">
      <p class="text-[9px] font-mono text-zinc-600 tracking-wider uppercase">
        Secured Layer // Authorized Hardware Wrappers Only
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Clean micro-interaction transition acceleration scripts */
.animate-fadeIn {
  animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>