/*
Sort for numbers:

arr.sort((a,b)=> a-b)
arr.sort((a,b)=> b-a)

Sort for string:

arr.sort((a,b)=> a.localeCompare(b))
arr.sort((a,b)=> b.localeCompare(a))

*/

// dict sort
// const sortable = Object.fromEntries(
//     Object.entries(dict).sort(([a, ], [b, ]) => a.localeCompare(b))
// );


const compareNumbers = {
    ascending: (a, b) => a - b,
    descending: (a, b) => b - a
};

const compareString = {
    ascending: (a, b) => a.localeCompare(b),
    descending: (a, b) => b.localeCompare(a)
};

let sortable = Object.fromEntries(
    Object.entries(words)
        .sort(([a,], [b,]) => a.localeCompare(b))
);

const entries = Object.entries(words);
entries.sort((a, b) => b[1] - a[1]);

entries.forEach((elm, i) => {
  console.log(`${elm[0]} - ${elm[1]}`);
});



let arrFalse = [true, false, true];
console.log(arrFalse.every(Boolean));
// false

let arrTrue = [true, true, true];
console.log(arrTrue.every(Boolean));
//true



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// forEach
arr.forEach(x => { console.log(x); });
// [print(x) for x in arr]

// Arrow function
// forEach((element, index, array) => { /* … */ });

// Callback function
// forEach(callbackFn, thisArg);


// Inline callback function
// forEach(function (element, index, array) { /* … */ }, thisArg);


// Map
let numbers = arr.map(x => x.toString());
console.log(`Map toString ${numbers}`);


// Arrow function
// map((element, index, array) => { /* … */ });

// Callback function
// map(callbackFn, thisArg);

// Inline callback function
// map(function (element, index, array) { /* … */ }, thisArg);


//Filter
console.log(`Filter -> ${arr.filter(x => x % 2 == 0)}`);

// Arrow function
// filter((element, index, array) => { /* … */ })

// Callback function
// filter(callbackFn, thisArg)

// Inline callback function
// filter(function (element, index, array) { /* … */ }, thisArg)


// Reduce

console.log(
    arr.reduce(
        (a, b) => a + b, 0
    )
);

// Arrow function
// reduce((accumulator, currentValue, currentIndex, array) => { /* … */ }, initialValue)

// Callback function
// reduce(callbackFn, initialValue)

// Inline callback function
// reduce(function (accumulator, currentValue, currentIndex, array) { /* … */ }, initialValue)

