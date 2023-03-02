function solve(num) {
  let sum = foundSum(num);

  sum === num && sum !== 0
    ? console.log("We have a perfect number!")
    : console.log("It's not so perfect.");

    
  function foundSum(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) sum += i;
    }
  }
}

solve(6);
