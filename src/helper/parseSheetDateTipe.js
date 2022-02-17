const parseToDate = require("../utils/parseToDate");

module.exports = function parseSheetDateTime(key, value) {
  if (
    (key === "tgl_parsed" || key === "timestamp") &&
    parseToDate(value) !== false
  ) {
    return key === "tgl_parsed"
      ? parseToDate(value).toISOString()
      : parseToDate(value).getTime();
  }

  return value;
};
