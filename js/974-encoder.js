console.clear();
// https://www.codewars.com/kata/58db9545facc51e3db00000a
function testas(arr) {
    console.log(arr);
    function change(difChange, first, plus) {
        if(plus) { cond.count++; } else {
            cond.count = 2;
            rez += cond.first + ',';
        }
        cond.type = difChange;
        cond.first = first;
        return 0;
    }
    function sequenc(par, countSeq, last) {
        switch(par) {
            case '*': 
                rez += cond.first + par + countSeq +',';
                break;
            case '-': 
                rez += cond.first + par + countSeq + ',';
                break;
            case '/': 
                rez += cond.first + '-' + last + par + countSeq +',';
                break;
            default:
                break;            
            }
        cond.count = 0;
        cond.type = -2;
        cond.first = -1;
        return 0;
    }
    arr.push(Number.MAX_SAFE_INTEGER);
    let rez = '';
    let diff = 0;
    let cond = {
            type: -2,
            first: -1,
            count: 1,
        };
    for (let i = 1; i <= arr.length; i++) {
        diff = arr[i] - arr[i - 1];
        switch (cond.type) {
            case -2:
                change(diff, arr[i - 1], true);                
                break;
            case 0:
                if(diff === 0) {
                    cond.count++;
                    continue;
                } else {
                    sequenc('*', cond.count);
                    continue;
                }
                break;
            case 1:
                if(diff === 1) { cond.count++; continue;
                } else  if(cond.count > 2){
                    sequenc('-', arr[i - 1]);
                    continue;
                } else {
                    change(diff, arr[i - 1], false);
                    continue;
                }
                break;
            case -1:
                if(diff === -1) { cond.count++; continue;
                } else  if(cond.count > 2){
                    sequenc('-', arr[i - 1]);
                    continue;
                } else {
                    change(diff, arr[i - 1], false);
                    continue;
                }
                break;
            default: // x
            if(diff > 1 ) { cond.count++; continue;
                } else  if(cond.count > 2){
                    sequenc('/', cond.type, arr[i - 1]);
                    continue;
                } else {
                    change(diff, arr[i - 1], false);
                    continue;
                }
                break;
        }
    }
    return rez.substring(0, rez.length - 1) ;
}

// console.log('==> 1,3-5,7-11,14*2,17-20,25 ==> ',testas([1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 14, 17, 18, 19, 20, 25]));
// console.log(testas([0, 2, 4, 5, 7, 8, 9]));
// console.log(testas([0, 2, 4, 5, 7, 6, 5]));
// console.log(testas([0, 2, 4, 5, 7, 6, 5]));
console.log(testas([0, 2, 4, 5, 7, 6, 5, 5, 5, 5, 5]));
console.log(testas([2, 2, 2, 5, 5, 6, 5, 4, 3, 3]));

