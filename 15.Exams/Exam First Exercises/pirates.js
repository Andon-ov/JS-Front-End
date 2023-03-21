function solve(inputs) {
    let cities = {}
    let city = inputs.shift()
    while (city !== "Sail") {
        let [town, population, gold] = city.split('||')
        if (!cities.hasOwnProperty(town)) {
            cities[town] = {population: 0, gold: 0}
        }
        cities[town].population += Number(population)
        cities[town].gold += Number(gold)

        city = inputs.shift()
    }
    let command = inputs.shift()
    while (command !== "End") {
        command = command.split('=>')
        let action = command[0]
        let town = command[1]
        if (action === 'Plunder') {
            let people = Number(command[2])
            let gold = Number(command[3])
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`)
            cities[town].population -= Number(people)
            cities[town].gold -= Number(gold)

            if (cities[town].population <= 0 || cities[town].gold <= 0) {
                console.log(`${town} has been wiped off the map!`)
                delete cities[town]
            }


        } else {
            let gold = Number(command[2])
            if (gold <= 0) {
                console.log(`Gold added cannot be a negative number!`)
            } else {
                cities[town].gold += Number(gold)
                console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`)
            }

        }
        command = inputs.shift()


    }
    if (Object.keys(cities).length > 0){

        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`)
        for (let city in cities) {
            console.log(`${city} -> Population: ${cities[city].population} citizens, Gold: ${cities[city].gold} kg`)
        }
    }else{
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!")
    }
}

// solve(["Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"])

solve(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])