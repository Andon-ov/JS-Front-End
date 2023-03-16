function solve(n, arr) {
    let result = arr.splice(0, n);
    console.log(result.reverse().join(' '));

}

solve(3, [10, 20, 30, 40, 50]);