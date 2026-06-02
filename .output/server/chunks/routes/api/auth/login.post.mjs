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
const login_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;
  if (!email || !password) {
    throw createError({ statusCode: 400, message: "Credentials missing." });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw createError({ statusCode: 401, message: "Invalid authentication credentials." });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw createError({ statusCode: 401, message: "Invalid authentication credentials." });
    }
    const sessionPayload = {
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role
    };
    await createSession(event, sessionPayload);
    return {
      success: true,
      message: "Authentication validated.",
      user: sessionPayload
    };
  } catch (error) {
    console.error("Login authorization aborted:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal processing pipeline fault."
    });
  }
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
