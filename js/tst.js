console.clear();
function count(nn) {
    let sum = 0;
    for (let i = 1; i <= nn; i++) {
        sum += ('' + i).split('').reduce(( a, b ) => b === '9' ? ++a : a, 0 );
    }
    return sum ;
}

console.log(count(19391));

