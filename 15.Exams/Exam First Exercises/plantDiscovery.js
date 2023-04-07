function plantDiscovery(input) {
    const plants = {};
    const n = input.shift();

    const commands = {
        'Rate': (plant, rating) => {
            plants[plant].rating.push(Number(rating));

        },
        'Update': (plant, newRarity) => {
            plants[plant].rarity = Number(newRarity);

        },
        'Reset': (plant) => {
            plants[plant].rating = [];
        },
    };

    for (let i = 0; i < n; i++) {
        const [name, rarity] = input.shift().split('<->');
        plants[name] = { rarity: Number(rarity), rating: [] };
    }

    let line = input.shift();

    while (line !== "Exhibition") {

        line = line.split(': ');

        let command = line.shift();

        let [plant, rest] = line.join('').split(' - ');



        if (!plants.hasOwnProperty(plant)) {
            console.log("error");
        } else {
            commands[command](plant, rest);

        }

        line = input.shift();
    }
    console.log('Plants for the exhibition:');
    for (let key in plants) {

        let averageSum = plants[key].rating.reduce((a, b) => a + b, 0);
        let len = plants[key].rating.length;
        let averageRating = averageSum / len;

        console.log(`- ${key}; Rarity: ${plants[key].rarity}; Rating: ${(averageRating ? Number(averageRating) : 0).toFixed(2)}`);
    }

}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);





//     function solve(inputs) {
//     let plants = {}
//     let numberOfPlants = Number(inputs.shift())
//     for (let i = 0; i < numberOfPlants; i++) {
//         let [plant, rarity] = inputs[i].split('<->')
//         plants[plant] = {rarity: Number(rarity), rating: []}
//     }
//     inputs.splice(0, numberOfPlants)
//     let line = inputs.shift()

//     while (line !== 'Exhibition') {

//         let [command, ...rest] = line.split(': ');
//         let [plant, data] = rest[0].split(' - ');


//         if (plants.hasOwnProperty(plant)) {
//             switch (command) {
//                 case 'Rate': {
//                     let rating = Number(data);
//                     plants[plant].rating.push(rating);
//                     break;
//                 }
//                 case 'Update': {
//                     let newRarity = Number(data);
//                     plants[plant].rarity = newRarity;
//                     break;
//                 }
//                 case 'Reset': {
//                     plants[plant].rating = [];
//                     break;
//                 }
//                 default:
//                     console.log('error');
//                     break;
//             }
//         } else {
//             console.log('error');
//         }

//         line = inputs.shift()
//     }

//     console.log(`Plants for the exhibition:`)
//     for (let plant in plants) {
//         console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${averageRating(plants[plant].rating).toFixed(2)}`)
//     }

//     function averageRating(arr) {
//         if (arr.length === 0) return 0
//         return arr.reduce((a, b) => a + b, 0) / arr.length
//     }
// }