const { Command } = require("commander");
const { sheetList, columnList } = require("../helper/getCliVariables");
const convertColumnsToSheets = require("../helper/convertColumnsToSheets");
const orderData = require("../helper/orderData");
const cleanData = require("../helper/cleanData");
const filterRangeData = require("../helper/filterRangeData");
const limitData = require("../helper/limitData");
const addUsdToData = require("../helper/addUsdToData");
const getAll = require("../lib/getAll");
const convertRangeToRangeObject = require("../helper/convertRangeToRangeObject");
const dataIsEmpty = require("../utils/dataIsEmpty");

const command = new Command("all");

command
  .description("Get all data harga perikanan di Indonesia")
  .option("-l, --limit [number]", "Jumlah data maksimum yang ditampilkan")
  .option(
    "-o, --offset <number>",
    "Jumlah data yang akan dilewati dari awal data",
    0
  )
  .option(
    "-s, --search <kolom=nilai...>",
    `Cari data berdasarkan daftar kolom=nilai, cth: komoditas="Ikan Salmon" area_kota="Buleleng". Kolom (${columnList.join(
      ", "
    )})`
  )
  .option(
    "--range <kolom=min,max...>",
    `Cari data berdasarkan range dari kolom=min,max. Cth: harga=50000,150000 tanggal="2022-02-15","2022-02-30". Kolom (harga, size, tanggal)`
  )
  .option(
    "--order <kolom>",
    `Urut data berdasarkan kolom. Kolom(${columnList.join(", ")})`,
    "tanggal"
  )
  .option(
    "--order-direction <direction>",
    `Tipe pengurutan data (asc/desc)`,
    "asc"
  )
  .option("--to-usd", `Tambahkan kolom konversi dari rupiah ke dollar`);

command.action((options) => {
  const searchOptions = {};
  let rangeOptions = {};
  if (options.search) {
    searchOptions.search = convertColumnsToSheets(options.search);
  }
  if (options.range) {
    rangeOptions = convertRangeToRangeObject(options.range);
  }

  getAll(searchOptions).then((data) => {
    if (data.success === false) {
      console.log(data);
      return;
    }

    const cleanedData = cleanData(data.data);

    if (columnList.indexOf(options.order) === -1) {
      console.log({ success: data.success, data: cleanedData });
      return;
    }

    let optionalData = [];

    const orderedData = orderData(
      cleanedData,
      options.order,
      options.orderDirection
    );

    if (!dataIsEmpty(rangeOptions)) {
      optionalData = filterRangeData(orderedData, rangeOptions);
    } else {
      optionalData = orderedData;
    }

    if (!dataIsEmpty(options.limit)) {
      optionalData = limitData(optionalData, options.limit, options.offset);
    }

    if (!dataIsEmpty(options.toUsd)) {
      optionalData = addUsdToData(optionalData);
    }

    console.log({ success: data.success, data: optionalData });
  });
});

module.exports = command;
