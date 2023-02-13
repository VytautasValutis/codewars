// https://www.codewars.com/kata/52449b062fb80683ec000024
console.clear();
function testas(str) {
    console.log('-----------------------');
    console.log(str);
    console.log('=======================');
    let b = [];
    let temp = 0;
    if(str === '') {return false;}
    let rez = "#";
    b = str.split(" ").filter((a) => a !== '' ? b.push(a) : '' );
    if(b.length === 0) {return false;}
    for (let i = 0; i < b.length; i++) {
        temp = b[i].codePointAt(0);
        if(temp >= 97 && temp <= 122) {
            rez += (String.fromCharCode(temp - 32) + b[i].substring(1));
        } else {rez += b[i]};
        if(rez.length > 140) {return false;}
    }
    return rez;
}

console.log(testas(""));
console.log(testas(" ".repeat(200) ));
// console.log(testas(" Hello there thanks for trying my Kata"));

// function generateHashtag (str) {
//     if(!str || str.length < 1) return false;
    
//     var r = '#' + str.split(' ').map(function(el) {
//       return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
//     }).join('');
//     return r.length > 140?false:r;
//  }