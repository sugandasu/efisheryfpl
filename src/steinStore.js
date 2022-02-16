const { NODE_ENV, STORAGE_URL, STORAGE_TEST_URL } = require("../config/config");
const SteinStore = require("stein-js-client");

module.exports = new SteinStore(
  NODE_ENV === "production" ? STORAGE_URL : STORAGE_TEST_URL
);
