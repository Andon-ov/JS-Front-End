function solve(stockArr, productsArr) {
  let shopStore = {};

  store(stockArr, shopStore);
  store(productsArr, shopStore);

  function store(arr, obj) {
    for (let i = 0; i < arr.length - 1; i += 2) {
      if (!obj.hasOwnProperty(arr[i])) {
        obj[arr[i]] = 0;
      }

      obj[arr[i]] += Number([arr[i + 1]]);
    }
  }

  for (const key in shopStore) {
    console.log(`${key} -> ${shopStore[key]}`);
  }
}

solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

// if (!obj.hasOwnProperty(arr[i])) {

//     obj[arr[i]] = Number(arr[i + 1]);

// } else {

//     obj[arr[i]] += Number([arr[i + 1]]);
// }
