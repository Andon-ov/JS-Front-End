function attachEvents() {
    // buttons
    const loadBtn = document.getElementById('load-board-btn');
    const createBtn = document.getElementById('create-task-btn');

    // event listener
    loadBtn.addEventListener('click', onLoad);
    createBtn.addEventListener('click', onCreate);
}
// form
const form = document.querySelector('form');
form.addEventListener('submit', (ev) => ev.preventDefault());

// url
const url = `http://localhost:3030/jsonstore/tasks/`;

// section
const todo = document.querySelector('#todo-section .task-list');
const inProgress = document.querySelector('#in-progress-section .task-list');
const codeReview = document.querySelector('#code-review-section .task-list');
const done = document.querySelector('#done-section .task-list');

// inputs
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');

const statusCode = {
    "ToDo": todo,
    "In Progress": inProgress,
    "Code Review": codeReview,
    "Done": done,
};

const buttonTextContent = {
    "ToDo": "Move to In Progress",
    "In Progress": "Move to Code Review",
    "Code Review": "Move to Done",
    "Done": "Close",
};

function onLoad() {
    Array.from(document.getElementsByClassName('task-list')).forEach(ul => ul.innerHTML = '');
    fetch(url)
        .then(res => res.json())
        .then(data => {
            Object.values(data).forEach(x => {
                let { title, description, status, _id } = x;
                const li = createElement('li', statusCode[status], '', ["task"], _id);
                createElement('h3', li, title,);
                createElement('p', li, description,);
                const btn = createElement('button', li, buttonTextContent[status]);
                btn.addEventListener('click', onMove);
            });
        })
        .catch(error => console.log(error));

}
function onMove() {
    const id = this.parentNode.id;
    let status = this.textContent.replace('Move to ', '');
    if (this.textContent === 'Close') {
        fetch(url + id, {
            method: "DELETE"
        }).then(() => {
            onLoad();
        }).catch(error => console.log(error));

    } else {
        fetch(url + id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status })
        }).then(() => {
            onLoad();
        }).catch(error => console.log(error));
    }
}
function onCreate() {
    const title = titleInput.value;
    const description = descriptionInput.value;
    const status = 'ToDo';

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, description, status })
    }).then(() => {
        onLoad();
        form.reset();
    }).catch(error => console.log(error));

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

// function attachEvents() {
//     const form = document.querySelector('form').addEventListener('submit', (e) => { e.preventDefault(); });

//     const loadBtn = document.getElementById('load-board-btn');
//     const createBtn = document.getElementById('create-task-btn');

//     loadBtn.addEventListener('click', onAdd);
//     createBtn.addEventListener('click', onCreate);


// }
// const url = `http://localhost:3030/jsonstore/tasks/`;
// const allSections = document.getElementById('board-section');

// const titleInput = document.getElementById('title');
// const descriptionInput = document.getElementById('description');

// const goTo = {
//     'ToDo': 'Move to In Progress',
//     'In Progress': 'Move to Code Review',
//     'Code Review': 'Move to Done',
//     'Done': 'Close'
// };
// const sections = {
//     'ToDo': document.getElementById('todo-section'),
//     'In Progress': document.getElementById('in-progress-section'),
//     'Code Review': document.getElementById('code-review-section'),
//     'Done': document.getElementById('done-section'),
// };


// function onAdd() {

//     sections['ToDo'].innerHTML = '';
//     sections['In Progress'].innerHTML = '';
//     sections['Code Review'].innerHTML = '';
//     sections['Done'].innerHTML = '';
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             Object.values(data).forEach(x => {

//                 const li = document.createElement('li');
//                 li.classList.add('task');
//                 li.id = x._id;

//                 const h3 = document.createElement('h3');
//                 h3.textContent = x.title;

//                 const p = document.createElement('p');
//                 p.textContent = x.description;

//                 const button = document.createElement('button');
//                 button.textContent = goTo[x.status];
//                 button.addEventListener('click', onMove);

//                 li.appendChild(h3);
//                 li.appendChild(p);
//                 li.appendChild(button);

//                 sections[x.status].appendChild(li);

//             });
//         })
//         .catch(error => console.log(error.message));
// }
// function onCreate() {

//     const title = titleInput.value;
//     const description = descriptionInput.value;
//     const status = `ToDo`;

//     fetch(url, {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ title, description, status })
//     })
//         .then((data) => {
//             console.log(data.json());
//         })
//         .then(() => { onAdd(); })
//         .then(() => {
//             titleInput.value = '';
//             descriptionInput.value = '';
//         })
//         .catch(error => console.log(error.message));


// }
// function onMove() {
//     const li = this.parentElement;
//     const id = li.id;


//     if (this.textContent === 'Close') {
//         fetch(url + id, {
//             method: 'DELETE'
//         })
//             .then(() => { onAdd(); })
//             .catch(error => console.log(error.message));

//     } else {
//         let status = this.textContent.replace('Move to ', '');
//         fetch(url + id, {
//             method: 'PATCH',
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ status })
//         })
//             .then(() => { onAdd(); })
//             .catch(error => console.log(error.message));
//     }

// }
// attachEvents();