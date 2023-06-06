// 2 == '2'; // non-type checking ===> true
// 2 === 2; // type checked but true anyway
// 2 === '2'; // type checking ===> false
// '2' + 3 == 23; // string concatenation then no type checking ===> true
// '2' + 3 === 5; // type checking ===> false
// 10 % 3; // 1 remains ===> true
// 10 % 3 === 1; // true- 1 is equal to 1
// (100 % 7) % 5; // = 2 ===> true
// (100 % 7) % 5 !== 0; // = 2 ===> true
// (100 % 7) % 9 == 2; // = 2 ===> true
// !(10 % 2); // = !0 ===> !false ===> true
// !!!!((10 % 7) % 3); // 10 % 7 = 3, 3 % 3 = 0 ===> false 
// 10 % 3 === -1 % 2; // 1 === 1 ===> false since 1 !== -1
// (892783 != '89278' + 3) == 0; // false is equal to 0 without type checking ===> true
// true && false; // false
// false || true; // true
// true || false; // true
// true || false; // true
// true || false + true; // true no matter ordering - true || 1, true + 1 = 2
// true * false && false + true; // false - 0 && false
// 10 && 123 && -1 && 3; // all true ===> true
// 10 && 123 && 0 && 3; // false since 0 is
// (10 && (123 || '') && parseInt('Roisin')) || 23 / 23 - 1; // true && (true) && false = false || 0 = false
// 3 && 'Calum' && ('' || 26); // true && true = true
// 3 && 'Remi' && (null || 86 * 0 || ('' + 1 && 'Cat' + 'Dog')); true && (false || true && true) = true