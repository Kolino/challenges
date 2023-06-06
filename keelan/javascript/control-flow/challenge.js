// const x = parseInt(prompt("Enter x:"));
// const y = parseInt(prompt("Enter y:"));

// if (x > y) console.log("x is greater than y");
// else if (y > x) console.log("x is smaller than y");
// else console.log("x is equal to y");

// Part 2
const userInput = prompt("Enter user input:");

const asNum = parseInt(userInput);
if (!isNaN(asNum)) console.log(Math.pow(asNum, 2));
else if (typeof userInput === "string") console.log(userInput);
else console.log("Invalid input");
