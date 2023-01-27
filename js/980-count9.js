console.clear();
// https://www.codewars.com/kata/55143152820d22cdf00001bb
function testas(n) {
    let rez = count(n % 100);
    let k1 = 2;
    let k2 = 10;
    const nArray = ('' + n).split(''); 
    let div = 100;
    for (let i = nArray.length - 3; i >= 0 ; i--) {
        if(nArray[i] === '9') {
            rez += (n % div + 1);
        }
        rez += (nArray[i] * k1 * k2);
        k1++
        k2 *= 10;
        div *= 10;
    }


    function count(nn) {
        let sum = 0;
        for (let i = 1; i <= nn; i++) {
            sum += ('' + i).split('').reduce(( a, b ) => b === '9' ? ++a : a, 0 );
        }
        return sum ;
    }
    return rez;
}

// return the number of 9's used to count out 1 to n
// function number9(n){
//     var count = 0;
//     for (var i = 1; i <= n; i *= 10){
//       var curr = Math.floor(n / i);
//       count += Math.floor( curr / 10) * i;
//       if( curr % 10 === 9) {
//         count += (n % i) + 1;
//       };
//     };
    
//     return count;
//   };

console.log(testas(899999999391));

