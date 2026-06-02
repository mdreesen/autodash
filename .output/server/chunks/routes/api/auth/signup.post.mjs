import { d as defineEventHandler, r as readBody, c as createError, a as createSession } from '../../../nitro/nitro.mjs';
import bcrypt from 'bcryptjs';
import { U as UserImport } from '../../../_/User.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'iron-session';
import 'mongoose';

const User = UserImport;
const signup_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, password, role } = body;
  if (!name || !email || !password || !role) {
    throw createError({ statusCode: 400, message: "All registration parameters are required." });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw createError({ statusCode: 409, message: "An account with this email already exists." });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role
      // 'buyer' or 'driver'
    });
    const sessionPayload = {
      _id: newUser._id.toString(),
      name: newUser.name,
      email: newUser.email,
      role: newUser.role
    };
    await createSession(event, sessionPayload);
    return {
      success: true,
      message: "Account provisioned successfully.",
      user: sessionPayload
    };
  } catch (error) {
    console.error("Signup engine halted:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal database write failure."
    });
  }
});

export { signup_post as default };
//# sourceMappingURL=signup.post.mjs.map
