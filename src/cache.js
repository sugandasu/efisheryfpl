const NodeCache = require("node-cache");

class cache {
  constructor(ttlSeconds = 60 * 60 * 1) {
    this.cache = new NodeCache({
      stdTTL: ttlSeconds,
      checkperiod: ttlSeconds * 0.5,
      useClones: false,
    });
  }

  getAsync(key, callbackFunction) {
    const value = this.cache.get(key);

    if (value) {
      return Promise.resolve(value);
    }

    return callbackFunction().then((result) => {
      this.cache.set(key, result);
      return result;
    });
  }

  get(key) {
    const value = this.cache.get(key);

    if (value) {
      return value;
    }
  }

  set(key, value) {
    this.cache.set(key, value);
  }

  del(keys) {
    this.cache.del(keys);
  }

  delStartWith(startStr = "") {
    if (!startStr) {
      return;
    }

    const keys = this.cache.keys();
    for (const key of keys) {
      if (key.indexOf(startStr) === 0) {
        this.del(key);
      }
    }
  }

  flush() {
    this.cache.flushAll();
  }
}

module.exports = cache;
