function solve(arr) {
    for (const num of arr) {

        if (num.toString().split('').reverse().join('') === num.toString()) {
            console.log(true);
        } else {
            console.log(false);
        }
    }

}

// solve([123, 323, 421, 121]);
solve([32,2,232,1010])