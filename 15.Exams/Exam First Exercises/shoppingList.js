function solve(input) {
    let shoppingList = input.shift().split("!");

    const commands = {
        Urgent: ([item]) => {

            let itemIndex = shoppingList.indexOf(item);
            if (itemIndex !== -1) { return; }
            shoppingList.unshift(item);
        },
        Unnecessary: ([item]) => {

            let itemIndex = shoppingList.indexOf(item);
            if (itemIndex === -1) { return; }
            shoppingList.splice(itemIndex, 1);


        },
        Correct: ([oldItem, newItem]) => {

            let itemIndex = shoppingList.indexOf(oldItem);
            if (itemIndex === -1) { return; }
            shoppingList.splice(itemIndex, 1, newItem);

        },
        Rearrange: ([item]) => {
            let itemIndex = shoppingList.indexOf(item);
            if (itemIndex === -1) { return; }
            shoppingList.splice(itemIndex, 1)
            shoppingList.push(item);

        },
    };

    let line = input.shift();
    while (line !== "Go Shopping!") {
        let [command, ...other] = line.split(' ');

        commands[command](other);
        line = input.shift();
    }
    console.log(shoppingList.join(', '));
}

solve([
    "Potatoes!Tomatoes!Bread",
    "Unnecessary Milk",
    "Correct Tomatoes Grapes",
    "Rearrange Grapes",
    "Urgent Tomatoes",
    "Go Shopping!",
]);

// solve([
//     "Milk!Pepper!Salt!Water!Banana",
//     "Urgent Salt",
//     "Unnecessary Grapes",
//     "Correct Pepper Onion",
//     "Rearrange Grapes",
//     "Correct Tomatoes Potatoes",
//     "Go Shopping!",
// ]);

// function solve(inputs) {
//     let shoppingList = inputs
//         .shift()
//         .split('!')
//     for (let input of inputs) {

//         if (input === "Go Shopping!") {
//             console.log(shoppingList.join(', '))
//             break
//         }

//         let [command, item, newItem] = input.split(' ')
//         let itemExist = shoppingList.includes(item)

//         if (command === 'Urgent') {

//             if (!itemExist) {
//                 shoppingList.unshift(item)
//             }

//         } else if (command === 'Unnecessary') {
//             if (itemExist) {
//                 let index = shoppingList.indexOf(item)
//                 shoppingList.splice(index, 1)

//             }

//         } else if (command === 'Correct') {
//             if (itemExist) {
//                 let index = shoppingList.indexOf(item)
//                 shoppingList[index] = newItem

//             }

//         } else if (command === 'Rearrange') {
//             if (itemExist) {
//                 let index = shoppingList.indexOf(item)
//                 shoppingList.splice(index, 1)
//                 shoppingList.push(item)

//             }
//         }
//     }
// }