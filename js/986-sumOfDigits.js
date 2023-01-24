console.clear();
// https://www.codewars.com/kata/541c8630095125aba6000c00

function SumOfDigits(n) {
    console.log(n);
    n= (`` + n).split(``).reduce((s,x) => s += x - 0, 0);
    while(n >= 10) {
        n = (`` + n).split(``).reduce((s,x) => s += x - 0, 0);
    }
    return n;
}

// function digital_root(n) {
//     return (n - 1) % 9 + 1;
//   }

console.log(SumOfDigits(1),`-->1`);
console.log(SumOfDigits(16),`-->7`);
console.log(SumOfDigits(942),`-->6`);
console.log(SumOfDigits(132189),`-->6`);
console.log(SumOfDigits(493193),`-->2`);
console.log(SumOfDigits(315892),`-->1`);