const steinStore = require("../steinStore");
const convertToReadableSteinError = require("../utils/convertToReadableSteinError");

module.exports = function searchData(sheetName, search, limit, offset) {
  return new Promise(async (resolve, _) => {
    const options = {};
    if (typeof sheetName !== "string") {
      sheetName = JSON.stringify(sheetName);
    }
    if (typeof search === "object") {
      options.search = search;
    }
    if (typeof limit === "number") {
      options.limit = limit;
    }
    if (typeof offset === "number") {
      options.offset = offset;
    }

    await steinStore
      .read(sheetName, options)
      .then((res) => {
        resolve({
          success: true,
          data: res,
        });
      })
      .catch((err) => {
        resolve(convertToReadableSteinError(err));
      });
  });
};
