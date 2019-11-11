const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let lower = -1;
let upper = 0;
do {
  lower = readlineSync.question("\nLower bound: ");
  upper = readlineSync.question("Upper bound: ");
} while (lower >= upper || lower < MIN || upper > MAX);

//calculate sum

console.log("\n" + display + ".")
