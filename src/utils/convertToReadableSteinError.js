module.exports = function convertToReadableSteinError(err) {
  if (err.message.includes("Unable to parse range")) {
    return {
      success: false,
      message: `Nama sheet ${sheetName} tidak valid`,
    };
  } else if (err.message.includes("API does not exist")) {
    return {
      success: false,
      message: `Link api ${steinStore.url} tidak ditemukan`,
    };
  } else if (
    err.message.includes(
      "Expected array `req.body` to have a minimum length of `1`, got `0`"
    )
  ) {
    return {
      success: false,
      message: `Data tidak boleh kosong`,
    };
  } else if (err.message.includes("Not all required params were supplied")) {
    return {
      success: false,
      message: `Data tidak boleh kosong`,
    };
  }

  return {
    success: false,
    message: err.message,
  };
};
