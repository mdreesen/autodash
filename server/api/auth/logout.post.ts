/**
 * AUTODASH LOGOUT ROUTINE
 * NITRO SERVER ROUTE // POST REQUEST
 */
export default defineEventHandler((event) => {
    // Clear out the tracking session cookie completely
    deleteCookie(event, 'autodash_session')
    return { success: true, message: 'Session vector destroyed.' }
  })