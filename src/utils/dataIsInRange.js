const dataIsEmpty = require("./dataIsEmpty");
const parseToDate = require("../utils/parseToDate");
const parseToInt = require("../utils/parseToInt");

module.exports = function dataIsInRange(type, range, value) {
  if (dataIsEmpty(value)) {
    return false;
  }
  if (type === "number") {
    const valueInt = parseToInt(value);
    const min = parseToInt(range.min);
    const max = parseToInt(range.max);

    if (valueInt === false || min === false || max === false) {
      return false;
    }

    if (valueInt < min) {
      return false;
    }
    if (valueInt > max) {
      return false;
    }

    return true;
  }
  if (type === "date") {
    const newDateValue = parseToDate(value);
    if (newDateValue === false) {
      return false;
    }

    if (range.min) {
      const newDateMin = parseToDate(range.min);
      if (newDateMin === false) {
        return false;
      }

      if (newDateValue.getTime() < newDateMin.getTime()) {
        return false;
      }
    }

    if (range.max) {
      const newDateMax = parseToDate(range.max);
      if (newDateMax === false) {
        return false;
      }

      if (newDateValue.getTime() > newDateMax.getTime()) {
        return false;
      }
    }

    return true;
  }

  return false;
};
