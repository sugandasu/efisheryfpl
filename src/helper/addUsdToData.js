const convertToUsd = require("./convertPriceToUsd");
const dataIsEmpty = require("../utils/dataIsEmpty");
const cacheService = require("../cache");

const cache = new cacheService(60);

module.exports = function addUsdToData(data) {
  if (dataIsEmpty(data) || !Array.isArray(data)) {
    return [];
  }
  return data.map((item) => {
    if (item.harga) {
      let usd = "";

      if (dataIsEmpty(usd)) {
        usd = parseFloat(convertToUsd(item.harga).toFixed(2));
        cache.set(`price_${item.harga}`, usd);
      }

      item["usd"] = usd;
    } else {
      item["usd"] = 0;
    }

    return item;
  });
};
