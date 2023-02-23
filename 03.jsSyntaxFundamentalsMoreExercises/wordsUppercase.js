// function solve(text) {
//     let result = ''
//     let char = ''
//
//     for (let i = 0; i < text.length; i++) {
//         char = text[i].toUpperCase()
//         if ((char.charCodeAt() >= 65 && 90 >= char.charCodeAt())) {
//             result += char
//         } else if ((char === ' ') || (char === '.')) {
//
//             if (result[result.length - 1] !== ' ') {
//                 result += `, `
//
//             }
//
//         }
//
//     }
//
//     console.log(result)
//
// }

function solve(text) {
    const re = /([A-Za-z0-9])+/g;
    let str = text;
    const myArray = str.match(re);
    let result = [];
    for (const ch of myArray) {
        result.push(ch.toUpperCase());
    }
    console.log(result.join(", "));
}

solve('Functions in JS can be nested, i.e. hold other functions')