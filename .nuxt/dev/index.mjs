import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, createError, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, appendResponseHeader, getRequestURL, getResponseHeader, removeResponseHeader, parseCookies, setCookie, getQuery as getQuery$1, readBody, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getResponseStatus, getRouterParam, deleteCookie, getResponseStatusText } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/h3/dist/index.mjs';
import { Server } from 'node:http';
import { resolve, dirname, join } from 'node:path';
import crypto$1 from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { escapeHtml } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/@vue/shared/dist/shared.cjs.js';
import viteNodeEntry_mjs from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/@nuxt/vite-builder/dist/vite-node-entry.mjs';
import { viteNodeFetch } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/@nuxt/vite-builder/dist/vite-node.mjs';
import bcrypt from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/bcryptjs/index.js';
import mongoose, { Schema } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/mongoose/index.js';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withTrailingSlash, decodePath, withLeadingSlash, withoutTrailingSlash, encodePath, joinRelativeURL } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/ufo/dist/index.mjs';
import destr, { destr as destr$1 } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/nitropack/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, defineDriver, prefixStorage } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/unstorage/drivers/fs.mjs';
import fsDriver from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/unstorage/drivers/fs-lite.mjs';
import lruCache from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/unstorage/drivers/lru-cache.mjs';
import { digest, hash as hash$1 } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/scule/dist/index.mjs';
import { getContext } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/radix3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola, { consola as consola$1 } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/youch-core/build/index.js';
import { Youch } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/source-map/source-map.js';
import { AsyncLocalStorage } from 'node:async_hooks';
import { stringify, uneval } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/devalue/index.js';
import { captureRawStackTrace, parseRawStackTrace } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/errx/dist/index.js';
import { isVNode, isRef, toValue } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/vue/index.mjs';
import _wH6JrtIxmaSoA8lCPWFnE9z4lQeXW6H5z3l5aymEQw from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/@nuxt/vite-builder/dist/fix-stacktrace.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$1 } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/pathe/dist/index.mjs';
import { unsealData, sealData } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/iron-session/dist/index.js';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/unhead/dist/server.mjs';
import { renderToString } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/vue/server-renderer/index.mjs';
import { walkResolver } from 'file:///Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/unhead/dist/utils.mjs';

