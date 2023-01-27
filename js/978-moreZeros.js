console.clear();
// https://www.codewars.com/kata/5d41e16d8bad42002208fe1a
function testas(s) {
    const str = s.split('');
    let rez = [];
    for (let i = 0; i < str.length; i++) {
        if(str.indexOf(str[i]) !== i) continue;
        let strArray = str[i].charCodeAt().toString(2).split('');
        const strLength = strArray.length;
        let count0 = strArray.reduce(( a , b ) => b === '0' ? ++a : a , 0 );
        if (count0 > strLength - count0) {
            rez.push(str[i]);
        }
    }
    return rez;
}

// function moreZeros(s){
//     return [...new Set([...s].filter((qure)=>{
//        let f=qure.charCodeAt(0).toString(2).replace(new RegExp('0','g'),'').length,
//            g=qure.charCodeAt(0).toString(2).replace(new RegExp('1','g'),'').length;
//        return g>f
//     }))]
//   }

// console.log(testas(5));
console.log(testas('abcde'));
console.log(testas('DIGEST'));
console.log(testas('abcdeabcde'));



