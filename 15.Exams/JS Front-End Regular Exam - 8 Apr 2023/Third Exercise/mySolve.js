 // form event prevent default
const form = document.querySelector('form');
form.addEventListener('submit', (event) => event.preventDefault());

// URL
const url = `http://localhost:3030/jsonstore/grocery/`;

 // get all buttons
const loadProduct = document.getElementById('load-product');
const addProductBtn = document.getElementById('add-product');
const updateProductBtn = document.getElementById('update-product');

loadProduct.addEventListener('click', loadAllProducts);
addProductBtn.addEventListener('click', onAdd);
updateProductBtn.addEventListener('click', onUpdateProduct);

// get element
const tbody = document.getElementById('tbody');

// get all inputs
const productInput = document.getElementById('product');
const countInput = document.getElementById('count');
const priceInput = document.getElementById('price');

// object with all inputs value
let memory;

// edit product id
let productToEdit;
loadAllProducts();

function loadAllProducts() {

    // memory = {};

    // fetch GET
    fetch(url)
        .then(response => response.json())
        .then((data) => {

            // clear inner HTML 
            tbody.innerHTML = '';

            for (const { product, count, price, _id } of Object.values(data)) {

                // fill memory
                memory[_id] = { product, count, price };

                // create html element
                let tr = createElement('tr', tbody, null, null, _id);
                createElement('td', tr, product, ["name"]);
                createElement('td', tr, count, ["count-product"]);
                createElement('td', tr, price, ["product-price"]);
                let tdBtn = createElement('td', tr, null, ["btn"]);
                let updateBtn = createElement('button', tdBtn, "Update", ["update"]);
                let deleteBtn = createElement('button', tdBtn, "Delete", ["delete"]);

                // add event listener in buttons
                updateBtn.addEventListener('click', onUpdate);
                deleteBtn.addEventListener('click', onDelete);

            }
        })
        .catch(error => console.error(error));

}


function onAdd() {

    // get inputs value
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
        }

    }
    if (parentNode) {
        parentNode.appendChild(htmlElement);
    }

    return htmlElement;
}

