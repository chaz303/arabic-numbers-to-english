const assert = require("chai").assert;
const app = require("../arabic2english");

describe("Convert single digit Arabic numerals to English", function() {
  it("Given the input '0', function should return 'zero'", function() {
    assert.equal(app(0), "zero");
  });
  it("Given the input '1', function should return 'one'", function() {
    assert.equal(app(1), "one");
  });
  it("Given the input '9', function should return 'nine'", function() {
    assert.equal(app(9), "nine");
  });
});

describe("Convert two digit Arabic numerals 10 thru 19 to English", function() {
  it("Given the input '10', function should return 'ten'", function() {
    assert.equal(app(10), "ten");
  });
  it("Given the input '11', function should return 'eleven'", function() {
    assert.equal(app(11), "eleven");
  });
  it("Given the input '19', function should return 'nineteen'", function() {
    assert.equal(app(19), "nineteen");
  });
});

describe("Convert two digit Arabic numerals 20 thru 90 by tens to English", function() {
  it("Given the input '20', function should return 'twenty'", function() {
    assert.equal(app(20), "twenty");
  });
  it("Given the input '90', function should return 'ninety'", function() {
    assert.equal(app(90), "ninety");
  });
});

describe("Convert two digit Arabic numerals 21 thru 99 to English", function() {
  it("Given the input '21', function should return 'twenty one'", function() {
    assert.equal(app(21), "twenty one");
  });
  it("Given the input '99', function should return 'ninety nine'", function() {
    assert.equal(app(99), "ninety nine");
  });
});

describe("Convert three digit Arabic numerals 100 thru 900 by hundreds to English", function() {
  it("Given the input '100', function should return 'one hundred'", function() {
    assert.equal(app(100), "one hundred");
  });
  it("Given the input '900', function should return 'nine hundred'", function() {
    assert.equal(app(900), "nine hundred");
  });
});

describe("Convert three digit Arabic numerals 101 thru 999 to English", function() {
  it("Given the input '101', function should return 'one hundred one'", function() {
    assert.equal(app(101), "one hundred one");
  });
  it("Given the input '111', function should return 'one hundred eleven'", function() {
    assert.equal(app(111), "one hundred eleven");
  });
  it("Given the input '999', function should return 'nine hundred ninety nine'", function() {
    assert.equal(app(999), "nine hundred ninety nine");
  });
});

describe("Convert Arabic numerals 1,000 thru 999,000 by thousands to English", function() {
  it("Given the input '1000', function should return 'one thousand'", function() {
    assert.equal(app(1000), "one thousand");
  });
  it("Given the input '10000', function should return 'ten thousand'", function() {
    assert.equal(app(10000), "ten thousand");
  });
  it("Given the input '999000', function should return 'nine hundred ninety nine thousand'", function() {
    assert.equal(app(999000), "nine hundred ninety nine thousand");
  });
});

describe("Convert Arabic numerals 1,001 thru 999,999 to English", function() {
  it("Given the input '1001', function should return 'one thousand one'", function() {
    assert.equal(app(1001), "one thousand one");
  });
  it("Given the input '10010', function should return 'ten thousand ten'", function() {
    assert.equal(app(10010), "ten thousand ten");
  });
  it("Given the input '999999', function should return 'nine hundred ninety nine thousand nine hundred ninety nine'", function() {
    assert.equal(
      app(999999),
      "nine hundred ninety nine thousand nine hundred ninety nine"
    );
  });
});
