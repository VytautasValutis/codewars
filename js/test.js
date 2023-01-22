console.clear();
function test(a,b) {
    console.log(a,b);
    console.log(a.length);
    let d = new RegExp(b, `g`);
    console.log(d);
    // let c = [];
    let c = a.match(d);
    console.log(typeof c);
    console.log(c.length);

    return 0;
}

console.log(test(`asdsjghsjdfgyjerha`,`j`));
console.log(test(`abjabjaakkjssssj`,`j`));
