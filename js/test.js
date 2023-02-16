console.clear();
function testas(str) {
    console.log('-----------------------');
    console.log(str);
    console.log('=======================');
    const isLetter = (smb) => (smb.charCodeAt() >= 97 && smb.charCodeAt() <= 122) ? true : false;
    let words = [];
    const wordsExcl = ["a", "the", "on", "at", "of", "upon", "in", "as"];
    let word = [];
    let wordString = '';
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if(isLetter(str.substring(i,i+1))) {
            word.push(str.substring(i,i+1));
        } else {
            if(word.length < 1) continue;
            wordString = word.join('');
            word = [];
            if(wordsExcl.indexOf(wordString) >= 0) continue;
            words.push(wordString);
        }
    }
    return words.length;
}

console.log(testas("Hello there, little user5453 374 ())$."));
console.log(testas("I’d been using my sphere as a stool. I traced counterclockwise circles on it with my fingertips and it shrank until I could palm it. My bolt had shifted while I’d been sitting. I pulled it up and yanked the pleats straight as I careered around tables, chairs, globes, and slow-moving fraas. I passed under a stone arch into the Scriptorium. The place smelled richly of ink. Maybe it was because an ancient fraa and his two fids were copying out books there. But I wondered how long it would take to stop smelling that way if no one ever used it at all; a lot of ink had been spent there, and the wet smell of it must be deep into everything."));

