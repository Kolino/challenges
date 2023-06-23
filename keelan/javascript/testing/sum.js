function simpleSum(a, b) {
    return a + b;
}
module.exports = simpleSum;

const argumentsFunc = () => {
    console.log(arguments);
}

argumentsFunc(1, 2, 3);