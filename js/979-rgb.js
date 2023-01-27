console.clear();
// https://www.codewars.com/kata/513e08acc600c94f01000001
function testas(r, g, b) {
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


// function rgb(r, g, b){
// 	return toHex(r)+toHex(g)+toHex(b);
// }

// function toHex(d) {
//     if(d < 0 ) {return "00";}
//     if(d > 255 ) {return "FF";}
//     return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
// }

// console.log(testas(5));
console.log(testas(-10, 300, 15.8));



