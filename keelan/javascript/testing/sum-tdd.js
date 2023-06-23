// A function that calculates the sum of numbers

// It should throw an error if one or more parameters are not a number

// If no parameters are passed it should throw an error

// I want it to sum any number of arguments >= 1

export const sum = (...args) => {
    if (args.length < 1)
        throw new Error("At least one argument must be given");

    // // let sum = 0;
    // // for (let i = 0; i < args.length; i++) {
    // //     if (isNaN(args[i]))
    // //         throw new Error("All arguments given must be numbers");
    // //     else
    // //         sum += parseFloat(args[i]);
    // // }

    // return sum;

    return args.reduce((accum, curr) => {
        if (isNaN(curr))
            throw new Error("All arguments given must be numbers");
        else
            return accum + parseFloat(curr);
    }, 0);
};