function solve(input) {
    let arr = input
        .shift()
        .split(' ')
        .map(x => Number(x));

    for (let i = 0; i < input.length; i++) {
        let command = input[i];

        if (command.startsWith('swap')) {
            let [_, firstIndex, secondIndex] = command.split(' ');

            firstIndex = Number(firstIndex);
            secondIndex = Number(secondIndex);

            // takes two elements and swap their places.
            [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];

        } else if (command.startsWith('multiply')) {
            let [_, firstIndex, secondIndex] = command.split(' ');

            // takes element at the 1st index and multiply it with the element at 2nd index.
            // Save the product at the 1st index.

            firstIndex = Number(firstIndex);
            secondIndex = Number(secondIndex);
            arr[firstIndex] *= arr[secondIndex];

        } else if (command === 'decrease') {
            // decreases all elements in the array with 1.
            arr = arr.map(num => num - 1);

        } else if (command === 'end') {
            console.log(arr.join(', '));
            break;
        }
    }
}

solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
// solve([
//     '1 2 3 4',
//     'swap 0 1',
//     'swap 1 2',
//     'swap 2 3',
//     'multiply 1 2',
//     'decrease',
//     'end'
// ]);