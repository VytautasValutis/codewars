console.clear();
// https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3

function findUniq(arr) {
    console.log(arr);
    let krez = ``;
    let kkrez = ``;
    let kFirst = ``;
    let kLast = ``;
    let kkFirst = ``;
    let kkLast = ``;
    // 0-nis elementas
    let temp = arr[0].toUpperCase().split(``).sort().filter(x => (x !== ` `)? x:``);
    krez = arr[0];   
    kFirst = temp[0];
    kLast = temp[temp.length - 1];
    // 1-as elementas
    temp = arr[1].toUpperCase().split(``).sort().filter(x => (x !== ` `)? x:``);
    if (kFirst !== temp[0] || kLast !== temp[temp.length - 1]) {
        kkrez = arr[1];
        kkFirst = temp[0];
        kkLast = temp[temp.length - 1];
    // 2-as elementas
        temp = arr[2].toUpperCase().split(``).sort().filter(x => (x !== ` `)? x:``);
        if (kkFirst !== temp[0] || kkLast !== temp[temp.length - 1]) { return kkrez; }
        else { return krez; }
    }
    for (let i = 2; i < arr.length; i++) {
        temp = arr[i].toUpperCase().split(``).sort().filter(x => (x !== ` `)? x:``);
        if (kFirst !== temp[0] || kLast !== temp[temp.length - 1]) { return arr[i]; } 
    }
    return `ERROR:`;
}

// function findUniq(arr) {
//     let [a,b,c] = arr.slice(0,3)
    
//     if (!similar(a,b) && !similar(a,c)) return a
//     for (d of arr) if (!similar(a,d)) return d
//   }
  
//   function similar (x, y) {
//     x = new Set(x.toLowerCase())
//     y = new Set(y.toLowerCase())
  
//     if (x.size !== y.size) return false
//     for (z of x) if (!y.has(z)) return false
  
//     return true
//   }

console.log(findUniq([`a a a`,`aa a`,`bbb`,`Aaa`,`aA`]));
console.log(findUniq([ 'silvia', 'vasili', 'victor' ]));
console.log(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]));
console.log(findUniq([ '    ', 'a', ' ' ]));
