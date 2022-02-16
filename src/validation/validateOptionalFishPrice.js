const parseToDate = require("../utils/parseToDate");
const dataIsEmpty = require("../utils/dataIsEmpty");

module.exports = function validateOptionalFishPrice(set) {
  const errors = {};
  const newSet = {};

  if (!dataIsEmpty(set)) {
    if (set.hasOwnProperty("komoditas")) {
      newSet.komoditas = set.komoditas;
    }
    if (set.hasOwnProperty("area_provinsi")) {
      newSet.area_provinsi = set.area_provinsi;
    }
    if (set.hasOwnProperty("area_kota")) {
      newSet.area_kota = set.area_kota;
    }
    if (set.hasOwnProperty("size")) {
      if (typeof set.size !== "number" || set.size === isNaN) {
        errors.size = ["Format ukuran harus berupa angka"];
      } else {
        newSet.size = set.size;
      }
    }
    if (set.hasOwnProperty("price")) {
      if (typeof set.price !== "number" || set.price === isNaN) {
        errors.price = ["Format harga harus berupa angka"];
      } else {
        newSet.price = set.price;
      }
    }
    if (set.hasOwnProperty("tanggal")) {
      if (!parseToDate(set.tanggal)) {
        errors.tanggal = ["Format tanggal tidak valid"];
      } else {
        newSet.tgl_parsed = parseToDate(set.tanggal).toISOString();
      }
    }
    if (set.hasOwnProperty("timestamp")) {
      if (!parseToDate(set.timestamp)) {
        errors.timestamp = ["Format timestamp tidak valid"];
      } else {
        newSet.timestamp = parseToDate(set.timestamp).getTime();
      }
    }
  }

  return { newSet, errors };
};
