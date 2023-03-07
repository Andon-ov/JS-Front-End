// load button
function attachEvents() {
    document.getElementById("loadBooks").addEventListener("click", loadBooks);
}


const url = `http://localhost:3030/jsonstore/collections/books`;
const tbody = document.querySelector("tbody");
const formBtn = document.querySelector('#form button');
formBtn.addEventListener('click', addOrEditBook);


// load all books
loadBooks();

function addOrEditBook() {

}

// send request
async function request(url, options) {
    if (options && options.body !== undefined) {
        Object.assign(options, {
            headers: {
                "Content-type": "application/json",
            },
        });
    }
    const response = await fetch(url, options);
    if (response.ok !== true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = await response.json();
    return data;
}


// func load books
async function loadBooks() {
    const books = await request(url);

    const result = Object.entries(books).map(([id, book]) => createRow(id, book));
    tbody.replaceChildren(...result);

    [...document.getElementsByClassName('deleteBtn')].forEach(btn => {
        btn.addEventListener('click',deleteBook(btn.id))
    });
}

// func create book
async function createBook(book) {
    const result = await request(url, {
        method: "POST",
        body: JSON.stringify(book),
    });
    return result;
}


// func edit book
async function updateBook(id, book) {
    const result = await request(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(book),
    });
    return result;
}

// func delete book
async function deleteBook(id) {
    console.log(id);
    const result = await request(`${url}/${id}`, {
        method: "DELETE",
    });
    return result;
}

// func add row to tbody
function createRow(id, book) {

    const row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>
    <button class ="editBtn">Edit</button>
    <button class = "deleteBtn" data-id=${id}>Delete</button>
    </td>`;
    return row;

}

attachEvents();

//TODO

/*

function attachEvents() {
    document.getElementById("loadBooks").addEventListener("click", loadBooks);
}



const url = `http://localhost:3030/jsonstore/collections/books`;
const tbody = document.querySelector("tbody");




// const formBtn = document.querySelector('#form button');
// formBtn.addEventListener('click', addOrEditBook);

async function loadBooks() {
    let res = await fetch(url);
    if (res.status !== 200) {
        throw new Error('Problem loading data');
    }
    let data = await res.json();
    let entries = Object.entries(data);
    tbody.innerHTML = '';
    for (const [key, book] of entries) {
        let row = createRow(key, book);
        tbody.appendChild(row);
    }
    let allDeleteBtn = [...document.getElementsByClassName('deleteBtn')];
    console.log(allDeleteBtn);
    for (const btn in allDeleteBtn) {
        btn.addEventListener('click', removeBook(e));

        console.log(btn.target);

    }
}
    // for (const deleteBtn of allDeleteBtn) {
    //     deleteBtn.addEventListener('click', removeBook(e));
    //     console.log(deleteBtn.target);
    // }



function createRow(id, book) {

    const row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>
        <button class='editBtn' >Edit</button>
        <button class = 'deleteBtn' data-id=${id}>Delete</button>
    </td>`;


    return row;


}
function removeBook(e) {
    console.log(e.target);
}








attachEvents();
// TODO



*/ 