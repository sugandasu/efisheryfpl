module.exports = function createKey(keys) {
  return keys
    .map((key) => {
      return key.replace(/[\W_]+/g, "_");
    })
    .join("-");
};
