console.clear();

const RomanNumerals = {
    toRoman: (n) => {
        const letters = [
            [``,`M`, `MM`, `MMM`],
            [``,`C`,`CC`,`CCC`,'CD',`D`,`DC`,`DCC`,`DCCC`,`CM`],
            [``,`X`,`XX`,`XXX`,`XL`,`L`,`LX`,`LXX`,`LXXX`,`XC`],
            [``,`I`,`II`,`III`,`IV`,`V`,`VI`,`VII`,`VIII`,`IX`]
        ];
        return ['0','0','0'].concat(('' + n).split('')).slice(-4).map((a,i) => letters[i][a]).join('');
    },
    fromRoman: (n) => {
        const letters = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000,
        }
        console.log(n.split('').reduce((a,b) =>  ));
        return n;
    },
}

const numA = 1945;
const numR = 'DV';
console.log(RomanNumerals.toRoman(numA));
console.log(RomanNumerals.fromRoman(numR));




