const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 78;

console.log("");
let input = 0;
do {
  input = Number(readlineSync.question("Positive integer: "));
} while (input < MIN || input > MAX);

let ratioOne = 1.618 ** input;
let ratioTwo = 0.618 ** input;

let goldenRuleOne = ratioOne - ratioTwo;
let goldenRuleTwo = goldenRuleOne / 2.236;
let goldenRule = Math.ceil(goldenRuleTwo);
let fibonacciNumber = goldenRule.toLocaleString("en");

console.log("\n" + fibonacciNumber + ".")

console.log("");
