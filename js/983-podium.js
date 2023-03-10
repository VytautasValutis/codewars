console.clear();
// https://www.codewars.com/kata/5f4f9e1aac9fa3002e6e09f3
function test(scores) {
    console.log(scores);
    let rez = {
        'gold': {
            'score': -Infinity,
            'players': [],
        },
        'silver': {
            'score': -Infinity,
            'players': [],
        },
        'bronze': {
            'score': -Infinity,
            'players': [],
        },
    };
    // console.log(rez);
    for(const name in scores) {
        if(scores[name].length === 0) { delete scores[name]; continue } 
        const sumPoints = scores[name].reduce((sum, num) => sum + num, 0);
        scores[name]['sum'] = sumPoints;
        if(sumPoints > rez.gold.score) {
            rez.bronze.score = rez.silver.score;
            rez.silver.score = rez.gold.score;
            rez.gold.score = sumPoints;
        } else
        if(sumPoints > rez.silver.score) {
            rez.bronze.score = rez.silver.score;
            rez.silver.score = sumPoints;
        } else
        if(sumPoints > rez.bronze.score) {rez.bronze.score = sumPoints;}
    } 
    // console.log(scores);
    // console.log(rez);
    if(rez.gold.score === -Infinity) {return {}; };   
    for(const name in scores) {
        if(scores[name]['sum'] === rez.gold.score ) {rez.gold.players.push(name);} else
        if(scores[name]['sum'] === rez.silver.score ) {rez.silver.players.push(name);} else
        if(scores[name]['sum'] === rez.bronze.score ) {rez.bronze.players.push(name);}; 
    }
    rez.gold.players.sort()
    rez.silver.players.sort()
    rez.bronze.players.sort()
    if(rez.silver.players.length === 0) {
        delete rez.silver;
    }
    if(rez.bronze.players.length === 0) {
        delete rez.bronze;
    }
    return rez;
}

let example1 = {
    'Emy': [8, 12, 1],
    'Paul': [2, 6, -9],
    'Sandra': [3, 9, 7],
    'Sue': [10, 2, 0],
    'Yseult': [8, 9, 3]
};


const test1 = {
    'Emy': [8, 12, 1],
    'Paul': [2, 6, -9],
    'Sandra': [3, 9, 7],
    'Bjaka': [],
    'Sue': [10, 2, 0],
    'Kukis': [8, 2, 2],
    'Yeseult': [8, 9, 3],
};
const test2 = {"Emy":[8,12,1],"Paul":[2,6,-9],"Sandra":[3,9,7],"Sue":[10,2,0],"Yseult":[8,9,3]};
const test3 = {"Emy":[],"Paul":[],"Sandra":[]};

console.log(test(test2));
console.log(test(test3));

