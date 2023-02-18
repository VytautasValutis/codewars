
console.clear();
function testas(n) {
    console.log(n);
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

// function findReverseNumber(n) {
//     if (n < 11) {
//       return n-1;
//     }
  
//     let range = 9;
//     let nMax = 10;
//     for (let i = 1;;i++) {
//       nMax += range;
//       if (n < nMax+1) {
//         return mirror(n-Math.pow(10,i), i);
//       }
      
//       range = range*10;
//       nMax += range;
//       if (n < nMax+1) {
//         return mirror(n-Math.pow(10,i), i);
//       }
//     }
//   }
  
//   function mirror(n, length) {
//     let s = n.toString(10);
//     s += s.slice(0,length).split('').reverse().join('');
//     return BigInt(s);
//   }

// function findReverseNumber(n) {
//     // 0: 1     (1)
//     // 1-9: 9   (2-10) 
//     // 10-99: 9 (11-19) 
//     // 100-999: 90 (20-109)
//     // 1000-9999: 90 (110-199)
//     // 10000-99999: 900 (200-1099)
//     // 100000-999999: 900 (1100 - 1999)
//     // 1000000-9999999: 9000 (2000-10999)
//     // 10000000-99999999: 9000 (11000 - 19999)
//     if(n === 1) return 0n;
//     const rank = Math.floor(Math.log10(n / 2));
//     const base = Math.pow(10, rank);
//     const isEvenLength = n / base >= 11;
//     const spanFirst = base * (isEvenLength ? 11 : 2);
//     const index = n - spanFirst;
//     const head = base + index;
//     const tail = String(head).split('').reverse().join('');
//     return BigInt(
//       isEvenLength ?
//         String(head) + tail :
//         String(head) + tail.slice(1)
//       );
//   }