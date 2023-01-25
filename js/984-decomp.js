console.clear();
// https://www.codewars.com/kata/5a045fee46d843effa000070
function prep(n) {
    console.log(n);
    // let psk = [[2,0],[3,0],[5,0],[7,0],[11,0],[13,0],[17,0],[19,0],[23,0],[29,0],[31,0],[37,0],[41,0],[43,0],[47,0],[53,0],[59,0],[61,0]];
    let psk =[[]];
    let rez = ``;
    let k = 2;
    function fak(n, k) {
        if(n <= 1) {return 0;}
        if( n % k === 0 ) {
            psk[k-2][0] = 2;
            psk[k-2][1]++;
            n = n / psk[k-2][0];
            fak(n,k);
        } else {
            k++;
            fak(n, k);
        }
    }
    console.log(psk);
    return 999;
    for (let j = n; j > 1; j--) {
        fak(j, k);
        if(prime) {return ''+n;}
    }
    for (let i = 0; i < 18; i++) {
        if (psk[i][1] > 0) {
            if(i > 0) {rez = rez + ' * '}
            rez = rez + psk[i][0];
            if(psk[i][1] > 1) {
                rez = rez +`^`+psk[i][1];
            }
        }        
    }
    return rez;

    // function sum(start) {
    //     if (start > 0) {
    //       return start + sum(start - 1);
    //     } else {
    //       return 0;
    //     }
    //   }

}


console.log('5 => ',prep(5));
console.log('23 => ',prep(23));
console.log('79 =>',prep(79));
// console.log('62 => ',prep(62));
// console.log('3989 => ',prep(3989));
