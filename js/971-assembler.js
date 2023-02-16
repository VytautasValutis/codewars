// https://www.codewars.com/kata/58e24788e24ddee28e000053/train/javascript
console.clear();
function testas(program) {
    console.log('-----------------------');
    console.log(program);
    console.log('=======================');
    let register = {};
    let comNr = 0;
    let comm = [];
    while (comNr < program.length) {
        comm = program[comNr].split(" ");
        switch (comm[0]) {
            case 'mov':
                if(Number.isInteger(+comm[2])) {
                    register[comm[1]] = +comm[2];
                } else {
                    register[comm[1]] = register[comm[2]];
                }
                comNr++;
                break;
            case 'inc':
                register[comm[1]]++;
                comNr++;
                break;
            case 'dec':
                register[comm[1]]--;
                comNr++;
                break;
            case 'jnz':
                if(register[comm[1]] !== 0) {
                    comNr += +comm[2];
                } else {
                    comNr++;
                }
                break;
            default:
                return false;
        }
    }
    return register;
}

// console.log(testas(""));
// console.log(testas(['mov a 5','inc a','dec a','dec a','jnz a -1', 'inc a']));
console.log(testas(['mov a -10','mov b a','inc a','dec b','jnz a -2']));

// const asm = {};

// init = () => {
//   asm.ip = 0;
//   asm.regs = {};
// }

// asm.code = {
//   mov: (x, y) => asm.regs[x] = isNaN(+y) ? +asm.regs[y] : +y,
//   inc: (x) => asm.regs[x]++,
//   dec: (x) => asm.regs[x]--,
//   jnz: (x, y) => (asm.regs[x] !== 0 ? asm.ip += +y - 1 : false)
// };

// function simple_assembler(program) {
//   init();
//   let params = [];
  
//   while (asm.ip < program.length) {
//     params = program[asm.ip].split(' ');
//     asm.code[params[0]].apply(null, params.slice(1));
    
//     asm.ip++;
//   }
  
//   return asm.regs;
// }