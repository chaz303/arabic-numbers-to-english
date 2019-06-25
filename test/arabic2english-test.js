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

describe("Convert two digit Arabic numerals 10 thru 19 to English", function() {
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

describe("Convert two digit Arabic numerals 20 thru 90 by tens to English", function() {
  it("Given the input 20, function should return twenty", function() {
    assert.equal(app(20), "twenty");
  });
  it("Given the input 90, function should return ninety", function() {
    assert.equal(app(90), "ninety");
  });
});

describe("Convert two digit Arabic numerals 21 thru 99 to English", function() {
  it("Given the input 21, function should return twenty one", function() {
    assert.equal(app(21), "twenty one");
  });
  it("Given the input 99, function should return ninety nine", function() {
    assert.equal(app(99), "ninety nine");
  });
});

describe("Convert three digit Arabic numerals 100 thru 900 by hundreds to English", function() {
  it("Given the input 100, function should return one hundred", function() {
    assert.equal(app(100), "one hundred");
  });
  it("Given the input 900, function should return nine hundred", function() {
    assert.equal(app(900), "nine hundred");
  });
});
