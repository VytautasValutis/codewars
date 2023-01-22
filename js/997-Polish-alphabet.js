console.clear();
// https://www.codewars.com/kata/57ab2d6072292dbf7c000039/solutions/javascript
function correctPolishLetters(string) {
    const polLetters = [String.fromCharCode(0x104), String.fromCharCode(0x105), String.fromCharCode(0x106), String.fromCharCode(0x107), String.fromCharCode(0x118), String.fromCharCode(0x119), String.fromCharCode(0x141), String.fromCharCode(0x142), String.fromCharCode(0x143), String.fromCharCode(0x144), String.fromCharCode(0xD3), String.fromCharCode(0xF3), String.fromCharCode(0x15A), String.fromCharCode(0x15B), String.fromCharCode(0x179), String.fromCharCode(0x17A), String.fromCharCode(0x17B), String.fromCharCode(0x17C)];
    const latLetters =[`A`, `a`, `C`, `c`, `E`, `e`, `L`, `l`, `N`, `n`, `O`, `o`, `S`, `s`, `Z`, `z`, `Z`, `z`];
    let rez = ``;
    for (let i = 0; i < string.length; i++) {
        if(string[i] > String.fromCharCode(0xC0)) {
            rez += latLetters[polLetters.indexOf(string[i])];
        } else {
            rez += string[i];
        }
    }
    return rez;
}
// function correctPolishLetters (string) {
//     return string
//     .replace(/ł/g, 'l')
//     .replace(/ą/g, 'a')
//     .replace(/ć/g, 'c')
//     .replace(/ę/g, 'e')
//     .replace(/ń/g, 'n')
//     .replace(/ó/g, 'o')
//     .replace(/ś/g, 's')
//     .replace(/ź/g, 'z')
//     .replace(/ż/g, 'z')
//   }

console.log(correctPolishLetters(`Jędrzej Błądziński`));
console.log(correctPolishLetters(`Lech Wałęsa`));