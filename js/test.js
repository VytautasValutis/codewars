console.clear();
function testas(n) {
    let rez = [];
    for (let i = 0; i < n; i++) {
        let l = [];
        for (let j = 0; j < 5; j++) {
           l.push((j + 1) * (i + 1));
        }        
        rez.push(l)
    }
    return rez;
}

console.log(testas(5));

