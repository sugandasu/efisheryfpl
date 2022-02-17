const { FISH_PRICE_SHEETNAME } = require("../../config/config");
const searchData = require("./searchData");

module.exports = function getAll(options) {
  return new Promise(async (resolve, _) => {
    try {
      const sheetName = FISH_PRICE_SHEETNAME;
      const { search, limit, offset } = options;
      const resultSearchData = await searchData(
        sheetName,
        search ?? {},
        limit,
        offset
      );
      if (resultSearchData.success !== true) {
        return resolve(resultSearchData);
      }

      return resolve({ success: true, data: resultSearchData.data });
    } catch (err) {
      return resolve({ success: false, data: err });
    }
  });
};
