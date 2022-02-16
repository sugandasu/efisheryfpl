import { NODE_ENV, STORAGE_URL, STORAGE_TEST_URL } from "../config/config";
const SteinStore = require("stein-js-client");

module.exports.steinStore = new SteinStore(
  NODE_ENV === "production" ? STORAGE_URL : STORAGE_TEST_URL
);
