console.clear();
// https://www.codewars.com/kata/5a045fee46d843effa000070
function prep(n) {
    console.log(n);
    let psk ={};
    let rez = ``;
    let k = 2;

    function fak(n, k) {
        if(n <= 1) {return 0;}
        if( n % k === 0 ) {
            if(k in psk) {
                    psk[k]++;
                } else {
                    psk[k] = 1;
            }
            n /= k;
            fak(n, k);
        } else {
            k++;
            fak(n, k);
        }
    }
    for (let j = n; j > 1; j--) {
        fak(j, k);
    }
    for (const el in psk) {
        rez += ' * ' + el;
        if(psk[el] > 1) {
            rez += '^' + psk[el];
        }        
    }
    rez = rez.substring(3, rez.length);
    return rez;
}


console.log('1 => ',prep(4));
console.log('2 => ',prep(22));
console.log('3 =>',prep(12));
console.log('4 => ',prep(22));
console.log('5 => ',prep(25));
console.log('6 => ',prep(101));
// console.log('3989 => ',prep(3989));
