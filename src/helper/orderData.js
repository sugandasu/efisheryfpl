const dataIsEmpty = require("../utils/dataIsEmpty");
const parseToDate = require("../utils/parseToDate");

module.exports = function orderData(data, column, direction) {
  if (dataIsEmpty(data) || dataIsEmpty(column) || dataIsEmpty(direction)) {
    return data;
  }

  return data.sort((a, b) => {
    let first = a[column];
    let second = b[column];
    if (
      (column === "tgl_parsed" ||
        column === "tanggal" ||
        column === "timestamp") &&
      parseToDate(first) !== false &&
      parseToDate(second) !== false
    ) {
      first = parseToDate(first).getTime();
      second = parseToDate(second).getTime();
    }
    if (first < second) return direction === "asc" ? -1 : 1;
    if (first > second) return direction === "asc" ? 1 : -1;
  });
};
