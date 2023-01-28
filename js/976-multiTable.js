console.clear();
// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08
function testas(size) {
    let rez = [];
    for (let i = 0; i < size; i++) {
        let l = [];
        for (let j = 0; j < size; j++) {
           l.push((j + 1) * (i + 1));
        }        
        rez.push(l)
    }
    return rez;
}


// multiplicationTable = function(size) {

//     return Array.apply(null, new Array(size)).map(function(val, i) {
//       return Array.apply(null, new Array(size)).map(function(val, j) {
//         return (i+1) * (j+1);
//       });
//     });
//   }

console.log(testas(5));

