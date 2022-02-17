const dataIsEmpty = require("../utils/dataIsEmpty");
const { columnList, sheetList } = require("./getCliVariables");
const parseSheetDateTipe = require("./parseSheetDateTipe");

module.exports = function cleanData(data) {
  if (dataIsEmpty(data)) {
    return data;
  }
  const newData = [];

  if (Array.isArray(data)) {
    data.map((item) => {
      if (!dataIsEmpty(item)) {
        if (typeof item === "object" && !Array.isArray(item)) {
          const newItem = {};
          Object.keys(item).map((key) => {
            if (!dataIsEmpty(item[key]) && sheetList.indexOf(key) !== -1) {
              let value = item[key];
              value = parseSheetDateTipe(key, value);
              if (key === "size" || key === "price") {
                value = parseInt(value);
              }
              newItem[columnList[sheetList.indexOf(key)]] = value;
            }
          });
          newData.push(newItem);
        }
      }
    });
  }

  return newData;
};
