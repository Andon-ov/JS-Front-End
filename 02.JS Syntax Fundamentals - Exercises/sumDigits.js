function solve(num){
    let sum = 0
    num = String(num)
    for (const numElement of num) {
        sum += Number(numElement)
    }
    console.log(sum)
}
solve(5555)