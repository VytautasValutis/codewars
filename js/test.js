console.clear();
function testas(n) {
    console.log('-----------------------');
    console.log(n);
    console.log('=======================');
    let rez = '';
    const first19 = [0,1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99];
    const nString = n.toString().split('');
    const nLong = nString.length;
    const lim1 = (2 * Math.pow(10,nLong-1));
    const lim2 = Math.floor(lim1 * 0.55);
    if(n < 20) return BigInt(first19[n-1]);
    if(n < 100) {
        rez += '' + (nString[0] - 1) + nString[1] + (nString[0] - 1);
        return BigInt(rez);
    }
    if(n < lim2) {
        rez += '9';
        for (let i = 2; i <= nLong - 1; i++) {rez += nString[i]}
        for (let i = 2; i <= nLong - 2; i++) {rez += nString[nLong - i]}
        rez += '9';
        return BigInt(rez);
    }
    if(n < lim1) {
        for (let i = 1; i <= nLong - 1; i++) {rez += nString[i]}
        for (let i = 1; i <= nLong - 1; i++) {rez += nString[nLong - i]}
        return BigInt(rez);
    }
    rez += (nString[0] - 1) ;
    for (let i = 1; i <= nLong - 1; i++) {rez += nString[i]}
    for (let i = 2; i <= nLong - 1; i++) {rez += nString[nLong - i]}
    rez += (nString[0] - 1) ;
    return BigInt(rez);
}

console.log(testas(75));
console.log(testas(139));

