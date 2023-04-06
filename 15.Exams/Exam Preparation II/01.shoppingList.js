function shoppingList(input) {
    let groceriesList = input.shift().split('!')

    let commands = {
        'Urgent': (item) => {
            if (!groceriesList.includes(item)) {
                groceriesList.unshift(item)
            }
        },
        'Unnecessary': (item) => {
            if (groceriesList.includes(item)) {
                groceriesList.splice(groceriesList.indexOf(item), 1)
            }
        },
        'Correct': (item, newItem) => {
            if (groceriesList.includes(item)) {
                groceriesList[groceriesList.indexOf(item)] = newItem
            }
        },
        'Rearrange': (item) => {
            if (groceriesList.includes(item)) {
                groceriesList.push(groceriesList.splice(groceriesList.indexOf(item), 1))
            }
        },
    }

    let line = input.shift()

    while (line !== 'Go Shopping!') {

        line = line.split(' ')
        let command = line.shift()
        commands[command](...line)

        line = input.shift()
    }

    console.log(groceriesList.join(', '))
}


shoppingList(["Tomatoes!Potatoes!Bread!Milk",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])

// shoppingList(["Milk!Pepper!Salt!Water!Banana",
//     "Urgent Salt",
//     "Unnecessary Grapes",
//     "Correct Pepper Onion",
//     "Rearrange Grapes",
//     "Correct Tomatoes Potatoes",
//     "Go Shopping!"])


// function shoppingList(input) {
//     let initialList = input.shift().split('!')
//     for (let word of input) {
//         if (word === "Go Shopping!") {
//             break
//         }
//         if (word.startsWith('Urgent')) {
//             let [_, item] = word.split(' ')
//             let index = initialList.indexOf(item)
//             if (index === -1) {
//                 // if (!initialList.find(x => x === item)) {
//                 initialList.unshift(item)
//             }
//         } else if (word.startsWith('Unnecessary')) {
//             let [_, item] = word.split(' ')
//             let index = initialList.indexOf(item)
//             if (index > -1) {
//                 initialList.splice(index, 1)
//             }
//         } else if (word.startsWith('Correct')) {
//             let [_, oldItem, newItem] = word.split(' ')
//             let index = initialList.indexOf(oldItem)
//             if (index > -1) {
//                 initialList.splice(index, 1, newItem)
//             }
//         } else if (word.startsWith('Rearrange')) {
//             let [_, item] = word.split(' ')
//             let index = initialList.indexOf(item)
//             if (index > -1) {
//                 initialList.splice(index, 1)
//                 initialList.push(item)
//             }
//         }
//
//     }
//     console.log(initialList.join(', '))
//
// }

//
// shoppingList(["Tomatoes!Potatoes!Bread",
//     "Unnecessary Milk",
//     "Urgent Tomatoes",
//     "Go Shopping!"])
// shoppingList(["Milk!Pepper!Salt!Water!Banana",
//     "Urgent Salt",
//     "Unnecessary Grapes",
//     "Correct Pepper Onion",
//     "Rearrange Grapes",
//     "Correct Tomatoes Potatoes",
//     "Go Shopping!"]
// )
//
// shoppingList(["Milk!Pepper!Salt!Water!Banana",
//     "Urgent Salt",
//     "Unnecessary Grapes",
//     "Correct Pepper Onion",
//     "Correct Salt Potatoes",
//     "Rearrange Grapes",
//     "Go Shopping!",
//     "Correct Salt Potatoes"]
// )
