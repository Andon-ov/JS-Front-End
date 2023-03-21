function solve(...startingYield) {
    startingYield = Number(startingYield);
    let totalAmount = 0;
    let days = 0;

    while(startingYield >= 100) {
        days++;
        totalAmount += startingYield;
        startingYield -= 10;
        totalAmount -= 26;
    }
    totalAmount -= 26;
    if (totalAmount < 0) totalAmount = 0;

    console.log(days);
    console.log(totalAmount);
}
solve([111])