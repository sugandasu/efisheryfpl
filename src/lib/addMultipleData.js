const steinStore = require("../steinStore");
const convertToReadableSteinError = require("../utils/convertToReadableSteinError");
const checkSuccessResponse = require("../utils/checkSuccessResponse");
const dataIsEmpty = require("../utils/dataIsEmpty");

module.exports = function addMultipleData(sheetName, data) {
  if (dataIsEmpty(data)) {
    return {
      success: false,
      message: "Data tidak boleh kosong",
    };
  }
  if (!Array.isArray(data)) {
    return {
      success: false,
      message: "Format data harus berupa array",
    };
  }
  if (data.length === 0) {
    return {
      success: false,
      message: "Data array tidak boleh kosong",
    };
  }

  return new Promise(async (resolve, _) => {
    await steinStore
      .append(sheetName, data)
      .then((res) => {
        resolve(checkSuccessResponse(res));
      })
      .catch((err) => {
        resolve(convertToReadableSteinError(err));
      });
  });
};
