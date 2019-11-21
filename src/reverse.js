const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

console.log("");
let input = 0;
do {
  input = Number(readlineSync.question("Positive integer: "))
} while (input <= MIN || input >= MAX || input <= 0 || !Number.isInteger(input));

let number = 0;
let reverse = "";
do {
  number = input % 10;
  input = Math.floor(input / 10);
  if (input > 0) {
    reverse = reverse + number + ", ";
  } else {
    reverse = reverse + number;
  }
} while (input > 0);

console.log("\n" + reverse + ".");
