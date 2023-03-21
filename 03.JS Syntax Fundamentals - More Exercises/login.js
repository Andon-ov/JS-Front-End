function solve(input) {
    let username = input.shift();
    let pass = Array.from(username).reverse().join('');
    for (let i = 0; i < input.length; i++) {
        const searchedWord = input[i];
        if (pass === searchedWord) {
            console.log(`User ${username} logged in.`);
            break;

        } else if (i === 3) {
            console.log(`User ${username} blocked!`);
            break;

        } else {
            console.log(`Incorrect password. Try again.`);
        }
    }
}
// solve(['Acer', 'login', 'go', 'let me in', 'recA']);
// solve(['momo','omom'])
solve(['sunny','rainy','cloudy','sunny','not sunny'])