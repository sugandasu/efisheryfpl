const parseToInt = require("../utils/parseToInt");
const parseToDate = require("../utils/parseToDate");
const dataIsEmpty = require("../utils/dataIsEmpty");

function convertRangeToRangeObject(rangeList) {
  if (!Array.isArray(rangeList)) {
    return {};
  }

  const newRangeList = {};
  rangeList.forEach((search) => {
    let [key, value] = search.split("=");
    let [min, max] = value.split(",");

    if (key === "harga" || key === "size" || key === "tanggal") {
      if (key === "harga" || key === "size") {
        if (!dataIsEmpty(min)) {
          min = parseToInt(min);
        }
        if (!dataIsEmpty(max)) {
          max = parseToInt(max);
        }
      } else if (key === "tanggal") {
        if (!dataIsEmpty(min)) {
          min = parseToDate(min);
        }
        if (!dataIsEmpty(max)) {
          max = parseToDate(max);
        }
      }

      if (!(min === false && max === false)) {
        newRangeList[key] = { min, max };
      }
    }
  });

  return newRangeList;
}

module.exports = convertRangeToRangeObject;
