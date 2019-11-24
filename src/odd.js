const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

console.log("");
let input = 0;
do {
  input = Number(readlineSync.question("Positive integer: "));
} while (input < MIN || input > MAX || input <= 0 || !Number.isInteger(input));

let number = 0;
let sum = 0;
do {
  number = input % 10;
  input = Math.floor(input / 10);
  let test = number % 2;
  if (test !== 0){
    sum = sum + number;
  } else (
    sum = sum + 0
  )
} while (input > 0);

console.log("\n" + sum + ".")

console.log("");
