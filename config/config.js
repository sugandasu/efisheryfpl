require("dotenv-safe").config({
  allowEmptyValues: false,
});
const SteinStore = require("stein-js-client");

module.exports.STORAGE_URL = process.env.STORAGE_URL;
module.exports.FISH_PRICE_URL = process.env.FISH_PRICE_URL;
module.exports.OPTION_AREA_URL = process.env.OPTION_AREA_URL;
module.exports.OPTION_SIZE_URL = process.env.OPTION_SIZE_URL;
module.exports.steinStore = new SteinStore(process.env.STORAGE_URL);