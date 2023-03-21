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
            switch (command) {
                case 'Rate': {
                    let rating = Number(data);
                    plants[plant].rating.push(rating);
                    break;
                }
                case 'Update': {
                    let newRarity = Number(data);
                    plants[plant].rarity = newRarity;
                    break;
                }
                case 'Reset': {
                    plants[plant].rating = [];
                    break;
                }
                default:
                    console.log('error');
                    break;
            }
        } else {
            console.log('error');
        }

        line = inputs.shift()
    }

    console.log(`Plants for the exhibition:`)
    for (let plant in plants) {
        console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${averageRating(plants[plant].rating).toFixed(2)}`)
    }

    function averageRating(arr) {
        if (arr.length === 0) return 0
        return arr.reduce((a, b) => a + b, 0) / arr.length
    }
}

solve(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])



