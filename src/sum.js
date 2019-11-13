const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

console.log("");
let lower = -1;
let upper = 0;
do {
  lower = Number(readlineSync.question("Lower bound: "));
  upper = Number(readlineSync.question("Upper bound: "));
} while (lower >= upper || lower < MIN || upper > MAX);

let number = lower;
do {
  
} while (number >= lower || number <= upper);

for (let number ; number <= upper; number++) {

}



console.log("\n" + display + ".")
