const dataIsEmpty = require("../utils/dataIsEmpty");
const dataIsInRange = require("../utils/dataIsInRange");
const parseToDate = require("../utils/parseToDate");

module.exports = function filterRangeData(data, ranges) {
  if (dataIsEmpty(data) || dataIsEmpty(ranges)) {
    return [];
  }

  const filteredRangeData = data.filter((item) => {
    let passed = !dataIsEmpty(item);

    if (passed) {
      if (ranges.harga) {
        if (!dataIsInRange("number", ranges.harga, parseFloat(item.harga)))
          return false;
      }

      if (ranges.size) {
        if (!dataIsInRange("number", ranges.size, parseFloat(item.size)))
          return false;
      }

      if (ranges.tanggal) {
        if (!dataIsInRange("date", ranges.tanggal, parseToDate(item.tanggal)))
          return false;
      }
    }

    return passed;
  });

  return filteredRangeData;
};
