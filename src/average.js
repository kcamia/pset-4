const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

console.log("");
let input = 0;
let sum = 0;
let amount = 0;
do {
  input = Number(readlineSync.question("Non-negative integer: "));
  if (input >= MIN && input < MAX && Number.isInteger(input)) {
    sum = sum + input;
    amount = amount + 1;
  }
} while (input > 0);

let average = sum / amount;
average = average.toLocaleString("en", {minimumFractionDigits: 3, maximumFractionDigits: 3});

console.log("\n" + average + ".");

console.log("");
