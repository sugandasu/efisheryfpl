module.exports = function converPriceToUsd(idr) {
  const exchangeRate = 14324.55; // Feb 17, 11:57 UTC;

  return idr / exchangeRate;
};
