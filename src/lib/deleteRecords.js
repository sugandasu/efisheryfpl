const { FISH_PRICE_SHEETNAME } = require("../../config/config");
const dataIsEmpty = require("../utils/dataIsEmpty");
const deleteData = require("./deleteData");

module.exports = function deleteRecords(id) {
  return new Promise(async (resolve, _) => {
    try {
      const sheetName = FISH_PRICE_SHEETNAME;
      if (dataIsEmpty(id)) {
        return resolve({ success: false, message: "Id tidak boleh kosong" });
      }

      const resultDeleteData = await deleteData(sheetName, { uuid: id });
      if (!resultDeleteData.success) {
        return resolve(resultDeleteData);
      }

      return resolve({ success: true, data: resultDeleteData.data });
    } catch (err) {
      return resolve({ success: false, data: err });
    }
  });
};
