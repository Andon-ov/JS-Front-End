function solve(input) {
    let allPeople = Number(input.shift())
    let lift = input
        .join('')
        .split(' ')
        .map(x => Number(x))

    let liftLen = lift.length
    let fullLift = new Array(liftLen).fill(4)
    let maxPeople = fullLift.reduce((a, b) => a + b)
    let startWith = lift.reduce((a, b) => a + b)
    let canGet = maxPeople - startWith
    if (canGet > allPeople) {
        console.log(`The lift has empty spots!`)
    } else if (canGet === allPeople) {
    } else {
        console.log(`There isn't enough space! ${allPeople - canGet} people in a queue!`)
    }
    for (let i = 0; i < lift.length; i++) {
        if (allPeople <= 0) {
            break
        }
        let capacity = Math.abs(4 - lift[i])
        if (capacity < allPeople) {
            lift[i] = 4
            allPeople -= capacity
        } else {
            lift[i] += allPeople
            allPeople = 0
        }
    }
    console.log(...lift)
}

solve(["15", "0 0 0 0 0"])
solve(["20", "0 2 0"])
solve(["10", "0 2 0"])