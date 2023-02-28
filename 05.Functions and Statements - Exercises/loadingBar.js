function solve(num) {
    let result = ''
    for (let i = 0; i < 10; i++) {
        if (i < num / 10) {
            result += '%'

        } else
            result += '.'
    }
    if (num === 100){
        console.log(`100% Complete!`)
        console.log(`[%%%%%%%%%%]`)
    }else{
        console.log(`${num}% [${result}]`)
        console.log('Still loading...')
    }
}



solve(100)