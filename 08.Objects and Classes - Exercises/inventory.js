function solve(arr) {
    let heroes = []
    for (const line of arr) {
        let [name, lvl, inventory] = line.split(' / ')
        lvl = Number(lvl)
        let items = inventory.split(', ')
        heroes.push({name, lvl, items})
    }

    heroes.sort((a, b) => (a.lvl - b.lvl))
    for (const heroesKey in heroes) {
        let allItems = [...heroes[heroesKey].items]
        console.log(`Hero: ${heroes[heroesKey].name}\nlevel => ${heroes[heroesKey].lvl}\nitems => ${allItems.join(', ')}`)
    }

}


solve(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara'])