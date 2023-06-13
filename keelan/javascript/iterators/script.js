// You have an array of names all in lowercase and you want a new array
// with all of those names but in uppercase
const lowerArr = ['amruta', 'kenny', 'keelan'];
console.table(lowerArr.map(name => name.toUpperCase()));

// You have an array of numbers and you want a new array with those
// numbers decremented by 5
const numArr = [1, 2, 3, 4, 5];
console.table(numArr.map(num => num - 5));