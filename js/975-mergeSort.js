console.clear();
// https://www.codewars.com/kata/52336a4436e0b095d8000093
function testas(a, b) {
    let rez = [];
    let i = 0;
    let j = 0;
    while(i < a.length && j < b.length) {
        if(a[i] <= b[j]) {
            rez.push(a[i++]);
        } else {
            rez.push(b[j++]);
        }
    }
    while( i < a.length) {
        rez.push(a[i++]);
    }
    while( j < b.length) {
        rez.push(b[j++]);
    }
    return rez ;
}

// function mergesorted(a, b) {
//     let res = [];
//     while (1) {
//       if (!a.length || !b.length) {
//         return res.concat(a.length && a || b);
//       }
//       res.push((a[0] < b[0] ? a : b).shift());
//     }
//   }

console.log(testas([1, 2, 3, 4, 5],[1, 2, 4, 7, 8]));
console.log(testas([10],[1, 2, 4, 7, 8]));
console.log(testas([],[1, 2, 4, 7, 8]));
console.log(testas([],[]));
console.log(testas([1, 2, 3, 4, 5, 66],[1, 2, 4, 7, 8]));

