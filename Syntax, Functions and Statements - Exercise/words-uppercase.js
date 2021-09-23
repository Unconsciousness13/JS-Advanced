function solve(text) {
    let words = text.split(/\W+/g);
    let filteredWord = [];
    for (const word of words) {
        if (word !== '') {
            word.trim()
            filteredWord.push(word.toUpperCase())
        }
    }
    return filteredWord.join(", ");

}

console.log(solve('eloas asd d as s sad'))