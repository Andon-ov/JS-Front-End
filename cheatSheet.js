/*
Sort for numbers:

arr.sort((a,b)=> a-b)
arr.sort((a,b)=> b-a)

Sort for string:

arr.sort((a,b)=> a.localeCompare(b))
arr.sort((a,b)=> b.localeCompare(a))

*/

const compareNumbers = {
    ascending: (a, b) => a - b,
    descending: (a, b) => b - a
}

const compareString = {
    ascending: (a, b) => a.localeCompare(b),
    descending: (a, b) => b.localeCompare(a)
}