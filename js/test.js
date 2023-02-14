console.clear();
function testas(program) {
    console.log('-----------------------');
    console.log(program);
    console.log('=======================');
    let str = {
        name: '',
        value: 0,
    };
    let comNr = 0;
    let comm = [];
    while (comNr < program.length) {
        comm = program[comNr].split(" ");
        switch (comm[0]) {
            case 'mov':
                if(str[comm[1]] === '') {
                    console.log("Nera");
                } else {
                    console.log("Yra");
                }
                break;
            case 'inc':
                
                break;
            case 'dec':
                
                break;
            case 'jnz':
                
                break;
            default:
                return false;
                break;
        }
        console.log(comNr, program[comNr],comm);
        comNr++;
    }
    return str;
}

// console.log(testas(""));
console.log(testas(['mov a 5','inc a','dec a','dec a','jnz a -1', 'inc a']));

