/**
 * AUTODASH USER STATE VERIFICATION
 * NITRO SERVER ROUTE // GET REQUEST
 */
export default defineEventHandler((event) => {
    // Pull directly from decrypted middleware stream state context
    return {
      user: event.context.user || null
    }
  })