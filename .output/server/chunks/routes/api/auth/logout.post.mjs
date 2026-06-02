import { d as defineEventHandler, b as deleteCookie } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'iron-session';

const logout_post = defineEventHandler((event) => {
  deleteCookie(event, "autodash_session");
  return { success: true, message: "Session vector destroyed." };
});

export { logout_post as default };
//# sourceMappingURL=logout.post.mjs.map
