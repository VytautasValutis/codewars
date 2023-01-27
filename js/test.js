console.clear();
function testas(r, g, b) {
    console.log('===========================');
    let rez ='';
    r = (r > 255)? 255 : r;
    r = (r < 0)? 0 : r;
    r = Math.round(r);
    g = (g > 255)? 255 : g;
    g = (g < 0)? 0 : g;
    g = Math.round(g);
    b = (b > 255)? 255 : b;
    b = (b < 0)? 0 : b;
    b = Math.round(b);
    let rc = r.toString(16).toUpperCase();
    rc = (rc.length === 1)? '0' + rc : rc;
    let gc = g.toString(16).toUpperCase();
    gc = (gc.length === 1)? '0' + gc : gc;
    let bc = b.toString(16).toUpperCase();
    bc = (bc.length === 1)? '0' + bc : bc;
    return rc + gc + bc;
}

// console.log(testas(5));
console.log(testas(-10, 300, 15.8));



