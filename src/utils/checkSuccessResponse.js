module.exports = function checkSuccessResponse(res) {
  if (res.error) {
    if (
      res.error.includes(
        "Expected array `req.body` to have a minimum length of `1`, got `0`"
      )
    ) {
      return {
        success: false,
        data: "Data tidak boleh kosong",
      };
    }
    if (
      res.error.includes(
        "Expected `req.body` to be of type `array` but received type `Object`"
      )
    ) {
      return {
        success: false,
        data: "Format data harus array",
      };
    }
    if (
      res.error.includes(
        "Expected property object `set` to not be empty in object"
      )
    ) {
      return {
        success: false,
        data: "Format data tidak boleh set kosong",
      };
    }
    if (
      res.error.includes(
        "(array `req.body`) Expected `t` to be of type `object` but received type `null`"
      )
    ) {
      return {
        success: false,
        data: "Data tidak boleh kosong",
      };
    }
  }

  return {
    success: true,
    data: res,
  };
};
