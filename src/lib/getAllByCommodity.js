const { FISH_PRICE_SHEETNAME } = require("../../config/config");
const searchData = require("./searchData");

module.exports = function getAllByCommodity(comodity) {
  return new Promise(async (resolve, reject) => {
    try {
      const sheetName = FISH_PRICE_SHEETNAME;
      const resultSearchData = await searchData(sheetName, {
        komoditas: comodity,
      });
      if (resultSearchData.success !== true) {
        return resolve(resultSearchData);
      }

      return resolve({ success: true, data: resultSearchData.data });
    } catch (err) {
      return resolve({ success: false, data: err });
    }
  });
};
