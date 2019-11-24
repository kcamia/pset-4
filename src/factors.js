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
for (test = 1; test < (input / 2); test = test + 1) {
  factor = input / test;
  if (input % test == 0 && test <= factor) {
    if (test == 1) {
      display = display + test + ", " + input;
    } else if (test == factor) {
      display = display + ", " + test;
    } else {
      display = display + ", " + test + ", " + factor;
    }
  }
}

console.log("\n" + display + ".")

console.log("");
