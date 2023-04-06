// form event.preventDefault
const form = document.querySelector('form');
form.addEventListener('submit', (event) => event.preventDefault());

// URL
const url = `http://localhost:3030/jsonstore/grocery/`;

// buttons
const loadProduct = document.getElementById('load-product');
loadProduct.addEventListener('click', loadAllProducts);

const addProductBtn = document.getElementById('add-product');
addProductBtn.addEventListener('click', onAdd);

const updateProductBtn = document.getElementById('update-product');
updateProductBtn.addEventListener('click', onUpdateProduct);

// tbody
const tbody = document.getElementById('tbody');

// inputs
const productInput = document.getElementById('product');
const countInput = document.getElementById('count');
const priceInput = document.getElementById('price');

let memory;
let productToEdit;
loadAllProducts();
function loadAllProducts() {

    memory = {};

    // fetch GET
    fetch(url)
        .then(response => response.json())
        .then((info) => {
            tbody.innerHTML = '';

            for (const { product, count, price, _id } of Object.values(info)) {
                memory[_id] = { product, count, price };

                let tr = createElement('tr', tbody, null, null, _id);
                createElement('td', tr, product, ["name"]);
                createElement('td', tr, count, ["count-product"]);
                createElement('td', tr, price, ["product-price"]);
                let tdBtn = createElement('td', tr, null, ["btn"]);
                let updateBtn = createElement('button', tdBtn, "Update", ["update"]);
                let deleteBtn = createElement('button', tdBtn, "Delete", ["delete"]);

                updateBtn.addEventListener('click', onUpdate);
                deleteBtn.addEventListener('click', onDelete);

            }
        })
        .catch(error => console.error(error));

}


function onAdd() {

    let product = productInput.value;
    let count = countInput.value;
    let price = priceInput.value;

    // fetch POST
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ product, count, price })
    }).then(() => {
        loadAllProducts();
    }).catch(error => console.error(error));

    form.reset();

}
function onUpdate() {

    let id = this.parentNode.parentNode.id;
    let { product, count, price } = memory[id];

    productInput.value = product;
    countInput.value = count;
    priceInput.value = price;
    productToEdit = id;

    addProductBtn.disabled = true;
    updateProductBtn.disabled = false;
}

async function onDelete() {
    let id = this.parentNode.parentNode.id;

    // fetch DELETE
    fetch(url + id, {
        method: 'DELETE'
    }).then(() => {
        loadAllProducts();
    }).catch(error => console.error(error));

}

async function onUpdateProduct() {
    let id = productToEdit;
    let product = productInput.value;
    let count = countInput.value;
    let price = priceInput.value;

    // fetch PATCH
    fetch(url + id, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ product, count, price })
    }).then(() => {
        loadAllProducts();
    }).catch(error => console.error(error));

    form.reset();
    updateProductBtn.disabled = true;
    addProductBtn.disabled = false;
}



function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml) {
    const htmlElement = document.createElement(type);

    if (content && useInnerHtml) {
        htmlElement.innerHTML = content;

    } else {

        if (content && type !== 'input') {
            htmlElement.textContent = content;

        }
        if (content && type === 'input') {
            htmlElement.value = content;
        }
    }

    if (classes && classes.length > 0) {
        htmlElement.classList.add(...classes);
    }

    if (id) {
        htmlElement.id = id;
    }

    if (attributes) {
        for (let key in attributes) {
            htmlElement.setAttribute(key, attributes[key]);
            // htmlElement[key] = attributes[key];
        }

    }
    if (parentNode) {
        parentNode.appendChild(htmlElement);
    }

    return htmlElement;
}


// makeRequest do not work in judge!!!
// function makeRequest(url, method, data, id) {

//     const options = {
//         method,
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };

//     if (data) {
//         options.body = JSON.stringify(data);
//     }

//     const requestUrl = id ? `${url}/${id}` : url;
//     return fetch(requestUrl, options)
//         .then(response => response.json())
//         .catch(error => console.error(error));

// }





