const parseToDate = require("../utils/parseToDate");
const dataIsEmpty = require("../utils/dataIsEmpty");

module.exports = function validateFishPrice(
  komoditas,
  area_provinsi,
  area_kota,
  size,
  price,
  tanggal,
  timestamp
) {
  const errors = {};
  if (dataIsEmpty(komoditas)) {
    errors.komoditas = ["Komoditas tidak boleh kosong"];
  }

  if (dataIsEmpty(area_provinsi)) {
    errors.area_provinsi = ["Area Provinsi tidak boleh kosong"];
  }

  if (dataIsEmpty(area_kota)) {
    errors.area_kota = ["Area Kota tidak boleh kosong"];
  }

  const size_errors = [];
  if (dataIsEmpty(size)) {
    size_errors.push("Ukuran tidak boleh kosong");
  }
  if (typeof size !== "number" || size === isNaN) {
    size_errors.push("Format ukuran harus berupa angka");
  }
  if (size_errors.length > 0) {
    errors.size = size_errors;
  }

  const price_errors = [];
  if (dataIsEmpty(price)) {
    price_errors.push("Harga tidak boleh kosong");
  }
  if (typeof price !== "number" || price === isNaN) {
    price_errors.push("Format harga harus berupa angka");
  }
  if (price_errors.length > 0) {
    errors.price = price_errors;
  }

  const tanggal_errors = [];
  if (dataIsEmpty(tanggal)) {
    tanggal_errors.push("Tanggal tidak boleh kosong");
  }
  if (!parseToDate(tanggal)) {
    tanggal_errors.push("Format tanggal tidak valid");
  }
  if (tanggal_errors.length > 0) {
    errors.tanggal = tanggal_errors;
  }

  const timestamp_errors = [];
  if (dataIsEmpty(timestamp)) {
    timestamp_errors.push("Timestamp tidak boleh kosong");
  }
  if (!parseToDate(timestamp)) {
    timestamp_errors.push("Format timestamp tidak valid");
  }
  if (timestamp_errors.length > 0) {
    errors.timestamp = timestamp_errors;
  }

  return errors;
};
