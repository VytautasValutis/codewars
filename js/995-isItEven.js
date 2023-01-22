console.clear();
// https://www.codewars.com/kata/555a67db74814aa4ee0001b5
function test(a) {
    return (a % 2 === 0 && Number.isSafeInteger(a))?true:false;
}

// NESUTINKU !!!
// function testEven(n) {
//     return n%2===0;
// }

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