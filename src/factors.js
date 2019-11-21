const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

console.log("");
let input = 0;
do {
  input = Number(readlineSync.question("Positive integer: "));
} while (input < MIN || input > MAX || !Number.isInteger);

let display = "";
let factor = 0;
for (test = 1; test < input; test = test + 1) {
  if (input % test == 0) {
    factor = input / test;
    display = display + test + factor + ", ";
  }
}

console.log("\n" + display + ".")
//no
