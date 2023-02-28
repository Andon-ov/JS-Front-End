
function solve(speed, area) {

    let limits = {
        'residential': 20,
        'city': 50,
        'interstate': 90,
        'motorway': 130,
    };

    let speedDifferences = speed - limits[area];



    if (speedDifferences > 0) {
        let status;
        if (speedDifferences <= 20) {
            status = 'speeding';
        } else if (speedDifferences <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${speedDifferences} km/h faster than the allowed speed of ${limits[area]} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${limits[area]} zone`);
    }
}

solve(40, 'city');
solve(200, 'motorway');
solve(120, 'interstate');
solve(21, 'residential');