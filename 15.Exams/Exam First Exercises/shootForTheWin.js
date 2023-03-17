function solve(input) {
    let pirate = input
        .shift()
        .split(' ')
        .map(x => Number(x))
    for (let index of input) {
        if (index === 'End') {
            let shotTargets = pirate.filter((x) => x === -1)
            console.log(`Shot targets: ${shotTargets.length} -> ${pirate.join(' ')}`)
            break
        }
        index = Number(index)
        if (index < pirate.length) {
            let targetValue = pirate[index]
            pirate[index] = -1
            pirate = pirate.map(x => {
                if (x > targetValue) {
                    x -= targetValue
                } else {
                    if (x > -1) {
                        x += targetValue
                    }
                }
                return x
            })
        }
    }
}


solve(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])
solve(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])