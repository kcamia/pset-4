const readlineSync = require("readline-sync");

const MIN = 1000000000000;
const MAX = 9999999999999999;

let input = 0;
console.log("");
do {
  input = Number(readlineSync.question("Number: "));
} while (input < MIN || input > MAX || !Number.isInteger(input));

// multiply every other then add

let cardOtherNumber = input;
let everyOther = 0;
let everyOtherNumber = 0;
let everyOtherTwo = 0;
let everyOtherSum = 0;
let tensPlace = 1;
let onesPlace = 0;
while (cardOtherNumber > 0) {
  everyOther = cardOtherNumber % 100;
  everyOtherNumber = Math.floor(everyOther * 0.1);
  everyOtherTwo = everyOtherTwo * 2;
  if (everyOtherTwo >= 2) {
    onesPlace = everyOtherTwo % 10;
    everyOtherSum = everyOtherSum + tensPlace + onesPlace;
  } else {
    everyOtherSum = everyOtherSum + everyOtherTwo;
  }
  cardOtherNumber = Math.floor(cardOtherNumber / 100);
}

// add not every other

let cardNotOtherNumber = input;
let notOther = 0;
let notOtherSum = 0;
while (cardNotOtherNumber > 0) {
  notOther = cardNotOtherNumber % 10;
  notOtherSum = notOtherSum + notOther;
  cardNotOtherNumber = Math.floor(cardNotOtherNumber / 100);
}

// add steps

let totalSum = everyOtherSum + notOtherSum;

// valid test

let sumLastDigit = totalSum % 10;

if (sumLastDigit !== 0) {
  let test = false;
}

// how many numbers

let toString = String(input);
let length = toString.length;
let startingDigits = 0;
let visaStartingDigits = 0;

if (length == 15) {
  startingDigits = Math.floor(input / 10000000000000);
} else if (length == 16) {
  startingDigits = Math.floor(input / 100000000000000);
  visaStartingDigits = Math.floor(input / 1000000000000000);
} else if (length == 13) {
  startingDigits = Math.floor(input / 100000000000);
} else {
  console.log("\nInvalid.")
}

// which card

if (test = false) {
  console.log("\nInvalid.");
} else if (length == 15 && (startingDigits == 34 || startingDigits == 37)) {
  console.log("\nAmex.");
} else if (length == 16 && (startingDigits == 51 || startingDigits == 52 || startingDigits == 53 || startingDigits == 54 || startingDigits == 55)) {
  console.log("\nMastercard.");
} else if (length == 16 && visaStartingDigits == 4) {
  console.log("\nVisa.");
} else if (length == 13 && visaStartingDigits == 4) {
  console.log("\nVisa.");
} else {
  console.log("\nInvalid.");
}

console.log("");
