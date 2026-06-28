// https://nuxt.com/docs/api/configuration/nuxt-config
// import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  ssr: false,

  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover' }
      ]
    }
  },

  nitro: {
    preset: 'static',
    experimental: { tasks: true },
    tasks: {
      'lead:reminders': { handler: './server/tasks/lead/reminders' }
    },
    prerender: {
      routes: ['/', '/auth', '/buyer/order']
    }
  },

  modules: ['@nuxtjs/tailwindcss']
})