const dataIsEmpty = require("../utils/dataIsEmpty");
const parseToInt = require("../utils/parseToInt");

module.exports = function limitData(data, limit, offset = 0) {
  if (dataIsEmpty(data) && !Array.isArray(data)) {
    return [];
  }

  const start = parseToInt(offset);
  const end = parseToInt(limit);

  if (start !== false && end !== false) {
    return data.slice(start, start + end);
  }
};
