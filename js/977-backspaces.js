console.clear();
// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
function testas(s) {
    let c = [];
    (s.split('')).map(( a ) => 
        a === '#'? c.pop() : c.push(a), c);
    return c.join('');
}

console.log(testas('abc#d##c'));
console.log(testas('abc##d######'));
console.log(testas('######'));
console.log(testas(''));

