// Calculating Moon Orbits
const moonOrbits = numEarthDays => {
    const numEarthDaysToOrbit = 27;

    return numEarthDays / numEarthDaysToOrbit;
}

console.log(moonOrbits(54));
console.log(moonOrbits(365));

// Working with Circles
const circleArea = radius => Math.PI * radius * radius;

const circlePerimeter = radius => 2 * Math.PI * radius;

console.log(circleArea(10));
console.log(circlePerimeter(10));

// Years to Days & Seconds
const ageInDays = age => age * 365;

const ageInSeconds = age => age * 365 * 24 * 60 * 60;

console.log(ageInDays(32));
console.log(ageInSeconds(32));

// Return the Remainder from Two Numbers
const remainder = (num, divisor) => num % divisor;

console.log(remainder(1, 3)); // 1
console.log(remainder(3, 4)); // 3
console.log(remainder(-9, 45)); // -9
console.log(remainder(5, 5)); // 0

// Basketball Points
const basketballPoints = (twoPointers, threePointers) => twoPointers + threePointers;

// Less Than 100?
const lessThan100 = (num1, num2) => num1 + num2 < 100;

console.log(lessThan100(22, 15)); // true
console.log(lessThan100(83, 34)); // false
console.log(lessThan100(3, 77)); // true