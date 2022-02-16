module.exports = function dataIsArea(data) {
  if (typeof data !== "object") {
    return false;
  }
  if (Array.isArray(data)) {
    return false;
  }
  if (
    data.hasOwnProperty("area_provinsi", false) ||
    data.hasOwnProperty("area_kota", false)
  ) {
    return true;
  }
  return false;
};
