const steinStore = require("../steinStore");
const convertToReadableSteinError = require("../utils/convertToReadableSteinError");
const checkSuccessResponse = require("../utils/checkSuccessResponse");

module.exports = function updateData(sheetName, search, set, limit) {
  return new Promise(async (resolve, _) => {
    const options = {};
    if (typeof sheetName !== "string") {
      sheetName = JSON.stringify(sheetName);
    }
    if (typeof search === "object") {
      if (Object.keys(search).length === 0) {
        return resolve({
          success: false,
          data: "Data search tidak boleh kosong",
        });
      }
      options.search = search;
    } else {
      return resolve({
        success: false,
        data: "Data search harus berupa object",
      });
    }
    if (typeof set === "object") {
      options.set = set;
    } else {
      return resolve({
        success: false,
        data: "Data set harus berupa object",
      });
    }
    if (typeof limit === "number") {
      options.limit = limit;
    }

    await steinStore
      .edit(sheetName, options)
      .then((res) => {
        return resolve(checkSuccessResponse(res));
      })
      .catch((err) => {
        return resolve(convertToReadableSteinError(err));
      });
  });
};
