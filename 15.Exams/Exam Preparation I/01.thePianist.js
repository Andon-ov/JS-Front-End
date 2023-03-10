function thePianist(input) {
    let numberOfPieces = input.shift()
    let pieces = []
    input.splice(0, numberOfPieces).forEach(x => pieces.push(x.split('|')))

    for (let text of input) {
        if (text === 'Stop') {
            break
        }

        if (text.startsWith('Add')) {
            let [_, piece, composer, key] = text.split('|')
            let havePiece = foundPieces(piece)
            if (havePiece) {
                console.log(`${piece} is already in the collection!`)
            } else {
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
                pieces.push([piece, composer, key])
            }


        } else if (text.startsWith('Remove')) {
            let [_, piece] = text.split('|')
            let havePiece = foundPieces(piece)
            if (havePiece) {
                let index = pieces.indexOf(havePiece)
                pieces.splice(index, 1)
                console.log(`Successfully removed ${piece}!`)
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }


        } else if (text.startsWith('ChangeKey')) {
            let [_, piece, newKey] = text.split('|')
            let havePiece = foundPieces(piece)
            if (havePiece) {
                console.log(`Changed the key of ${havePiece[0]} to ${newKey}!`)
                havePiece.splice(2, 1, newKey)

                // havePiece.pop()
                // havePiece.push(newKey)
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }

        }


    }
    pieces.forEach(x => console.log(`${x[0]} -> Composer: ${x[1]}, Key: ${x[2]}`))

    function foundPieces(piece) {
        for (const pieceArr of pieces) {
            if (piece === pieceArr[0])
                return pieceArr

        }
    }


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
])
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
])