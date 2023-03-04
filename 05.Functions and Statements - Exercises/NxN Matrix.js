function solve(n) {
    let matrix = new Array(n).fill(new Array(n).fill(n))
    matrix.forEach(row => console.log(row.join(' ')))

}

// function solve(n) {
//
//     let result = ''
//     for (let row = 0; row < n; row++) {
//         result += `${n} `
//
//     }
//     for (let i = 0; i < n; i++) {
//         console.log(result)
//
//     }
//
//
//
// }

solve(7)