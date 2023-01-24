console.clear();
// https://www.codewars.com/kata/51b62bf6a9c58071c600001b

function Roman(n) {
    console.log(n);
    let k = 0;
    const daug = [1000,100,10];
    const raides = [
        [`M`, `MM`, `MMM`],
        [`C`,`CC`,`CCC`,'CD',`D`,`DC`,`DCC`,`DCCC`,`CM`],
        [`X`,`XX`,`XXX`,`XL`,`L`,`LX`,`LXX`,`LXXX`,`XC`],
        [`I`,`II`,`III`,`IV`,`V`,`VI`,`VII`,`VIII`,`IX`]
    ];
    let kiekis = 0;
    let rez = ``;
    for (let i = 0; i < 3; i++) {
        kiekis = Math.floor(n / daug[i]);
        n -= kiekis * daug[i];
        if(kiekis > 0) {
            rez += raides[i][kiekis-1];
        }
    }
    if(n > 0) {
        rez += raides[3][n-1];
    }
    return rez;
}

console.log(Roman(19));
console.log(Roman(34));
console.log(Roman(188));
console.log(Roman(1449));
console.log(Roman(2023));
console.log(Roman(3999));
