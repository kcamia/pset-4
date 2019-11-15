const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

console.log("");
let input = 0;
let sum = 0;
let amount = 0;
do {
  input = readlineSync.question("Non-negative integer: ");

  if (input !== -1) {
    sum = sum + input;
    amount = amount + 1;
  }
} while (input !== -1 || !Number.isInteger(input));

let calculate = sum / amount;
let average = calculate.toLocaleString("en",{minimumFractionDigits: 3, maximumFractionDigits: 3});

console.log("\n" + average + ".")
