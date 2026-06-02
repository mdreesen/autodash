// https://nuxt.com/docs/api/configuration/nuxt-config
// import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // 1. FORCE CLIENT-ONLY EXECUTIONS: Mobile apps cannot process backend Node.js rendering
  ssr: false,

  // 2. Ensure smooth adjustments inside mobile viewport boundaries
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover' }
      ]
    }
  },

  nitro: {
    // Keep your existing tasks/cron settings intact for Vercel backend
    experimental: { tasks: true },
    tasks: {
      'lead:reminders': { handler: './server/tasks/lead/reminders' }
    }
  },

  modules: ['@nuxtjs/tailwindcss']
})