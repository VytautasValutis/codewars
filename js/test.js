console.clear();
function testas(str) {
    let c = [];
    (str.split('')).map(( a ) => 
        a === '#'? c.pop() : c.push(a), c);
    return c.join('');
}

console.log(testas('abc#d##c'));
console.log(testas('abc##d######'));
console.log(testas('######'));
console.log(testas(''));

