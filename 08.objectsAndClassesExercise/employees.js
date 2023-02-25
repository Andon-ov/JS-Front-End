function solve(arr) {
    let employees = {

    };

    for (const x of arr) {
        employees[x] = x.length;
    }
    for (const employeeName in employees) {
        console.log(`Name: ${employeeName} -- Personal Number: ${employees[employeeName]}`);

    }
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);