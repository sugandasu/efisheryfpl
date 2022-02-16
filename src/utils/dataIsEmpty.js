module.exports = function dataIsEmpty(data) {
  if (
    data === undefined ||
    data === null ||
    data === "" ||
    data === "null" ||
    data === "undefined"
  ) {
    return true;
  }
  if (typeof data === "object" && Object.keys(data).length === 0) {
    if (new Date(data).toString() !== "Invalid Date") {
      return false;
    }
    return true;
  }
  if (Array.isArray(data) && data.length === 0) {
    return true;
  }
  return false;
};
