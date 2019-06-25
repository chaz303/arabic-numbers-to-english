const numberDict = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety"
};

function tensDigit(inputNumber) {
  let tens = Math.floor(inputNumber / 10) * 10;
  let remainder = inputNumber % 10;
  if (inputNumber <= 19) {
    return numberDict[inputNumber];
  } else if (remainder != 0) {
    return numberDict[tens] + " " + numberDict[remainder];
  } else {
    return numberDict[tens];
  }
}

function hundredsDigit(inputNumber) {
  let hundreds = Math.floor(inputNumber / 100);
  let remainder = inputNumber % 100;
  if (remainder >= 1 && remainder <= 19) {
    return numberDict[hundreds] + " hundred " + numberDict[remainder];
  } else if (remainder >= 20 && remainder <= 99) {
    return numberDict[hundreds] + " hundred " + tensDigit(remainder);
  } else {
    return numberDict[hundreds] + " hundred";
  }
}

function thousands(inputNumber) {
  let output;
  let thousands = Math.floor(inputNumber / 1000);
  let remainder = inputNumber % 1000;
  if (thousands <= 19) {
    output = numberDict[thousands] + " thousand";
  } else if (thousands <= 99) {
    output = tensDigit(thousands) + " thousand";
  } else {
    output = hundredsDigit(thousands) + " thousand";
  }
  return output;
}

function conversion(inputNumber) {
  if (inputNumber <= 19) {
    return numberDict[inputNumber];
  } else if (inputNumber <= 99) {
    return tensDigit(inputNumber);
  } else if (inputNumber <= 999) {
    return hundredsDigit(inputNumber);
  } else if (inputNumber <= 999999) {
    return thousands(inputNumber);
  }
}

console.log(conversion(parseInt(process.argv[2])));

module.exports = conversion;
