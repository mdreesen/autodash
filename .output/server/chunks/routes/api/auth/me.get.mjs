import { d as defineEventHandler } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'iron-session';

const me_get = defineEventHandler((event) => {
  return {
    user: event.context.user || null
  };
});

export { me_get as default };
//# sourceMappingURL=me.get.mjs.map
