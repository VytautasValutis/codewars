console.clear();
function testas(program) {
    console.log('-----------------------');
    console.log(program);
    console.log('=======================');
    let register = [];
    let comNr = 0;
    let comm = [];
    let ifExist = true;
    while (comNr < program.length) {
        comm = program[comNr].split(" ");
        ifExist = register.findIndex((a) => a.name === comm[1]) >= 0;
        switch (comm[0]) {
            case 'mov':
                if(ifExist) {
                    register.find((a) => a.name === comm[1]).value = comm[2];
                } else {
                    register.push({name : comm[1], value : comm[2]});
                }
                break;
            case 'inc':
                register.find((a) => a.name === comm[1]).value++;
                break;
            case 'dec':
                register.find((a) => a.name === comm[1]).value--;
                break;
            case 'jnz':
                if(register.find((a) => a.name === comm[1]).value > 0) {
                    comNr += comm[2];
                    continue;
                }
                break;
            default:
                return false;
                break;
        }
        comNr++;
    }
    console.log(register);
    console.log(comNr, program[comNr],comm);
    return str;
}

// console.log(testas(""));
console.log(testas(['mov a 5','inc a','dec a','dec a','jnz a -1', 'inc a']));

