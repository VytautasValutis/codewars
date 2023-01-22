console.clear();
function test(a) {
    if (a % 2 === 0 && Number.isSafeInteger(a)) {
        return true;
    }
    return false;
}

console.log(`* `,test(1));
console.log(`  `,test(2));
console.log(`  `,test(0));
console.log(`* `,test(-1));
console.log(`* `,test(1.2));
console.log(`* `,test(-2.3));
console.log(`* `,test(``));
console.log(`* `,test(NaN));
console.log(`* `,test(undefined));
console.log(`* `,test(`4`));
console.log(`* `,test(null));
console.log(`* `,test([1,2]));
console.log(`* `,test([`1`,`2`]));
