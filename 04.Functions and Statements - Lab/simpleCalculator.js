function solve(firstNum, secondNum, operator,) {
    switch (operator) {
        case 'add':
            console.log(firstNum + secondNum);
            break;
        case 'subtract':
            console.log(firstNum - secondNum);
            break;
        case 'multiply':
            console.log(firstNum * secondNum);
            break;
        case 'divide':
            console.log(firstNum / secondNum);
            break;

    }
}
solve(5,
    5,
    'multiply');

