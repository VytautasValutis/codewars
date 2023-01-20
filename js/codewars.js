console.clear();

// return this1.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')

// return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);

// return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);

function test(arr) {
    let c = 0;
    let b = arr.filter(arr => arr > 0).forEach(b => c += b);
    return c;
}

// console.log(test(0));

console.log(test([1, 2, 3, -4, 5, -6]));
console.log(test([]));
