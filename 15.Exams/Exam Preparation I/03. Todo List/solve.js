/*
function attachEvents() {
    const loadBtn = document.getElementById('load-button');
    const addBtn = document.getElementById('add-button');
    const title = document.getElementById('title');
    const todoList = document.getElementById('todo-list');
    const loadUrl = `http://localhost:3030/jsonstore/tasks/`;
    loadBtn.addEventListener('click', loadAll);
    addBtn.addEventListener('click', addNew);

    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });


    async function editTask(e) {
        let target = e.target
        target.textContent = 'Submit'

        const res = await fetch(loadUrl + target.value);
        const data = await res.json();

        let input = document.createElement('input')
        input.value = data.name

        let span = target.parentElement.firstChild
        let li = target.parentElement

        li.replaceChild(input, span)
        target.addEventListener('click', onSubmit)

        async function onSubmit() {
            const task = {
                name: input.value,
                _id: target.value
            };

            const options = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(task),
            };
            const res = await fetch(loadUrl + target.value, options);
            const data = await res.json();
            if (data) {
                let span = document.createElement('span')
                let input = target.parentElement.firstChild
                span.textContent = data.name
                li.replaceChild(span ,input)
                // loadAll();
            }
        }

    }

    async function loadAll() {
        todoList.innerHTML = '';

        const res = await fetch(loadUrl);
        const data = await res.json();
        Object.values(data).forEach(x => createElement(x));

    }

    async function addNew() {
        if (title.value === '') {
            return;
        }
        const task = {
            name: title.value
        };

        const options = {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        };
        const res = await fetch(loadUrl, options);
        const data = await res.json();
        if (data) {
            title.value = '';
            loadAll();
        }

    }

    function createElement(task) {

        const li = document.createElement('li');
        const spam = document.createElement('span');
        spam.textContent = task.name;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove');
        removeBtn.value = task._id;
        removeBtn.addEventListener('click', removeTask);
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit');
        editBtn.value = task._id;
        editBtn.addEventListener('click', editTask);


        li.appendChild(spam);
        li.appendChild(removeBtn);
        li.appendChild(editBtn);

        todoList.appendChild(li);
    }

    async function removeTask(e) {
        let id = e.currentTarget.value;

        const options = {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const res = await fetch(loadUrl + id, options);
        const data = await res.json();
        if (data) {
            loadAll();
        }
    }

}

attachEvents();
//TODO 80/100


*/
const BASE_URL = 'http://localhost:3030/jsonstore/tasks';
const addButton = document.querySelector("#add-button");
const loadButton = document.getElementById('load-button');
const ulElement = document.querySelector("#todo-list");
const inputElement = document.querySelector("#title");

function attachEvents() {
    loadButton.addEventListener('click', loadTasksHandler);
    addButton.addEventListener('click', addTodo);
}

function loadTasksHandler(e) {
    if (e) {
        e.preventDefault();
    }
    ulElement.innerHTML = '';
    fetch(BASE_URL)
        .then((res) => res.json())
        .then((list) => {
            Object.values(list)
                .forEach(({name, _id}) => {
                    const liItem = createElement('li', '', ulElement);
                    createElement('span', name, liItem);
                    const removeBtn = createElement('button', 'Remove', liItem);
                    removeBtn.id = _id;
                    removeBtn.addEventListener('click', removeTaskHandler);

                    const editBtn = createElement('button', 'Edit', liItem);
                    editBtn.id = _id;
                    editBtn.addEventListener('click', createEditInput);
                })
        })
}

function addTodo(event) {
    event.preventDefault();
    const headers = {
        method: 'POST',
        body: JSON.stringify({name: inputElement.value})
    };
    if (typeof inputElement.value !== "string" ||
        inputElement.value.length <= 3) {
        return;
    }
    fetch(BASE_URL, headers)
        .then(() => loadTasksHandler(event))
    inputElement.value = "";
}

function createEditInput(e) {
    const parentElement = e.target.parentElement;
    e.target.parentElement.innerHTML = `
  <input value='${
        e.target.parentElement.querySelector("span").textContent
    }'/>
    <button id=${e.target.id} class="remove-button">Remove</button>
    <button id=${e.target.id} class="submit-button">Submit</button>`;
    parentElement.querySelector('.remove-button')
        .addEventListener('click', removeTaskHandler);
    parentElement.querySelector('.submit-button')
        .addEventListener('click', editTaskHandler);
}

function removeTaskHandler(e) {
    const id = e.target.id;
    const headers = {
        method: 'DELETE'
    };

    fetch(BASE_URL + `/${id}`, headers)
        .then(() => loadTasksHandler());
}

function editTaskHandler(e) {
    const inputVal = e.target.parentElement.querySelector('input').value;
    const headers = {
        method: 'PATCH',
        body: JSON.stringify({name: inputVal})
    };

    fetch(BASE_URL + `/${e.target.id}`, headers)
        .then(() => loadTasksHandler(e));
}

function createElement(elementTag, value, parent) {
    const newElement = document.createElement(elementTag);
    newElement.innerHTML = value;
    if (parent) {
        parent.appendChild(newElement);
    }

    return newElement;
}

attachEvents();

//TODO 90/100