function solve(text, word) {
    let textArr = text.split(' ')
    let result = 0;
    for (let i in textArr) {
        if (textArr[i] === word) {
            result++;

        }
    }

    console.log(result)
}

solve('softuni is great place for learning new programming languages',
    'softuni')