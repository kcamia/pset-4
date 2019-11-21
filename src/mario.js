const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 24;

console.log("")
let height = 0;
do {
  height = readlineSync.question("Height: ")
} while (height < MIN || height > MAX || !Number.isInteger(height));

console.log("");
