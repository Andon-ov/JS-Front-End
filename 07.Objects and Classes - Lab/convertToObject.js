function solve(jsonStr) {
    let person = JSON.parse(jsonStr)
    for (const person1 in person) {

        console.log(`${person1}: ${person[person1]}`)
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}')