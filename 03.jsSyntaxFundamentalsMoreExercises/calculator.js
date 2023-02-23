function solve(firstNum, operator, secondNum,) {
    switch (operator) {
        case '+':
            return (firstNum + secondNum).toFixed(2);
            break;
        case '-':
            return (firstNum - secondNum).toFixed(2);
            break;
        case '*':
            return (firstNum * secondNum).toFixed(2);
            break;
        case '/':
            return (firstNum / secondNum).toFixed(2);
            break;

    }
}