const serverAssets = [{"baseName":"server","dir":"/Users/mdreesen/Documents/Programming/business-projects/autodash/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

// @ts-check


/**
 * @param {string} item
 */
function normalizeFsKey (item) {
  const safe = item.replace(/[^\w.-]/g, '_');
  const prefix = safe.slice(0, 20);
  const hash = crypto$1.createHash('sha256').update(item).digest('hex');
  return `${prefix}-${hash}`
}

const _47Users_47mdreesen_47Documents_47Programming_47business_45projects_47autodash_47node_modules_47_64nuxt_47nitro_45server_47dist_47runtime_47utils_47cache_45driver_46js = defineDriver(
  /**
   * @param {{ base?: string }} opts
   */
  (opts) => {
    const fs = fsDriver({ base: opts.base });
    const lru = lruCache({ max: 1000 });

    return {
      ...fs, // fall back to file system - only the bottom three methods are used in renderer
      async setItem (key, value, opts) {
        await Promise.all([
          fs.setItem?.(normalizeFsKey(key), value, opts),
          lru.setItem?.(key, value, opts),
        ]);
      },
      async hasItem (key, opts) {
        return await lru.hasItem(key, opts) || await fs.hasItem(normalizeFsKey(key), opts)
      },
      async getItem (key, opts) {
        return await lru.getItem(key, opts) || await fs.getItem(normalizeFsKey(key), opts)
      },
    }
  },
);

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/mdreesen/Documents/Programming/business-projects/autodash","watchOptions":{"ignored":[null]}}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/mdreesen/Documents/Programming/business-projects/autodash/server","watchOptions":{"ignored":[null]}}));
storage.mount('cache:nuxt:payload', _47Users_47mdreesen_47Documents_47Programming_47business_45projects_47autodash_47node_modules_47_64nuxt_47nitro_45server_47dist_47runtime_47utils_47cache_45driver_46js({"driver":"/Users/mdreesen/Documents/Programming/business-projects/autodash/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js","base":"/Users/mdreesen/Documents/Programming/business-projects/autodash/.nuxt/cache/nuxt/payload"}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/mdreesen/Documents/Programming/business-projects/autodash/.nuxt"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/mdreesen/Documents/Programming/business-projects/autodash/.nuxt/cache"}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/mdreesen/Documents/Programming/business-projects/autodash/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {}
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

function isPathInScope(pathname, base) {
  let canonical;
  try {
    const pre = pathname.replace(/%2f/gi, "/").replace(/%5c/gi, "\\");
    canonical = new URL(pre, "http://_").pathname;
  } catch {
    return false;
  }
  return !base || canonical === base || canonical.startsWith(base + "/");
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
	
	if (hasReqHeader(event, "accept", "text/html")) {
		return false;
	}
	return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
	const value = getRequestHeader(event, name);
	return !!(value && typeof value === "string" && value.toLowerCase().includes(includes));
}

const iframeStorageBridge = (nonce) => `
(function () {
  const NONCE = ${JSON.stringify(nonce)};
  const memoryStore = Object.create(null);

  const post = (type, payload) => {
    window.parent.postMessage({ type, nonce: NONCE, ...payload }, '*');
  };

  const isValid = (data) => data && data.nonce === NONCE;

  const mockStorage = {
    getItem(key) {
      return Object.hasOwn(memoryStore, key)
        ? memoryStore[key]
        : null;
    },
    setItem(key, value) {
      const v = String(value);
      memoryStore[key] = v;
      post('storage-set', { key, value: v });
    },
    removeItem(key) {
      delete memoryStore[key];
      post('storage-remove', { key });
    },
    clear() {
      for (const key of Object.keys(memoryStore))
        delete memoryStore[key];
      post('storage-clear', {});
    },
    key(index) {
      const keys = Object.keys(memoryStore);
      return keys[index] ?? null;
    },
    get length() {
      return Object.keys(memoryStore).length;
    }
  };

  const defineLocalStorage = () => {
    try {
      Object.defineProperty(window, 'localStorage', {
        value: mockStorage,
        writable: false,
        configurable: true
      });
    } catch {
      window.localStorage = mockStorage;
    }
  };

  defineLocalStorage();

  window.addEventListener('message', (event) => {
    const data = event.data;
    if (!isValid(data) || data.type !== 'storage-sync-data') return;

    const incoming = data.data || {};
    for (const key of Object.keys(incoming))
      memoryStore[key] = incoming[key];

    if (typeof window.initTheme === 'function')
      window.initTheme();
    window.dispatchEvent(new Event('storage-ready'));
  });

  // Clipboard API is unavailable in data: URL iframe, so we use postMessage
  document.addEventListener('DOMContentLoaded', function() {
    window.copyErrorMessage = function(button) {
      post('clipboard-copy', { text: button.dataset.errorText });
      button.classList.add('copied');
      setTimeout(function() { button.classList.remove('copied'); }, 2000);
    };
  });

  post('storage-sync-request', {});
})();
`;
const parentStorageBridge = (nonce) => `
(function () {
  const host = document.querySelector('nuxt-error-overlay');
  if (!host) return;

  const NONCE = ${JSON.stringify(nonce)};
  const isValid = (data) => data && data.nonce === NONCE;

  // Handle clipboard copy from iframe
  window.addEventListener('message', function(e) {
    if (isValid(e) && e.data.type === 'clipboard-copy') {
      navigator.clipboard.writeText(e.data.text).catch(function() {});
    }
  });

  const collectLocalStorage = () => {
    const all = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k != null) all[k] = localStorage.getItem(k);
    }
    return all;
  };

  const attachWhenReady = () => {
    const root = host.shadowRoot;
    if (!root)
      return false;
    const iframe = root.getElementById('frame');
    if (!iframe || !iframe.contentWindow)
      return false;

    const handlers = {
      'storage-set': (d) => localStorage.setItem(d.key, d.value),
      'storage-remove': (d) => localStorage.removeItem(d.key),
      'storage-clear': () => localStorage.clear(),
      'storage-sync-request': () => {
        iframe.contentWindow.postMessage({
          type: 'storage-sync-data',
          data: collectLocalStorage(),
          nonce: NONCE
        }, '*');
      }
    };

    window.addEventListener('message', (event) => {
      const data = event.data;
      if (!isValid(data)) return;
      const fn = handlers[data.type];
      if (fn) fn(data);
    });

    return true;
  };

  if (attachWhenReady())
    return;

  const obs = new MutationObserver(() => {
    if (attachWhenReady())
      obs.disconnect();
  });

  obs.observe(host, { childList: true, subtree: true });
})();
`;
const errorCSS = `
:host {
  --preview-width: 240px;
  --preview-height: 180px;
  --base-width: 1200px;
  --base-height: 900px;
  --z-base: 999999998;
  --error-pip-left: auto;
  --error-pip-top: auto;
  --error-pip-right: 5px;
  --error-pip-bottom: 5px;
  --error-pip-origin: bottom right;
  --app-preview-left: auto;
  --app-preview-top: auto;
  --app-preview-right: 5px;
  --app-preview-bottom: 5px;
  all: initial;
  display: contents;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
#frame {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  border: none;
  z-index: var(--z-base);
}
#frame[inert] {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: var(--error-pip-right);
  bottom: var(--error-pip-bottom);
  width: var(--base-width);
  height: var(--base-height);
  transform: scale(calc(240 / 1200));
  transform-origin: var(--error-pip-origin);
  overflow: hidden;
  border-radius: calc(1200 * 8px / 240);
}
#preview {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: var(--app-preview-right);
  bottom: var(--app-preview-bottom);
  width: var(--preview-width);
  height: var(--preview-height);
  overflow: hidden;
  border-radius: 6px;
  pointer-events: none;
  z-index: var(--z-base);
  background: white;
  display: none;
}
#preview iframe {
  transform-origin: var(--error-pip-origin);
}
#frame:not([inert]) + #preview {
  display: block;
}
#toggle {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: calc(var(--app-preview-right) - 3px);
  bottom: calc(var(--app-preview-bottom) - 3px);
  width: var(--preview-width);
  height: var(--preview-height);
  background: none;
  border: 3px solid #00DC82;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s, box-shadow 0.2s;
  z-index: calc(var(--z-base) + 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
#toggle:hover,
#toggle:focus {
  opacity: 1;
  box-shadow: 0 0 20px rgba(0, 220, 130, 0.6);
}
#toggle:focus-visible {
  outline: 3px solid #00DC82;
  outline-offset: 0;
  box-shadow: 0 0 24px rgba(0, 220, 130, 0.8);
}
#frame[inert] ~ #toggle {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: calc(var(--error-pip-right) - 3px);
  bottom: calc(var(--error-pip-bottom) - 3px);
  cursor: grab;
}
:host(.dragging) #frame[inert] ~ #toggle {
  cursor: grabbing;
}
#frame:not([inert]) ~ #toggle,
#frame:not([inert]) + #preview {
  cursor: grab;
}
:host(.dragging-preview) #frame:not([inert]) ~ #toggle,
:host(.dragging-preview) #frame:not([inert]) + #preview {
  cursor: grabbing;
}

#pip-close {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 16px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  pointer-events: auto;
}
#pip-close:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}

#pip-restore {
  position: fixed;
  right: 16px;
  bottom: 16px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 2px solid #00DC82;
  background: #111;
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  z-index: calc(var(--z-base) + 2);
  cursor: grab;
}
#pip-restore:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}
:host(.dragging-restore) #pip-restore {
  cursor: grabbing;
}

#frame[hidden],
#toggle[hidden],
#preview[hidden],
#pip-restore[hidden],
#pip-close[hidden] {
  display: none !important;
}

@media (prefers-reduced-motion: reduce) {
  #toggle {
    transition: none;
  }
}
`;
function webComponentScript(base64HTML, startMinimized) {
	return `
(function () {
  try {
    // =========================
    // Host + Shadow
    // =========================
    const host = document.querySelector('nuxt-error-overlay');
    if (!host)
      return;
    const shadow = host.attachShadow({ mode: 'open' });

    // =========================
    // DOM helpers
    // =========================
    const el = (tag) => document.createElement(tag);
    const on = (node, type, fn, opts) => node.addEventListener(type, fn, opts);
    const hide = (node, v) => node.toggleAttribute('hidden', !!v);
    const setVar = (name, value) => host.style.setProperty(name, value);
    const unsetVar = (name) => host.style.removeProperty(name);

    // =========================
    // Create DOM
    // =========================
    const style = el('style');
    style.textContent = ${JSON.stringify(errorCSS)};

    const iframe = el('iframe');
    iframe.id = 'frame';
    iframe.src = 'data:text/html;base64,${base64HTML}';
    iframe.title = 'Detailed error stack trace';
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-top-navigation-by-user-activation');

    const preview = el('div');
    preview.id = 'preview';

    const toggle = el('div');
    toggle.id = 'toggle';
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('tabindex', '0');
    toggle.innerHTML = '<span class="sr-only">Toggle detailed error view</span>';

    const liveRegion = el('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.className = 'sr-only';

    const pipCloseButton = el('button');
    pipCloseButton.id = 'pip-close';
    pipCloseButton.setAttribute('type', 'button');
    pipCloseButton.setAttribute('aria-label', 'Hide error preview overlay');
    pipCloseButton.innerHTML = '&times;';
    pipCloseButton.hidden = true;
    toggle.appendChild(pipCloseButton);

    const pipRestoreButton = el('button');
    pipRestoreButton.id = 'pip-restore';
    pipRestoreButton.setAttribute('type', 'button');
    pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
    pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
    pipRestoreButton.hidden = true;

    // Order matters: #frame + #preview adjacency
    shadow.appendChild(style);
    shadow.appendChild(liveRegion);
    shadow.appendChild(iframe);
    shadow.appendChild(preview);
    shadow.appendChild(toggle);
    shadow.appendChild(pipRestoreButton);

    // =========================
    // Constants / keys
    // =========================
    const POS_KEYS = {
      position: 'nuxt-error-overlay:position',
      hiddenPretty: 'nuxt-error-overlay:error-pip:hidden',
      hiddenPreview: 'nuxt-error-overlay:app-preview:hidden'
    };

    const CSS_VARS = {
      pip: {
        left: '--error-pip-left',
        top: '--error-pip-top',
        right: '--error-pip-right',
        bottom: '--error-pip-bottom'
      },
      preview: {
        left: '--app-preview-left',
        top: '--app-preview-top',
        right: '--app-preview-right',
        bottom: '--app-preview-bottom'
      }
    };

    const MIN_GAP = 5;
    const DRAG_THRESHOLD = 2;

    // =========================
    // Local storage safe access + state
    // =========================
    let storageReady = true;
    let isPrettyHidden = false;
    let isPreviewHidden = false;

    const safeGet = (k) => {
      try {
        return localStorage.getItem(k);
      } catch {
        return null;
      }
    };

    const safeSet = (k, v) => {
      if (!storageReady) 
        return;
      try {
        localStorage.setItem(k, v);
      } catch {}
    };

    // =========================
    // Sizing helpers
    // =========================
    const vvSize = () => {
      const v = window.visualViewport;
      return v ? { w: v.width, h: v.height } : { w: window.innerWidth, h: window.innerHeight };
    };

    const previewSize = () => {
      const styles = getComputedStyle(host);
      const w = parseFloat(styles.getPropertyValue('--preview-width')) || 240;
      const h = parseFloat(styles.getPropertyValue('--preview-height')) || 180;
      return { w, h };
    };

    const sizeForTarget = (target) => {
      if (!target)
        return previewSize();
      const rect = target.getBoundingClientRect();
      if (rect.width && rect.height)
        return { w: rect.width, h: rect.height };
      return previewSize();
    };

    // =========================
    // Dock model + offset/alignment calculations
    // =========================
    const dock = { edge: null, offset: null, align: null, gap: null };

    const maxOffsetFor = (edge, size) => {
      const vv = vvSize();
      if (edge === 'left' || edge === 'right')
        return Math.max(MIN_GAP, vv.h - size.h - MIN_GAP);
      return Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
    };

    const clampOffset = (edge, value, size) => {
      const max = maxOffsetFor(edge, size);
      return Math.min(Math.max(value, MIN_GAP), max);
    };

    const updateDockAlignment = (size) => {
      if (!dock.edge || dock.offset == null)
        return;
      const max = maxOffsetFor(dock.edge, size);
      if (dock.offset <= max / 2) {
        dock.align = 'start';
        dock.gap = dock.offset;
      } else {
        dock.align = 'end';
        dock.gap = Math.max(0, max - dock.offset);
      }
    };

    const appliedOffsetFor = (size) => {
      if (!dock.edge || dock.offset == null)
        return null;
      const max = maxOffsetFor(dock.edge, size);

      if (dock.align === 'end' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, max - dock.gap, size);
      }
      if (dock.align === 'start' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, dock.gap, size);
      }
      return clampOffset(dock.edge, dock.offset, size);
    };

    const nearestEdgeAt = (x, y) => {
      const { w, h } = vvSize();
      const d = { left: x, right: w - x, top: y, bottom: h - y };
      return Object.keys(d).reduce((a, b) => (d[a] < d[b] ? a : b));
    };

    const cornerDefaultDock = () => {
      const vv = vvSize();
      const size = previewSize();
      const offset = Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
      return { edge: 'bottom', offset };
    };

    const currentTransformOrigin = () => {
      if (!dock.edge) return null;
      if (dock.edge === 'left' || dock.edge === 'top')
        return 'top left';
      if (dock.edge === 'right')
        return 'top right';
      return 'bottom left';
    };

    // =========================
    // Persist / load dock
    // =========================
    const loadDock = () => {
      const raw = safeGet(POS_KEYS.position);
      if (!raw)
        return;
      try {
        const parsed = JSON.parse(raw);
        const { edge, offset, align, gap } = parsed || {};
        if (!['left', 'right', 'top', 'bottom'].includes(edge))
          return;
        if (typeof offset !== 'number')
          return;

        dock.edge = edge;
        dock.offset = clampOffset(edge, offset, previewSize());
        dock.align = align === 'start' || align === 'end' ? align : null;
        dock.gap = typeof gap === 'number' ? gap : null;

        if (!dock.align || dock.gap == null)
          updateDockAlignment(previewSize());
      } catch {}
    };

    const persistDock = () => {
      if (!dock.edge || dock.offset == null)
        return; 
      safeSet(POS_KEYS.position, JSON.stringify({
        edge: dock.edge,
        offset: dock.offset,
        align: dock.align,
        gap: dock.gap
      }));
    };

    // =========================
    // Apply dock
    // =========================
    const dockToVars = (vars) => ({
      set: (side, v) => host.style.setProperty(vars[side], v),
      clear: (side) => host.style.removeProperty(vars[side])
    });

    const dockToEl = (node) => ({
      set: (side, v) => { node.style[side] = v; },
      clear: (side) => { node.style[side] = ''; }
    });

    const applyDock = (target, size, opts) => {
      if (!dock.edge || dock.offset == null) {
        target.clear('left');
        target.clear('top');
        target.clear('right');
        target.clear('bottom');
        return;
      }

      target.set('left', 'auto');
      target.set('top', 'auto');
      target.set('right', 'auto');
      target.set('bottom', 'auto');

      const applied = appliedOffsetFor(size);

      if (dock.edge === 'left') {
        target.set('left', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'right') {
        target.set('right', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'top') {
        target.set('top', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      } else {
        target.set('bottom', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      }

      if (!opts || opts.persist !== false)
        persistDock();
    };

    const applyDockAll = (opts) => {
      applyDock(dockToVars(CSS_VARS.pip), previewSize(), opts);
      applyDock(dockToVars(CSS_VARS.preview), previewSize(), opts);
      applyDock(dockToEl(pipRestoreButton), sizeForTarget(pipRestoreButton), opts);
    };

    const repaintToDock = () => {
      if (!dock.edge || dock.offset == null)
        return;
      const origin = currentTransformOrigin();
      if (origin)
        setVar('--error-pip-origin', origin);
      else 
        unsetVar('--error-pip-origin');
      applyDockAll({ persist: false });
    };

    // =========================
    // Hidden state + UI
    // =========================
    const loadHidden = () => {
      const rawPretty = safeGet(POS_KEYS.hiddenPretty);
      if (rawPretty != null)
        isPrettyHidden = rawPretty === '1' || rawPretty === 'true';
      const rawPreview = safeGet(POS_KEYS.hiddenPreview);
      if (rawPreview != null)
        isPreviewHidden = rawPreview === '1' || rawPreview === 'true';
    };

    const setPrettyHidden = (v) => {
      isPrettyHidden = !!v;
      safeSet(POS_KEYS.hiddenPretty, isPrettyHidden ? '1' : '0');
      updateUI();
    };

    const setPreviewHidden = (v) => {
      isPreviewHidden = !!v;
      safeSet(POS_KEYS.hiddenPreview, isPreviewHidden ? '1' : '0');
      updateUI();
    };

    const isMinimized = () => iframe.hasAttribute('inert');

    const setMinimized = (v) => {
      if (v) {
        iframe.setAttribute('inert', '');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        iframe.removeAttribute('inert');
        toggle.setAttribute('aria-expanded', 'true');
      }
    };

    const setRestoreLabel = (kind) => {
      if (kind === 'pretty') {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
      } else {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error page</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error page');
      }
    };

    const updateUI = () => {
      const minimized = isMinimized();
      const showPiP = minimized && !isPrettyHidden;
      const showPreview = !minimized && !isPreviewHidden;
      const pipHiddenByUser = minimized && isPrettyHidden;
      const previewHiddenByUser = !minimized && isPreviewHidden;
      const showToggle = minimized ? showPiP : showPreview;
      const showRestore = pipHiddenByUser || previewHiddenByUser;

      hide(iframe, pipHiddenByUser);
      hide(preview, !showPreview);
      hide(toggle, !showToggle);
      hide(pipCloseButton, !showToggle);
      hide(pipRestoreButton, !showRestore);

      pipCloseButton.setAttribute('aria-label', minimized ? 'Hide error overlay' : 'Hide error page preview');

      if (pipHiddenByUser)
        setRestoreLabel('pretty');
      else if (previewHiddenByUser)
        setRestoreLabel('preview');

      host.classList.toggle('pip-hidden', isPrettyHidden);
      host.classList.toggle('preview-hidden', isPreviewHidden);
    };

    // =========================
    // Preview snapshot
    // =========================
    const updatePreview = () => {
      try {
        let previewIframe = preview.querySelector('iframe');
        if (!previewIframe) {
          previewIframe = el('iframe');
          previewIframe.style.cssText = 'width: 1200px; height: 900px; transform: scale(0.2); transform-origin: top left; border: none;';
          previewIframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
          preview.appendChild(previewIframe);
        }

        const doctype = document.doctype ? '<!DOCTYPE ' + document.doctype.name + '>' : '';
        const cleanedHTML = document.documentElement.outerHTML
          .replace(/<nuxt-error-overlay[^>]*>.*?<\\/nuxt-error-overlay>/gs, '')
          .replace(/<script[^>]*>.*?<\\/script>/gs, '');

        const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(doctype + cleanedHTML);
        iframeDoc.close();
      } catch (err) {
        console.error('Failed to update preview:', err);
      }
    };

    // =========================
    // View toggling
    // =========================
    const toggleView = () => {
      if (isMinimized()) {
        updatePreview();
        setMinimized(false);
        liveRegion.textContent = 'Showing detailed error view';
        setTimeout(() => { 
          try { 
            iframe.contentWindow.focus();
          } catch {}
        }, 100);
      } else {
        setMinimized(true);
        liveRegion.textContent = 'Showing error page';
        repaintToDock();
        void iframe.offsetWidth;
      }
      updateUI();
    };

    // =========================
    // Dragging (unified, rAF throttled)
    // =========================
    let drag = null;
    let rafId = null;
    let suppressToggleClick = false;
    let suppressRestoreClick = false;

    const beginDrag = (e) => {
      if (drag) 
        return;

      if (!dock.edge || dock.offset == null) {
        const def = cornerDefaultDock();
        dock.edge = def.edge;
        dock.offset = def.offset;
        updateDockAlignment(previewSize());
      }

      const isRestoreTarget = e.currentTarget === pipRestoreButton;

      drag = {
        kind: isRestoreTarget ? 'restore' : (isMinimized() ? 'pip' : 'preview'),
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        lastX: e.clientX,
        lastY: e.clientY,
        moved: false,
        target: e.currentTarget
      };

      drag.target.setPointerCapture(e.pointerId);

      if (drag.kind === 'restore')
        host.classList.add('dragging-restore');
      else 
        host.classList.add(drag.kind === 'pip' ? 'dragging' : 'dragging-preview');

      e.preventDefault();
    };

    const moveDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      drag.lastX = e.clientX;
      drag.lastY = e.clientY;
      
      const dx = drag.lastX - drag.startX;
      const dy = drag.lastY - drag.startY;

      if (!drag.moved && (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD)) {
        drag.moved = true;
      }

      if (!drag.moved)
        return;
      if (rafId)
        return;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        const edge = nearestEdgeAt(drag.lastX, drag.lastY);
        const size = sizeForTarget(drag.target);

        let offset;
        if (edge === 'left' || edge === 'right') {
          const top = drag.lastY - (size.h / 2);
          offset = clampOffset(edge, Math.round(top), size);
        } else {
          const left = drag.lastX - (size.w / 2);
          offset = clampOffset(edge, Math.round(left), size);
        }

        dock.edge = edge;
        dock.offset = offset;
        updateDockAlignment(size);

        const origin = currentTransformOrigin();
        setVar('--error-pip-origin', origin || 'bottom right');

        applyDockAll({ persist: false });
      });
    };

    const endDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      const endedKind = drag.kind;
      drag.target.releasePointerCapture(e.pointerId);

      if (endedKind === 'restore')
        host.classList.remove('dragging-restore');
      else 
        host.classList.remove(endedKind === 'pip' ? 'dragging' : 'dragging-preview');

      const didMove = drag.moved;
      drag = null;

      if (didMove) {
        persistDock();
        if (endedKind === 'restore')
          suppressRestoreClick = true;
        else 
          suppressToggleClick = true;
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const bindDragTarget = (node) => {
      on(node, 'pointerdown', beginDrag);
      on(node, 'pointermove', moveDrag);
      on(node, 'pointerup', endDrag);
      on(node, 'pointercancel', endDrag);
    };

    bindDragTarget(toggle);
    bindDragTarget(pipRestoreButton);

    // =========================
    // Events (toggle / close / restore)
    // =========================
    on(toggle, 'click', (e) => {
      if (suppressToggleClick) {
        e.preventDefault();
        suppressToggleClick = false;
        return;
      }
      toggleView();
    });

    on(toggle, 'keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleView();
      }
    });

    on(pipCloseButton, 'click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized())
        setPrettyHidden(true);
      else
        setPreviewHidden(true);
    });

    on(pipCloseButton, 'pointerdown', (e) => {
      e.stopPropagation();
    });

    on(pipRestoreButton, 'click', (e) => {
      if (suppressRestoreClick) {
        e.preventDefault();
        suppressRestoreClick = false;
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized()) 
        setPrettyHidden(false);
      else 
        setPreviewHidden(false);
    });

    // =========================
    // Lifecycle: load / sync / repaint
    // =========================
    const loadState = () => {
      loadDock();
      loadHidden();

      if (isPrettyHidden && !isMinimized())
        setMinimized(true);

      updateUI();
      repaintToDock();
    };

    loadState();

    on(window, 'storage-ready', () => {
      storageReady = true;
      loadState();
    });

    const onViewportChange = () => repaintToDock();

    on(window, 'resize', onViewportChange);

    if (window.visualViewport) {
      on(window.visualViewport, 'resize', onViewportChange);
      on(window.visualViewport, 'scroll', onViewportChange);
    }

    // initial preview
    setTimeout(updatePreview, 100);

    // initial minimized option
    if (${startMinimized}) {
      setMinimized(true);
      repaintToDock();
      void iframe.offsetWidth;
      updateUI();
    }
  } catch (err) {
    console.error('Failed to initialize Nuxt error overlay:', err);
  }
})();
`;
}
function generateErrorOverlayHTML(html, options) {
	const nonce = Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, "0")).join("");
	const errorPage = html.replace("<head>", `<head><script>${iframeStorageBridge(nonce)}<\/script>`);
	const base64HTML = Buffer.from(errorPage, "utf8").toString("base64");
	return `
    <script>${parentStorageBridge(nonce)}<\/script>
    <nuxt-error-overlay></nuxt-error-overlay>
    <script>${webComponentScript(base64HTML, options?.startMinimized ?? false)}<\/script>
  `;
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
	if (event.handled || isJsonRequest(event)) {
		
		return;
	}
	
	const defaultRes = await defaultHandler(error, event, { json: true });
	
	const status = error.status || error.statusCode || 500;
	if (status === 404 && defaultRes.status === 302) {
		setResponseHeaders(event, defaultRes.headers);
		setResponseStatus(event, defaultRes.status, defaultRes.statusText);
		return send(event, JSON.stringify(defaultRes.body, null, 2));
	}
	if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
		
		defaultRes.body.stack = defaultRes.body.stack.join("\n");
	}
	const errorObject = defaultRes.body;
	
	const url = new URL(errorObject.url);
	errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
	
	errorObject.message = error.unhandled ? errorObject.message || "Server Error" : error.message || errorObject.message || "Server Error";
	
	errorObject.data ||= error.data;
	errorObject.statusText ||= error.statusText || error.statusMessage;
	delete defaultRes.headers["content-type"];
	delete defaultRes.headers["content-security-policy"];
	setResponseHeaders(event, defaultRes.headers);
	
	const reqHeaders = getRequestHeaders(event);
	
	const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
	
	const res = isRenderingError ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject), {
		headers: {
			...reqHeaders,
			"x-nuxt-error": "true"
		},
		redirect: "manual"
	}).catch(() => null);
	if (event.handled) {
		return;
	}
	
	if (!res) {
		const { template } = await Promise.resolve().then(function () { return error500; });
		{
			
			errorObject.description = errorObject.message;
		}
		setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
		return send(event, template(errorObject));
	}
	const html = await res.text();
	for (const [header, value] of res.headers.entries()) {
		if (header === "set-cookie") {
			appendResponseHeader(event, header, value);
			continue;
		}
		setResponseHeader(event, header, value);
	}
	setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
	if (!globalThis._importMeta_.test && typeof html === "string") {
		const prettyResponse = await defaultHandler(error, event, { json: false });
		if (typeof prettyResponse.body === "string") {
			return send(event, html.replace("</body>", `${generateErrorOverlayHTML(prettyResponse.body, { startMinimized: 300 <= status && status < 500 })}</body>`));
		}
	}
	return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json ?? !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _9asCNLlq8BadaY8pW_XVj4YouE5SwlOSbuZyUnAu98 = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const rootDir = "/Users/mdreesen/Documents/Programming/business-projects/autodash";

