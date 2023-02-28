function solve(arr) {
    let odd = 0;
    let even = 0;
    for (const arrKey in arr) {
        if (arr[arrKey] % 2 === 0) {
            even += arr[arrKey]
        } else {
            odd += arr[arrKey]
        }

    }
    console.log(even - odd)

}

solve([1, 2, 3, 4, 5, 6])