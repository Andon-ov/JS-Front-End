function solve(first, second) {

  let firstNum = Math.min(first.charCodeAt(), second.charCodeAt());
  let secondNum = Math.max(first.charCodeAt(), second.charCodeAt());

  let result = [];

  for (let i = firstNum + 1; i < secondNum; i++) {
    result.push(String.fromCharCode(i));
  }

  console.log(...result);
}

solve("d", "a");