const appHead = {"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"}],"link":[],"style":[],"script":[],"noscript":[]};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appSpaLoaderTag = "div";

const appSpaLoaderAttrs = {"id":"__nuxt-loader"};

const appId = "nuxt-app";

const devReducers = {
	VNode: (data) => isVNode(data) ? {
		type: data.type,
		props: data.props
	} : undefined,
	URL: (data) => data instanceof URL ? data.toString() : undefined,
	Symbol: (data) => typeof data === "symbol" ? data.description ?? "" : undefined
};
const asyncContext = getContext("nuxt-dev", {
	asyncContext: true,
	AsyncLocalStorage
});
const _jv22zaODePiDNTIC0UqWY7BqaTBXQWV6bdUcr_ewg = (nitroApp) => {
	const handler = nitroApp.h3App.handler;
	nitroApp.h3App.handler = (event) => {
		return asyncContext.callAsync({
			logs: [],
			event
		}, () => handler(event));
	};
	onConsoleLog((_log) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		const rawStack = captureRawStackTrace();
		if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
			return;
		}
		const trace = [];
		let filename = "";
		for (const entry of parseRawStackTrace(rawStack)) {
			if (entry.source === globalThis._importMeta_.url) {
				continue;
			}
			if (EXCLUDE_TRACE_RE.test(entry.source)) {
				continue;
			}
			filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
			trace.push({
				...entry,
				source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
			});
		}
		const log = {
			..._log,
			
			filename,
			
			stack: trace
		};
		
		ctx.logs.push(log);
	});
	nitroApp.hooks.hook("afterResponse", () => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		return nitroApp.hooks.callHook("dev:ssr-logs", {
			logs: ctx.logs,
			path: ctx.event.path
		});
	});
	
	nitroApp.hooks.hook("render:html", (htmlContext) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		try {
			const reducers = Object.assign(Object.create(null), devReducers, ctx.event.context["~payloadReducers"]);
			htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
		} catch (e) {
			const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
			console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/4.x/api/composables/use-nuxt-app#payload.`);
		}
	});
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
	consola$1.addReporter({ log(logObj) {
		callback(logObj);
	} });
	consola$1.wrapConsole();
}

function defineNitroPlugin(def) {
  return def;
}

const _PH8GSJK0anC4vq6gGL2GtrgXrnJTWU3_DzXwsYs4RAo = defineNitroPlugin(async (nitroApp) => {
  const config = useRuntimeConfig();
  const uri = config.mongodbUri || process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/autodash";
  try {
    await mongoose.connect(uri, {
      maxPoolSize: 10,
      // Allows up to 10 parallel queries to run at once
      serverSelectionTimeoutMS: 5e3,
      socketTimeoutMS: 45e3
    });
    console.log("\u{1F680} [Database Core] Global MongoDB connection pool initialized successfully.");
  } catch (error) {
    console.error("\u274C [Database Core] Critical fault initializing global MongoDB pool:", error);
  }
  nitroApp.hooks.hook("close", async () => {
    await mongoose.disconnect();
    console.log("\u{1F4E1} [Database Core] Global MongoDB connection pool closed cleanly.");
  });
});

const plugins = [
  _9asCNLlq8BadaY8pW_XVj4YouE5SwlOSbuZyUnAu98,
_jv22zaODePiDNTIC0UqWY7BqaTBXQWV6bdUcr_ewg,
_PH8GSJK0anC4vq6gGL2GtrgXrnJTWU3_DzXwsYs4RAo,
_wH6JrtIxmaSoA8lCPWFnE9z4lQeXW6H5z3l5aymEQw
];

const assets = {
  "/index.mjs": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"26b93-Nt7XS7LWj5Tn0fqbuaAqlKncyUs\"",
    "mtime": "2026-06-02T20:59:41.880Z",
    "size": 158611,
    "path": "index.mjs"
  },
  "/index.mjs.map": {
    "type": "application/json",
    "etag": "\"926ec-fANyUfsA3kMX3BsuJVGqpwG3Ieo\"",
    "mtime": "2026-06-02T20:59:41.890Z",
    "size": 599788,
    "path": "index.mjs.map"
  }
};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _2CySE0 = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const SESSION_SECRET = process.env.SESSION_SECRET || "a_secure_32_character_minimum_password_token";
const COOKIE_NAME = "autodash_session";
const _WPzoNn = defineEventHandler(async (event) => {
  const cookies = parseCookies(event);
  const sessionCookie = cookies[COOKIE_NAME];
  event.context.user = null;
  if (sessionCookie) {
    try {
      const decryptedUser = await unsealData(sessionCookie, {
        password: SESSION_SECRET
      });
      if (decryptedUser) {
        event.context.user = decryptedUser;
      }
    } catch (error) {
      console.warn("Session signature invalid or expired. Clearing context.");
    }
  }
});
async function createSession(event, userProfile) {
  const encryptedData = await sealData(userProfile, {
    password: SESSION_SECRET
  });
  setCookie(event, COOKIE_NAME, encryptedData, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30
    // 30 Days expiration footprint
  });
}

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

// @__NO_SIDE_EFFECTS__
function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

function filterIslandProps(props) {
  if (!props) {
    return {};
  }
  const out = {};
  for (const key in props) {
    if (!key.startsWith("data-v-")) {
      out[key] = props[key];
    }
  }
  return out;
}
function computeIslandHash(name, filteredProps, context, source) {
  return hash$1([name, filteredProps, context, source]).replace(/[-_]/g, "");
}

