/**
 * AUTODASH SIGNUP GATEWAY
 * NITRO SERVER ROUTE // POST REQUEST
 */
import type { Model } from 'mongoose'
import bcrypt from 'bcryptjs'
import UserImport from '../../database/models/User'
import { createSession } from '../../middleware/auth'

const User = UserImport as Model<any>

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, password, role } = body

  if (!name || !email || !password || !role) {
    throw createError({ statusCode: 400, message: 'All registration parameters are required.' })
  }

  try {
    // 1. Ensure user doesn't already exist
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      throw createError({ statusCode: 409, message: 'An account with this email already exists.' })
    }

    // 2. Encrypt secure password hash
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // 3. Write User record into MongoDB
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role // 'buyer' or 'driver'
    })

    const sessionPayload = {
      _id: newUser._id.toString(),
      name: newUser.name,
      email: newUser.email,
      role: newUser.role
    }

    // 4. Drop encrypted session token cookie via middleware utility
    await createSession(event, sessionPayload)

    return {
      success: true,
      message: 'Account provisioned successfully.',
      user: sessionPayload
    }

  } catch (error: any) {
    console.error('Signup engine halted:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal database write failure.'
    })
  }
})