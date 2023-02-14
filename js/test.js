console.clear();
function testas(program) {
    console.log('-----------------------');
    console.log(program);
    console.log('=======================');
    let str = {};
    let comNr = 0;
    while (comNr < program.length) {
        console.log(comNr, program[comNr]);
        comNr++;
    }
    return str;
}

// console.log(testas(""));
console.log(testas(['mov a 5','inc a','dec a','dec a','jnz a -1', 'inc a']));

