module.exports = function dataIsRange(data) {
  if (typeof data !== "object") {
    return false;
  }
  if (Array.isArray(data)) {
    return false;
  }
  if (data.hasOwnProperty("min", false) || data.hasOwnProperty("max", false)) {
    return true;
  }
  return false;
};
