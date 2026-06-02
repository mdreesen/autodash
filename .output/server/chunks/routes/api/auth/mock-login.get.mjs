import { d as defineEventHandler, a as createSession } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'iron-session';

const mockLogin_get = defineEventHandler(async (event) => {
  const mockTestUser = {
    _id: "66037a5f945b9b2ca73a933a",
    // Fake MongoDB style ObjectId
    name: "Michael Dreesen",
    email: "michaeldreesen90@gmail.com",
    role: "buyer"
  };
  await createSession(event, mockTestUser);
  return {
    success: true,
    message: "Authenticated successfully as developer seed profile!",
    user: mockTestUser
  };
});

export { mockLogin_get as default };
//# sourceMappingURL=mock-login.get.mjs.map
