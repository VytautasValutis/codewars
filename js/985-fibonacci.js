console.clear();
// https://www.codewars.com/kata/5779f894ec8832493f00002d/solutions/javascript
function test(n) {
    let fMin1 = 55n;
    let fMin2 = 34n;
    let ff = 55n;
    let rez =[[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9]];
    let rezult =[];
    for (let i = 0; i < n-10; i++) {
        ff = fMin1 + fMin2;
        fMin2 = fMin1;
        fMin1 = ff;
    }
    let numbers = (`` + ff).split(``);
    for (let i = 0; i < numbers.length; i++) {
        rez[numbers[i]][0]++;
    }
    let k = 8;
    let buf = [0,0];
    while (k >= 0) {
        if(rez[k][0] < rez[k + 1][0]) {
            buf[0] = rez[k][0];
            buf[1] = rez[k][1];
            rez[k][0] =rez[k + 1][0];
            rez[k][1] =rez[k + 1][1];
            rez[k+1][0] =buf[0];
            rez[k+1][1] =buf[1];
            k = 8;
        } else {
            if(rez[k][0] === rez[k + 1][0] && rez[k][1] < rez[k + 1][1] ) {
                buf[1] = rez[k][1];
                rez[k][1] = rez[k + 1][1];
                rez[k+1][1] = buf[1];
                k = 8;
            } else { k--; }
        }
    }
    // console.log(rezult);
    for (let i = 0; i < rez.length; i++) {
        if(rez[i][0] > 0) {rezult.push(rez[i]);}
    }
    return rezult;
}

// function fibDigits(n) {
//     let fib = 0n, next = 1n
//     for (let i = 0; i < n; ++i) [fib, next] = [next, fib + next]
//     let counters = Array(10).fill(0)
//     fib.toString().split('').forEach(d => ++counters[parseInt(d)])
//     return counters.map((n, i) => [n, i]).filter(n => n[0] > 0).sort((a, b) => b[0] === a[0] ? b[1] - a[1] : b[0] - a[0])
//   }

console.log(test(10000));
console.log(test(11));
console.log(test(12));
console.log(test(13));
// console.log(test(100000));
console.log(test(7));
console.log(test(1000));
console.log(test(100));
