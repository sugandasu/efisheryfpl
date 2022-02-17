const { FISH_PRICE_SHEETNAME } = require("../../config/config");
const searchData = require("./searchData");
const dataIsEmpty = require("../utils/dataIsEmpty");
const moment = require("moment");
const dataIsInRange = require("../utils/dataIsInRange");
const parseToDate = require("../utils/parseToDate");
const parseToInt = require("../utils/parseToInt");

module.exports = function getMaxPrice(filter) {
  return new Promise(async (resolve, _) => {
    try {
      const sheetName = FISH_PRICE_SHEETNAME;
      moment.locale("id");

      const resultSearchData = await searchData(sheetName, {});
      if (resultSearchData.success !== true) {
        return resolve(resultSearchData);
      }
      let data = resultSearchData.data.filter((item) => {
        return !dataIsEmpty(item);
      });

      if (
        !dataIsEmpty(filter) &&
        typeof filter === "object" &&
        !Array.isArray(filter)
      ) {
        if (filter.hasOwnProperty("week")) {
          const weekInt = parseToInt(filter.week);
          if (weekInt !== false) {
            const thisWeekStart = moment().isoWeek(weekInt).startOf("isoWeek");
            const thisWeekEnd = moment().isoWeek(weekInt).endOf("isoWeek");
            const thisWeekStartDate = new Date(
              thisWeekStart.format("YYYY-MM-DD")
            ).getTime();
            const thisWeekEndDate = new Date(
              thisWeekEnd.format("YYYY-MM-DD")
            ).getTime();

            data = data.filter((item) => {
              return dataIsInRange(
                "date",
                { min: thisWeekStartDate, max: thisWeekEndDate },
                parseToDate(item.tgl_parsed)
              );
            });
          }
        }
        if (filter.hasOwnProperty("commodity")) {
          data = data.filter((item) => {
            return item.komoditas === filter.commodity;
          });
        }
      }

      const maxPrice = data.reduce((prev, curr) => {
        return prev > parseInt(curr.price) ? prev : parseInt(curr.price);
      }, Number.NEGATIVE_INFINITY);

      resolve({ success: true, data: maxPrice >= 0 ? maxPrice : 0 });
    } catch (err) {
      resolve({ success: false, data: err });
    }
  });
};
