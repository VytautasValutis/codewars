console.clear();
function testas(arr) {
    // console.log(arr);
    console.log('=======================');
    function change(difChange, first, plus) {
        if(plus) {
            cond.count++;
        } else {
            cond.count = 2;
            rez += cond.first + ',';
        }
        cond.type = difChange;
        cond.first = first;
        return 0;
    }
    function sequenc(par, countSeq) {
        switch(par) {
            case '*': 
                rez += cond.first + par + countSeq +',';
                break;
            case '-': 
                rez += cond.first + par + countSeq + ',';
                break;
            case '/': 
                rez += cond.first + par + countSeq +',';
                break;
            default:
                break;            
            }
        cond.count = 0;
        cond.type = -2;
        cond.first = -1;
        return 0;
    }
    let rez = '';
    let diff = 0;
    let cond = {
            type: -2,
            first: -1,
            count: 0,
        };
    for (let i = 1; i < arr.length; i++) {
        diff = arr[i] - arr[i - 1];
        console.log(' i => ', i, diff, cond, arr[i]);
        switch (cond.type) {
            case -2:
                console.log('-2 => ', i, diff, cond, arr[i]);
                change(diff, arr[i - 1], true);                
                break;
            case 0:
                console.log(' 0 => ', i, diff, cond, arr[i]);
                if(diff === 0) {
                    cond.count++;
                    continue;
                } else {
                    sequenc('*', cond.count);
                    continue;
                }
                break;
            case 1:
                console.log(' 1 => ', i, diff, cond, arr[i]);
                if(diff === 1) {
                    cond.count++;
                    continue;
                } else  if(cond.count > 2){
                    sequenc('-', arr[i - 1]);
                    console.log(' 1 +> ', rez);
                    continue;
                } else {
                    change(diff, arr[i - 1], false);
                    continue;
                }
                break;
            case -1:
                console.log('-1 => ', i, diff, cond, arr[i]);
                if(diff === -1) {
                    cond.count++;
                    continue;
                } else  if(cond.count > 2){
                    sequenc('-', arr[i - 1]);
                    continue;
                } else {
                    change(diff, arr[i - 1], false);
                    continue;
                }
                break;
            default: // x
            console.log(' x => ', i, diff, cond, arr[i]);
            if(diff > 1 ) {
                    cond.count++;
                    continue;
                } else  if(cond.count > 2){
                    sequenc('/', cond.count);
                    continue;
                } else {
                    change(diff, arr[i - 1], false);
                    console.log(' x +> ', rez);
                    continue;
                }
                break;
                }
            }
            return rez ;
        }

console.log('==> 1,3-5,7-11,14*2,17-20 ==> ',testas([1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 14, 17, 18, 19, 20]));
// console.log(testas([0, 2, 4, 5, 7, 8, 9]));
// console.log(testas([0, 2, 4, 5, 7, 6, 5]));
// console.log(testas([0, 2, 4, 5, 7, 6, 5, 5, 5, 5, 5]));

