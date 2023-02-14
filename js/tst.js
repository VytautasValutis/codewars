console.clear();
function TST(a) {
    register = [];
    let name = 'a';
    let value = 1;
    register.push({name, value});
    name = 'b';
    value = 2;
    register.push({name, value});
    name = 'c';
    value = 3;
    register.push({name, value});
    console.log(register.findIndex((a) => a.name === 'c'));
    // console.log(register.find((a) => a.name === 'd').value);
    register.find((a) => a.name === 'b').value = 5;
    console.log(register);
    register.forEach(reg => {
        console.log(reg.name);
    });

    console.log('***');
    return '***' ;
}


console.log(TST(0));