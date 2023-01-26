console.clear();
// https://www.codewars.com/kata/525c65e51bf619685c000059/solutions/javascript
function test(recipe, available) {
    // console.log(recipe, available);
    let kiekis = [];
    let k = 0;
    for(const produktas in recipe) {
        let nera = true;
        for(const maiselis in available) {
            if(produktas === maiselis) {
                if(recipe[produktas] > available[maiselis]) {return 0;};
                kiekis[k++] = Math.floor(available[maiselis] / recipe[produktas]);
                nera = false;
                break;
            }
        }
        if(nera) {return 0;};
    }
    kiekis.sort((a,b) => a - b);
    return kiekis[0];
}

// function cakes(recipe, available) {
//     return Object.keys(recipe).reduce(function(val, ingredient) {
//       return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
//     }, Infinity)  
//   }

console.log(test({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
console.log(test({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
