function attachEvents() {

    // get buttons and form and attach events
    const addBtn = document.getElementById('add-button');
    addBtn.addEventListener('click', onAdd);

    const loadBtn = document.getElementById('load-button');
    loadBtn.addEventListener('click', onLoad);

    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    });

}

// get other DOM elements
const root = document.getElementById('root');
const url = `http://localhost:3030/jsonstore/tasks/`;
const ul = document.getElementById('todo-list');
const title = document.getElementById('title');

// load function
function onAdd(event) {
    let name = title.value;
    event.preventDefault();

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
    })
        .then(() => {
            title.value = '';
            onLoad();
        })
        .catch((error) => console.log(error));

}


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
//     if (id) {
//         url + id;
//     }

//     return fetch(url, options)
//         .then(response => response.json())
//         .catch(error => console.error(error));
// }

function onLoad(event) {
    // if (event) {

    //     event.preventDefault();
    // }

    ul.innerHTML = '';

    fetch(url)
        .then((res) => res.json())
        .then((data) => Object.values(data).map(x => {

            const li = createElement('li', ul, null, null, x._id);
            const span = createElement('span', li, x.name);
            const removeBtn = createElement('button', li, 'Remove');
            removeBtn.addEventListener('click', onRemove);
            const editBtn = createElement('button', li, 'Edit');
            editBtn.addEventListener('click', onEdit);

        }))
        .catch((error) => console.log(error));
}

function onRemove() {
    let id = this.parentNode.id;
    fetch(url + id, {
        method: "delete",

    })
        .then(() => {
            onLoad();
        })
        .catch((error) => console.log(error));

}

function onEdit() {
    const li = this.parentNode;
    const name = li.querySelector('span').textContent;

    li.innerHTML = '';
    const input = createElement('input', li, name);
    const removeBtn = createElement('button', li, 'Remove');
    const submitBtn = createElement('button', li, 'Submit');

    removeBtn.addEventListener('click', onRemove);
    submitBtn.addEventListener('click', onSubmit);

}

function onSubmit() {
    let id = this.parentNode.id;
    let name = this.parentNode.querySelector('input').value;


    fetch(url + id, {
        method: 'PATCH',
        body: JSON.stringify({ name })
    })
        .then(() => {

            onLoad();
        })
        .catch((error) => console.log(error));
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

attachEvents();


/* const loadBtn = document.getElementById('load-button');
const addBtn = document.getElementById('add-button');
const title = document.getElementById('title');
const todoList = document.getElementById('todo-list');
const loadUrl = `http://localhost:3030/jsonstore/tasks/`;

function attachEvents() {

    loadBtn.addEventListener('click', loadAll);
    addBtn.addEventListener('click', addNew);

    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });

}

async function editTask(e) {
    let target = e.target;
    target.textContent = 'Submit';

    const res = await fetch(loadUrl + target.value);
    const data = await res.json();

    let input = document.createElement('input');
    input.value = data.name;

    let span = target.parentElement.firstChild;
    let li = target.parentElement;

    li.replaceChild(input, span);
    target.addEventListener('click', onSubmit);

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
            let span = document.createElement('span');
            let input = target.parentElement.firstChild;
            span.textContent = data.name;
            li.replaceChild(span, input);
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

attachEvents();
//TODO 80/100



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
*/

// // Selectors for DOM elements
// const loadBtn = document.getElementById('loadBtn');
// const addBtn = document.getElementById('addBtn');
// const taskInput = document.getElementById('taskInput');
// const tasksUl = document.getElementById('tasksUl');

// // URL endpoint
// const BASE_URL = 'http://localhost:3030/jsonstore/tasks';

// // Load tasks on page load
// window.addEventListener('load', loadTasks);

// // Event listener for Load All button
// loadBtn.addEventListener('click', loadTasks);

// // Event listener for Add button
// addBtn.addEventListener('click', addTask);

// // Function to load tasks from server
// function loadTasks() {
//   fetch(BASE_URL)
//     .then(response => response.json())
//     .then(data => {
//       tasksUl.innerHTML = '';
//       Object.values(data).forEach(task => {
//         const li = createTaskElement(task);
//         tasksUl.appendChild(li);
//       });
//     })
//     .catch(error => console.log(error));
// }

// // Function to create a single task element
// function createTaskElement(task) {
//   const li = document.createElement('li');
//   const span = document.createElement('span');
//   span.textContent = task.name;
//   li.appendChild(span);
//   const removeBtn = document.createElement('button');
//   removeBtn.textContent = 'Remove';
//   removeBtn.addEventListener('click', () => {
//     removeTask(task._id);
//   });
//   li.appendChild(removeBtn);
//   const editBtn = document.createElement('button');
//   editBtn.textContent = 'Edit';
//   editBtn.addEventListener('click', () => {
//     editTask(li, task);
//   });
//   li.appendChild(editBtn);
//   return li;
// }

// // Function to add a new task
// function addTask() {
//   const taskName = taskInput.value;
//   if (!taskName) return;
//   const task = { name: taskName };
//   fetch(BASE_URL, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(task)
//   })
//     .then(response => response.json())
//     .then(data => {
//       const li = createTaskElement(data);
//       tasksUl.appendChild(li);
//       taskInput.value = '';
//     })
//     .catch(error => console.log(error));
// }

// // Function to remove a task
// function removeTask(taskId) {
//   fetch(`${BASE_URL}/${taskId}`, {
//     method: 'DELETE'
//   })
//     .then(response => response.json())
//     .then(data => {
//       loadTasks();
//     })
//     .catch(error => console.log(error));
// }

// // Function to edit a task
// function editTask(li, task) {
//   const span = li.querySelector('span');
//   const editBtn = li.querySelector('button:nth-of-type(2)');
//   span.style.display = 'none';
//   const input = document.createElement('input');
//   input.type = 'text';
//   input.value = task.name;
//   li.insertBefore(input, editBtn);
//   editBtn.textContent = 'Submit';
//   editBtn.removeEventListener('click', () => {
//     editTask(li, task);
//   });
//   editBtn.addEventListener('click', () => {
//     const newName = input.value;
//     if (!newName) return;
//     const newTask = { name: newName };
//     fetch(`${BASE_URL}/${task._id}`, {
//       method: 'PATCH',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newTask)
//     })
//       .then(response => response.json())
//       .then(data => {
//         span.textContent = newName;
//         span.style.display = 'inline';
//         li.removeChild(input);
//         editBtn.textContent = 'Edit';
//         editBtn.addEventListener('click', () => {
//           editTask(li, data);
//         });
//       })
//       .catch(error => console.log(error));
//   });
// }
