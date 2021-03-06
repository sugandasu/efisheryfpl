module.exports = function checkSuccessResponse(res) {
  if (res.error) {
    if (
      res.error.includes(
        "Expected array `req.body` to have a minimum length of `1`, got `0`"
      )
    ) {
      return {
        success: false,
        message: "Data array tidak boleh kosong",
      };
    }
    if (
      res.error.includes(
        "Expected `req.body` to be of type `array` but received type `Object`"
      )
    ) {
      return {
        success: false,
        message: "Format data harus berupa array",
      };
    }
    if (
      res.error.includes(
        "Expected property object `set` to not be empty in object"
      )
    ) {
      return {
        success: false,
        message: "Format data tidak boleh set kosong",
      };
    }
    if (
      res.error.includes(
        "(array `req.body`) Expected `t` to be of type `object` but received type `null`"
      )
    ) {
      return {
        success: false,
        message: "Data tidak boleh kosong",
      };
    }
  }

  return {
    success: true,
    message: res,
  };
};
