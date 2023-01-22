console.clear();
// https://www.codewars.com/kata/5783ef69202c0ee4cb000265/train/javascript
function IndexOfArrayInArray(arrayToSearch, query) {
    console.log(`----------------------`);
    console.log(arrayToSearch);
    console.log(query);
    if(!Array.isArray(query)) throw Error();
    if(query.length !== 2) throw Error();
    if(!Array.isArray(arrayToSearch)) throw Error();
    for (let i = 0; i < arrayToSearch.length; i++) {
        if(!Array.isArray(arrayToSearch[i])) throw Error();        
        if(arrayToSearch[i].length !== 2) throw Error();        
        if (arrayToSearch[i][0] === query[0] && arrayToSearch[i][1] === query[1]) return i;       
    }
    
    return -1;  
}
// var searchArray = function(arr, query) {
//     if (!Array.isArray(arr) ||
//         !arr.every(x => Array.isArray(x) && x.length == 2) ||
//         query.length != 2) throw 'please not again'
//     return arr.findIndex(x => ''+x == ''+query)
//   }

console.log(`* `,IndexOfArrayInArray([[1,2],[`a`,`b`],[7,8],[5,6]],[2,3]));
console.log(`0 `,IndexOfArrayInArray([[1,2],[3,4],[5,6]],[1,2]));
console.log(`* `,IndexOfArrayInArray([[1,2],[3,4],[5,6],[7,8]],5));
console.log(`* `,IndexOfArrayInArray([[1,2],[3,4],[5,6],[7,8]],[1,2,3]));
console.log(`* `,IndexOfArrayInArray([[1,2],[3,4],[5,6],7],[1,]));
console.log(`0 `,IndexOfArrayInArray([[3,7]],[3,7]));
console.log(`* `,IndexOfArrayInArray([[1,2],[3,4],[5,6]],99));
console.log(`* `,IndexOfArrayInArray([[1,2],[3,4],[5,6]],`99`));
console.log(`* `,IndexOfArrayInArray(`ABCDEF`,[1,2]));
console.log(`* `,IndexOfArrayInArray([`AB`,`DE`,`GH`],[1,2]));
console.log(`-1 `,IndexOfArrayInArray([[1,2],[3,4],[5,6]],[`AB`,`AC`]));
console.log(`1 `,IndexOfArrayInArray([[1,2],[`AB`,`AC`],[5,6]],[`AB`,`AC`]));
console.log(`-1 `,IndexOfArrayInArray([[1,2],[`AB`,`AC`],[5,6]],[`A`,`B`]));
console.log(`* `,IndexOfArrayInArray([[1,2],[11,0],[5,6]],7));

