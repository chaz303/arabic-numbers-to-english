function oneDigit(digit) {
  switch (digit) {
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

function tenToNineteen(digit) {
  switch (digit) {
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

function twentyToNinety(digit) {
  let output;
  let tens = Math.floor(digit / 10);
  let ones = digit % 10;

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

  if (ones != 0) {
    return output + " " + oneDigit(ones);
  } else {
    return output;
  }
}

function twoDigit(digit) {
  if (digit <= 19) {
    return tenToNineteen(digit);
  } else {
    return twentyToNinety(digit);
  }
}

function threeDigit(digit) {
  let hundreds = Math.floor(digit / 100);
  return oneDigit(hundreds) + " hundred";
}

function conversion(digit) {
  if (digit <= 9) {
    return oneDigit(digit);
  } else if (digit <= 99) {
    return twoDigit(digit);
  } else if (digit <= 999) {
    return threeDigit(digit);
  }
}

module.exports = conversion;
