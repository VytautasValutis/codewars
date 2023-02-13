console.clear();
// https://www.codewars.com/kata/58db9545facc51e3db00000a
function testas(arr) {
    console.log(arr);
    let rez = '';
    let temp= '';
    let cond = {
            c: 2,
            d1: 0,
            d2: 0,
        };
    const n = arr.length;
    if(n <= 2) {
        if(n === 2) {
            temp = '' + arr[0] + ',' + arr [1];
            rez += temp;
        }
        if(n === 1) {
            temp = '' + a[0];
            rez += temp;
         } 
        return rez;
    };
    rez = arr[0];
    for(let i = 1; i <= n - 1; i++) {
        cond.d1 = arr[i - 1] - arr[i];
        cond.d1 = arr[i] - arr[i + 1];
        if(i === n - 2){
            if(cond.d1 === 0) {
                cond.c++;
                if(cond.d1 === cond.d2) {
                    cond.c++;
                    temp = '*' + cond.c; 
                } else {temp = '*' + cond.c + ',' + arr[i + 1];}
            } else if(cond.d1 === cond.d2) {
                cond.c++;
                if(cond.c > 2) {
                    if(Math.abs(cond.d2) > 1) {
                        temp = '-' + arr[i + 1] + '/' + Math.abs(cond.d2);
                    } else {temp = '-' + arr[i + 1];}
                } else {temp = ',' + arr[i] + ',' + arr[i + 1];}
            } else {temp = ',' + arr[i] + ',' + arr[i + 1];}
            rez += temp;
            return rez;
        }
        if(cond.d1 === cond.d2) {cond.c++}
        else {
            if(cond.d1 === 0) {
                if(cond.c <= 2) {temp = ',' + arr[i];
                } else if( Math.abs(cond.d1) > 1) {
                    temp = '-' + a[i] + '/' + Math.abs(d1);
                }
            } else {
                if(cond.c > 1) {
                    temp = '*' + cond.c + ',' + arr[i + 1];
                } else {temp = ',' + arr[i];}
            }
            rez += temp;
            cond.c = 1;
        }
    }
    return rez.substring(0, rez.length - 1) ;
}

// console.log('==> 1,3-5,7-11,14*2,17-20,25 ==> ',testas([1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 14, 17, 18, 19, 20, 25]));
console.log(testas([0, 2, 4, 5, 7, 8, 9]));
// console.log(testas([0, 2, 4, 5, 7, 6, 5]));
// console.log(testas([0, 2, 5, 5, 7, 6, 5]));
// console.log(testas([0, 2, 4, 5, 7, 6, 5, 5, 5, 5, 5]));
// console.log(testas([ 1, 10, 8, 6, 7 ]));