const NUXT_PAYLOAD_INLINE = true;
const NUXT_RUNTIME_PAYLOAD_EXTRACTION = false;

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const unheadOptions = {
  disableDefaults: true,
};

function encodeEventPath(path) {
	const queryIndex = path.indexOf("?");
	if (queryIndex === -1) {
		return encodePath(path);
	}
	return encodePath(path.slice(0, queryIndex)) + path.slice(queryIndex);
}
function createSSRContext(event) {
	const url = encodeEventPath(event.path);
	const ssrContext = {
		url,
		event,
		runtimeConfig: useRuntimeConfig(event),
		noSSR: true,
		head: createHead(unheadOptions),
		error: false,
		nuxt: undefined,
		payload: {},
		["~payloadReducers"]: Object.create(null),
		modules: new Set()
	};
	return ssrContext;
}
function setSSRError(ssrContext, error) {
	ssrContext.error = true;
	ssrContext.payload = { error };
	ssrContext.url = error.url;
}

function buildAssetsDir() {
	
	return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
	return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
	
	const app = useRuntimeConfig().app;
	const publicBase = app.cdnURL || app.baseURL;
	return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__buildAssetsURL = buildAssetsURL;
// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__publicAssetsURL = publicAssetsURL;
const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
// @ts-expect-error file will be produced after app build
const getServerEntry = () => Promise.resolve().then(function () { return server; }).then((r) => r.default || r);
// @ts-expect-error file will be produced after app build
const getClientManifest = () => Promise.resolve().then(function () { return client_manifest$1; }).then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);

const getSSRRenderer = lazyCachedFunction(async () => {
	
	const createSSRApp = await getServerEntry();
	if (!createSSRApp) {
		throw new Error("Server bundle is not available");
	}
	
	const precomputed = undefined ;
	
	const renderer = createRenderer(createSSRApp, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: renderToString$1,
		buildAssetsURL
	});
	async function renderToString$1(input, context) {
		const html = await renderToString(input, context);
		
		
		if (process.env.NUXT_VITE_NODE_OPTIONS) {
			renderer.rendererContext.updateManifest(await getClientManifest());
		}
		return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
	}
	return renderer;
});

