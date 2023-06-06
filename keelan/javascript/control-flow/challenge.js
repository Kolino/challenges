// const x = parseInt(prompt("Enter x:"));
// const y = parseInt(prompt("Enter y:"));

// if (x > y) console.log("x is greater than y");
// else if (y > x) console.log("x is smaller than y");
// else console.log("x is equal to y");

// Part 2
// const userInput = prompt("Enter user input:");

// // const asNum = parseInt(userInput);
// // if (!isNaN(asNum)) console.log(Math.pow(asNum, 2));
// // else if (typeof userInput === "string") console.log(userInput);
// // else console.log("Invalid input");

// Part 3 - Tell me the day
const currentDate = new Date();
const currentDay = currentDate.getDay();

switch (currentDay) {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    default:
        console.log("Invalid day given");
}

// Part 4 - Eye colour
let parent1 = "brown", parent2 = "blue";
let hit = false;
// Tries with current configuration of parent1 and parent2 before trying with them swapped
// If no hits, then input is invalid
// There's no need to break since only 1 set will ever trigger
for (let i = 0; i < 2; i++) {
    // Double brown
    if (parent1 === "brown" && parent2 === "brown") {
        console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 6.25%, brown is 75% and green is 18.75%`);
        hit = true;
    }
    // Green + brown
    else if (parent1 === "green" && parent2 === "brown") {
        console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 12.5%, brown is 50% and green is 37.5%`);
        hit = true;
    }
    // Blue + brown
    else if (parent1 === "blue" && parent2 === "brown") {
        console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 50%, brown is 50% and green is 0%`);
        hit = true;
    }
    // Green + green
    else if (parent1 === "green" && parent2 === "green") {
        console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 25%, brown is <1% and green is 75%`);
        hit = true;
    }
    // Green + blue
    else if (parent1 === "green" && parent2 === "blue") {
        console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 50%, brown is 0% and green is 50%`);
        hit = true;
    }
    // Blue + blue
    else if (parent1 === "blue" && parent2 === "blue") {
        console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 99%, brown is 0% and green is 1%`);
        hit = true;
    }
    // Swapping variables' values before next/last iteration
    const temp = parent1;
    parent1 = parent2;
    parent2 = temp;
}
if (!hit) console.log("Invalid input");

// Bonus part
// TODO
