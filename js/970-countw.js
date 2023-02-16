// https://www.codewars.com/kata/56b3b27cadd4ad275500000c
console.clear();
function testas(str) {
    console.log('-----------------------');
    console.log(str);
    console.log('=======================');
    const isLetter = (smb) => (smb.charCodeAt() >= 97 && smb.charCodeAt() <= 122) ? true : false;
    let words = [];
    const wordsExcl = ["a", "the", "on", "at", "of", "upon", "in", "as"];
    let word = [];
    let wordString = '';
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if(isLetter(str.substring(i,i+1))) {
            word.push(str.substring(i,i+1));
        } else {
            if(word.length < 1) continue;
            wordString = word.join('');
            word = [];
            if(wordsExcl.indexOf(wordString) >= 0) continue;
            words.push(wordString);
        }
    }
    if(word.length > 0) return words.length + 1;
    return words.length;
}

console.log(testas("Hello there, little user5453 374 ())$."));
console.log(testas("hello there"));

