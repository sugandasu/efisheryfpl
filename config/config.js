require("dotenv-safe").config({
  allowEmptyValues: false,
});

module.exports.NODE_ENV = process.env.NODE_ENV || "production";
module.exports.STORAGE_URL = process.env.STORAGE_URL;
module.exports.STORAGE_TEST_URL = process.env.STORAGE_TEST_URL;
module.exports.FISH_PRICE_URL = process.env.FISH_PRICE_URL;
module.exports.OPTION_AREA_URL = process.env.OPTION_AREA_URL;
module.exports.OPTION_SIZE_URL = process.env.OPTION_SIZE_URL;
