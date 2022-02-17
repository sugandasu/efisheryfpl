const { Command } = require("commander");
const { sheetList, columnList } = require("../helper/getCliVariables");
const convertColumnsToSheets = require("../helper/convertColumnsToSheets");
const orderData = require("../helper/orderData");
const cleanData = require("../helper/cleanData");
const limitData = require("../helper/limitData");
const getAll = require("../lib/getAll");

const command = new Command("all");

command
  .description("Get all data harga perikanan di Indonesia")
  .option("-l, --limit [number]", "Jumlah data")
  .option("-o, --offset <number>", "Lewati data", 0)
  .option(
    "-s, --search <kolom=nilai...>",
    `Cari data berdasarkan daftar kolom=nilai, cth: komoditas="Ikan Salmon", kolom (${columnList.join(
      ", "
    )})`
  )
  .option(
    "--order <kolom>",
    `Urut data berdasarkan kolom, kolom(${columnList.join(", ")})`,
    "tgl_parsed"
  )
  .option("--order-direction <direction>", `Pengurutan data (asc/desc)`, "asc");

command.action((options) => {
  const searchOptions = {};
  if (options.search) {
    searchOptions.search = convertColumnsToSheets(options.search);
  }

  getAll(searchOptions).then((data) => {
    if (data.success === false) {
      console.log(data);
      return;
    }

    const cleanedData = cleanData(data.data);

    if (sheetList.indexOf(options.order) === -1) {
      console.log({ success: data.success, data: cleanedData });
      return;
    }

    const orderedData = orderData(
      cleanedData,
      options.order,
      options.orderDirection
    );

    const limitedData = limitData(orderedData, options.limit, options.offset);

    console.log({ success: data.success, data: limitedData });
  });
});

module.exports = command;
