console.clear();
function testas(arr) {
    console.log('-----------------------');
    console.log(arr, arr.length);
    console.log('=======================');
    // arr.push(Number.MAX_SAFE_INTEGER);
    let rez = '';
    let diff = 0;
    let cond = {
            type: -2,
            first: arr[0],
            count: 1,
            start: true,
        };
    for (let i = 1; i < arr.length; i++) {
        diff = arr[i] - arr[i - 1];
        //
        console.log(' i => ', i, diff, cond, arr[i]);
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
        //
        console.log('01 => ', i, diff, cond, arr[i]);
        //
                    if(cond.count > 2) {
                        if(cond.type === 1 || cond.type === -1) {
                            rez += cond.first + '-' + arr[i - 1] + ',';
                        } else {
                            rez += cond.first + '-' + arr[i -1] + '/' + Math.abs(cond.type) + ',';
                        }
                        cond.count = 0;
                        cond.start = true;
                        cond.first = arr[i];
                    } else {
                        rez += cond.first + ',';
                        cond.first = arr[i - 1];
                        cond.count = 2;
                        cond.type = diff;
                    }
        //
        console.log('02 => ', i, diff, cond, arr[i]);
        //
                }
            }
        }
        //
        console.log('03 => ', i, diff, cond, arr[i]);
        //
        if(i === arr.length - 1) {
            if(cond.start) {
        //
        console.log('04 => ', i, diff, cond, arr[i]);
        console.log(rez);
        //
        rez += '' + cond.first;
        //
        console.log('05 => ', i, diff, cond, arr[i]);
        console.log(rez);
        //
                continue;
            }
            switch(cond.type) {
                case 0:
                    if(cond.count > 0) { rez += cond.first + "*" + (cond.count + 1);
                    } else { rez += cond.first; }
                    break;
                case 1:
                case -1:    
                    if(cond.count > 2) {
                        rez += cond.first + '-' + arr[i];
                    } else {
                        rez += cond.first + arr[i];
                    }
                    break;
                default:
                    if(cond.count > 2) {
                        rez += cond.first + '-' + arr[i] + '/' + Math.abs(cond.type);
                    } else {
                        rez += cond.first + arr[i];
                    }
                    break;
            }
        }
    }
    // console.log('** +> ', cond.count, cond.type, cond.first);
    return rez;
}

// console.log('==> 1,3-5,7-11,14*2,17-20,25 ==> ',testas([1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 14, 17, 18, 19, 20, 25]));
// console.log(testas([0, 2, 4, 5, 7, 8, 9]));
// console.log(testas([0, 2, 4, 5, 7, 6, 5]));
// console.log(testas([0, 2, 4, 5, 7, 6, 5]));
// console.log(testas([0, 2, 4, 5, 7, 6, 5, 5, 5, 5, 5]));
console.log(testas([ 1, 10, 8, 6, 7, 8, 9 ]));

