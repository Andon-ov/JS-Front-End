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
    let id = event.target.dataset.id;
    formBtn.value = id;

    formBtn.textContent = 'Save';
    formTitle.textContent = 'Edit FORM';
    let parent = event.target.parentElement.parentElement;

    let tdTitle = parent.querySelector('td:nth-child(1)').textContent;
    let tdaAuthor = parent.querySelector('td:nth-child(2)').textContent;
    title.value = tdTitle;
    author.value = tdaAuthor;
    // parent.innerHTML = '';

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

    Array.from(document.getElementsByClassName('deleteBtn')).forEach(b => b.addEventListener('click', deleteBook));
    Array.from(document.getElementsByClassName('editBtn')).forEach(b => b.addEventListener('click', editBook));
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
    let id = event.target.dataset.id;

    const result = await request(`${url}/${id}`, {
        method: "DELETE",
    });
    loadBooks();
    return result;
}

// func add row to tbody
function createRow(id, book) {

    const row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>
        <button class ="editBtn" data-id=${id}>Edit</button>
        <button class = "deleteBtn" data-id=${id}>Delete</button>
    </td>`;
    return row;

}

attachEvents();

