console.clear();
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
    return rz;
}
console.log(test(23));
console.log(test(2014));
console.log(test(9000));
console.log(test(2322));
console.log(test(23));
console.log(test(222222222222));
