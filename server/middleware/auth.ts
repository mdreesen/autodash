/**
 * AUTODASH CENTRAL AUTHENTICATION MIDDLEWARE
 * NITRO ENGINE // RUNS ON EVERY SINGLE API REQUEST
 */
import { sealData, unsealData } from 'iron-session'

// A secure 32-character password token used to encrypt/decrypt session cookies
const SESSION_SECRET = process.env.SESSION_SECRET || 'a_secure_32_character_minimum_password_token'
const COOKIE_NAME = 'autodash_session'

export default defineEventHandler(async (event) => {
  const cookies = parseCookies(event)
  const sessionCookie = cookies[COOKIE_NAME]

  event.context.user = null

  if (sessionCookie) {
    try {
      // Decrypt the cookie data safely
      const decryptedUser = await unsealData(sessionCookie, {
        password: SESSION_SECRET
      })
      
      if (decryptedUser) {
        // Attach the decrypted user identity straight to the event context
        event.context.user = decryptedUser
      }
    } catch (error) {
      console.warn('Session signature invalid or expired. Clearing context.')
    }
  }
})

// Helper utility function to encrypt and set the cookie when logging in/signing up
export async function createSession(event: any, userProfile: { _id: string; email: string; role: string; name: string }) {
  const encryptedData = await sealData(userProfile, {
    password: SESSION_SECRET
  })
  
  setCookie(event, COOKIE_NAME, encryptedData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30 // 30 Days expiration footprint
  })
}