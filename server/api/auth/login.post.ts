/**
 * AUTODASH LOGIN ENGINE
 * NITRO SERVER ROUTE // POST REQUEST
 */
import type { Model } from 'mongoose'
import bcrypt from 'bcryptjs'
import UserImport from '../../database/models/User'
import { createSession } from '../../middleware/auth'

const User = UserImport as Model<any>

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body

  if (!email || !password) {
    throw createError({ statusCode: 400, message: 'Credentials missing.' })
  }

  try {
    // 1. Trace email signature in database
    const user = await User.findOne({ email })
    if (!user) {
      throw createError({ statusCode: 401, message: 'Invalid authentication credentials.' })
    }

    // 2. Validate password hash authenticity
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      throw createError({ statusCode: 401, message: 'Invalid authentication credentials.' })
    }

    const sessionPayload = {
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role
    }

    // 3. Set secure encrypted cookie
    await createSession(event, sessionPayload)

    return {
      success: true,
      message: 'Authentication validated.',
      user: sessionPayload
    }

  } catch (error: any) {
    console.error('Login authorization aborted:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal processing pipeline fault.'
    })
  }
})