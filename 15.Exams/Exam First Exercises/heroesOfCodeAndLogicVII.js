function solve(input) {
    let heroes = {};
    let numberOfHeroes = Number(input.shift());
    for (let i = 0; i < numberOfHeroes; i++) {
        let [heroName, hp, mp] = input[i].split(' ');
        heroes[heroName] = { hp: Number(hp), mp: Number(mp) };
    }
    input.splice(0, numberOfHeroes);
    for (let inputElement of input) {
        let splitElement = inputElement.split(' - ');
        let command = splitElement[0];
        let heroName = splitElement[1];

        if (command === 'CastSpell') {
            let mpNeeded = Number(splitElement[2]);
            let spellName = splitElement[3];
            if (heroes[heroName].mp >= mpNeeded) {
                let manaLeft = heroes[heroName].mp - mpNeeded;
                heroes[heroName].mp = manaLeft;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${manaLeft} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }
        } else if (command === 'TakeDamage') {
            let damage = Number(splitElement[2]);
            let attacker = splitElement[3];

            let heroHealth = heroes[heroName].hp - damage;
            if (heroHealth > 0) {
                heroes[heroName].hp -= damage;
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`);
            } else {
                console.log(`${heroName} has been killed by ${attacker}!`);
                delete heroes[heroName];
            }
        } else if (command === 'Recharge') {
            let amount = Number(splitElement[2]);

            let amountRecovered = 0;
            if (heroes[heroName].mp + amount > 200) {
                amountRecovered = 200 - heroes[heroName].mp;
            } else {
                amountRecovered = amount;
            }
            console.log(`${heroName} recharged for ${amountRecovered} MP!`);
            heroes[heroName].mp += amountRecovered;

        } else if (command === 'Heal') {
            let amount = Number(splitElement[2]);
            let amountRecovered = 0;
            if (heroes[heroName].hp + amount > 100) {
                amountRecovered = 100 - heroes[heroName].hp;
            } else {
                amountRecovered = amount;
            }
            console.log(`${heroName} healed for ${amountRecovered} HP!`);
            heroes[heroName].hp += amountRecovered;
        }
    }
    for (let heroesKey in heroes) {
        console.log(`${heroesKey}\nHP: ${heroes[heroesKey].hp}\nMP: ${heroes[heroesKey].mp}`);
    }
}

solve([
    2,
    `Solmyr 85 120`,
    `Kyrre 99 50`,
    `Heal - Solmyr - 10`,
    `Recharge - Solmyr - 50`,
    `TakeDamage - Kyrre - 66 - Orc`,
    `CastSpell - Kyrre - 15 - ViewEarth`,
    `End`,
]);