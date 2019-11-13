const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

console.log("");
let input = 0;
let sum = 0;
do {
  input = readlineSync.question("Non-negative integer: ");

    if (input >= 0) {
      sum = sum + input;
    }
} while (input >= 0);
