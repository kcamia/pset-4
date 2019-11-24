const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

console.log("");
let lower = -1;
let upper = 0;
do {
  lower = Number(readlineSync.question("Lower bound: "));
  upper = Number(readlineSync.question("Upper bound: "));
} while (lower > upper || lower < MIN || upper > MAX || !Number.isInteger(lower) || !Number.isInteger(upper));

let test = lower % 2;

if (test != 0) {
  lower = lower + 1;
}

let sum = 0;
for (let i = lower; i <= upper; i = i + 2) {
  sum = sum + i;
}

let display = sum.toLocaleString("en");

console.log("\n" + display + ".")

console.log("");
