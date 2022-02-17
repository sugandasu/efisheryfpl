const { FISH_PRICE_SHEETNAME } = require("../../config/config");
const dataIsEmpty = require("../utils/dataIsEmpty");
const updateData = require("./updateData");
const getById = require("./getById");
const validateOptionalFishPrice = require("../validation/validateOptionalFishPrice");

module.exports = function updateRecord(id, set) {
  return new Promise(async (resolve, _) => {
    try {
      const sheetName = FISH_PRICE_SHEETNAME;
      if (dataIsEmpty(id)) {
        return resolve({ success: false, message: "Id tidak boleh kosong" });
      }
      if (dataIsEmpty(set)) {
        resolve({ success: false, message: "Data set tidak boleh kosong" });
      }

      const { newSet, errors } = validateOptionalFishPrice(set);

      if (Object.keys(errors).length > 0) {
        resolve({ success: false, data: errors });
      }

      if (dataIsEmpty(newSet)) {
        resolve({ success: false, message: "Data set tidak boleh kosong" });
      }

      const resultUpdateData = await updateData(
        sheetName,
        { uuid: id },
        newSet
      );

      if (!resultUpdateData.success) {
        return resolve(resultUpdateData);
      }

      const resultGetById = await getById(id);

      return resolve({ success: true, data: resultGetById.data });
    } catch (err) {
      return resolve({ success: false, data: err });
    }
  });
};
