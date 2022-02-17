const dataIsEmpty = require("../utils/dataIsEmpty");

module.exports = function limitData(data, limit, offset = 0) {
  if (dataIsEmpty(data) || dataIsEmpty(limit) || dataIsEmpty(offset)) {
    return data;
  }

  return data.slice(offset, limit + offset);
};
