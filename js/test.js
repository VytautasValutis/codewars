console.clear();
function test(rec, deze) {
    console.log(rec, deze);
    let kiekis = [];
    let k = 0;
    for(const produktas in rec) {
        for(const maiselis in deze) {
            if(produktas === maiselis) {
                console.log(produktas, maiselis);
                console.log(rec[produktas],deze[maiselis]);                
                if(rec[produktas] > deze[maiselis]) {return 0;};
                kiekis[k++] = Math.floor(deze[maiselis] / rec[produktas]);
                continue;
            }
        }
    }
    console.log(rec, kiekis);


    return '***';
}





console.log(test({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
// console.log(test({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
