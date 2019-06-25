const assert = require("chai").assert;
const app = require("../arabic2english");

describe("Arabic numerals to english conversion", function() {
  it("givin the input 1 function should return one", function() {
    assert.equal(app(1), "one");
  });
  it("givin the input 7 function should return seven", function() {
    assert.equal(app(7), "seven");
  });
});
