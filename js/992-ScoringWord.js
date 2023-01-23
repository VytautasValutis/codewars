console.clear();
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

function HSW(x) {
    const aaa = x.split(` `);
    let maxString =``;
    let maxStringLength = 0;
    for (let i = 0; i < aaa.length; i++) {
        let localSum = 0;
        for (let j = 0; j < aaa[i].length; j++) {
            localSum += aaa[i].codePointAt(j) - 96;
        }
        if (localSum > maxStringLength) {
            maxStringLength = localSum;
            maxString = aaa[i];
        }
    }
    return maxString;
}

// function high(s){
//     let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
//     return s.split(' ')[as.indexOf(Math.max(...as))];
//   }

console.log(HSW(`abs`));
console.log(HSW(`abs lolo nkola`));
console.log(HSW(`abs psr ab hjkio`));
console.log(HSW(`abs zzzz gtsyun aka`));