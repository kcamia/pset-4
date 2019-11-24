const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 24;

console.log("");
let height = 0;
do {
  height = Number(readlineSync.question("Height: "));
} while (height < MIN || height > MAX || !Number.isInteger(height));

let length = height + 1;
let starDisplay = 2;
console.log();
for (let row = 0; row < height; row = row + 1) {

    let blank = 1;
    let star = 1;
    let display = "";
    while (blank <= length - starDisplay) {
        display = display + " ";
        blank = blank + 1;
    }

    while (star <= starDisplay) {
        display = display + "#";
        star = star + 1;
    }

    display = display + "  ";
    blank = 1;
    star = 1;

    while (star <= starDisplay) {
        display = display + "#";
        star = star + 1;
    }

    console.log(display);
    starDisplay = starDisplay + 1;
}

console.log("");
