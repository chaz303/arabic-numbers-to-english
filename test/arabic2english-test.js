const assert = require("chai").assert;
const app = require("../arabic2english");

describe("Convert single digit Arabic numerals to English", function() {
  it("Given the input 1, function should return one", function() {
    assert.equal(app(1), "one");
  });
  it("Given the input 9, function should return nine", function() {
    assert.equal(app(9), "nine");
  });
});

describe("Convert two digit Arabic numerals to English", function() {
  it("Given the input 10, function should return ten", function() {
    assert.equal(app(10), "ten");
  });
  it("Given the input 11, function should return eleven", function() {
    assert.equal(app(11), "eleven");
  });
  it("Given the input 19, function should return nineteen", function() {
    assert.equal(app(19), "nineteen");
  });
});
