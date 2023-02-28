function solve(text) {

    let result = []
    let counter = 0
    for (let i = 1; i < text.length; i++) {

        if (text[i].charCodeAt() >= 65 && 90 >= text[i].charCodeAt()) {
            result.push(text.slice(counter, i))
            counter = i
        }

    }
    result.push(text.slice(counter, text.length))
    console.log(result.join(', '))

}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
solve('HoldTheDoor')
solve('ThisIsSoAnnoyingToDo')