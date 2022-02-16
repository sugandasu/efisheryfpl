const { assert } = require("chai");
const { describe, it } = require("mocha");
const dataIsEmpty = require("../../src/utils/dataIsEmpty");

describe("dataIsEmpty", function () {
  it("should return true if data is undefined", function () {
    const result = dataIsEmpty();
    assert(result === true);
  });

  it("should return true if data is null", function () {
    const result = dataIsEmpty(null);
    assert(result === true);
  });

  it("should return true if data is empty string", function () {
    const result = dataIsEmpty("");
    assert(result === true);
  });

  it("should return false if data is provided", function () {
    const result = dataIsEmpty("test");
    assert(result === false);
  });
});
