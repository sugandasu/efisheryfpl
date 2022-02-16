const { FISH_PRICE_SHEETNAME } = require("../../config/config");
const dataIsEmpty = require("../utils/dataIsEmpty");
const validateFishPrice = require("../validation/validateFishPrice");
const { v4: uuidv4 } = require("uuid");
const addOneData = require("./addOneData");
const parseToDate = require("../utils/parseToDate");

module.exports = function addRecords(
  komoditas,
  area_provinsi,
  area_kota,
  size,
  price,
  tangal,
  timestamp
) {
  return new Promise(async (resolve, _) => {
    try {
      const sheetName = FISH_PRICE_SHEETNAME;
      const errors = validateFishPrice(
        komoditas,
        area_provinsi,
        area_kota,
        size,
        price,
        tangal,
        timestamp
      );
      if (!dataIsEmpty(errors)) {
        resolve({ success: false, data: errors });
      }

      const uuid = uuidv4();
      const tgl_parsed = parseToDate(tangal).toISOString();
      const newTimestamp = parseToDate(timestamp).getTime();

      const newData = {
        uuid,
        komoditas,
        area_provinsi,
        area_kota,
        size,
        price,
        tgl_parsed,
        timestamp: newTimestamp,
      };

      const resultAddOneData = await addOneData(sheetName, newData);

      if (!resultAddOneData.success) {
        return resolve(resultAddOneData);
      }

      return resolve({ success: true, data: newData });
    } catch (err) {
      return resolve({ success: false, data: err });
    }
  });
};
