const { FISH_PRICE_SHEETNAME } = require("../../config/config");
const searchData = require("./searchData");

module.exports = function getById(id) {
  return new Promise(async (resolve, _) => {
    try {
      const sheetName = FISH_PRICE_SHEETNAME;
      const resultSearchData = await searchData(
        sheetName,
        {
          uuid: id,
        },
        1
      );
      if (resultSearchData.success !== true) {
        return resolve(resultSearchData);
      }

      return resolve({
        success: true,
        data: resultSearchData.data[0] ? resultSearchData.data[0] : null,
      });
    } catch (err) {
      return resolve({ success: false, data: err });
    }
  });
};
