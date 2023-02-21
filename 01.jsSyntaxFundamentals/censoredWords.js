function solve(text, word) {

    // let result = text.replaceAll(word, '*'.repeat(stars))
    // console.log(result)

    let result = []
    let stars = word.length



    for (let textElement of text.split(' ')) {

        if (textElement === word) {
            result.push('*'.repeat(stars))

        } else {
            result.push(textElement)
        }

    }
    console.log(result.join(' '))

}

solve('A smallwords sentence with some  words words words', 'words')