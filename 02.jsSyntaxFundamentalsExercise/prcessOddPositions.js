// function solve(arr) {
//     let oddPositions = arr.filter((element, index) => index % 2 !== 0);
//     let multiplyNum = oddPositions.map(element => element * 2);
//     multiplyNum.reverse();
//     console.log(...multiplyNum);


// }
function solve(arr) {

    console.log(...arr
        .filter((element, index) => index % 2 !== 0)
        .map(element => element * 2)
        .reverse()
    );


}
solve([10, 15, 20, 25]);