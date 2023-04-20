
const inputs = {
    title: document.getElementById('course-name'),
    type: document.getElementById('course-type'),
    description: document.getElementById('description'),
    teacher: document.getElementById('teacher-name'),
}

const list = document.getElementById('list')
let selectedId = null

// buttons
const addBtn = document.getElementById('add-course');
const editBtn = document.getElementById('edit-course');
const loadBtn = document.getElementById('load-course');

// event listener
addBtn.addEventListener('click', onAddTask);
editBtn.addEventListener('click', onEditTask);
loadBtn.addEventListener('click', onLoad);

// form
const form = document.querySelector('form');
form.addEventListener('submit', (ev) => ev.preventDefault());
let memory = {}

// url
const url = `http://localhost:3030/jsonstore/tasks/`;

function onLoad() {
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            Object.values(data).forEach(x => {

                const div = createElement('div', list, '', ["container"], x._id)
                createElement('h2', div, x.title)
                createElement('h3', div, x.teacher)
                createElement('h3', div, x.type)
                createElement('h4', div, x.description)

                const editBtn = createElement('button', div, `Edit Course`, ["edit-btn"])
                const finishBtn = createElement('button', div, `Finish Course`, ["finish-btn"])

                editBtn.addEventListener('click', onEdit)
                finishBtn.addEventListener('click', onFinish)
                memory[x._id] = x
            })

        }).catch(error => console.log(error));
}


function onAddTask() {

    let title = document.getElementById('course-name').value
    let type = document.getElementById('course-type').value
    let description = document.getElementById('description').value
    let teacher = document.getElementById('teacher-name').value

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, type, description, teacher })
    }).then(() => {
        onLoad();
        form.reset()
    }).catch(error => console.log(error));

}
function onEditTask() {

    let title = document.getElementById('course-name').value
    let type = document.getElementById('course-type').value
    let description = document.getElementById('description').value
    let teacher = document.getElementById('teacher-name').value

    fetch(url + selectedId, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, type, description, teacher })

    }).then(() => {
        onLoad();

        addBtn.disabled = false
        editBtn.disabled = true
    
            }).catch(error => console.log(error));

}


function onEdit() {
    let div = this.parentNode
    let id = div.id
    let course = memory[id]
    for (const input in inputs) {

        inputs[input].value = course[input]
    }

    div.remove()

    addBtn.disabled = true
    editBtn.disabled = false
    selectedId = id

}
function onFinish() {

    let id = this.parentNode.id

    fetch(url + id, {
        method: "DELETE",

    }).then(() => {
        onLoad();
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
        }

    }
    if (parentNode) {
        parentNode.appendChild(htmlElement);
    }

    return htmlElement;
}
