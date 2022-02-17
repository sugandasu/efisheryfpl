const addRecords = require("./lib/addRecords");
const updateRecords = require("./lib/updateRecords");
const deleteRecords = require("./lib/deleteRecords");
const getById = require("./lib/getById");
const getAllByCommodity = require("./lib/getAllByCommodity");
const getByArea = require("./lib/getAllByRange");
const getAllByRange = require("./lib/getAllByRange");
const getMaxPrice = require("./lib/getMaxPrice");
const getMostRecords = require("./lib/getMostRecords");

module.exports = {
  addRecords,
  updateRecords,
  deleteRecords,
  getById,
  getAllByCommodity,
  getByArea,
  getAllByRange,
  getMaxPrice,
  getMostRecords,
};
