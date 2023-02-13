// https://www.codewars.com/kata/52449b062fb80683ec000024
console.clear();
function testas(str) {
    console.log('-----------------------');
    console.log(str);
    console.log('=======================');
    let b = [];
    let temp = 0;
    if(str === '') {return false;};
    let rez = "#";
    b = str.split(" ").filter((a) => a !== '' ? b.push(a) : '' );
    for (let i = 0; i < b.length; i++) {
        temp = b[i].codePointAt(0);
        if(temp >= 97 && temp <= 122) {
            rez += (String.fromCharCode(temp - 32) + b[i].substring(1));
        } else {rez += b[i]};
        if(rez.length > 140) {return false;};
    }
    return rez;
}

console.log(testas(""));
// console.log(testas(" Hello there thanks for trying my Kata"));

