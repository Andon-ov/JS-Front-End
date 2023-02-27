class Vehicle {
    type;
    model;
    parts;
    fuel;

    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts
        this.fuel = fuel;
        this.parts.quality = parts.engine * parts.power
    }

    drive(fuelLost) {
        this.fuel -= fuelLost
    }

}

let parts = {engine: 6, power: 100};
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);
