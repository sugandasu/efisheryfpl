const dataIsEmpty = require("./dataIsEmpty");
const parseToDate = require("../utils/parseToDate");

module.exports = function dataIsInRange(type, range, value) {
  if (dataIsEmpty(value)) {
    return false;
  }
  if (type === "number") {
    if (typeof value !== "number" || isNaN(value)) {
      return false;
    }

    if (
      (range.min && typeof range.min !== "number") ||
      (range.min && typeof range.min === "number" && value < range.min)
    ) {
      return false;
    }
    if (
      (range.max && typeof range.max !== "number") ||
      (range.max && typeof range.max === "number" && value > range.max)
    ) {
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
