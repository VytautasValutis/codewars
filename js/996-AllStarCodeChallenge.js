console.clear();
// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
function strCount(str, letter) {
    console.log(str, letter);
    if(str.length <= 0) {return 0;}
    if(letter.length !== 1) {return 0;}
    let c = str.match(new RegExp(letter, `g`));
    if(c === null) { return 0;}
    else { return c.length;}
}

// function strCount(str, letter){  
//     return str.split(letter).length-1
//   }

console.log(strCount(`asdsjghsjdfgyjerha`,`j`));
console.log(strCount(`abjabjaakkjssssj`,`x`));
console.log(strCount(``,`j`));
console.log(strCount(`abjabjaakkjssssj`,``));
