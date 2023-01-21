console.clear();
// https://www.codewars.com/kata/5783ef69202c0ee4cb000265/train/javascript
function IndexOfArrayInArray(arrayToSearch, query) {
    // console.log(typeof query[0], query[0]);
    // console.log(typeof query[1], query[1]);
    // if (typeof query[0] === `undefined`) {return "throw error";}
    // if (typeof query[1] === `undefined`) {return "throw error";}
    if (!Array.isArray(query)) {return "throw error";}
    if (query.length !== 2) {return "throw error";}
    if (!(typeof query[0] === `string`) &&  !(typeof query[0] === `number` && isFinite(query[0]))) {return "throw error";}
    if (!(typeof query[1] === `string`) && !(typeof query[1] === `number` && isFinite(query[1]))) {return "throw error";}
    if(!Array.isArray(arrayToSearch)) {return "throw error";};
    if(arrayToSearch.length < 1) {return "throw error";};
    for (let i = 0; i < arrayToSearch.length; i++) {
        if(!Array.isArray(arrayToSearch[i])) {return "throw error";};
        if(arrayToSearch[i].length !== 2) {return "throw error";};
        if (!(typeof arrayToSearch[i][0] === `string`) &&  !(typeof arrayToSearch[i][0] === `number` && isFinite(arrayToSearch[i][0]))) {return "throw error";}
        if (!(typeof arrayToSearch[i][1] === `string`) &&  !(typeof arrayToSearch[i][1] === `number` && isFinite(arrayToSearch[i][1]))) {return "throw error";}
    }
    for (let i = 0; i < arrayToSearch.length; i++) {
        if (arrayToSearch[i][0] === query[0] && arrayToSearch[i][1] === query[1]) return i;       
    }
    return -1;
}
// console.log(`* `,IndexOfArrayInArray([[1,2],[`a`,`b`],[7,8],[5,6]],[2,3]));
// console.log(`0 `,IndexOfArrayInArray([[1,2],[3,4],[5,6]],[1,2]));
// console.log(`2 `,IndexOfArrayInArray([[1,2],[3,4],[5,6]],[5,6]));
// console.log(`-1 `,IndexOfArrayInArray([[1,2],[3,4],[5,6]],[9,2]));
// console.log(`* `,IndexOfArrayInArray([[1,2],[3,4],[5,6],[7,8]],5));
// console.log(`* `,IndexOfArrayInArray([[1,2],[3,4],[5,6],[7,8]],[1,2,3]));
// console.log(`* `,IndexOfArrayInArray([[1,2],[3,4],[5,6],7],[1,2]));
// console.log(`0 `,IndexOfArrayInArray([[3,7]],[3,7]));
// console.log(`* `,IndexOfArrayInArray([[1,2],[3,4],[5,6]],99));
// console.log(`* `,IndexOfArrayInArray([[1,2],[3,4],[5,6]],`99`));
// console.log(`* `,IndexOfArrayInArray(`ABCDEF`,[1,2]));
// console.log(`* `,IndexOfArrayInArray([`AB`,`DE`,`GH`],[1,2]));
// console.log(`-1 `,IndexOfArrayInArray([[1,2],[3,4],[5,6]],[`AB`,`AC`]));
// console.log(`1 `,IndexOfArrayInArray([[1,2],[`AB`,`AC`],[5,6]],[`AB`,`AC`]));
// console.log(`-1 `,IndexOfArrayInArray([[1,2],[`AB`,`AC`],[5,6]],[`A`,`B`]));
console.log(`* `,IndexOfArrayInArray([[1,2],[11,0],[5,6]]));

