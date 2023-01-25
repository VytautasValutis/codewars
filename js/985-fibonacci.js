console.clear();
function test(n) {
    console.log(n);
    let fMin1 = 55n;
    let fMin2 = 34n;
    let ff = 55n;
    let rez =[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0]];
    // stat = [0,0,0,0,0,0,0,0,0,0];
    for (let i = 0; i < n-10; i++) {
        ff = fMin1 + fMin2;
        fMin2 = fMin1;
        fMin1 = ff;
    }
    let numbers = (``+ff).split(``);
    for (let i = 0; i < numbers.length; i++) {
        rez[numbers[i]][1]++;
    }
    console.log(rez);
    let k = 0;
    let buf = [0,0];
    while (k <= 9) {
        console.log(` =>`,k,rez[k][1],rez[k + 1][1]);
        if(rez[k][1] <= rez[k + 1][1]) {
            console.log(` =>`,k,rez[k][1],rez[k + 1][1]);
            console.log(rez);
            buf[0] = rez[k][0];
            buf[1] = rez[k][1];
            rez[k][0] =rez[k + 1][0];
            rez[k][1] =rez[k + 1][1];
            rez[k+1][0] =buf[0];
            rez[k+1][1] =buf[1];
            console.log(rez);
            return -9;
            k = 0;
        } else {k++}
    }
    console.log(rez);
    
    // return rez;
}

// console.log(`1`,test(10));
// console.log(`2`,test(11));
// console.log(`3`,test(12));
// console.log(`4`,test(13));
// console.log(`5`,test(100000));
// console.log(`13`,test(7));
// console.log(`*`,test(1000));
console.log(`*`,test(500));
