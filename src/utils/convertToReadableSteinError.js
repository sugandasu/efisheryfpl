module.exports = function convertToReadableSteinError(err) {
  if (err.message.includes("Unable to parse range")) {
    return {
      success: false,
      data: `Nama sheet ${sheetName} tidak valid`,
    };
  } else if (err.message.includes("API does not exist")) {
    return {
      success: false,
      data: `Link api ${steinStore.url} tidak ditemukan`,
    };
  } else if (
    err.message.includes(
      "Expected array `req.body` to have a minimum length of `1`, got `0`"
    )
  ) {
    return {
      success: false,
      data: `Data kosong tidak dapat diupload`,
    };
  }

  return {
    success: false,
    data: err.message,
  };
};
