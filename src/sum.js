const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

console.log("");
let lower = -1;
let upper = 0;
do {
  lower = readlineSync.question("Lower bound: ");
  upper = readlineSync.question("Upper bound: ");
} while (lower >= upper || lower < MIN || upper > MAX);

let sum = 0;
do {

} while ();



console.log("\n" + display + ".")
