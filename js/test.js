console.clear();
function testas(s1, s2) {
    let rez = [];
    let i = 0;
    let j = 0;
    while(i < s1.length && j < s2.length) {
        if(s1[i] <= s2[j]) {
            rez.push(s1[i++]);
        } else {
            rez.push(s2[j++]);
        }
    }
    while( i < s1.length) {
        rez.push(s1[i++]);
    }
    while( j < s2.length) {
        rez.push(s2[j++]);
    }
    return rez ;
}

console.log(testas([1, 2, 3, 4, 5],[1, 2, 4, 7, 8]));
console.log(testas([10],[1, 2, 4, 7, 8]));
console.log(testas([],[1, 2, 4, 7, 8]));
console.log(testas([],[]));
console.log(testas([1, 2, 3, 4, 5, 66],[1, 2, 4, 7, 8]));

