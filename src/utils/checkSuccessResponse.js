module.exports = function checkSuccessResponse(res) {
  if (res.error) {
    if (
      res.error.includes(
        "Expected array `req.body` to have a minimum length of `1`, got `0`"
      )
    ) {
      return {
        success: false,
        data: "Data kosong tidak dapat tambahkan",
      };
    }
    if (
      res.error.includes(
        "Expected `req.body` to be of type `array` but received type `Object`"
      )
    ) {
      return {
        success: false,
        data: "Format data tidak berupa array",
      };
    }
    if (
      res.error.includes(
        "Expected property object `set` to not be empty in object"
      )
    ) {
      return {
        success: false,
        data: "Format data berupa empty set",
      };
    }
  }

  return {
    success: true,
    data: res,
  };
};
