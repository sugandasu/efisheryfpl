const { sheetList, columnList } = require("./getCliVariables");

function convertColumnsToSheets(searchList) {
  if (!Array.isArray(searchList)) {
    return {};
  }

  const newSearchList = {};
  searchList.forEach((search) => {
    let [key, value] = search.split("=");
    if (columnList.indexOf(key) !== -1) {
      key = toSheet(key);
      if (key !== "tanggal" || key !== "timestamp") {
        value = String(value);
      }
      newSearchList[key] = value;
    }
  });

  return newSearchList;
}

function toSheet(key) {
  return sheetList[columnList.indexOf(key)];
}

module.exports = convertColumnsToSheets;
