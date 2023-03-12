document.querySelector('.list').addEventListener('submit', (e) => e.preventDefault());
const addProduct = document.getElementById('add-product');
addProduct.addEventListener('click', getProductFromForm);
document.getElementById('load-product').addEventListener('click', loadProducts);
const updateProductBtn = document.getElementById('update-product');
updateProductBtn.addEventListener('click', updateProducts);
const tbody = document.getElementById('tbody');
const url = `http://localhost:3030/jsonstore/grocery/`;

const product = document.getElementById('product');
const count = document.getElementById('count');
const price = document.getElementById('price');

function getProductFromForm() {

    if (product.value === '' || count.value === '' || price.value === '') {
        return;
    }

    const headers = {

        method: 'POST',
        body: JSON.stringify({
            product: product.value,
            count: count.value,
            price: price.value
        })
    };

    fetch(url, headers)
        .then(() => loadProducts());
    product.value = '';
    count.value = '';
    price.value = '';
}



function loadProducts() {
    tbody.innerHTML = '';
    fetch(url)
        .then((res) => res.json())
        .then((list) => {
            Object.values(list).forEach(({ product, count, price, _id }) => { createProduct(product, count, price, _id); });
        });
}

function createProduct(product, count, price, _id) {
    const tr = document.createElement('tr');

    const tdProduct = document.createElement('td');
    tdProduct.classList.add('name');
    tdProduct.textContent = product;

    const tdCount = document.createElement('td');
    tdCount.classList.add('count-product');
    tdCount.textContent = count;

    const tdPrice = document.createElement('td');
    tdPrice.classList.add('product-price');
    tdPrice.textContent = price;

    const tdButtons = document.createElement('td');
    tdButtons.classList.add('btn');

    const updateBtn = document.createElement('button');
    updateBtn.classList.add('update');
    updateBtn.textContent = 'Update';
    updateBtn.value = _id;
    updateBtn.addEventListener('click', updateProduct);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = 'Delete';
    deleteBtn.value = _id;
    deleteBtn.addEventListener('click', deleteProduct);

    tdButtons.appendChild(updateBtn);
    tdButtons.appendChild(deleteBtn);

    tr.appendChild(tdProduct);
    tr.appendChild(tdCount);
    tr.appendChild(tdPrice);
    tr.appendChild(tdButtons);

    tbody.appendChild(tr);
}

function deleteProduct(event) {
    const id = event.target.value;

    const headers = {

        method: 'DELETE',

    };

    fetch(url + id, headers)
        .then(() => loadProducts());

}
function updateProduct(event) {
    const id = event.target.value;

    const tdRow = event.target.parentElement.parentElement;
    const forUpdateProduct = tdRow.querySelector('.name');
    const forUpdateCount = tdRow.querySelector('.count-product');
    const forUpdatePrice = tdRow.querySelector('.product-price');

    product.value = forUpdateProduct.textContent;
    count.value = forUpdateCount.textContent;
    price.value = forUpdatePrice.textContent;

    addProduct.disabled = true;
    updateProductBtn.disabled = false;
    updateProductBtn.value = id



}

function updateProducts(event) {
    const id = event.target.value;

    console.log(id);
    if (product.value === '' || count.value === '' || price.value === '') {
        return;
    }
    const headers = {

        method: 'PATCH',
        body: JSON.stringify({
            product: product.value,
            count: count.value,
            price: price.value
        })
    };

    fetch(url + id, headers)
        .then(() => loadProducts());
    product.value = '';
    count.value = '';
    price.value = '';

    addProduct.disabled = false;
    updateProductBtn.disabled = true;
    updateProductBtn.value = ''
}