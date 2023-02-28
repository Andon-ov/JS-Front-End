/* 
    • Every second lost game, his helmet is broken.
    • Every third lost game, his sword is broken.

    • When both his sword and helmet are broken in the same lost fight, his shield also breaks.
    • Every second time, when his shield brakes, his armor also needs to be repaired. 
*/
function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetBroken = Math.floor(lostFightsCount / 2);
    let swordBroken = Math.floor(lostFightsCount / 3);
    let shieldBroken = Math.floor(lostFightsCount / 6);
    let armorBroken = Math.floor(lostFightsCount / 12);
    let expenses = (helmetBroken * helmetPrice) + (swordBroken * swordPrice) + (shieldBroken * shieldPrice) + (armorBroken * armorPrice);


    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
solve(7,
    2,
    3,
    4,
    5);
solve(23,
    12.50,
    21.50,
    40,
    200);


