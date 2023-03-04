function solve(firstNum, secondNum) {
    return (getFactorial(firstNum) / getFactorial(secondNum)).toFixed(2);

    function getFactorial(num) {
        if (num === 1) {
            return num
        }
        return num * getFactorial(num - 1)
    }
}


// function solve(firstNum, secondNum) {
//     return (factorial(firstNum) / factorial(secondNum)).toFixed(2);
//
//     function factorial(num) {
//         let factorial = 1;
//         for (let i = 1; i <= num; i++) {
//             factorial *= i;
//         }
//         return factorial;
//     }
//
// }

console.log(solve(5, 2))