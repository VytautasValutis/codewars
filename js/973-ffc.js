// https://www.codewars.com/kata/55c6126177c9441a570000cc
console.clear();
function testas(str) {
    console.log(str);
    function ffc(num) {
        let temp = num;
        let ffc = 0;
        while (temp > 0) {
            ffc += temp % 10;
            temp = Math.floor(temp / 10);
        }
        return ffc;
    }
    let b = [];
    let end = false;
    let temp = 0;
    let k = 0;
    arr = str.split(" ").filter((a) => a !== '' ? b.push(a) : '' );
    while (!end) {
        end = true;
        let i = 0;
        console.log("ciklas =>",k,arr);
        while(i < arr.length - 1) {
            let diff = ffc(arr[i]) - ffc(arr[i + 1]);
            console.log(i, arr[i], arr[i+1], diff);
            if(diff === 0) {
                if(arr[i].toString() > arr[i + 1].toString()) {
                    temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    end = false;
                    i++;
                }
            } else if (diff > 0) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                end = false;
                i++;
            }
            i++;
        }
    }
    return arr.join(" ");
}

// console.log(testas(""));
// console.log(testas("56 33 100 22 56 89 98 13 120 99"));
// console.log(testas(" 56 33 100   22 56 89 98 13 120 99"));
console.log(testas("103 123 4444 99 2000"));

// function orderWeight(strng) {
//     const sum = (str)=>str.split('').reduce((sum,el)=>(sum+(+el)),0);
//      function comp(a,b){
//        let sumA = sum(a);
//        let sumB = sum(b);
//        return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
//       };
//     return strng.split(' ').sort(comp).join(' ');
//    }