const getSPARenderer = lazyCachedFunction(async () => {
	const precomputed = undefined ;
	// @ts-expect-error virtual file
	const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
		{
			const APP_SPA_LOADER_OPEN_TAG = `<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
			const APP_SPA_LOADER_CLOSE_TAG = `</${appSpaLoaderTag}>`;
			const appTemplate = APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG;
			const loaderTemplate = r ? APP_SPA_LOADER_OPEN_TAG + r + APP_SPA_LOADER_CLOSE_TAG : "";
			return appTemplate + loaderTemplate;
		}
	});
	
	const renderer = createRenderer(() => () => {}, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: () => spaTemplate,
		buildAssetsURL
	});
	const result = await renderer.renderToString({});
	const renderToString = (ssrContext) => {
		const config = useRuntimeConfig(ssrContext.event);
		ssrContext.modules ||= new Set();
		ssrContext.payload.serverRendered = false;
		ssrContext.config = {
			public: config.public,
			app: config.app
		};
		return Promise.resolve(result);
	};
	return {
		rendererContext: renderer.rendererContext,
		renderToString
	};
});
function lazyCachedFunction(fn) {
	let res = null;
	return () => {
		if (res === null) {
			res = fn().catch((err) => {
				res = null;
				throw err;
			});
		}
		return res;
	};
}
function getRenderer(ssrContext) {
	return getSPARenderer() ;
}
// @ts-expect-error file will be produced after app build
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

async function renderInlineStyles(usedModules) {
	const styleMap = await getSSRStyles();
	const inlinedStyles = new Set();
	for (const mod of usedModules) {
		if (mod in styleMap && styleMap[mod]) {
			for (const style of await styleMap[mod]()) {
				inlinedStyles.add(style);
			}
		}
	}
	return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

// @ts-expect-error virtual file
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);

function getServerComponentHTML(body) {
	const match = body.match(ROOT_NODE_REGEX);
	return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
		return undefined;
	}
	const response = {};
	for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
		response[name] = {
			...slot,
			fallback: ssrContext.teleports?.[`island-fallback=${name}`]
		};
	}
	return response;
}
function getClientIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
		return undefined;
	}
	const response = {};
	for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
		
		const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
		response[clientUid] = {
			...component,
			html,
			slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
		};
	}
	return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
	const entries = Object.entries(teleports);
	const slots = {};
	for (const [key, value] of entries) {
		const match = key.match(SSR_CLIENT_SLOT_MARKER);
		if (match) {
			const [, id, slot] = match;
			if (!slot || clientUid !== id) {
				continue;
			}
			slots[slot] = value;
		}
	}
	return slots;
}
function replaceIslandTeleports(ssrContext, html) {
	const { teleports, islandContext } = ssrContext;
	if (islandContext || !teleports) {
		return html;
	}
	for (const key in teleports) {
		const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
		if (matchClientComp) {
			const [, uid, clientId] = matchClientComp;
			if (!uid || !clientId) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
			continue;
		}
		const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
		if (matchSlot) {
			const [, uid, slot] = matchSlot;
			if (!uid || !slot) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
		}
	}
	return html;
}

const ISLAND_SUFFIX_RE = /\.json(?:\?.*)?$/;
const handler$1 = defineEventHandler(async (event) => {
	const nitroApp = useNitroApp();
	setResponseHeaders(event, {
		"content-type": "application/json;charset=utf-8",
		"x-powered-by": "Nuxt"
	});
	const islandContext = await getIslandContext(event);
	const ssrContext = {
		...createSSRContext(event),
		islandContext,
		noSSR: false,
		url: islandContext.url
	};
	
	const renderer = await getSSRRenderer();
	const renderResult = await renderer.renderToString(ssrContext).catch(async (err) => {
		if (ssrContext["~renderResponse"] && err?.message === "skipping render") {
			return {};
		}
		await ssrContext.nuxt?.hooks.callHook("app:error", err);
		throw err;
	});
	
	
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult
	});
	if (ssrContext["~renderResponse"]) {
		const response = ssrContext["~renderResponse"];
		if (response.statusCode && response.statusCode >= 400) {
			throw createError({
				statusCode: response.statusCode,
				statusMessage: response.statusMessage
			});
		}
		return returnIslandResponse(event, response);
	}
	
	if (ssrContext.payload?.error) {
		throw ssrContext.payload.error;
	}
	const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	{
		const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
		const link = [];
		for (const resource of Object.values(styles)) {
			
			if ("inline" in getQuery(resource.file)) {
				continue;
			}
			
			
			if (resource.file.includes("scoped") && !resource.file.includes("pages/")) {
				link.push({
					rel: "stylesheet",
					href: renderer.rendererContext.buildAssetsURL(resource.file),
					crossorigin: ""
				});
			}
		}
		if (link.length) {
			ssrContext.head.push({ link }, { mode: "server" });
		}
	}
	const islandHead = {};
	for (const entry of ssrContext.head.entries.values()) {
		
		for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
			const currentValue = islandHead[key];
			if (Array.isArray(currentValue)) {
				currentValue.push(...value);
			} else {
				islandHead[key] = value;
			}
		}
	}
	const islandResponse = {
		id: islandContext.id,
		head: islandHead,
		html: getServerComponentHTML(renderResult.html),
		components: getClientIslandResponse(ssrContext),
		slots: getSlotIslandResponse(ssrContext)
	};
	await nitroApp.hooks.callHook("render:island", islandResponse, {
		event,
		islandContext
	});
	return islandResponse;
});
function returnIslandResponse(event, response) {
	for (const header in response.headers || {}) {
		setResponseHeader(event, header, response.headers[header]);
	}
	if (response.statusCode) {
		setResponseStatus(event, response.statusCode, response.statusMessage);
	}
	return response.body;
}
const ISLAND_PATH_PREFIX = "/__nuxt_island/";
const VALID_COMPONENT_NAME_RE = /^[a-z][\w.-]*$/i;
async function getIslandContext(event) {
	let url = event.path || "";
	url.replace(/\?.*$/, "");
	if (!url.startsWith(ISLAND_PATH_PREFIX)) {
		throw createError({
			statusCode: 400,
			statusMessage: "Invalid island request path"
		});
	}
	const componentParts = url.substring(ISLAND_PATH_PREFIX.length).replace(ISLAND_SUFFIX_RE, "").split("_");
	const hashId = componentParts.length > 1 ? componentParts.pop() : undefined;
	const componentName = componentParts.join("_");
	if (!componentName || !VALID_COMPONENT_NAME_RE.test(componentName)) {
		throw createError({
			statusCode: 400,
			statusMessage: "Invalid island component name"
		});
	}
	const rawContext = event.method === "GET" ? getQuery$1(event) : await readBody(event);
	const rawProps = destr$1(rawContext?.props) || {};
	const filteredProps = filterIslandProps(rawProps);
	
	
	const clientContext = {};
	if (rawContext && typeof rawContext === "object") {
		for (const key in rawContext) {
			if (key !== "props") {
				clientContext[key] = rawContext[key];
			}
		}
	}
	
	
	const expectedHash = computeIslandHash(componentName, filteredProps, clientContext, undefined);
	if (!hashId || hashId !== expectedHash) {
		throw createError({
			statusCode: 400,
			statusMessage: "Invalid island request hash"
		});
	}
	return {
		url: typeof rawContext?.url === "string" ? rawContext.url : "/",
		id: hashId,
		name: componentName,
		props: rawProps,
		slots: {},
		components: {}
	};
}

const _lazy_Vz405A = () => Promise.resolve().then(function () { return login_post$1; });
const _lazy_vHsfFA = () => Promise.resolve().then(function () { return logout_post$1; });
const _lazy_BSCW5h = () => Promise.resolve().then(function () { return me_get$3; });
const _lazy_rVfMzz = () => Promise.resolve().then(function () { return mockLogin_get$1; });
const _lazy_VxJEsV = () => Promise.resolve().then(function () { return signup_post$1; });
const _lazy_jVShMm = () => Promise.resolve().then(function () { return dashboard_get$1; });
const _lazy_V34zil = () => Promise.resolve().then(function () { return index_get$5; });
const _lazy_4LDz9z = () => Promise.resolve().then(function () { return availableOrders_get$1; });
const _lazy_eUOl6G = () => Promise.resolve().then(function () { return fetchJobs_get$1; });
const _lazy_Qy4D5s = () => Promise.resolve().then(function () { return history_get$1; });
const _lazy_8WTohe = () => Promise.resolve().then(function () { return me_get$1; });
const _lazy_rpNvxn = () => Promise.resolve().then(function () { return toggleAvailability_post$1; });
const _lazy_u1kooO = () => Promise.resolve().then(function () { return updateLocation_post$1; });
const _lazy_YBdUi9 = () => Promise.resolve().then(function () { return index_get$3; });
const _lazy_0SxUSI = () => Promise.resolve().then(function () { return status_post$1; });
const _lazy_5tVYRD = () => Promise.resolve().then(function () { return acceptJob_post$1; });
const _lazy_sqFzAA = () => Promise.resolve().then(function () { return accept_post$1; });
const _lazy_hKeC5m = () => Promise.resolve().then(function () { return autoDispatchQuote_post$1; });
const _lazy_VpmoE3 = () => Promise.resolve().then(function () { return calculateRate_post$1; });
const _lazy_3v8rf4 = () => Promise.resolve().then(function () { return completeJob_post$1; });
const _lazy_3a7_l7 = () => Promise.resolve().then(function () { return create_post$1; });
const _lazy_Nm5O2A = () => Promise.resolve().then(function () { return track__id__get$1; });
const _lazy_qcCVQj = () => Promise.resolve().then(function () { return index_get$1; });
const _lazy_NmmIOD = () => Promise.resolve().then(function () { return renderer; });

const handlers = [
  { route: '', handler: _2CySE0, lazy: false, middleware: true, method: undefined },
  { route: '', handler: _WPzoNn, lazy: false, middleware: true, method: undefined },
  { route: '/api/auth/login', handler: _lazy_Vz405A, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/logout', handler: _lazy_vHsfFA, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/me', handler: _lazy_BSCW5h, lazy: true, middleware: false, method: "get" },
  { route: '/api/auth/mock-login', handler: _lazy_rVfMzz, lazy: true, middleware: false, method: "get" },
  { route: '/api/auth/signup', handler: _lazy_VxJEsV, lazy: true, middleware: false, method: "post" },
  { route: '/api/buyer/dashboard', handler: _lazy_jVShMm, lazy: true, middleware: false, method: "get" },
  { route: '/api/buyer/track-order/:id', handler: _lazy_V34zil, lazy: true, middleware: false, method: "get" },
  { route: '/api/driver/available-orders', handler: _lazy_4LDz9z, lazy: true, middleware: false, method: "get" },
  { route: '/api/driver/fetch-jobs', handler: _lazy_eUOl6G, lazy: true, middleware: false, method: "get" },
  { route: '/api/driver/history', handler: _lazy_Qy4D5s, lazy: true, middleware: false, method: "get" },
  { route: '/api/driver/me', handler: _lazy_8WTohe, lazy: true, middleware: false, method: "get" },
  { route: '/api/driver/toggle-availability', handler: _lazy_rpNvxn, lazy: true, middleware: false, method: "post" },
  { route: '/api/driver/update-location', handler: _lazy_u1kooO, lazy: true, middleware: false, method: "post" },
  { route: '/api/orders/:id', handler: _lazy_YBdUi9, lazy: true, middleware: false, method: "get" },
  { route: '/api/orders/:id/status', handler: _lazy_0SxUSI, lazy: true, middleware: false, method: "post" },
  { route: '/api/orders/accept-job', handler: _lazy_5tVYRD, lazy: true, middleware: false, method: "post" },
  { route: '/api/orders/accept', handler: _lazy_sqFzAA, lazy: true, middleware: false, method: "post" },
  { route: '/api/orders/auto-dispatch-quote', handler: _lazy_hKeC5m, lazy: true, middleware: false, method: "post" },
  { route: '/api/orders/calculate-rate', handler: _lazy_VpmoE3, lazy: true, middleware: false, method: "post" },
  { route: '/api/orders/complete-job', handler: _lazy_3v8rf4, lazy: true, middleware: false, method: "post" },
  { route: '/api/orders/create', handler: _lazy_3a7_l7, lazy: true, middleware: false, method: "post" },
  { route: '/api/orders/track-:id', handler: _lazy_Nm5O2A, lazy: true, middleware: false, method: "get" },
  { route: '/api/orders/track/:id', handler: _lazy_qcCVQj, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_NmmIOD, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: handler$1, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_NmmIOD, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const scheduledTasks = false;

const tasks = {
  "lead:reminders": {
          meta: {
            description: undefined,
          },
          resolve: () => import('server/tasks/lead/reminders').then(r => r.default || r),
        }
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

if (!globalThis.crypto) {
  globalThis.crypto = crypto$1.webcrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server$1 = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server$1.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server$1.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server$1.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = {
	"appName": "Nuxt",
	"status": 500,
	"statusText": "Internal server error",
	"description": "This page is temporarily unavailable.",
	"refresh": "Refresh this page"
};
const template$1 = (messages) => {
	messages = {
		..._messages,
		...messages
	};
	return "<!DOCTYPE html><html lang=\"en\"><head><title>" + escapeHtml(messages.status) + " - " + escapeHtml(messages.statusText) + " | " + escapeHtml(messages.appName) + "</title><meta charset=\"utf-8\"><meta content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0\" name=\"viewport\"><script>!function(){const e=document.createElement(\"link\").relList;if(!(e&&e.supports&&e.supports(\"modulepreload\"))){for(const e of document.querySelectorAll('link[rel=\"modulepreload\"]'))r(e);new MutationObserver(e=>{for(const o of e)if(\"childList\"===o.type)for(const e of o.addedNodes)\"LINK\"===e.tagName&&\"modulepreload\"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),\"use-credentials\"===e.crossOrigin?r.credentials=\"include\":\"anonymous\"===e.crossOrigin?r.credentials=\"omit\":r.credentials=\"same-origin\",r}(e);fetch(e.href,r)}}();<\/script><style>*,:after,:before{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color,#e5e7eb)}:after,:before{--un-content:\"\"}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.grid{display:grid}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.text-center{text-align:center}.text-\\[80px\\]{font-size:80px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-\\[\\#020420\\]{--un-text-opacity:1;color:rgb(2 4 32/var(--un-text-opacity))}.text-\\[\\#64748B\\]{--un-text-opacity:1;color:rgb(100 116 139/var(--un-text-opacity))}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-\\[\\#020420\\]{--un-bg-opacity:1;background-color:rgb(2 4 32/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(min-width:640px){.sm\\:text-\\[110px\\]{font-size:110px}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}</style></head><body class=\"antialiased bg-white dark:bg-[#020420] dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-[#020420] tracking-wide\"><div class=\"max-w-520px text-center\"><h1 class=\"font-semibold leading-none mb-4 sm:text-[110px] tabular-nums text-[80px]\">" + escapeHtml(messages.status) + "</h1><h2 class=\"font-semibold mb-2 sm:text-3xl text-2xl\">" + escapeHtml(messages.statusText) + "</h2><p class=\"mb-4 px-2 text-[#64748B] text-md\">" + escapeHtml(messages.description) + "</p></div></body></html>";
};

const error500 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template$1
}, Symbol.toStringTag, { value: 'Module' }));

const server = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: viteNodeEntry_mjs
}, Symbol.toStringTag, { value: 'Module' }));

const client_manifest = () => viteNodeFetch.getManifest();

const client_manifest$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: client_manifest
}, Symbol.toStringTag, { value: 'Module' }));

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template
}, Symbol.toStringTag, { value: 'Module' }));

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: styles
}, Symbol.toStringTag, { value: 'Module' }));

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ["buyer", "driver", "admin"],
    default: "buyer"
  },
  // Driver Specific Metrics (Defaults to inactive for buyers)
  isAvailable: {
    type: Boolean,
    default: false
  },
  // Fully Validated GeoJSON Block
  currentLocation: {
    type: {
      type: String,
      enum: ["Point"],
      // Enforces strict GeoJSON compliance
      default: "Point",
      required: true
    },
    coordinates: {
      type: [Number],
      default: [-114.2846, 48.2231],
      // Default regional fallback coordinates (longitude first!)
      required: true
    }
  }
}, {
  timestamps: true
});
userSchema.index({ "currentLocation.coordinates": "2dsphere" });
const UserImport = mongoose.models.User || mongoose.model("User", userSchema);

const User$7 = UserImport;
const login_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;
  if (!email || !password) {
    throw createError({ statusCode: 400, message: "Credentials missing." });
  }
  try {
    const user = await User$7.findOne({ email });
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

const login_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: login_post
}, Symbol.toStringTag, { value: 'Module' }));

const logout_post = defineEventHandler((event) => {
  deleteCookie(event, "autodash_session");
  return { success: true, message: "Session vector destroyed." };
});

const logout_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: logout_post
}, Symbol.toStringTag, { value: 'Module' }));

const me_get$2 = defineEventHandler((event) => {
  return {
    user: event.context.user || null
  };
});

const me_get$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: me_get$2
}, Symbol.toStringTag, { value: 'Module' }));

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

const mockLogin_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: mockLogin_get
}, Symbol.toStringTag, { value: 'Module' }));

const { MONGODB_URI } = process.env;
const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(MONGODB_URI);
    if (connection.readyState === 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

const User$6 = UserImport;
const signup_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, password, role } = body;
  if (!name || !email || !password || !role) {
    throw createError({ statusCode: 400, message: "All registration parameters are required." });
  }
  try {
    await connectDB();
    const existingUser = await User$6.findOne({ email });
    if (existingUser) {
      throw createError({ statusCode: 409, message: "An account with this email already exists." });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User$6.create({
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

const signup_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: signup_post
}, Symbol.toStringTag, { value: 'Module' }));

const partsOrderSchema = new Schema({
  // 1. Relational Actors
  buyerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true
  },
  driverId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    default: null,
    // Null until a nearby driver explicitly accepts the gig
    index: true
  },
  // 2. Target Vehicle Spec Data
  vehicle: {
    year: { type: Number, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true }
  },
  // 3. Commercial Supplier Parameters
  supplier: {
    storeName: {
      type: String,
      required: true,
      enum: ["O'Reilly Auto Parts", "NAPA Auto Parts", "AutoZone", "Advance Auto Parts", "Independent"]
    },
    storeAddress: { type: String, required: true },
    commercialOrderNumber: {
      type: String,
      required: true,
      uppercase: true,
      trim: true
    }
  },
  // 4. Manifest Inventory Payload
  manifestText: {
    type: String,
    required: true
  },
  // Line-by-line item details or memo entries
  // 5. Geolocation Routing Specifications
  deliveryLocation: {
    address: { type: String, required: true },
    bayInstructions: { type: String, default: "" },
    // GeoJSON Point format for distance mapping calculations
    geoPoint: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point"
      },
      coordinates: {
        type: [Number],
        // [longitude, latitude]
        required: true
      }
    }
  },
  // 6. Workflow Lifecycle States
  status: {
    type: String,
    required: true,
    enum: ["placed", "accepted", "picking-up", "in-transit", "delivered", "cancelled"],
    default: "placed",
    index: true
  },
  // 7. Financial Ledger Bookkeeping
  pricing: {
    deliveryFee: { type: Number, required: true },
    // Total amount charged to the buyer
    driverPayout: { type: Number, required: true },
    // The driver's cut (e.g., 85% of delivery fee)
    platformCut: { type: Number, required: true }
    // Your transaction commission fee (e.g., 15%)
  },
  // 8. Order Tracking Timestamps
  acceptedAt: { type: Date, default: null },
  pickedUpAt: { type: Date, default: null },
  deliveredAt: { type: Date, default: null }
}, {
  timestamps: true
  // Auto-manages createdAt and updatedAt properties
});
partsOrderSchema.index({ "deliveryLocation.geoPoint": "2dsphere" });
const PartsOrderImport = mongoose.models.PartsOrder || mongoose.model("PartsOrder", partsOrderSchema);

const PartsOrder$d = PartsOrderImport;
const dashboard_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g;
  try {
    const allOrders = await PartsOrder$d.find().sort({ createdAt: -1 }).lean();
    const liveDispatches = [];
    const pastDeliveries = [];
    for (const order of allOrders) {
      const rawStore = (((_a = order.supplier) == null ? void 0 : _a.storeName) || "").toLowerCase();
      let cleanStoreName = "AutoZone Auto Parts";
      if (rawStore.includes("oreilly")) cleanStoreName = "O'Reilly Auto Parts";
      if (rawStore.includes("napa")) cleanStoreName = "NAPA Auto Parts";
      const formattedOrder = {
        _id: order._id.toString(),
        timestamp: order.createdAt || /* @__PURE__ */ new Date(),
        supplierName: cleanStoreName,
        partsManifest: order.manifestText || "Commercial Components",
        vehicleInfo: `${((_b = order.vehicle) == null ? void 0 : _b.year) || ""} ${((_c = order.vehicle) == null ? void 0 : _c.make) || ""} ${((_d = order.vehicle) == null ? void 0 : _d.model) || "Fleet Unit"}`.trim(),
        totalCost: ((_e = order.pricing) == null ? void 0 : _e.total) || ((_f = order.pricing) == null ? void 0 : _f.deliveryFee) || 24.5,
        status: order.status || "placed",
        bayInstructions: ((_g = order.deliveryLocation) == null ? void 0 : _g.bayInstructions) || "Main Repair Bay"
      };
      if (order.status === "placed" || order.status === "accepted") {
        liveDispatches.push(formattedOrder);
      } else if (order.status === "completed") {
        pastDeliveries.push(formattedOrder);
      }
    }
    return {
      success: true,
      live: liveDispatches,
      history: pastDeliveries
    };
  } catch (error) {
    console.error("\u274C Failed to compile buyer fleet matrix:", error);
    throw createError({
      statusCode: 500,
      message: error.message || "Internal fleet processing database fault."
    });
  }
});

const dashboard_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dashboard_get
}, Symbol.toStringTag, { value: 'Module' }));

const PartsOrder$c = PartsOrderImport;
const User$5 = UserImport;
const index_get$4 = defineEventHandler(async (event) => {
  var _a;
  const user = event.context.user;
  const orderId = getRouterParam(event, "id");
  if (!(user == null ? void 0 : user._id)) {
    throw createError({ statusCode: 401, message: "Authentication missing." });
  }
  try {
    const order = await PartsOrder$c.findById(orderId).lean();
    if (!order) {
      throw createError({ statusCode: 404, message: "Order manifest not found." });
    }
    if (order.buyerId.toString() !== user._id && user.role !== "admin") {
      throw createError({ statusCode: 403, message: "Unauthorized tracking vector match." });
    }
    let driverCoordinates = null;
    let driverName = "Searching for nearest driver...";
    if (order.driverId) {
      const assignedDriver = await User$5.findById(order.driverId).select("name currentLocation").lean();
      if (assignedDriver) {
        driverName = assignedDriver.name;
        if ((_a = assignedDriver.currentLocation) == null ? void 0 : _a.coordinates) {
          driverCoordinates = assignedDriver.currentLocation.coordinates;
        }
      }
    }
    return {
      success: true,
      status: order.status,
      supplierName: order.supplier.storeName,
      deliveryAddress: order.deliveryLocation.address,
      manifestSummary: order.manifestText,
      driverProfile: {
        name: driverName,
        coordinates: driverCoordinates
        // Sends [longitude, latitude] to frontend map renders
      }
    };
  } catch (error) {
    console.error("Buyer tracking query faulted:", error);
    throw createError({ statusCode: 500, message: "Failed to synchronize tracking feed." });
  }
});

const index_get$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_get$4
}, Symbol.toStringTag, { value: 'Module' }));

const PartsOrder$b = PartsOrderImport;
const availableOrders_get = defineEventHandler(async (event) => {
  const user = event.context.user;
  if (!(user == null ? void 0 : user._id) || user.role !== "driver") {
    throw createError({
      statusCode: 403,
      message: "Access denied. Authorized fleet couriers only."
    });
  }
  try {
    const openOrders = await PartsOrder$b.find({ status: "placed" }).sort({ createdAt: -1 }).populate("buyerId", "name").lean();
    return {
      success: true,
      orders: openOrders
    };
  } catch (error) {
    console.error("Failed to stream active dispatch vector:", error);
    throw createError({
      statusCode: 500,
      message: "Error fetching open market order catalog."
    });
  }
});

const availableOrders_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: availableOrders_get
}, Symbol.toStringTag, { value: 'Module' }));

const PartsOrder$a = PartsOrderImport;
const fetchJobs_get = defineEventHandler(async (event) => {
  try {
    const activeOffers = await PartsOrder$a.find({
      status: "placed",
      driverId: null
    }).sort({ createdAt: -1 }).lean();
    console.log(`\u{1F4E1} [Radar Engine] Live database query found ${activeOffers.length} unassigned orders.`);
    const formattedOrders = activeOffers.map((order) => {
      var _a, _b;
      const deliveryFee = ((_a = order.pricing) == null ? void 0 : _a.deliveryFee) || 14.5;
      const BASE_FEE = 7;
      const PER_MILE_RATE = 1.5;
      const calculatedDistance = (deliveryFee - BASE_FEE) / PER_MILE_RATE;
      const rawStoreName = (((_b = order.supplier) == null ? void 0 : _b.storeName) || "").toLowerCase();
      let readableStoreName = "AutoZone Auto Parts";
      if (rawStoreName.includes("oreilly") || rawStoreName.includes("o'reilly")) {
        readableStoreName = "O'Reilly Auto Parts";
      } else if (rawStoreName.includes("napa")) {
        readableStoreName = "NAPA Auto Parts";
      }
      const locationBlock = order.deliveryLocation || {};
      const destinationTitle = locationBlock.bayInstructions || "Commercial Fleet Workshop";
      return {
        _id: order._id.toString(),
        // Coerces ObjectId to flat string for clean Vue tracking keys
        nearestSupplier: readableStoreName,
        destination: {
          name: destinationTitle,
          // 🔥 Explicitly matches your dashboard layout card loop!
          address: locationBlock.address || "Address Not Specified"
        },
        distanceMiles: calculatedDistance > 0 ? Math.round(calculatedDistance * 10) / 10 : 3.2,
        pricing: deliveryFee,
        status: order.status
      };
    });
    return {
      success: true,
      orders: formattedOrders
    };
  } catch (error) {
    console.error("\u274C Driver job board sync broken:", error);
    return {
      success: false,
      orders: [],
      message: error.message || "Internal pipeline validation fault."
    };
  }
});

const fetchJobs_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: fetchJobs_get
}, Symbol.toStringTag, { value: 'Module' }));

const PartsOrder$9 = PartsOrderImport;
const history_get = defineEventHandler(async (event) => {
  const user = event.context.user;
  const driverId = (user == null ? void 0 : user._id) || new mongoose.Types.ObjectId("6a1f377861d1ee56fc110dab");
  try {
    const totalHistoryLogs = await PartsOrder$9.find({ driverId }).sort({ createdAt: -1 }).lean();
    let totalCompletions = 0;
    let totalLifetimePayout = 0;
    const formattedOrders = totalHistoryLogs.map((order) => {
      var _a, _b, _c, _d, _e, _f;
      const driverCut = ((_a = order.pricing) == null ? void 0 : _a.driverPayout) || 0;
      const isDone = order.status === "completed";
      if (isDone) {
        totalCompletions++;
        totalLifetimePayout += driverCut;
      }
      const rawStore = (((_b = order.supplier) == null ? void 0 : _b.storeName) || "").toLowerCase();
      let cleanStoreName = "AutoZone Auto Parts";
      if (rawStore.includes("oreilly")) cleanStoreName = "O'Reilly Auto Parts";
      if (rawStore.includes("napa")) cleanStoreName = "NAPA Auto Parts";
      return {
        _id: order._id.toString(),
        timestamp: order.createdAt || /* @__PURE__ */ new Date(),
        vehicleSpecs: `${((_c = order.vehicle) == null ? void 0 : _c.year) || ""} ${((_d = order.vehicle) == null ? void 0 : _d.make) || ""} ${((_e = order.vehicle) == null ? void 0 : _e.model) || "Vehicle"}`.trim(),
        supplier: cleanStoreName,
        destination: ((_f = order.deliveryLocation) == null ? void 0 : _f.bayInstructions) || "Fleet Workshop",
        manifestText: order.manifestText || "Commercial Auto Components",
        payout: Number(driverCut.toFixed(2)),
        status: order.status || "placed"
      };
    });
    return {
      success: true,
      metrics: {
        completedRuns: totalCompletions,
        lifetimeEarnings: Number(totalLifetimePayout.toFixed(2))
      },
      logs: formattedOrders
    };
  } catch (error) {
    console.error("\u274C Failed to compile courier order history matrix:", error);
    throw createError({
      statusCode: 500,
      message: error.message || "Failed to fetch historical logistics logs."
    });
  }
});

const history_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: history_get
}, Symbol.toStringTag, { value: 'Module' }));

const User$4 = UserImport;
const PartsOrder$8 = PartsOrderImport;
const me_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e;
  const user = event.context.user;
  const driverId = (user == null ? void 0 : user._id) || new mongoose.Types.ObjectId("6a1f377861d1ee56fc110dab");
  try {
    const driverRecord = await User$4.findById(driverId).select("-password").lean();
    if (!driverRecord) {
      return { success: false, message: "Driver document footprint missing." };
    }
    const activeOrderRecord = await PartsOrder$8.findOne({
      driverId,
      status: "accepted"
    }).lean();
    let formattedActiveJob = null;
    if (activeOrderRecord) {
      formattedActiveJob = {
        _id: activeOrderRecord._id.toString(),
        nearestSupplier: ((_a = activeOrderRecord.supplier) == null ? void 0 : _a.storeName) === "oreilly" ? "O'Reilly Auto Parts" : ((_b = activeOrderRecord.supplier) == null ? void 0 : _b.storeName) === "napa" ? "NAPA Auto Parts" : "AutoZone Auto Parts",
        destination: {
          name: ((_c = activeOrderRecord.deliveryLocation) == null ? void 0 : _c.bayInstructions) || "Workshop Destination",
          address: ((_d = activeOrderRecord.deliveryLocation) == null ? void 0 : _d.address) || "Address Missing"
        },
        pricing: ((_e = activeOrderRecord.pricing) == null ? void 0 : _e.deliveryFee) || 14.5,
        status: activeOrderRecord.status
      };
    }
    return {
      success: true,
      user: driverRecord,
      activeOrder: formattedActiveJob
    };
  } catch (error) {
    console.error("\u274C Driver profile hydration collapsed:", error);
    throw createError({
      statusCode: 500,
      message: "Internal profile data lookup fault."
    });
  }
});

const me_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: me_get
}, Symbol.toStringTag, { value: 'Module' }));

const User$3 = UserImport;
const toggleAvailability_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { isAvailable } = body;
  const user = event.context.user;
  let targetDriverId = user == null ? void 0 : user._id;
  if (!targetDriverId) {
    targetDriverId = new mongoose.Types.ObjectId("6a1f377861d1ee56fc110dab");
  }
  if (isAvailable === void 0) {
    throw createError({
      statusCode: 400,
      message: "Missing isAvailable availability boolean property."
    });
  }
  try {
    await connectDB();
    const updatedUser = await User$3.findByIdAndUpdate(
      targetDriverId,
      { $set: { isAvailable: !!isAvailable } },
      {
        // 🔥 FIX 1: Silences the Mongoose warning by utilizing the updated spec option
        returnDocument: "after",
        runValidators: true
      }
    );
    if (!updatedUser) {
      throw createError({
        statusCode: 404,
        message: "No matching registered courier user document found."
      });
    }
    console.log(`\u{1F4E1} [Availability Engine] Updated database for ${updatedUser.name}: isAvailable is now ${updatedUser.isAvailable}`);
    return {
      success: true,
      currentState: updatedUser.isAvailable
    };
  } catch (error) {
    console.error("\u274C Failed to change driver database visibility status:", error);
    throw createError({
      statusCode: 500,
      message: error.message || "Database state modification faulted."
    });
  }
});

const toggleAvailability_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: toggleAvailability_post
}, Symbol.toStringTag, { value: 'Module' }));

const User$2 = UserImport;
const updateLocation_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const user = event.context.user;
  if (!(user == null ? void 0 : user._id) || user.role !== "driver") {
    throw createError({
      statusCode: 403,
      message: "Access denied. Location telemetry updates reserved for fleet couriers."
    });
  }
  const { longitude, latitude } = body;
  if (longitude === void 0 || latitude === void 0) {
    throw createError({
      statusCode: 400,
      message: "Missing explicit hardware spatial coordinates."
    });
  }
  try {
    await User$2.findByIdAndUpdate(user._id, {
      $set: {
        isAvailable: true,
        // Mark them active in the matching pool
        currentLocation: {
          type: "Point",
          coordinates: [Number(longitude), Number(latitude)]
          // MongoDB standard: [lng, lat]
        }
      }
    });
    return {
      success: true,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
  } catch (error) {
    console.error("Failed to log hardware location telemetry payload:", error);
    throw createError({
      statusCode: 500,
      message: "Telemetry pipeline save failure."
    });
  }
});

const updateLocation_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: updateLocation_post
}, Symbol.toStringTag, { value: 'Module' }));

const PartsOrder$7 = PartsOrderImport;
const index_get$2 = defineEventHandler(async (event) => {
  const user = event.context.user;
  if (!(user == null ? void 0 : user._id)) {
    throw createError({
      statusCode: 401,
      message: "Authentication signature missing."
    });
  }
  const orderId = getRouterParam(event, "id");
  try {
    const order = await PartsOrder$7.findById(orderId).lean();
    if (!order) {
      throw createError({
        statusCode: 404,
        message: "Logistics order profile not found in active indexes."
      });
    }
    const isBuyer = order.buyerId.toString() === user._id;
    const isAssignedDriver = order.driverId && order.driverId.toString() === user._id;
    const isAdmin = user.role === "admin";
    if (!isBuyer && !isAssignedDriver && !isAdmin) {
      throw createError({
        statusCode: 403,
        message: "Access denied. You are not authorized to track this delivery manifest route."
      });
    }
    return {
      success: true,
      order
    };
  } catch (error) {
    console.error("Failed to resolve order data extraction:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Database lookup pipeline exception."
    });
  }
});

const index_get$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_get$2
}, Symbol.toStringTag, { value: 'Module' }));

const PartsOrder$6 = PartsOrderImport;
const status_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const user = event.context.user;
  const orderId = getRouterParam(event, "id");
  if (!(user == null ? void 0 : user._id) || user.role !== "driver") {
    throw createError({
      statusCode: 403,
      message: "Access denied. Only the assigned courier can mutate transit parameters."
    });
  }
  const { status: nextStatus } = body;
  const validStatuses = ["picking-up", "in-transit", "delivered", "cancelled"];
  if (!nextStatus || !validStatuses.includes(nextStatus)) {
    throw createError({
      statusCode: 400,
      message: "Invalid or missing target lifecycle state modification directive."
    });
  }
  try {
    const order = await PartsOrder$6.findById(orderId);
    if (!order) {
      throw createError({ statusCode: 404, message: "Target order context record missing." });
    }
    if (order.driverId.toString() !== user._id) {
      throw createError({
        statusCode: 403,
        message: "Security breach attempt. This tracking route vector belongs to another fleet courier."
      });
    }
    order.status = nextStatus;
    if (nextStatus === "picking-up" && !order.pickedUpAt) {
      order.pickedUpAt = /* @__PURE__ */ new Date();
    } else if (nextStatus === "delivered" && !order.deliveredAt) {
      order.deliveredAt = /* @__PURE__ */ new Date();
    }
    await order.save();
    return {
      success: true,
      message: `Logistics pipeline successfully advanced to state: ${nextStatus}`,
      currentStatus: order.status
    };
  } catch (error) {
    console.error("Lifecycle status advance transaction state failure:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Data mutations aborted during transaction phase."
    });
  }
});

const status_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: status_post
}, Symbol.toStringTag, { value: 'Module' }));

const PartsOrder$5 = PartsOrderImport;
const acceptJob_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { orderId } = body;
  const user = event.context.user;
  const driverId = (user == null ? void 0 : user._id) || new mongoose.Types.ObjectId("6a1f377861d1ee56fc110dab");
  if (!orderId) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing target validation payload. orderId required."
    });
  }
  try {
    await connectDB();
    const finalizedOrder = await PartsOrder$5.findOneAndUpdate(
      {
        _id: new mongoose.Types.ObjectId(orderId),
        status: "placed",
        driverId: null
      },
      {
        $set: {
          driverId,
          status: "accepted",
          updatedAt: /* @__PURE__ */ new Date()
        }
      },
      {
        returnDocument: "after"
        // Uses modern non-deprecated spec option
      }
    );
    if (!finalizedOrder) {
      throw createError({
        statusCode: 409,
        // Conflict state
        statusMessage: "This hot-shot dispatch offer has already been claimed by another driver."
      });
    }
    console.log(`\u{1F4E6} [Logistics Core] Order ${orderId} successfully locked by driver ${driverId}`);
    return {
      success: true,
      message: "Hot-shot dispatch route secured. Proceeding to supplier counter.",
      order: finalizedOrder
    };
  } catch (error) {
    console.error("\u274C Failed to assign driver dispatch contract:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal logistics distribution fault."
    });
  }
});

const acceptJob_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: acceptJob_post
}, Symbol.toStringTag, { value: 'Module' }));

const PartsOrder$4 = PartsOrderImport;
const accept_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const user = event.context.user;
  if (!(user == null ? void 0 : user._id) || user.role !== "driver") {
    throw createError({
      statusCode: 403,
      message: "Access denied. Only registered fleet couriers can claim open market routes."
    });
  }
  const { orderId } = body;
  if (!orderId) {
    throw createError({
      statusCode: 400,
      message: "Missing unique target order identification hash parameter."
    });
  }
  try {
    const securedOrder = await PartsOrder$4.findOneAndUpdate(
      {
        _id: orderId,
        status: "placed"
      },
      {
        $set: {
          driverId: user._id,
          status: "accepted",
          acceptedAt: /* @__PURE__ */ new Date()
        }
      },
      {
        new: true,
        // Returns the freshly updated document configuration properties
        runValidators: true
      }
    );
    if (!securedOrder) {
      throw createError({
        statusCode: 409,
        // Conflict state code match identifier
        message: "Route ticket collision. This delivery run was already claimed by another active driver."
      });
    }
    return {
      success: true,
      message: "Route vector locked down successfully. Dispatching supplier manifest access details.",
      order: {
        id: securedOrder._id,
        status: securedOrder.status,
        commercialOrderNumber: securedOrder.supplier.commercialOrderNumber,
        storeAddress: securedOrder.supplier.storeAddress,
        deliveryAddress: securedOrder.deliveryLocation.address
      }
    };
  } catch (error) {
    console.error("Driver dispatch ticket lock acquisition failure:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Internal pipeline validation error during route claim negotiation."
    });
  }
});

const accept_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: accept_post
}, Symbol.toStringTag, { value: 'Module' }));

const MONTA_AUTOMOTIVE_HUBS = [
  {
    name: "O'Reilly Auto Parts - Columbia Falls",
    coordinates: [-114.1974, 48.3644]
  },
  {
    name: "AutoZone Auto Parts - Kalispell",
    coordinates: [-114.3292, 48.1965]
  },
  {
    name: "NAPA Auto Parts - Whitefish",
    coordinates: [-114.3324, 48.4022]
  }
];
function calculateDistanceInMiles(coords1, coords2) {
  const toRad = (value) => value * Math.PI / 180;
  const R = 3956;
  const dLat = toRad(coords2[1] - coords1[1]);
  const dLon = toRad(coords2[0] - coords1[0]);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(coords1[1])) * Math.cos(toRad(coords2[1])) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
const autoDispatchQuote_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { destinationCoords } = body;
  if (!destinationCoords || !Array.isArray(destinationCoords) || destinationCoords.length !== 2) {
    throw createError({
      statusCode: 400,
      statusMessage: "Malforming routing matrix payload. Destination coordinates required."
    });
  }
  let closestHub = MONTA_AUTOMOTIVE_HUBS[0];
  let shortestDistance = Infinity;
  for (const hub of MONTA_AUTOMOTIVE_HUBS) {
    const distance = calculateDistanceInMiles(hub.coordinates, destinationCoords);
    if (distance < shortestDistance) {
      shortestDistance = distance;
      closestHub = hub;
    }
  }
  const BASE_FEE = 7;
  const PER_MILE_RATE = 1.5;
  const rawCost = BASE_FEE + shortestDistance * PER_MILE_RATE;
  const finalDeliveryRate = Math.max(BASE_FEE, Math.round(rawCost * 100) / 100);
  return {
    success: true,
    nearestSupplier: closestHub == null ? void 0 : closestHub.name,
    distanceMiles: Math.round(shortestDistance * 10) / 10,
    estimatedRate: finalDeliveryRate
  };
});

const autoDispatchQuote_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: autoDispatchQuote_post
}, Symbol.toStringTag, { value: 'Module' }));

const calculateRate_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { supplierCoords, destinationCoords } = body;
  if (!supplierCoords || !destinationCoords) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid coordinate payloads provided."
    });
  }
  const toRad = (value) => value * Math.PI / 180;
  const R = 3956;
  const dLat = toRad(destinationCoords[1] - supplierCoords[1]);
  const dLon = toRad(destinationCoords[0] - supplierCoords[0]);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(supplierCoords[1])) * Math.cos(toRad(destinationCoords[1])) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distanceInMiles = R * c;
  const BASE_FEE = 7;
  const PER_MILE_RATE = 1.5;
  const calculatedRate = BASE_FEE + distanceInMiles * PER_MILE_RATE;
  const finalDeliveryRate = Math.max(BASE_FEE, Math.round(calculatedRate * 100) / 100);
  return {
    success: true,
    distanceMiles: Math.round(distanceInMiles * 10) / 10,
    estimatedRate: finalDeliveryRate
  };
});

const calculateRate_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: calculateRate_post
}, Symbol.toStringTag, { value: 'Module' }));

const PartsOrder$3 = PartsOrderImport;
const completeJob_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { orderId } = body;
  if (!orderId) {
    throw createError({
      statusCode: 400,
      statusMessage: "Order ID parameter missing from closure payload."
    });
  }
  try {
    const completedOrder = await PartsOrder$3.findByIdAndUpdate(
      new mongoose.Types.ObjectId(orderId),
      {
        $set: {
          status: "completed",
          updatedAt: /* @__PURE__ */ new Date()
        }
      },
      { returnDocument: "after" }
    );
    console.log(`\u{1F3C1} [Logistics Core] Order ${orderId} marked completed. Cargo dropped off.`);
    return {
      success: true,
      message: "Delivery manifest marked finalized. Earnings routed to driver wallet balance.",
      order: completedOrder
    };
  } catch (error) {
    console.error("\u274C Failed to finalize order completion lifecycle:", error);
    throw createError({
      statusCode: 500,
      message: error.message || "Database state modification faulted."
    });
  }
});

const completeJob_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: completeJob_post
}, Symbol.toStringTag, { value: 'Module' }));

const PartsOrder$2 = PartsOrderImport;
const HUB_COORDINATE_MAP = {
  "O'Reilly": [-114.1974, 48.3644],
  "AutoZone": [-114.3292, 48.1965],
  "NAPA": [-114.3324, 48.4022]
};
const create_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const user = event.context.user;
  if (!(user == null ? void 0 : user._id)) {
    throw createError({
      statusCode: 401,
      message: "Authentication trace missing. Please log in to request couriers."
    });
  }
  const { vehicle, parts, destination, pricing } = body;
  if (!vehicle || !vehicle.year || !vehicle.make || !vehicle.model) {
    throw createError({
      statusCode: 400,
      message: "Target vehicle specifications are missing or incomplete."
    });
  }
  if (!parts || !parts.trim()) {
    throw createError({
      statusCode: 400,
      message: "Parts line items or manifest text cannot be empty."
    });
  }
  if (!destination || !destination.name || !destination.address || !destination.coordinates) {
    throw createError({
      statusCode: 400,
      message: "Destination workshop destination vectors are missing."
    });
  }
  try {
    await connectDB();
    let schemaStoreEnum = "AutoZone";
    let fullDisplayAddress = "740 US Hwy 2 W, Kalispell, MT";
    if (destination.name.includes("Whitefish")) {
      schemaStoreEnum = "NAPA";
      fullDisplayAddress = "6435 US-93, Whitefish, MT";
    } else if (destination.name.includes("Glacier") || destination.name.includes("Columbia Falls")) {
      schemaStoreEnum = "O'Reilly";
      fullDisplayAddress = "1405 9th St W, Columbia Falls, MT";
    }
    const supplierCoords = HUB_COORDINATE_MAP[schemaStoreEnum];
    const finalDeliveryFee = pricing ? Number(pricing) : 14.5;
    const DRIVER_CUT_RATIO = 0.85;
    const driverPayout = Number((finalDeliveryFee * DRIVER_CUT_RATIO).toFixed(2));
    const platformCut = Number((finalDeliveryFee - driverPayout).toFixed(2));
    const newOrder = await PartsOrder$2.create({
      buyerId: user._id,
      driverId: null,
      vehicle: {
        year: Number(vehicle.year),
        make: vehicle.make,
        model: vehicle.model
      },
      supplier: {
        storeName: schemaStoreEnum,
        // 🔥 UPDATED: Shifted to capitalized string format to satisfy schema enum constraints
        storeAddress: fullDisplayAddress,
        commercialOrderNumber: `AUTO-${Math.floor(1e5 + Math.random() * 9e5)}`
      },
      manifestText: parts,
      deliveryLocation: {
        address: destination.address,
        bayInstructions: destination.name,
        geoPoint: {
          type: "Point",
          coordinates: [Number(destination.coordinates[0]), Number(destination.coordinates[1])]
          // [longitude, latitude]
        }
      },
      status: "placed",
      // Retained original schema validation status keyword
      pricing: {
        deliveryFee: finalDeliveryFee,
        driverPayout,
        platformCut
      }
    });
    return {
      success: true,
      message: "Logistics manifest generated. Order broadcasted to active regional drivers.",
      orderId: newOrder._id,
      pricingDetails: newOrder.pricing
    };
  } catch (error) {
    console.error("Parts order creation lifecycle aborted:", error);
    throw createError({
      statusCode: 500,
      message: error.message || "Failed to process delivery request manifest."
    });
  }
});

const create_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: create_post
}, Symbol.toStringTag, { value: 'Module' }));

const PartsOrder$1 = PartsOrderImport;
const User$1 = UserImport;
const track__id__get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const orderId = getRouterParam(event, "id");
  try {
    await connectDB();
    const order = await PartsOrder$1.findById(orderId).lean();
    if (!order) {
      throw createError({ statusCode: 404, message: "Order tracking manifest not found." });
    }
    const supplierCoords = ((_a = order.supplier) == null ? void 0 : _a.storeName) === "NAPA" ? [-114.3324, 48.4022] : ((_b = order.supplier) == null ? void 0 : _b.storeName) === "O'Reilly" ? [-114.1974, 48.3644] : [-114.3292, 48.1965];
    let driverCoords = null;
    if (order.driverId) {
      const driver = await User$1.findById(order.driverId).select("currentLocation name").lean();
      if ((_c = driver == null ? void 0 : driver.currentLocation) == null ? void 0 : _c.coordinates) {
        driverCoords = [driver.currentLocation.coordinates[1], driver.currentLocation.coordinates[0]];
      }
    }
    return {
      success: true,
      status: order.status,
      manifest: {
        supplierName: ((_d = order.supplier) == null ? void 0 : _d.storeName) || "Auto Parts Vendor",
        supplierCoords: [supplierCoords[1], supplierCoords[0]],
        // [lat, lng]
        destinationName: ((_e = order.deliveryLocation) == null ? void 0 : _e.bayInstructions) || "Workshop Target",
        destinationCoords: [(_g = (_f = order.deliveryLocation) == null ? void 0 : _f.geoPoint) == null ? void 0 : _g.coordinates[1], (_i = (_h = order.deliveryLocation) == null ? void 0 : _h.geoPoint) == null ? void 0 : _i.coordinates[0]],
        // [lat, lng]
        parts: order.manifestText || "Commercial Parts Payload"
      },
      driver: driverCoords ? {
        name: order.driverName || "Fleet Courier",
        coords: driverCoords
      } : null
    };
  } catch (error) {
    console.error("Tracking coordinate sync aborted:", error);
    throw createError({ statusCode: 500, message: error.message });
  }
});

const track__id__get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: track__id__get
}, Symbol.toStringTag, { value: 'Module' }));

const PartsOrder = PartsOrderImport;
const User = UserImport;
const index_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const orderId = getRouterParam(event, "id");
  try {
    await connectDB();
    const order = await PartsOrder.findById(orderId).lean();
    if (!order) {
      throw createError({ statusCode: 404, message: "Order tracking manifest not found." });
    }
    const supplierCoords = ((_a = order.supplier) == null ? void 0 : _a.storeName) === "NAPA" ? [-114.3324, 48.4022] : ((_b = order.supplier) == null ? void 0 : _b.storeName) === "O'Reilly" ? [-114.1974, 48.3644] : [-114.3292, 48.1965];
    let driverCoords = null;
    if (order.driverId) {
      const driver = await User.findById(order.driverId).select("currentLocation name").lean();
      if ((_c = driver == null ? void 0 : driver.currentLocation) == null ? void 0 : _c.coordinates) {
        driverCoords = [driver.currentLocation.coordinates[1], driver.currentLocation.coordinates[0]];
      }
    }
    return {
      success: true,
      status: order.status,
      manifest: {
        supplierName: ((_d = order.supplier) == null ? void 0 : _d.storeName) || "Auto Parts Vendor",
        supplierCoords: [supplierCoords[1], supplierCoords[0]],
        // [lat, lng]
        destinationName: ((_e = order.deliveryLocation) == null ? void 0 : _e.bayInstructions) || "Workshop Target",
        destinationCoords: [(_g = (_f = order.deliveryLocation) == null ? void 0 : _f.geoPoint) == null ? void 0 : _g.coordinates[1], (_i = (_h = order.deliveryLocation) == null ? void 0 : _h.geoPoint) == null ? void 0 : _i.coordinates[0]],
        // [lat, lng]
        parts: order.manifestText || "Commercial Parts Payload"
      },
      driver: driverCoords ? {
        name: order.driverName || "Michael Dreesen",
        coords: driverCoords
      } : null
    };
  } catch (error) {
    console.error("\u274C Tracking coordinate sync aborted:", error);
    throw createError({
      statusCode: 500,
      message: error.message || "Failed to extract tracking parameters."
    });
  }
});

const index_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_get
}, Symbol.toStringTag, { value: 'Module' }));

function renderPayloadResponse(ssrContext) {
	return {
		body: encodeForwardSlashes(stringify(splitPayload(ssrContext).payload, ssrContext["~payloadReducers"])) ,
		statusCode: getResponseStatus(ssrContext.event),
		statusMessage: getResponseStatusText(ssrContext.event),
		headers: {
			"content-type": "application/json;charset=utf-8" ,
			"x-powered-by": "Nuxt"
		}
	};
}
function renderPayloadJsonScript(opts) {
	const contents = opts.data ? encodeForwardSlashes(stringify(opts.data, opts.ssrContext["~payloadReducers"])) : "";
	const payload = {
		"type": "application/json",
		"innerHTML": contents,
		"data-nuxt-data": appId,
		"data-ssr": false
	};
	{
		payload.id = "__NUXT_DATA__";
	}
	if (opts.src) {
		payload["data-src"] = opts.src;
	}
	const config = uneval(opts.ssrContext.config);
	return [payload, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}` }];
}

