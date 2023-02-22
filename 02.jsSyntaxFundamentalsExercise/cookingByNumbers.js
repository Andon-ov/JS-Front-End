
function solve(num, ...commands) {
    num = Number(num);

    for (let index = 0; index < commands.length; index++) {
        if (commands[index] === 'chop') {
            num /= 2;
            console.log(num);

        } else if (commands[index] === 'dice') {
            num = Math.sqrt(num);
            console.log(num);

        } else if (commands[index] === 'spice') {
            num += 1;
            console.log(num);

        } else if (commands[index] === 'bake') {
            num *= 3;
            console.log(num);

        } else if (commands[index] === 'fillet') {
            num -= (num * 0.2);
            console.log(num);

        }

    }

}
// solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');