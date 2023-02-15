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
        console.log(comNr,"... ..",register);
        // console.log(comm);
        ifExist = register.findIndex((a) => a.name === comm[1]) >= 0;
        switch (comm[0]) {
            case 'mov':
                if(ifExist) {
                    register.find((a) => a.name === comm[1]).value = comm[2];
                } else {
                    register.push({name : comm[1], value : comm[2]});
                }
                comNr++;
                break;
            case 'inc':
                console.log(comNr,"inc +>",register);
                register.find((a) => a.name === comm[1]).value++;
                console.log(comNr,"inc =>",register);
                comNr++;
                break;
            case 'dec':
                register.find((a) => a.name === comm[1]).value--;
                comNr++;
                break;
            case 'jnz':
                console.log(comNr," jnz +>");
                if(register.find((a) => a.name === comm[1]).value > 0) {
                    comNr += comm[2];
                } else {
                    comNr++;
                }
                console.log(comNr," jnz =>");
                break;
            default:
                return false;
                break;
        }
    }
    console.log(register);
    console.log(comNr, program[comNr],comm);
    return "***";
}

// console.log(testas(""));
console.log(testas(['mov a 5','inc a','dec a','dec a','jnz a -1', 'inc a']));

