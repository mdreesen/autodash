<!-- pages/index.vue -->
<script setup lang="ts">
// 1. Define the structural signature blueprint of your session payload
interface AuthMeResponse {
  user: {
    _id: string
    name: string
    email: string
    role: 'buyer' | 'driver' | 'admin'
  } | null
}

onMounted(async () => {
  try {
    // 2. Pass the interface into the $fetch signature as a generic parameter type
    const data = await $fetch<AuthMeResponse>('/api/auth/me')
    
    // Now TypeScript knows exactly what 'data.user' is and the errors will disappear!
    if (data?.user) {
      if (data.user.role === 'driver') {
        navigateTo('/driver/dashboard')
      } else {
        navigateTo('/buyer/order')
      }
    } else {
      navigateTo('/auth')
    }
  } catch (error) {
    navigateTo('/auth')
  }
})
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col items-center justify-center font-sans antialiased">
    <div class="flex flex-col items-center gap-4 animate-pulse">
      <div class="w-12 h-12 rounded-2xl bg-[#FF5A00] flex items-center justify-center text-white font-black text-xl shadow-md">
        A
      </div>
      <div class="text-center">
        <h1 class="text-lg font-black tracking-tight text-zinc-900">AutoDash</h1>
        <p class="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-0.5">Initializing Network...</p>
      </div>
    </div>
  </div>
</template>