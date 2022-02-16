const { FISH_PRICE_SHEETNAME } = require("../../config/config");
const searchData = require("./searchData");
const dataIsEmpty = require("../utils/dataIsEmpty");
const dataIsArea = require("../utils/dataIsArea");

module.exports = function getByArea(area) {
  return new Promise(async (resolve, _) => {
    try {
      const sheetName = FISH_PRICE_SHEETNAME;
      const areas = {};
      if (!dataIsEmpty(area) && dataIsArea(area)) {
        if (area.hasOwnProperty("area_provinsi")) {
          areas.area_provinsi = area.area_provinsi;
        }
        if (area.hasOwnProperty("area_kota")) {
          areas.area_kota = area.area_kota;
        }
      }

      const resultSearchData = await searchData(sheetName, areas);
      if (resultSearchData.success !== true) {
        return resolve(resultSearchData);
      }

      resolve(resultSearchData);
    } catch (error) {
      resolve({ success: false, data: error });
    }
  });
};
