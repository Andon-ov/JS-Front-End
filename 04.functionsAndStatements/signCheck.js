function solve() {
    let negativeNum = 0;
    for (const iterator of arguments) {
        if (iterator < 0) {
            negativeNum++;
        }
    }

    if (negativeNum % 2 === 0) {
        
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}
solve(5,
    12,
    -15
);