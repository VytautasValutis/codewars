console.clear();
function test(n) {
    console.log(n);
    let fMin1 = 55n;
    let fMin2 = 34n;
    let ff = 55n;
    for (let i = 0; i < n-10; i++) {
        ff = fMin1 + fMin2;
        fMin2 = fMin1;
        fMin1 = ff;
    }
    let numbers = ff.split(``);
    for (let i = 0; i < numbers.length; i++) {
        const element = array[i];
        
    }
    return ff;
}

console.log(`1`,test(10));
console.log(`2`,test(11));
console.log(`3`,test(12));
console.log(`4`,test(13));
console.log(`5`,test(100000));
// console.log(`13`,test(7));
// console.log(`*`,test(1000));
