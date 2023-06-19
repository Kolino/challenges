// Swap keys with values

const translate = {
    apple: "jablko",
    pear: "gruszka",
    strawberry: "truskawka",
};

/* const newObj = {
    jablko: "apple",
    gruszka: "pear",
    truskawka: "strawberry"
} */

const [ ...newKeys ] = Object.values(translate);
const [ ...newVals ] = Object.keys(translate);
console.log(newKeys, newVals);

const newObj = {};
newKeys.forEach((key, i) => newObj[key] = newVals[i]);
console.log(newObj);