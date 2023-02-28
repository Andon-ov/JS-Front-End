function solve(num) {

    let numArr = Array.from(String(num), Number)
    let firstNum = numArr[0]

    let sum = 0
    let result = true

    for (let i = 0; i <= numArr.length - 1; i++) {
        if (firstNum !== numArr[i]) {
            result = false
        }

        sum += Number(numArr[i])

    }
    console.log(result)
    console.log(sum)

}

solve(2222)