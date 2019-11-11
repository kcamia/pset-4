const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

console.log("");
let integer = 0;
do {
  integer = readlineSync.question("Positive integer: ");
} while (integer < MIN || integer > MAX );

// print in reverse order

console.log("\n" + integer)
