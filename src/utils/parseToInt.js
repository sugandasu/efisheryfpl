const dataIsEmpty = require("./dataIsEmpty");

module.exports = function parseToInt(value) {
  if (dataIsEmpty(value)) {
    return false;
  }

  const valueInt = parseInt(value);

  if (typeof valueInt === "number" && !isNaN(valueInt)) {
    return valueInt;
  }

  return false;
};
