// function solve(arr) {
//     let employees = {
//
//     };
//
//     for (const x of arr) {
//         employees[x] = x.length;
//     }
//     for (const employeeName in employees) {
//         console.log(`Name: ${employeeName} -- Personal Number: ${employees[employeeName]}`);
//
//     }
// }


function solve(arr) {
    Object.entries(arr.reduce((data, employee) => {
        data[employee] = employee.length;
        return data
    }, {})).forEach(([employeeName, personalNumber]) => {
        console.log(`Name: ${employeeName} -- Personal Number: ${personalNumber}`);
    })
}

solve(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);