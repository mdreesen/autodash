/**
 * AUTODASH DEVELOPER TESTING SEED ROUTE
 * NITRO SERVER ROUTE // GET REQUEST
 */
import { createSession } from '../../middleware/auth'

export default defineEventHandler(async (event) => {
  const mockTestUser = {
    _id: '66037a5f945b9b2ca73a933a', // Fake MongoDB style ObjectId
    name: 'Michael Dreesen',
    email: 'michaeldreesen90@gmail.com',
    role: 'buyer'
  }

  // Generate encrypted cookie session
  await createSession(event, mockTestUser)

  return {
    success: true,
    message: 'Authenticated successfully as developer seed profile!',
    user: mockTestUser
  }
})