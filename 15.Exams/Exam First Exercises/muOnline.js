function solve(input) {
    let dungeon = input.split('|')
    let health = 100
    let bitcoins = 0
    let alive = true

    for (let i = 0; i < dungeon.length; i++) {
        let [key, value] = dungeon[i].split(' ')
        value = Number(value)

        if (key === 'potion') {
            if (health + value > 100) {
                 value = 100 - health
            }
            console.log(`You healed for ${value} hp.`)
            health += value
            console.log(`Current health: ${health} hp.`)


        } else if (key === 'chest') {
            console.log(`You found ${value} bitcoins.`)
            bitcoins += value

        } else {
            health -= value
            if (health <= 0) {
                console.log(`You died! Killed by ${key}.`)
                alive = false
                console.log(`Best room: ${i+1}`)
                break
            }
            console.log(`You slayed ${key}.`)
        }
    }
    if (alive) {
        console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`)
    }
}

// solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")