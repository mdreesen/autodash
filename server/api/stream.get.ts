/**
 * REWIRED LIVE TELEMETRY & DISPATCH SSE GATEWAY
 * SERVER/API/STREAM.GET.TS
 */
import { connectDB } from "../database/mongodb";

export default defineEventHandler(async (event) => {
    await connectDB();

    const query = getQuery(event)
    const role = query.role as string 
    const id = query.id as string     
  
    if (!role || !id) {
      throw createError({ 
        statusCode: 400, 
        message: 'Missing streaming registration parameters (role and id required).' 
      })
    }
  
    // 1. Force raw, continuous connection streaming headers
    setHeaders(event, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
      'X-Accel-Buffering': 'no', // Absolute requirement to stop Nginx from swallowing chunks
      'Content-Encoding': 'none' // Prevents compression wrappers from blocking real-time delivery
    })
  
    // 2. Instantiate our long-lived streaming engine architecture
    const stream = new ReadableStream({
      start(controller) {
        // Pin this user directly into the active in-memory broadcasting manager hub
        if (role === 'driver') {
          EventHub.registerDriver(id, controller)
        } else if (role === 'buyer') {
          EventHub.registerBuyer(id, controller)
        }
  
        // Send an immediate connection confirmation event to notify the frontend the pipe is open
        const initialPayload = `event: connected\ndata: ${JSON.stringify({ status: 'online' })}\n\n`
        controller.enqueue(new TextEncoder().encode(initialPayload))
  
        // 3. Heartbeat keeping the connection alive every 10 seconds
        const heartbeatInterval = setInterval(() => {
          try {
            controller.enqueue(new TextEncoder().encode(': heartbeat\n\n'))
          } catch (err) {
            clearInterval(heartbeatInterval)
          }
        }, 10000)
  
        // 4. Handle client-side tab closures gracefully
        event.node.req.on('close', () => {
          clearInterval(heartbeatInterval)
          EventHub.unregister(id)
        })
      }
    })
  
    // Return the raw stream instance directly to the Nitro engine network layer
    return sendStream(event, stream)
  })