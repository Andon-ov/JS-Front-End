function solve(text) {
    let result = []
    let arrText = text.split(' ')
    for (let i = 0; i < arrText.length; i++) {
        if (arrText[i].startsWith('#')) {
            result.push(arrText[i].slice(1, arrText[i].length))

        }
    }
    for (let i = 0; i < result.length; i++) {
        if((result[i].search(/[^A-Za-z\s]/)) && (result[i].length > 1)){
            console.log(result[i])
        }

    }


}

solve('Nowadays everyone uses # to #### tag a #special word in #socialMedia')
solve('The symbol # is known #variously in English-speaking #regions as the #number sign')