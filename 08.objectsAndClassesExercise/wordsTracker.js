function solve(arr) {
    let words = {}
    let searchedWords = arr.shift()
    let [firstWord, secondWord] = searchedWords.split(' ')
    words[firstWord] = 0
    words[secondWord] = 0

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === firstWord) {
            words[firstWord]++
        } else if (arr[i] === secondWord) {
            words[secondWord]++
        }
    }
    // words.sort((words.a, words.b) => (a - b))
    for (const key in words) {
        console.log(`${key} - ${words[key]}`)
    }


}

// solve(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])
solve([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])