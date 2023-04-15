function solve(input) {
    const n = input.shift();
    const heroes = {}

    const commands = {

        CastSpell: ([heroName, mpNeeded, spellName]) => {
            if (heroes[heroName].mp < Number(mpNeeded)) {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
                return
            }

            heroes[heroName].mp -= Number(mpNeeded)
            console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`)
        }, TakeDamage: ([heroName, damage, attacker]) => {
            heroes[heroName].hp -= Number(damage)
            if (heroes[heroName].hp <= 0) {
                console.log(`${heroName} has been killed by ${attacker}!`)
                delete heroes[heroName]
                return
            }

            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`)
        }, Recharge: ([heroName, amount]) => {

            if (heroes[heroName].mp + Number(amount) > 200) {
                amount = 200 - heroes[heroName].mp
            }

            heroes[heroName].mp += Number(amount)
            console.log(`${heroName} recharged for ${amount} MP!`)

        }, Heal: ([heroName, amount]) => {

            if (heroes[heroName].hp + Number(amount) > 100) {
                amount = 100 - heroes[heroName].hp
            }

            heroes[heroName].hp += Number(amount)
            console.log(`${heroName} healed for ${amount} HP!`)
        },
    }

    for (let i = 0; i < n; i++) {
        let [hero, hp, mp] = input.shift().split(' ')
        heroes[hero] = {hp: Number(hp), mp: Number(mp)}
    }

    let line = input.shift()
    while (line !== 'End') {
        let [command, ...other] = line.split(' - ')

        commands[command](other)

        line = input.shift()
    }
    Object.keys(heroes).forEach(x => console.log(`${x}
  HP: ${heroes[x].hp}
  MP: ${heroes[x].mp}`))

}

solve([2, `Solmyr 85 120`, `Kyrre 99 50`, `Heal - Solmyr - 10`, `Recharge - Solmyr - 50`, `TakeDamage - Kyrre - 66 - Orc`, `CastSpell - Kyrre - 51 - ViewEarth`, `End`,]);

// function solve(input) {

//     let heroes = {};
//     let numberOfHeroes = Number(input.shift());
//     for (let i = 0; i < numberOfHeroes; i++) {
//         let [heroName, hp, mp] = input[i].split(' ');
//         heroes[heroName] = { hp: Number(hp), mp: Number(mp) };
//     }
//     input.splice(0, numberOfHeroes);
//     for (let inputElement of input) {
//         let splitElement = inputElement.split(' - ');
//         let command = splitElement[0];
//         let heroName = splitElement[1];

//         if (command === 'CastSpell') {
//             let mpNeeded = Number(splitElement[2]);
//             let spellName = splitElement[3];
//             if (heroes[heroName].mp >= mpNeeded) {
//                 let manaLeft = heroes[heroName].mp - mpNeeded;
//                 heroes[heroName].mp = manaLeft;
//                 console.log(`${heroName} has successfully cast ${spellName} and now has ${manaLeft} MP!`);
//             } else {
//                 console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
//             }
//         } else if (command === 'TakeDamage') {
//             let damage = Number(splitElement[2]);
//             let attacker = splitElement[3];

//             let heroHealth = heroes[heroName].hp - damage;
//             if (heroHealth > 0) {
//                 heroes[heroName].hp -= damage;
//                 console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`);
//             } else {
//                 console.log(`${heroName} has been killed by ${attacker}!`);
//                 delete heroes[heroName];
//             }
//         } else if (command === 'Recharge') {
//             let amount = Number(splitElement[2]);

//             let amountRecovered = 0;
//             if (heroes[heroName].mp + amount > 200) {
//                 amountRecovered = 200 - heroes[heroName].mp;
//             } else {
//                 amountRecovered = amount;
//             }
//             console.log(`${heroName} recharged for ${amountRecovered} MP!`);
//             heroes[heroName].mp += amountRecovered;

//         } else if (command === 'Heal') {
//             let amount = Number(splitElement[2]);
//             let amountRecovered = 0;
//             if (heroes[heroName].hp + amount > 100) {
//                 amountRecovered = 100 - heroes[heroName].hp;
//             } else {
//                 amountRecovered = amount;
//             }
//             console.log(`${heroName} healed for ${amountRecovered} HP!`);
//             heroes[heroName].hp += amountRecovered;
//         }
//     }
//     for (let heroesKey in heroes) {
//         console.log(`${heroesKey}\nHP: ${heroes[heroesKey].hp}\nMP: ${heroes[heroesKey].mp}`);
//     }
// }