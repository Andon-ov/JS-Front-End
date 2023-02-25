function solve(arr) {

    let addressBook = {};

    for (const el of arr) {
        let elSplit = el.split(':');
        let name = elSplit[0];
        let address = elSplit[1];
        addressBook[name] = address;
    }


    let sortable = Object.fromEntries(
        Object.entries(addressBook)
            .sort(([a,], [b,]) => a.localeCompare(b))
    );

    for (const word in sortable) {
        console.log(`${word} -> ${sortable[word]}`)
    }


}

solve(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']);