console.clear();
function test(a) {
    try {
        if (typeof a === "string") throw "string";
        if (typeof a !== "number") throw "not a number";
        if (isNaN(a)) throw "NaN";
    }
    catch(err) {
        console.log("Parameter is " + err);
        return -1;
    }
    return a * a;
}

console.log(test(5));
console.log(test(`A`));
console.log(test(undefined));
console.log(test(NaN));