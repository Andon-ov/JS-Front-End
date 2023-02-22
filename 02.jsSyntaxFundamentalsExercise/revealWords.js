function solve(words, text) {
    let arrWords = words.split(', ')
    let arrText = text.split(' ')
    let word;

    for (let i = 0; i < arrText.length; i++) {

        if (arrText[i].startsWith('*')) {
            word = arrText[i].length
            arrText[i] = searchWords(word, arrWords)
        }
    }
    console.log(arrText.join(' '))

    function searchWords(num, words) {
        let result;
        for (let i = 0; i < words.length; i++) {
            if (words[i].length === num) {
                result = words[i]
                return result
            }
        }
    }
}

solve('great', 'softuni is ***** place for learning new programming languages')
solve('great, learning', 'softuni is ***** place for ******** new programming languages')


