function solve(firstNum, secondNum, threeNum) {

    let addFunc = (num1, num2) => num1 + num2;
    let subtractFunc = (num1, num2) => num1 - num2;
    console.log(subtractFunc(addFunc(firstNum, secondNum), threeNum));

}
solve(23,
    6,
    10);