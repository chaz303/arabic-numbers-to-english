function onesDigit(inputNumber) {
  switch (inputNumber) {
    case 0:
      return "zero";
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 6:
      return "six";
    case 7:
      return "seven";
    case 8:
      return "eight";
    case 9:
      return "nine";
  }
}

function tenToNineteen(inputNumber) {
  switch (inputNumber) {
    case 10:
      return "ten";
    case 11:
      return "eleven";
    case 12:
      return "twelve";
    case 13:
      return "thirteen";
    case 14:
      return "fourteen";
    case 15:
      return "fifteen";
    case 16:
      return "sixteen";
    case 17:
      return "seventeen";
    case 18:
      return "eighteen";
    case 19:
      return "nineteen";
  }
}

function twentyToNinety(inputNumber) {
  let output;
  let tens = Math.floor(inputNumber / 10);
  let remainder = inputNumber % 10;

  switch (tens) {
    case 2:
      output = "twenty";
      break;
    case 3:
      output = "thirty";
      break;
    case 4:
      output = "forty";
      break;
    case 5:
      output = "fifty";
      break;
    case 6:
      output = "sixty";
      break;
    case 7:
      output = "seventy";
      break;
    case 8:
      output = "eighty";
      break;
    case 9:
      output = "ninety";
      break;
  }

  if (remainder != 0) {
    return output + " " + onesDigit(remainder);
  } else {
    return output;
  }
}

function tensDigit(inputNumber) {
  if (inputNumber <= 19) {
    return tenToNineteen(inputNumber);
  } else {
    return twentyToNinety(inputNumber);
  }
}

function hundredsDigit(inputNumber) {
  let hundreds = Math.floor(inputNumber / 100);
  let remainder = inputNumber % 100;
  if (remainder >= 1 && remainder <= 9) {
    return onesDigit(hundreds) + " hundred " + onesDigit(remainder);
  } else if (remainder >= 10 && remainder <= 99) {
    return onesDigit(hundreds) + " hundred " + tensDigit(remainder);
  } else {
    return onesDigit(hundreds) + " hundred";
  }
}

function conversion(inputNumber) {
  if (inputNumber <= 9) {
    return onesDigit(inputNumber);
  } else if (inputNumber <= 99) {
    return tensDigit(inputNumber);
  } else if (inputNumber <= 999) {
    return hundredsDigit(inputNumber);
  }
}

console.log(conversion(parseInt(process.argv[2])));

module.exports = conversion;
