console.clear();
// https://www.codewars.com/kata/577a6e90d48e51c55e000217/train/javascript
function hotpo(n) {
    if(!Number.isInteger(n) || !Number.isFinite(n) || Number.isNaN(n) || n <= 0) { return `ERROR:`; }
    let k = n;
    let s = 0;
    while (k > 1) {
        k = (k % 2 === 0)? k / 2: k * 3 + 1;
        s++; 
    }
    return s;   
}

// var hotpo = function(n){
//     var rs=0;
//     while (n>1){
//       rs++;
//       n=n%2?n*3+1:n/2;
//     }
//     return rs;
// }

console.log(hotpo(1));
console.log(hotpo(5));
console.log(hotpo(6));
console.log(hotpo(1));
console.log(hotpo(18));

console.log(hotpo(0));
console.log(hotpo(-1));
console.log(hotpo([]));
console.log(hotpo('a'));
console.log(hotpo(3.14));
console.log(hotpo(NaN));
console.log(hotpo(Infinity));

