console.clear();
function test(score) {
    console.log(score);
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
    for(const name in score) {
        if(score[name].length === 0) { delete score[name]; continue } 
            const sumPoints = score[name].reduce((sum, num) => sum + num, 0);
            if(sumPoints > rez.gold.score) {rez.gold.score = sumPoints;} else
            if(sumPoints > rez.silver.score) {rez.silver.score = sumPoints;} else
            if(sumPoints > rez.bronze.score) {rez.bronze.score = sumPoints;}
            score[name]['sum'] = sumPoints;
    }
    for(const name in score) {
        if(score[name]['sum'] === rez.gold.score ) {rez.gold.players.push(name);} else
        if(score[name]['sum'] === rez.silver.score ) {rez.silver.players.push(name);} else
        if(score[name]['sum'] === rez.bronze.score ) {rez.bronze.players.push(name);}; 
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
    return rez;;
}


const test1 = {
    'Emy': [8, 12, 1],
    'Paul': [2, 6, -9],
    'Sandra': [3, 9, 7],
    'Bjaka': [],
    'Sue': [10, 2, 0],
    'Kukis': [8, 2, 2],
    'Yeseult': [8, 9, 3],
}
const test2 = {
    'Emy': [8, 12, 1],
    'Paul': [2, 6, -9],
    'Bjaka': [],
}
console.log(test(test1));

