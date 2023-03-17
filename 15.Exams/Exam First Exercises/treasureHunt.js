function solve(inputs) {
    let items = inputs.shift().split('|')
    for (let input of inputs) {
        if (input === 'Yohoho!') {
            break
        }
        if (input.startsWith('Loot')) {
            input = input.split(' ')

            for (let i = 1; i < input.length; i++) {
                let item = input[i]
                let haveItem = items.filter(element => element === item)
                if (haveItem.length === 0) {
                    items.unshift(item)
                }
            }
        } else if (input.startsWith('Drop')) {
            let index = Number(input.split(' ')[1])
            if (index >= 0 && index < items.length) {
                let item = items.splice(index, 1)
                items.push(item.join(''))
            }
        }
        else if (input.startsWith('Steal')) {
            let count = Number(input.split(' ')[1])
            if (count > items.length){
                console.log(items.join(', '))
                items = []
            }
            let index = items.length - count
            let stolenItems = items.splice(index)
            console.log(stolenItems.join(', '))
        }
    }
    if (items.length > 0) {
        let sum = 0
        for (let item of items) {
            sum += item.length
        }
        console.log(`Average treasure gain: ${(sum / items.length).toFixed(2)} pirate credits.`)
    } else {
        console.log("Failed treasure hunt.")
    }
}
// TODO 80/100

//
// solve(["Gold|Silver|Bronze|Medallion|Cup",
//     "Loot Wood Gold Coins",
//     "Loot Silver Pistol",
//     "Drop 3",
//     "Steal 3",
//     "Yohoho!"])

solve(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])