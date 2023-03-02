function solve(arr) {
  arr.forEach((num) => {
    num.toString().split("").reverse().join("") === num.toString()
      ? console.log(true)
      : console.log(false);
  });
}

solve([32, 2, 232, 1010]);
