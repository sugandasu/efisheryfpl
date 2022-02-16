const { expect } = require("chai");
const { describe, it } = require("mocha");
const createKey = require("../../src/utils/createKey");

describe("createKey", function () {
  it("should return a key string with only alphanumeric character", function () {
    const result = createKey([
      "SULAWESI TENGAH",
      "POSO",
      "PALU",
      "JAWA BARAT 22",
    ]);
    expect(result).to.be.a("string");
    expect(result).to.be.equal("SULAWESI_TENGAH-POSO-PALU-JAWA_BARAT_22");
  });
});
