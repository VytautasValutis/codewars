console.clear();
function testas(arr) {
    console.log('-----------------------');
    console.log(arr);
    console.log('=======================');
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
    // arr.push(Number.MAX_SAFE_INTEGER);
    let rez = '';
    let diff = 0;
    let cond = {
            type: -2,
            first: arr[0],
            count: 1,
            start: true,
        };
    for (let i = 1; i <= arr.length; i++) {
        diff = arr[i] - arr[i - 1];
        //
        // console.log(' i => ', i, diff, cond, arr[i]);
        //
        if(cond.start) {
            cond.type = diff;
            cond.count++;
            cond.start = false;
        } else {
            if(cond.type === 0) {
                if(diff === 0) {
                    cond.count++;
                } else {
                    rez += cond.first + '*' + (cond.count + 1) + ',';
                    cond.count = 0;
                    cond.first = arr[i];
                    cond.start = true;
                }
            } else {
                if(diff === cond.type){
                    cond.count++;
                } else {
                    if(cond.count >= 2) {
                        if(cond.type === 1 || cond.type === -1) {
                            rez += cond.first + '-' + arr[i - 1] + ',';
                        } else {
                            rez += cond.first + '-' + arr[i -1] + '/' + cond.type + ',';
                        }
                        cond.count = 0;
                        cond.start = true;
                        cond.first = arr[i];
                    } else {
                        rez += cond.first + ',';
                        cond.first = arr[i];
                        cond.count = 1;
                        cond.type = diff;
                    }
                }
            }
        }
    }
    // console.log('** +> ', cond.count, cond.type, cond.first);
    return rez.substring(0, rez.length - 1) ;
}

// console.log('==> 1,3-5,7-11,14*2,17-20,25 ==> ',testas([1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 14, 17, 18, 19, 20, 25]));
// console.log(testas([0, 2, 4, 5, 7, 8, 9]));
// console.log(testas([0, 2, 4, 5, 7, 6, 5]));
// console.log(testas([0, 2, 4, 5, 7, 6, 5]));
// console.log(testas([0, 2, 4, 5, 7, 6, 5, 5, 5, 5, 5]));
console.log(testas([ 1, 10, 8, 6, 7 ]));

