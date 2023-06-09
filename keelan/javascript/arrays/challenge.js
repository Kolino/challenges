// Part 1
const hobbies = ["sports", "gaming", "programming"];
console.log(hobbies[0]);
const firstElem = hobbies.shift();
const hobbiesLen = hobbies.length;
hobbies.push("maths");
console.log(hobbies[hobbies.length - 1]);
// Bonus
console.log(`My hobbies are: ${hobbies.join(", ")}`);

// Part 2
const groceries = ["milk", "meat", "rice", "fruit", "honey"];
console.log(groceries.join("|"));