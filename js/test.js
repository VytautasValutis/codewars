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
            wordString = word.join('');
            word = [];
            console.log(wordString);
        }
    }
    return "***";
}

console.log(testas("Hello there, little user5453 374 ())$."));

