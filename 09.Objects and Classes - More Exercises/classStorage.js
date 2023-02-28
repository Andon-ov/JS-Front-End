class Storage {
  constructor(capacity) {
    this.capacity = capacity;
    this.storage = [];
  }
  addProduct(product) {

    this.storage.push(product);
  }
//   getProcuts(){
//     for (const product of this.storage) {
//         console.log(JSON.stringify(product));
        
//     }
//   }
}

/*
    • capacity – a number that decreases when adding a given quantity of products to storage

    • storage – list of products (object). Each product should have:
    • name - a string
    • price – a number (price is for a single piece of product)
    • quantity – a number
    • totalCost – the sum of the cost of the products

The class should also have the following methods:
    • addProduct – a function that receives a product and adds it to the storage
    • getProcuts – a function that returns all the products in storage in JSON format, each on a new line
*/
let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
// console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);


// TODO
