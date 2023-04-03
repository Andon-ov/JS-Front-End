function thePianist(input) {
    let n = Number(input.shift());
    let allPiece = {};

    let commands = {
        'Add': addPiece,
        'Remove': removePiece,
        'ChangeKey': changeKeyPiece
    };

    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = input.shift().split('|');
        allPiece[piece] = {composer, key};
    }

    let commandLine = input.shift();
    while (commandLine !== 'Stop') {

        let line = commandLine.split('|');
        let command = line.shift();
        commands[command](...line);

        commandLine = input.shift();
    }

    function addPiece(piece, composer, key) {

        if (allPiece.hasOwnProperty(piece)) {
            console.log(`${piece} is already in the collection!`);

        } else {
            allPiece[piece] = {'composer': composer, 'key': key};
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        }

    }

    function removePiece(piece) {
        if (allPiece.hasOwnProperty(piece)) {
            delete allPiece[piece]
            console.log(`Successfully removed ${piece}!`)
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }

    }

    function changeKeyPiece(piece, newKey) {
        if (allPiece.hasOwnProperty(piece)) {
            allPiece[piece].key = newKey
            console.log(`Changed the key of ${piece} to ${newKey}!`)
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }
    }

    Object.entries(allPiece).forEach(x => console.log(`${x[0]} -> Composer: ${allPiece[x[0]].composer}, Key: ${allPiece[x[0]].key}`))
//     )
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);
// thePianist([
//     '4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop'
// ]);


// function thePianist(input) {

//     let n = Number(input.shift());
//     let piecesCollection = {};

//     let commandParser = {
//         'Add': addPiece,
//         'Remove': removePiece,
//         'ChangeKey': changeKeyPiece
//     };

//     for (let i = 0; i < n; i++) {
//         let [piece, composer, key] = input.shift().split('|');
//         piecesCollection[piece] = {composer, key};
//     }

//     for (const inputLine of input) {
//         if (inputLine === 'Stop') {
//             break;
//         }

//         let commandTokens = inputLine.split('|');
//         let command = commandTokens.shift();
//         commandParser[command](...commandTokens);
//     }

//     for (let piece in piecesCollection) {
//         const {key, composer} = piecesCollection[piece]
//         console.log(`${piece} -> Composer: ${composer}, Key: ${key}`)

//     }

//     function addPiece(piece, composer, key) {
//         if (piecesCollection.hasOwnProperty(piece)) {
//             console.log(`${piece} is already in the collection!`);

//         } else {
//             console.log(`${piece} by ${composer} in ${key} added to the collection!`);
//             piecesCollection[piece] = {composer, key};
//         }
//     }

//     function removePiece(piece) {
//         if (piecesCollection.hasOwnProperty(piece)) {

//             delete piecesCollection[piece];
//             console.log(`Successfully removed ${piece}!`);

//         } else {
//             console.log(`Invalid operation! ${piece} does not exist in the collection.`);
//         }

//     }

//     function changeKeyPiece(piece, newKey) {
//         if (piecesCollection.hasOwnProperty(piece)) {

//             console.log(`Changed the key of ${piece} to ${newKey}!`);
//             piecesCollection[piece].key = newKey;

//         } else {

//             console.log(`Invalid operation! ${piece} does not exist in the collection.`);
//         }
//     }

// }


// thePianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ]);
// thePianist([
//     '4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop'
// ]);


// function thePianist(input) {
//     let numberOfPieces = input.shift()
//     let pieces = []
//     input.splice(0, numberOfPieces).forEach(x => pieces.push(x.split('|')))
//     for (let text of input) {
//         if (text === 'Stop') {
//             break
//         }
//         if (text.startsWith('Add')) {
//             let [_, piece, composer, key] = text.split('|')
//             let havePiece = foundPieces(piece)
//             if (havePiece) {
//                 console.log(`${piece} is already in the collection!`)
//             } else {
//                 console.log(`${piece} by ${composer} in ${key} added to the collection!`)
//                 pieces.push([piece, composer, key])
//             }
//         } else if (text.startsWith('Remove')) {
//             let [_, piece] = text.split('|')
//             let havePiece = foundPieces(piece)
//             if (havePiece) {
//                 let index = pieces.indexOf(havePiece)
//                 pieces.splice(index, 1)
//                 console.log(`Successfully removed ${piece}!`)
//             } else {
//                 console.log(`Invalid operation! ${piece} does not exist in the collection.`)
//             }
//         } else if (text.startsWith('ChangeKey')) {
//             let [_, piece, newKey] = text.split('|')
//             let havePiece = foundPieces(piece)
//             if (havePiece) {
//                 console.log(`Changed the key of ${havePiece[0]} to ${newKey}!`)
//                 havePiece.splice(2, 1, newKey)
//                 // havePiece.pop()
//                 // havePiece.push(newKey)
//             } else {
//                 console.log(`Invalid operation! ${piece} does not exist in the collection.`)
//             }
//         }
//     }
//     pieces.forEach(x => console.log(`${x[0]} -> Composer: ${x[1]}, Key: ${x[2]}`))
//     function foundPieces(piece) {
//         for (const pieceArr of pieces) {
//             if (piece === pieceArr[0])
//                 return pieceArr
//         }
//     }
// }

// thePianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ])
// thePianist([
//     '4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop'
// ])
