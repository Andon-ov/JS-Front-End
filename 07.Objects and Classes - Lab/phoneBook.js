function solve(arr) {
    let phoneBook = {}
    
    let name;
    let result;
    let number;

    for (let i = 0; i < arr.length; i++) {
        result = arr[i].split(' ')
        name = result[0]
        number = result[1]
        phoneBook[name] = number

    }
    for (const phoneBookKey in phoneBook) {
        console.log(`${phoneBookKey} -> ${phoneBook[phoneBookKey]}`)

    }

}

solve(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344'])
solve(['George 0552554', 'Peter 087587', 'George 0453112', 'Bill 0845344'])