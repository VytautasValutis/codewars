console.clear();
// https://www.codewars.com/kata/57a6633153ba33189e000074
function orderedCount(text) {
    console.log(text);
    let rez =[];
    if(typeof text !== "string") {return `* `+rez;}
    const bbb = text.split(``);
    let k = 0;
    for(i = 0; i < bbb.length; i++) {
        if(bbb.indexOf(bbb[i]) !== i) { continue; }
        rez[k] = [bbb[i],bbb.reduce((sum,x) => (x === bbb[i] ? sum + 1 : sum), 0)];
        // console.log(rez[k]);
        k++;
    }
    return rez; 

}

// var orderedCount = function (text) {
//     return Array.from(new Set(text)).map(c => [c, text.match(new RegExp(c, 'g')).length]);
//   }

// console.log(orderedCount(''));
console.log(orderedCount('abrakadabrafullcrazy'));
console.log(orderedCount(''));