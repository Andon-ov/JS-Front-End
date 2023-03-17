function solve(inputs) {
    let shoppingList = inputs
        .shift()
        .split('!')
    for (let input of inputs) {

        if (input === "Go Shopping!") {
            console.log(shoppingList.join(', '))
            break
        }

        let [command, item, newItem] = input.split(' ')
        let itemExist = shoppingList.includes(item)

        if (command === 'Urgent') {

            if (!itemExist) {
                shoppingList.unshift(item)
            }

        } else if (command === 'Unnecessary') {
            if (itemExist) {
                let index = shoppingList.indexOf(item)
                shoppingList.splice(index, 1)

            }

        } else if (command === 'Correct') {
            if (itemExist) {
                let index = shoppingList.indexOf(item)
                shoppingList[index] = newItem

            }

        } else if (command === 'Rearrange') {
            if (itemExist) {
                let index = shoppingList.indexOf(item)
                shoppingList.splice(index, 1)
                shoppingList.push(item)

            }
        }
    }
}


solve(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])
solve(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])