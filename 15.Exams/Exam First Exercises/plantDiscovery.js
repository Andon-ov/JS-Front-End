function solve(inputs) {
    let plants = {}
    let numberOfPlants = Number(inputs.shift())
    for (let i = 0; i < numberOfPlants; i++) {
        let [plant, rarity] = inputs[i].split('<->')
        plants[plant] = {rarity: Number(rarity), rating: []}
    }
    inputs.splice(0, numberOfPlants)
    let line = inputs.shift()

    while (line !== 'Exhibition') {

        let [command, ...rest] = line.split(': ');
        let [plant, data] = rest[0].split(' - ');


        if (plants.hasOwnProperty(plant)) {
            if (command === 'Rate') {
                let rating = Number(data)
                plants[plant].rating.push(rating)

            }
            else if (command === 'Update') {
                let newRarity = Number(data)
                plants[plant].rarity = newRarity

            }
            else if (command === 'Reset') {
                plants[plant].rating = []
            }
            else {
                console.log('Error')

            }
        } else {
            console.log('Error')
        }
        line = inputs.shift()
    }


    console.log(`Plants for the exhibition:`)
    for (let plant in plants) {
        console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${averageRating(plants[plant].rating).toFixed(2)}`)
    }
    function averageRating(arr) {
        if (arr.length === 0) return 0
        return arr.reduce((a, b) => a + b, 0)/arr.length
    }
}

solve(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Raate: Woodili - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])


// function printInfo(input) {
//     let plantCount = Number(input.shift());
//     let plantCollection = {};
//
//     for (let i = 0; i < plantCount; i++) {
//         let line = input.shift();
//         let [plant, rarity] = line.split('<->');
//         rarity = Number(rarity);
//         plantCollection[plant] = {rarity, rating: []};
//     }
//     let line = input.shift();
//     while (line !== 'Exhibition') {
//         let [command, ...rest] = line.split(': ');
//         let [plant, data] = rest[0].split(' - ');
//         if (plantCollection.hasOwnProperty(plant)) {
//
//             switch (command) {
//                 case 'Rate': {
//                     let rating = Number(data);
//                     plantCollection[plant].rating.push(rating);
//                     break;
//                 }
//                 case 'Update': {
//                     let newRarity = Number(data);
//                     plantCollection[plant].rarity = newRarity;
//                     break;
//                 }
//                 case 'Reset': {
//                     plantCollection[plant].rating = [];
//                     break;
//                 }
//                 default:
//                     console.log('error');
//                     break;
//             }
//         } else {
//             console.log('error');
//         }
//         line = input.shift();
//     }
//
//
//     console.log(`Plants for the exhibition:`);
//
//     for (let plant in plantCollection) {
//         console.log(`- ${plant}; Rarity: ${plantCollection[plant].rarity}; Rating: ${average(plantCollection[plant].rating).toFixed(2)}`);
//     }
//
//     function average(arr) {
//         if (!arr.length) return 0;
//         return arr.reduce((a, b) => a + b, 0) / arr.length;
//     }
// }

// printInfo(["3",
//     "Arnoldii<->4",
//     "Woodii<->7",
//     "Welwitschia<->2",
//     "Rate: Woodii - 10",
//     "Rate: Woordii - 10",
//     "Rate: Welwitschia - 7",
//     "Rate: Arnoldii - 3",
//     "Rate: Woodii - 5",
//     "Update: Woodii - 5",
//     "Reset: Arnoldii",
//     "Exhibition"])

// let sortedPlants = Object.keys(plantCollection).sort(
//     (a, b) =>
//         plantCollection[b].rarity - plantCollection[a].rarity ||
//         average(plantCollection[b].rating) - average(plantCollection[a].rating)
// );
