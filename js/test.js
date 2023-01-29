console.clear();
function testas(arr) {
    let rez = '' + arr[0];
    let diff = 0;
    let cond = {
            type: -2,
            first: -1,
            count: 0,
        };
    for (let i = 1; i < arr.length; i++) {
        diff = a[i] - a[i - 1];
        switch (cond.type) {
            case -2:
                change(a[i - 1], diff, true);                
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
                if(diff === 1) {
                    cond.count++;
                    continue;
                } else  if(cond.count > 2){
                    sequenc('-', cond);
                    continue;
                } else {

                }
                break;
            case -1:
                
                break;
            default: // x
                break;
        }
    }
    return rez ;
}
function change(item, difChange, plus) {
    cond.type = difChange;
    cond.first = item;
    if(plus) {
        cond.count++;
    } else {
        cond.count = 1;
    }
    return 0;
}
function sequenc(par, countSeq) {
    switch(par) {
        case '*': 
            rez += cond.first + par + countSeq;
            cond.count = 0;
            cond.type = -2;
            cond.first = -1
            break;
        
    }
    
}

console.log(testas([1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
// console.log(testas([0, 2, 4, 5, 7, 8, 9]));
// console.log(testas([0, 2, 4, 5, 7, 6, 5]));
// console.log(testas([0, 2, 4, 5, 7, 6, 5, 5, 5, 5, 5]));

