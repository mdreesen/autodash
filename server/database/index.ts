/**
 * AUTODASH MONGO CELLULAR CONNECTION GATEWAY
 * NITRO DATABASE CONNECTOR SINGLETON
 */
import mongoose from 'mongoose'

export default async () => {
  // If the database connection state is already active, recycle it safely
  if (mongoose.connection.readyState >= 1) return

  const uri = process.env.MONGODB_URI;
  console.log('🔌 [Database] Connecting with URI:', uri ? `${uri.slice(0, 25)}...` : 'MISSING');

  if (!uri) {
    console.error('CRITICAL: MONGODB_URI environment string vector missing.')
    throw new Error('Database initialization vector dropped.')
  };

  try {
    await mongoose.connect(uri, {
      autoIndex: true // Essential for your 2dsphere geolocation indexing patterns
    })
    console.log('MongoDB Infrastructure seamlessly mounted to active Nitro context.')
  } catch (error) {
    console.error('Database connection engine fault:', error)
    throw error
  }
}

/**
 * AUTODASH CLOUD NETWORK DIAGNOSTIC CONNECTION GATEWAY
 * SERVER/DATABASE/INDEX.TS
 */
// import mongoose from 'mongoose'

// export default async () => {
//   // If a connection socket channel is already open, recycle it
//   if (mongoose.connection.readyState >= 1) return

//   const uri = process.env.MONGODB_URI

//   if (!uri) {
//     console.error('❌ [DB Fault] MONGODB_URI environment string variable is missing from your .env configuration.')
//     return
//   }

//   // Safely mask your cluster credentials so they don't leak into standard logging panes
//   const maskedUri = uri.replace(/:([^@]+)@/, ':********@')
//   console.log('🔌 [DB Diagnostics] Initiating handshake sequence with target:', maskedUri)

//   try {
//     // Inject explicit strict connection timeouts so your interface fails fast rather than lagging
//     await mongoose.connect(uri, {
//       serverSelectionTimeoutMS: 4000,
//       connectTimeoutMS: 4000
//     })
    
//     console.log('✅ [DB Success] Handshake established perfectly! Connected to Atlas Cluster.')
//   } catch (error: any) {
//     console.error('❌ [DB Critical Failure] Connection pipeline broke during network routing setup.')
//     console.error('------------------------------------------------------------')
//     console.error('Error Name:', error.name)
//     console.error('Message Details:', error.message)
//     console.error('------------------------------------------------------------')
//     console.error('👉 Action Tip: If you see "Server selection timed out", log into your MongoDB Atlas web console, navigate to "Network Access", and verify that your current public IP address is fully whitelisted.')
//     throw error
//   }
// }