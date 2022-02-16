const { FISH_PRICE_SHEETNAME } = require("../../config/config");
const searchData = require("./searchData");
const dataIsEmpty = require("../utils/dataIsEmpty");
const dataIsRange = require("../utils/dataIsRange");
const dataIsInRange = require("../utils/dataIsInRange");
const parseToDate = require("../utils/parseToDate");

module.exports = function getAllByRange(harga, size, tanggal) {
  return new Promise(async (resolve, reject) => {
    try {
      const sheetName = FISH_PRICE_SHEETNAME;
      const ranges = {};
      if (!dataIsEmpty(harga) && dataIsRange(harga)) {
        if (dataIsRange(harga)) {
          ranges.harga = { min: harga.min, max: harga.max };
        }
      }

      if (!dataIsEmpty(size) && dataIsRange(size)) {
        ranges.size = { min: size.min, max: size.max };
      }

      if (!dataIsEmpty(tanggal) && dataIsRange(tanggal)) {
        ranges.tanggal = { min: tanggal.min, max: tanggal.max };
      }

      const resultSearchData = await searchData(sheetName, {});
      if (resultSearchData.success !== true) {
        return resolve(resultSearchData);
      }

      const resultSearchDataFilter = resultSearchData.data.filter((item) => {
        let passed = !dataIsEmpty(item);

        if (passed) {
          if (ranges.harga) {
            if (!dataIsInRange("number", ranges.harga, parseFloat(item.price)))
              return false;
          }

          if (ranges.size) {
            if (!dataIsInRange("number", ranges.size, parseFloat(item.size)))
              return false;
          }

          if (ranges.tanggal) {
            if (
              !dataIsInRange(
                "date",
                ranges.tanggal,
                parseToDate(item.tgl_parsed)
              )
            )
              return false;
          }
        }

        return passed;
      });

      resolve({ success: true, data: resultSearchDataFilter });
    } catch (error) {
      resolve({ success: false, data: error });
    }
  });
};
