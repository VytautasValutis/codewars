console.clear();
function testas(str) {
    const str2 = str.split('');
    let rez = [];
    for (let i = 0; i < str2.length; i++) {
        let strArray = str2[i].charCodeAt().toString(2).split('');
        const strLength = strArray.length;
        let count0 = strArray.reduce(( a , b ) => b === '0' ? ++a : a , 0 );
        if (count0 > strLength - count0) {
            rez.push(str[i]);
        }
    }
    return rez;
}

// console.log(testas(5));
console.log(testas('abcde'));
console.log(testas('DIGEST'));



