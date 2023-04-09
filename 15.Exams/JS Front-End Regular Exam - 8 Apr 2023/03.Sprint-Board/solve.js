function attachEvents() {
    const form = document.querySelector('form').addEventListener('submit', (e) => { e.preventDefault(); });

    const loadBtn = document.getElementById('load-board-btn');
    const createBtn = document.getElementById('create-task-btn');

    loadBtn.addEventListener('click', onAdd);
    createBtn.addEventListener('click', onCreate);


}
const url = `http://localhost:3030/jsonstore/tasks/`;
const allSections = document.getElementById('board-section');

const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');

const goTo = {
    'ToDo': 'Move to In Progress',
    'In Progress': 'Move to Code Review',
    'Code Review': 'Move to Done',
    'Done': 'Close'
};
const sections = {
    'ToDo': document.getElementById('todo-section'),
    'In Progress': document.getElementById('in-progress-section'),
    'Code Review': document.getElementById('code-review-section'),
    'Done': document.getElementById('done-section'),
};


function onAdd() {

    sections['ToDo'].innerHTML = '';
    sections['In Progress'].innerHTML = '';
    sections['Code Review'].innerHTML = '';
    sections['Done'].innerHTML = '';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            Object.values(data).forEach(x => {

                const li = document.createElement('li');
                li.classList.add('task');
                li.id = x._id;

                const h3 = document.createElement('h3');
                h3.textContent = x.title;

                const p = document.createElement('p');
                p.textContent = x.description;

                const button = document.createElement('button');
                button.textContent = goTo[x.status];
                button.addEventListener('click', onMove);

                li.appendChild(h3);
                li.appendChild(p);
                li.appendChild(button);

                sections[x.status].appendChild(li);

            });
        })
        .catch(error => console.log(error.message));
}
function onCreate() {

    const title = titleInput.value;
    const description = descriptionInput.value;
    const status = `ToDo`;

    fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, status })
    })
        .then((data) => {
            console.log(data.json());
        })
        .then(() => { onAdd(); })
        .then(() => {
            titleInput.value = '';
            descriptionInput.value = '';
        })
        .catch(error => console.log(error.message));


}
function onMove() {
    const li = this.parentElement;
    const id = li.id;


    if (this.textContent === 'Close') {
        fetch(url + id, {
            method: 'DELETE'
        })
            .then(() => { onAdd(); })
            .catch(error => console.log(error.message));

    } else {
        let status = this.textContent.replace('Move to ', '');
        fetch(url + id, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status })
        })
            .then(() => { onAdd(); })
            .catch(error => console.log(error.message));
    }

}
attachEvents();
