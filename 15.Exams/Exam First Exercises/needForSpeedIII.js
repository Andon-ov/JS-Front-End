function solve(input) {
    const cars = {}
    const numberOfCars = Number(input.shift())
    for (let i = 0; i < numberOfCars; i++) {
        let [car, mileage, fuel] = input[i].split('|')
        cars[car] = {mileage: Number(mileage), fuel: Number(fuel)}
    }
    input.splice(0, numberOfCars)
    for (let x of input) {

        let splitCommand = x.split(' : ')
        let command = splitCommand[0]
        if (command === 'Stop') {
            for (let car in cars) {
                console.log(`${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`)
            }
        }
        if (command === 'Drive') {
            let car = splitCommand[1]
            let mileage = Number(splitCommand[2])
            let fuel = Number(splitCommand[3])
            if (cars[car].fuel >= fuel) {
                cars[car].mileage += mileage
                cars[car].fuel -= fuel
                console.log(`${car} driven for ${mileage} kilometers. ${fuel} liters of fuel consumed.`)
                if (cars[car].mileage >= 100000) {
                    console.log(`Time to sell the ${car}!`)
                    delete cars[car]
                }
            } else {
                console.log(`Not enough fuel to make that ride`)
            }
        } else if (command === 'Refuel') {
            let car = splitCommand[1]
            let fuel = Number(splitCommand[2])
            if (cars[car].fuel + fuel > 75) {
                let refuel = 75 - cars[car].fuel
                cars[car].fuel += refuel
                console.log(`${car} refueled with ${refuel} liters`)
            } else {
                console.log(`${car} refueled with ${fuel} liters`)
                cars[car].fuel += fuel
            }
        } else if (command === 'Revert') {
            let car = splitCommand[1]
            let mileage = splitCommand[2]
            if (cars[car].mileage - mileage < 10000){
                cars[car].mileage = 10000
            }else{
                console.log(`${car} mileage decreased by ${mileage} kilometers`)
                cars[car].mileage -= mileage
            }
        }
    }
}

solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])