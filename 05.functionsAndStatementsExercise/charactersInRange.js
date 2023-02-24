function solve(first, second) {
    let firstNum = first.charCodeAt();
    let secondNum = second.charCodeAt();
    let result = [];

    if (secondNum > firstNum) {
        for (let i = firstNum + 1; i < secondNum; i++) {
            result.push(String.fromCharCode(i));
        }
    } else {
        for (let i = secondNum + 1; i < firstNum; i++) {
            result.push(String.fromCharCode(i));
        }
    }
    console.log(...result);
}

solve('d', 'a');
