console.clear();
function testas(n) {
    // console.log(n);
    console.log('===========================');
    let rez = 0;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        rez = ('' + i).split('').reduce(( a, b ) => b === '9' ? ++a : a, 0 );
        sum += rez;
    }
    return "*** "+sum ;
}

// console.log(testas(5));
console.log(testas(1000000));



