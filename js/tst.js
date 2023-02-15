console.clear();
function TST(b) {
    let a = [];
    for (let i = 0; i < 10; i++) {
        a.push(Math.floor(Math.random() * 11) + 1);
    }
    console.log(a);
    return '***' ;
}


console.log(TST(0));