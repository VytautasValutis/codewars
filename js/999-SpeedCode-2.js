console.clear();

// const arrayMadness = (a, b) => a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0) 

function test(a, b) {
    return (a.reduce((a,c)=> a + c ** 2 ,0) > b.reduce((b,c)=> b + c ** 3 ,0))?true:false;
}

console.log(test([4, 5, 6],[1, 2, 3]));
console.log(test([7],[3]));
console.log(test([4, 5, 6],[1, 2, 3, 4, 5]));
