console.clear();
function prep(n) {
    console.log(n);
    let psk = [[2,0],[3,0],[5,0],[7,0],[11,0],[13,0],[17,0],[19,0],[23,0],[29,0],[31,0],[37,0],[41,0],[43,0],[47,0],[53,0],[59,0],[61,0]];
    let rez = ``;
    let k = 0;
    function fak(n, k) {
        if(n <= 1) {return 0;}
        if( n % psk[k][0] === 0 ) {
            n = n / psk[k][0];
            psk[k][1]++;
            fak(n,k);
        } else {
            k++;
            fak(n, k);
        }
    }
    fak(n, k);
    console.log(psk);
    for (let i = 0; i < 18; i++) {
        if (psk[i][1] > 0) {
            rez = rez + psk[i][0]+`^`+psk[i][1]+` `;
        }        
    }
    return rez.trimEnd();

    // function sum(start) {
    //     if (start > 0) {
    //       return start + sum(start - 1);
    //     } else {
    //       return 0;
    //     }
    //   }

}


console.log(prep(5));

