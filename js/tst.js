console.clear();
function TST(b) {
    let register = {};
    const comm = ["mov","b","-5"];
    const c = 'c';
    const k = 'b';
    let ifExist = true;
    register[comm[1]] = comm[2];
    console.log(register);
    console.log(typeof register[c]);
    ifExist = (typeof register[c] === 'number');
    console.log(ifExist);
    ifExist = (typeof register["b"] === 'number');
    console.log(ifExist);
    console.log(+comm[2]);
    console.log(Number.isInteger(+comm[2]));
    return "***";
}


console.log(TST(0));