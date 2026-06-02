/**
 * AUTODASH GLOBAL NITRO SERVER CORE ENGINE
 * SERVER/PLUGINS/MONGODB.TS
 */
import mongoose from 'mongoose'

export default defineNitroPlugin(async (nitroApp) => {
  const config = useRuntimeConfig()
  const uri = config.mongodbUri || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/autodash'

  try {
    // Establish a high-performance, single re-usable connection pool
    await mongoose.connect(uri, {
      maxPoolSize: 10, // Allows up to 10 parallel queries to run at once
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    })
    
    console.log('🚀 [Database Core] Global MongoDB connection pool initialized successfully.')
  } catch (error) {
    console.error('❌ [Database Core] Critical fault initializing global MongoDB pool:', error)
  }

  // Gracefully tear down connection streams if the Nitro process terminates
  nitroApp.hooks.hook('close', async () => {
    await mongoose.disconnect()
    console.log('📡 [Database Core] Global MongoDB connection pool closed cleanly.')
  })
})