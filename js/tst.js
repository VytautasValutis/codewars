console.clear();
function TST(a) {
    register = [];
    let name = 'a';
    let value = 1;
    register.push({name : name, value : value});
    name = 'b';
    value = 2;
    register.push({name, value});
    name = 'c';
    value = 3;
    let nameB = 'b';
    register.push({name, value});
    console.log(register.findIndex((a) => a.name === 'c'));
    // console.log(register.find((a) => a.name === 'd').value);
    console.log(register);
    console.log(register.name);
    register.forEach(reg => {
        console.log(reg.name);
    });
    console.log(register);

    return '***' ;
}


console.log(TST(0));