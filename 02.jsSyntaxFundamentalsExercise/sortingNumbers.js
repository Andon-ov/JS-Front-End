function solve(arr) {
    let result = [];
    arr.sort((a, b) => a - b);

    while (arr.length !== 0) {
        // result.push(arr[arr.length - 1])
        result.push(arr.shift());
        result.push(arr.pop());
    }
    return result;
}