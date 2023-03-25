function attachEvents() {
    // load button
    document.getElementById("loadBooks").addEventListener("click", loadBooks);
}

// url
const url = `http://localhost:3030/jsonstore/collections/books`;
// tbody
const tbody = document.querySelector("tbody");
// form button
const formBtn = document.querySelector('#form button');
formBtn.addEventListener('click', addBook);
// title and author
const title = document.querySelector('input[name="title"]');
const author = document.querySelector('input[name="author"]');
// form h3
let formTitle = document.querySelector('#form h3');
let allBooks = {}
// load all books
loadBooks();

function addBook(event) {
    let buttonState = event.target;
    if (title.value === '' || author.value === '') {
        return;
    }
    if (buttonState.textContent === 'Submit') {

        let book = {
            author: author.value,
            title: title.value
        };

        createBook(book);
        author.value = '';
        title.value = '';
        loadBooks();

    } else {

        let id = formBtn.value;

        buttonState.textContent = 'Save';
        formTitle.textContent = 'Edit FORM';

        let book = {
            author: author.value,
            title: title.value
        };
        updateBook(id, book);

        // const requestOptions = {
        //     method: 'PUT',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(book)
        // };
        // fetch(`${url}/${id}`, requestOptions)
        //     .then(response => response.json());

        buttonState.textContent = 'Submit';
        formTitle.textContent = 'FORM';
        author.value = '';
        title.value = '';
        loadBooks();
    }
}

function editBook(event) {
    let id = event.target.parentElement.dataset.id;
    formBtn.value = id;

    formBtn.textContent = 'Save';
    formTitle.textContent = 'Edit FORM';

    // if we want to clear this from table when edit
    // let parent = event.target.parentElement.parentElement;
    // parent.innerHTML = '';


    title.value = allBooks[id].title
    author.value = allBooks[id].author
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
    allBooks = books;
    tbody.replaceChildren(...result);

}

// func create book
async function createBook(book) {
    const result = await request(url, {
        method: "POST",
        body: JSON.stringify(book),
    });
    loadBooks();
    return result;
}


// func edit book
async function updateBook(id, book) {
    const result = await request(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(book),
    });
    loadBooks();
    return result;
}

// func delete book
async function deleteBook(event) {
    let id = event.target.parentElement.dataset.id;

    const result = await request(`${url}/${id}`, {
        method: "DELETE",
    });
    loadBooks();
    return result;
}

// func add row to tbody
function createRow(id, book) {

    const row = document.createElement('tr');

    const titleTd = document.createElement('td')
    titleTd.textContent = book.title

    const authorTd = document.createElement('td')
    authorTd.textContent = book.author

    const buttonsTd = document.createElement('td')
    buttonsTd.setAttribute('data-id' , id);
    
    const editBtn = document.createElement('button')
    editBtn.classList.add('editBtn')
    editBtn.textContent = `Edit`
    editBtn.addEventListener('click', editBook)

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('deleteBtn')
    deleteBtn.textContent = `Delete`
    deleteBtn.addEventListener('click', deleteBook)

    buttonsTd.appendChild(editBtn)
    buttonsTd.appendChild(deleteBtn)

    row.appendChild(titleTd)
    row.appendChild(authorTd)
    row.appendChild(buttonsTd)

    return row;

}

attachEvents();

