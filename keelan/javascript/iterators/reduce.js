// Given an array of character codes, convert the codes to letters and
// reduce the array to a single string
const arrOfCodes = [114, 101, 100, 117, 99, 101];
console.log(arrOfCodes.reduce((accum, currVal) => {
    return accum + String.fromCharCode(currVal);
}, ""));

// Given an array of letters, reduce them to the sum of their character
// codes
const lettArr = ["c", "h", "e", "e", "s", "e"];
console.log(lettArr.reduce((accum, currVal) => {
    return accum + currVal.charCodeAt(0);
}, 0));

// Use reduce to filter an array to only get numbers > 10
const numsArr = [1, 345, 545, 2, 5, 7, 907];
console.log(numsArr.reduce((accum, currVal) => {
    if (currVal > 10) accum.push(currVal);

    return accum;
}, []));

// Use reduce to create an array of numbers which have been squared
console.log(numsArr.reduce((accum, currVal) => {
    accum.push(currVal ** 2);

    return accum;
}, []));