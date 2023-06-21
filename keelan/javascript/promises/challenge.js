const delayedIncDec = (n, mode, delay = 2500) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mode != "inc" && mode != "dec") {
                reject("Invalid mode");
            }

            if (isNaN(n) || isNaN(delay) || delay < 0) {
                reject("Invalid n and/or delay");
            }

            if (mode === "inc") n++;
            // mode must be "dec"
            else n--;

            resolve(n);
        }, delay);
    });
};

delayedIncDec(-10, "inc", 5000).then(value => {
    console.log("-10, inc, 5000:", value);
});

delayedIncDec(100.5, "dec").then(value => {
    console.log("100.5, dec:", value);
});

delayedIncDec(50 / 25, "inc", 10000).then(value => {
    console.log("50 / 25, inc, 10000:", value);
});

delayedIncDec(100, "incp", 5000).then(value => {
    console.log("100, incp, 5000", value);
})
.catch(e => {
    console.log("100, incp, 5000", e);
});

delayedIncDec(100, "dec", -20).then(value => {
    console.log("100, dec, -20", value);
})
.catch(e => {
    console.log("100, dec, -20", e);
});