function encodeForwardSlashes(str) {
	return str.replaceAll("/", "\\u002F");
}
function splitPayload(ssrContext) {
	const { data, prerenderedAt, ...initial } = ssrContext.payload;
	return {
		initial: {
			...initial,
			prerenderedAt
		},
		payload: {
			data,
			prerenderedAt
		}
	};
}

const renderSSRHeadOptions = {"omitLineBreaks":true};

// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__buildAssetsURL = buildAssetsURL;
// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const PAYLOAD_FILENAME = "_payload.json" ;
const handler = defineRenderHandler((event) => {
	
	const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
	if (ssrError && !("__unenv__" in event.node.req)) {
		throw createError({
			status: 404,
			statusText: "Page Not Found: /__nuxt_error",
			message: "Page Not Found: /__nuxt_error"
		});
	}
	return renderRoute(event, ssrError);
});
async function renderRoute(event, ssrError) {
	const nitroApp = useNitroApp();
	
	const ssrContext = createSSRContext(event);
	
	const headEntryOptions = { mode: "server" };
	ssrContext.head.push(appHead, headEntryOptions);
	if (ssrError) {
		
		const status = ssrError.status || ssrError.statusCode;
		if (status) {
			
			ssrError.status = ssrError.statusCode = Number.parseInt(status);
		}
		if (typeof ssrError.data === "string") {
			try {
				ssrError.data = destr(ssrError.data);
			} catch {}
		}
		setSSRError(ssrContext, ssrError);
	}
	
	const routeOptions = getRouteRules(event);
	
	const _PAYLOAD_EXTRACTION = !ssrContext.noSSR && (NUXT_RUNTIME_PAYLOAD_EXTRACTION);
	
	
	
	const _PAYLOAD_INLINE = !_PAYLOAD_EXTRACTION || NUXT_PAYLOAD_INLINE;
	const isRenderingPayload = (_PAYLOAD_EXTRACTION || routeOptions.prerender) && PAYLOAD_URL_RE.test(ssrContext.url);
	if (isRenderingPayload) {
		const url = ssrContext.url.substring(0, ssrContext.url.lastIndexOf("/")) || "/";
		ssrContext.url = url;
		event._path = event.node.req.url = url;
	}
	if (routeOptions.ssr === false) {
		ssrContext.noSSR = true;
	}
	const payloadURL = _PAYLOAD_EXTRACTION ? joinURL(ssrContext.runtimeConfig.app.cdnURL || ssrContext.runtimeConfig.app.baseURL, ssrContext.url.replace(/\?.*$/, ""), PAYLOAD_FILENAME) + "?" + ssrContext.runtimeConfig.app.buildId : undefined;
	
	const renderer = await getRenderer();
	const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
		
		
		if ((ssrContext["~renderResponse"] || ssrContext._renderResponse) && error.message === "skipping render") {
			return {};
		}
		
		const _err = !ssrError && ssrContext.payload?.error || error;
		await ssrContext.nuxt?.hooks.callHook("app:error", _err);
		throw _err;
	});
	
	
	const inlinedStyles = [];
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult: _rendered
	});
	if (ssrContext["~renderResponse"] || ssrContext._renderResponse) {
		
		return ssrContext["~renderResponse"] || ssrContext._renderResponse;
	}
	
	if (ssrContext.payload?.error && !ssrError) {
		throw ssrContext.payload.error;
	}
	
	if (isRenderingPayload) {
		const response = renderPayloadResponse(ssrContext);
		return response;
	}
	const NO_SCRIPTS = routeOptions.noScripts;
	
	const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
	
	
	if (_PAYLOAD_EXTRACTION && !_PAYLOAD_INLINE && !NO_SCRIPTS) {
		ssrContext.head.push({ link: [{
			rel: "preload",
			as: "fetch",
			crossorigin: "anonymous",
			href: payloadURL
		} ] }, headEntryOptions);
	}
	
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	const link = [];
	for (const resource of Object.values(styles)) {
		
		if ("inline" in getQuery(resource.file)) {
			continue;
		}
		
		
		
		link.push({
			rel: "stylesheet",
			href: renderer.rendererContext.buildAssetsURL(resource.file),
			crossorigin: ""
		});
	}
	if (link.length) {
		ssrContext.head.push({ link }, headEntryOptions);
	}
	if (!NO_SCRIPTS) {
		
		
		
		if (ssrContext["~lazyHydratedModules"]) {
			for (const id of ssrContext["~lazyHydratedModules"]) {
				ssrContext.modules?.delete(id);
			}
		}
		ssrContext.head.push({ link: getPreloadLinks(ssrContext, renderer.rendererContext) }, headEntryOptions);
		ssrContext.head.push({ link: getPrefetchLinks(ssrContext, renderer.rendererContext) }, headEntryOptions);
		
		ssrContext.head.push({ script: _PAYLOAD_INLINE ? renderPayloadJsonScript({
			ssrContext,
			data: ssrContext.payload
		})  : renderPayloadJsonScript({
			ssrContext,
			data: splitPayload(ssrContext).initial,
			src: payloadURL
		})  }, {
			...headEntryOptions,
			
			tagPosition: "bodyClose",
			tagPriority: "high"
		});
	}
	
	if (!routeOptions.noScripts) {
		const tagPosition = "head";
		ssrContext.head.push({ script: Object.values(scripts).map((resource) => ({
			type: resource.module ? "module" : null,
			src: renderer.rendererContext.buildAssetsURL(resource.file),
			defer: resource.module ? null : true,
			
			
			tagPosition,
			crossorigin: ""
		})) }, headEntryOptions);
	}
	const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
	
	const htmlContext = {
		htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
		head: normalizeChunks([headTags]),
		bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
		bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
		body: [replaceIslandTeleports(ssrContext, _rendered.html) , APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG],
		bodyAppend: [bodyTags]
	};
	
	await nitroApp.hooks.callHook("render:html", htmlContext, { event });
	
	return {
		body: renderHTMLDocument(htmlContext),
		statusCode: getResponseStatus(event),
		statusMessage: getResponseStatusText(event),
		headers: {
			"content-type": "text/html;charset=utf-8",
			"x-powered-by": "Nuxt"
		}
	};
}
function normalizeChunks(chunks) {
	const result = [];
	for (const _chunk of chunks) {
		const chunk = _chunk?.trim();
		if (chunk) {
			result.push(chunk);
		}
	}
	return result;
}
function joinTags(tags) {
	return tags.join("");
}
function joinAttrs(chunks) {
	if (chunks.length === 0) {
		return "";
	}
	return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
	return "<!DOCTYPE html>" + `<html${joinAttrs(html.htmlAttrs)}>` + `<head>${joinTags(html.head)}</head>` + `<body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>` + "</html>";
}

const renderer = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handler
}, Symbol.toStringTag, { value: 'Module' }));
//# sourceMappingURL=index.mjs.map
