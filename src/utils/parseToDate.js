const dataIsEmpty = require("./dataIsEmpty");

module.exports = function parseToDate(data) {
  if (dataIsEmpty(data)) {
    return false;
  }
  let newDate = new Date(data);
  if (newDate.toString() === "Invalid Date") {
    const dataParseInt = parseInt(data);
    if (dataParseInt !== NaN) {
      const timestamp = data.length > 10 ? dataParseInt : dataParseInt * 1000;
      newDate = new Date(timestamp);
      if (newDate.toString() !== "Invalid Date") {
        return newDate;
      }
    }
  } else {
    return newDate;
  }

  return false;
};
