console.clear();
// https://www.codewars.com/kata/530045e3c7c0f4d3420001af
function test(n) {
    console.log(n);
    let k = ('' + n).split('');
    let rz = '';
    let sum = 1;
    for (let i = 1; i < k.length; i++) {
        if(k[i] !== k[i - 1]) {
            rz += '' + sum + k[i-1];
            sum = 1;
            continue;
        } else {
            sum++;
        };
    };
    rz += '' + sum + k[k.length - 1];
    return  Number(rz);
}

// function lookSay(n){
//     return +(''+n).replace(/((\d)\2*)/g, function(m){ return m.length+m[0] })
//   }

console.log(test(0));
console.log(test(2014));
console.log(test(9000));
console.log(test(2322));
console.log(test(23));
console.log(test(222222222222));
