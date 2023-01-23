console.clear();
// https://www.codewars.com/kata/57f625992f4d53c24200070e

function bingo(tickets, win) {
    let winTicket = 0;
    for (let i = 0; i < tickets.length; i++) {
        const work = tickets[i][0].split(``);
        for (let j = 0; j < work.length; j++) {
            if(work[j].codePointAt(0) === tickets[i][1]) {
                winTicket++;
                break;
            }            
        }        
    }
    if(winTicket >= win) {return `Winner!`}
    return `Loser!`;
}

// function bingo(ticket, win){
//     if(ticket.filter(a => a[0].split('').some(b => b.charCodeAt(0) == a[1])).length >= win)
//     {
//       return "Winner!";
//     }
//     return "Loser!";
//   }

// console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), 'Loser!');
// console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), 'Winner!');
// console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!');
console.log(bingo([[`JTMFRYF`,70], [`BRIH`,66], [`JRSSG`,84], [`SZSEAI`,67], [`WOWQDB`,87], [`ZLWUUR`,75]], 5), 'Loser!');
