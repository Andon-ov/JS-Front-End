function solve(num) {

    let numString = num.toString();
    let odd = 0;
    let even = 0;

    for (let i = 0; i < numString.length; i++) {

        if (numString[i] % 2 === 0) {
            even += Number(numString[i]);
        } else {
            odd += Number(numString[i]);

        }

    }


    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
solve(1000435);