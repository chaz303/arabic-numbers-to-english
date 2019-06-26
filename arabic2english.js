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

function tens(inputNumber) {
  let tens = Math.floor(inputNumber / 10) * 10;
  let remainder = inputNumber % 10;
  if (remainder != 0) {
    return numberDict[tens] + "-" + numberDict[remainder];
  } else {
    return numberDict[tens];
  }
}

function hundreds(inputNumber) {
  let hundreds = Math.floor(inputNumber / 100);
  let remainder = inputNumber % 100;
  let output = numberDict[hundreds] + " hundred";
  if (remainder != 0) {
    return output + " " + conversion(remainder);
  } else {
    return output;
  }
}

function thousands(inputNumber) {
  let thousands = Math.floor(inputNumber / 1000);
  let remainder = inputNumber % 1000;
  let output = conversion(thousands) + " thousand";
  if (remainder != 0) {
    return output + " " + conversion(remainder);
  } else {
    return output;
  }
}

function millions(inputNumber) {
  let millions = Math.floor(inputNumber / 1000000);
  let remainder = inputNumber % 1000000;
  let output = conversion(millions) + " million";
  if (remainder != 0) {
    return output + " " + conversion(remainder);
  } else {
    return output;
  }
}

function conversion(inputNumber) {
  if (inputNumber <= 19) {
    return numberDict[inputNumber];
  } else if (inputNumber <= 99) {
    return tens(inputNumber);
  } else if (inputNumber <= 999) {
    return hundreds(inputNumber);
  } else if (inputNumber <= 999999) {
    return thousands(inputNumber);
  } else if (inputNumber <= 999999999) {
    return millions(inputNumber);
  } else {
    return "Number is too large.";
  }
}

console.log(conversion(parseInt(process.argv[2])));

module.exports = conversion;
