// function solve(arr) {
//
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         let [status, car] = arr[i].split(", ")
//         if (status === 'IN') {
//             result.push(car)
//         } else {
//             let index = result.indexOf(car)
//             result.splice(index, 1)
//         }
//     }
//     if (result.length > 0) {
//         result.sort((a, b) => a.localeCompare(b)).forEach(x => console.log(x))
//
//     } else {
//         console.log(`Parking Lot is Empty`)
//     }
//
//
// }

// solve(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'])


function solve(input) {
    let obj = {};

    obj = input.reduce((acc, cur) => {
        let [command, carNumber] = cur.split(', ');

        if (acc.hasOwnProperty(carNumber)) {
            if (command === 'OUT') {
                acc[carNumber] = 'out';
            } else if (command === 'IN') {
                acc[carNumber] = 'parked';
            }
        } else {
            if (command === 'IN') {
                acc[carNumber] = 'parked';
            }
        }

        return acc;
    }, {});

    obj = Object.entries(obj)
        .filter(([carNumber, status]) => {

            if (status === 'parked') {
                return carNumber;
            }
        })
        .map(el => el[0])
        .sort((a, b) => a.localeCompare(b))

    if (obj.length > 0) {
        console.log(obj.join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'])


// TODO