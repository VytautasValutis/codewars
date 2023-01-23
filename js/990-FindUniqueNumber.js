console.clear();
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
    if(arr[0] !== arr[1]) {
        if(arr[1] === arr[2]) { return arr[0] ;} else { return arr[1] };
    } else {
        for (let i = 2; i < arr.length; i++) {
            if(arr[i] !== arr[i - 1]) { return arr[i]; }
        }
    }
    return `ERROR`;
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1]));
console.log(findUniq([ 0, 1, 1, 1, 1, 1]));
console.log(findUniq([ 1, 1, 1, 1, 1, 3]));
console.log(findUniq([ 0, 0, 0, 0.55, 0, 0]));
console.log(findUniq([ 1, 0, 0]));
console.log(findUniq([ 0, 1, 0]));
console.log(findUniq([ 0, 0, 1]));


