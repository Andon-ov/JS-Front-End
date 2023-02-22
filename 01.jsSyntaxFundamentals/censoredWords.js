function solve(text, word) {

    // let result = text.replaceAll(word, '*'.repeat(stars))
    // console.log(result)


    let stars = word.length

    let censored = text.replace(word, '*'.repeat(stars))
    
    while (censored.includes(word)){
        censored = censored.replace(word, '*'.repeat(stars))
    }
    console.log(censored)
}

solve('A smallwords sentence with some  words words words', 'words')