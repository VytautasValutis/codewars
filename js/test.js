console.clear();
function testas(n) {
    console.log('-----------------------');
    console.log(n);
    console.log('=======================');
    let rez = 1;
    let arr = [n - 1, 1];
    const suma = a => a.reduce((b, a) => b += a, 0); 
    const fillArr = (a, k) => {
        // console.log('... =>',a,k,arr );
        arr = [];
        arr[0] = a;
        // console.log('... ->',a,k,arr );
        while(suma(arr) < k) {
            arr.push(a);
        }
        // console.log('... +>',a,k,arr );
        return 0;
    };
    function Count(k, n) {
        if(arr[0] === 0) return;
        console.log(arr);
        if(suma(arr) === n) {
            rez++;
            if(arr[k] > 1) {
                arr[k]--;
                arr.splice(k + 1, 1); 
            } else{
                // console.log('*** +>', k);
                fillArr(arr[k - 1] - 1, n);
                // console.log('*** =>',arr);
            }
        } else {
            arr[k]--;
        }
        console.log(arr);
    }
    Count(1, n)
    return rez;
}

console.log(testas(6));

