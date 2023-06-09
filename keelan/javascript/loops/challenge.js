// Sum of n challenge
const sumOfN = n => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i + 1;
    }

    return sum;
}

console.log(sumOfN(10));

// Write a shopping list
const shoppingListArr = ['milk', 'watermelon', 'eggs', 'soap', 'butter', 'apples', 'ice-cream'];
const addNumbersItems = arr => {
    const retArr = [];
    for (let i = 0; i < arr.length; i++) {
        retArr[i] = `${i + 1}. ${arr[i]}`;
    }

    return retArr;
}

console.log(addNumbersItems(shoppingListArr));

// Capitalizing Odd Positioned Letters
const getNextChar = char => {
    // Handling space
    if (char === " ") return " ";

    // Handling z
    if (char === "z") return "a";

    return String.fromCharCode(char.charCodeAt(0) + 1);
}

let stringVar = "a string of my choice";
let newString = "";
for (let i = 0; i < stringVar.length; i++) {
    if (i % 2 != 0) newString += stringVar[i].toUpperCase();
    else newString += getNextChar(stringVar[i]);
}
console.log(newString);

// Removing Vowels
const checkVowel = (currChar, nextChar) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = ['l', 'm', 'r'];
    // If no nextChar is given, check currChar's a vowel
    if (!nextChar) return vowels.includes(currChar);

    // Current char isn't a vowel and/or the succeeding char is l, m, or r
    if (!vowels.includes(currChar) || consonants.includes(nextChar)) return false;

    return true;
}

// Checking the first char 
const removeVowels = str => {
    let retStr = "";

    // Parsing the rest of str
    for (let i = 0; i < str.length - 1; i++) {
        if (!checkVowel(str[i], str[i + 1])) retStr += str[i];
    }

    // Checking last char
    if (str && !checkVowel(str[str.length - 1], "")) retStr += str[str.length - 1];

    return retStr;
}

console.log(removeVowels("calum"));
console.log(removeVowels("rachel"));
console.log(removeVowels("martyna"));

// Loop through an array backwards
for (let i = shoppingListArr.length - 1; i > -1; i--) console.log(shoppingListArr[i]);
