function solve(word, text) {
    let found = false
    let arrText = text.split(' ');
    for (let i = 0; i < arrText.length; i++) {
        if (arrText[i].toLowerCase() === word.toLowerCase()) {
            console.log(word)
            found = true
            break
        }

    }
    if (!found) {
        console.log(`${word} not found!`)

    }

}

solve(
    'javascript',
    'JavaScript is the best programming language');
solve(
    'python',
    'JavaScript is the best programming language');