const { FISH_PRICE_SHEETNAME } = require("../../config/config");
const searchData = require("./searchData");
const dataIsEmpty = require("../utils/dataIsEmpty");

module.exports = function getMostRecords() {
  return new Promise(async (resolve, _) => {
    try {
      const sheetName = FISH_PRICE_SHEETNAME;

      const resultSearchData = await searchData(sheetName, {});
      if (resultSearchData.success !== true) {
        return resolve(resultSearchData);
      }
      let data = resultSearchData.data.filter((item) => {
        return !dataIsEmpty(item) && !dataIsEmpty(item.komoditas);
      });

      const commodities = data.map((item) => {
        return item.komoditas;
      });
      const commoditiesUnique = [...new Set(commodities)];

      const recordPerCommodities = commoditiesUnique.map((item) => {
        const dataPerCommodity = data.filter((dataItem) => {
          return dataItem.komoditas === item;
        });
        return {
          komoditas: item,
          data: dataPerCommodity,
          total: dataPerCommodity.length,
        };
      });

      const recordPerCommoditiesSorted = recordPerCommodities.sort((a, b) => {
        return b.total - a.total;
      });

      resolve({ success: true, data: recordPerCommoditiesSorted });
    } catch (err) {
      resolve({ success: false, data: err });
    }
  });
};