// document.querySelector('.list').addEventListener('submit', (e) => e.preventDefault());
// const addProduct = document.getElementById('add-product');
// addProduct.addEventListener('click', getProductFromForm);
// document.getElementById('load-product').addEventListener('click', loadProducts);
// const updateProductBtn = document.getElementById('update-product');
// updateProductBtn.addEventListener('click', updateProducts);
// const tbody = document.getElementById('tbody');
// const url = `http://localhost:3030/jsonstore/grocery/`;

// const product = document.getElementById('product');
// const count = document.getElementById('count');
// const price = document.getElementById('price');

// function getProductFromForm() {

//     if (product.value === '' || count.value === '' || price.value === '') {
//         return;
//     }

//     const headers = {

//         method: 'POST',
//         body: JSON.stringify({
//             product: product.value,
//             count: count.value,
//             price: price.value
//         })
//     };

//     fetch(url, headers)
//         .then(() => loadProducts());
//     product.value = '';
//     count.value = '';
//     price.value = '';
// }



// function loadProducts() {
//     tbody.innerHTML = '';
//     fetch(url)
//         .then((res) => res.json())
//         .then((list) => {
//             Object.values(list).forEach(({ product, count, price, _id }) => { createProduct(product, count, price, _id); });
//         });
// }

// function createProduct(product, count, price, _id) {
//     const tr = document.createElement('tr');

//     const tdProduct = document.createElement('td');
//     tdProduct.classList.add('name');
//     tdProduct.textContent = product;

//     const tdCount = document.createElement('td');
//     tdCount.classList.add('count-product');
//     tdCount.textContent = count;

//     const tdPrice = document.createElement('td');
//     tdPrice.classList.add('product-price');
//     tdPrice.textContent = price;

//     const tdButtons = document.createElement('td');
//     tdButtons.classList.add('btn');

//     const updateBtn = document.createElement('button');
//     updateBtn.classList.add('update');
//     updateBtn.textContent = 'Update';
//     updateBtn.value = _id;
//     updateBtn.addEventListener('click', updateProduct);

//     const deleteBtn = document.createElement('button');
//     deleteBtn.classList.add('delete');
//     deleteBtn.textContent = 'Delete';
//     deleteBtn.value = _id;
//     deleteBtn.addEventListener('click', deleteProduct);

//     tdButtons.appendChild(updateBtn);
//     tdButtons.appendChild(deleteBtn);

//     tr.appendChild(tdProduct);
//     tr.appendChild(tdCount);
//     tr.appendChild(tdPrice);
//     tr.appendChild(tdButtons);

//     tbody.appendChild(tr);
// }

// function deleteProduct(event) {
//     const id = event.target.value;

//     const headers = {

//         method: 'DELETE',

//     };

//     fetch(url + id, headers)
//         .then(() => loadProducts());

// }
// function updateProduct(event) {
//     const id = event.target.value;

//     const tdRow = event.target.parentElement.parentElement;
//     const forUpdateProduct = tdRow.querySelector('.name');
//     const forUpdateCount = tdRow.querySelector('.count-product');
//     const forUpdatePrice = tdRow.querySelector('.product-price');

//     product.value = forUpdateProduct.textContent;
//     count.value = forUpdateCount.textContent;
//     price.value = forUpdatePrice.textContent;

//     addProduct.disabled = true;
//     updateProductBtn.disabled = false;
//     updateProductBtn.value = id



// }

// function updateProducts(event) {
//     const id = event.target.value;

//     console.log(id);
//     if (product.value === '' || count.value === '' || price.value === '') {
//         return;
//     }
//     const headers = {

//         method: 'PATCH',
//         body: JSON.stringify({
//             product: product.value,
//             count: count.value,
//             price: price.value
//         })
//     };

//     fetch(url + id, headers)
//         .then(() => loadProducts());
//     product.value = '';
//     count.value = '';
//     price.value = '';

//     addProduct.disabled = false;
//     updateProductBtn.disabled = true;
//     updateProductBtn.value = ''
// }