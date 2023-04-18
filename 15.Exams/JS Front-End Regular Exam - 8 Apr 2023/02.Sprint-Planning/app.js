window.addEventListener('load', solve);


function solve() {
    const form = document.getElementById('create-task-form');
    form.addEventListener('submit', (ev) => ev.preventDefault());

    const points = document.getElementById('total-sprint-points');
    let totalPoints = 0;


    const hidden = document.getElementById('task-id');

    const tasks = document.getElementById('tasks-section');
    let task = 0;

    const inputs = {
        title: document.getElementById('title'),
        description: document.getElementById('description'),
        label: document.getElementById('label'),
        estimationPoints: document.getElementById('points'),
        assignee: document.getElementById('assignee'),

    };
    let memory = {};
    const createBtn = document.getElementById('create-task-btn');
    const deleteTaskBtn = document.getElementById('delete-task-btn');

    createBtn.addEventListener('click', onCreate);
    deleteTaskBtn.addEventListener('click', onDeleteTask);

    function onCreate() {
        let isValid = Object.values(inputs).every(input => input.value !== '');
        if (!isValid) {
            return;
        }

        let { title, description, label, estimationPoints, assignee } = inputs;

        let icons = {

            "Feature": "&#8865",
            "Low Priority Bug": "&#9737",
            "High Priority Bug": "&#9888"
        };

        let divClass = {
            "Feature": "feature",
            "Low Priority Bug": "low-priority",
            "High Priority Bug": "high-priority"
        };

        task += 1;
        memory[`task-${task}`] = {
            title: title.value,
            description: description.value,
            label: label.value,
            estimationPoints: estimationPoints.value,
            assignee: assignee.value
        };

        const article = createElement('article', tasks, '', ["task-card"], `task-${task}`);
        createElement('div', article, `${label.value} ${icons[label.value]}`, ["task-card-label", divClass[label.value]], null, null, true);
        createElement('h3', article, title.value, ["task-card-title"]);
        createElement('p', article, description.value, ["task-card-description"]);
        createElement('div', article, `Estimated at ${estimationPoints.value} pts`, ["task-card-points"]);
        createElement('div', article, `Assigned to: ${assignee.value}`, ["task-card-assignee"]);
        const div = createElement('div', article, '', ["task-card-actions"]);

        const deleteBtn = createElement('button', div, 'Delete');
        deleteBtn.addEventListener('click', onDelete);

        totalPoints += Number(estimationPoints.value);
        points.textContent = `Total Points ${totalPoints}pts`;

        form.reset();

        /*
        <article id="task-1" class="task-card">
        <div class="task-card-label feature">Feature</div>
        <h3 class="task-card-title">Create Subscriptions Page</h3>
        <p class="task-card-description">Create subscriptions page for our business</p>
        <div class="task-card-points">Estimated at 13 pts</div>
        <div class="task-card-assignee">Assigned to: Kiril Kirilov</div>

        <div class="task-card-actions">
            <button>Delete</button>
        </div>
        </article>
        */
    }

    function onDelete() {

        const article = this.parentNode.parentNode;
        const id = article.id;
        deleteTaskBtn.disabled = false;
        createBtn.disabled = true;
        hidden.value = id;

        for (const input in inputs) {
            inputs[input].value = memory[id][input];
            inputs[input].disabled = true;
        }

    }
    function onDeleteTask() {

        const id = hidden.value;
        const estimationPoints = memory[id].estimationPoints;
        totalPoints -= Number(estimationPoints);
        tasks.querySelector(`#${id}`).remove();

        for (const input in inputs) {
            inputs[input].disabled = false;

        }
        form.reset();
        deleteTaskBtn.disabled = true;
        createBtn.disabled = false;

        points.textContent = `Total Points ${totalPoints}pts`;
        delete memory[id];
  
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

}

// function solve() {
//     const hidden = document.getElementById('task-id')
//     let taskId = 0

//     const inputs = {
//         title: document.getElementById('title'),
//         description: document.getElementById('description'),
//         label: document.getElementById('label'),
//         points: document.getElementById('points'),
//         assignee: document.getElementById('assignee'),
//     }

//     const deleteTaskBtn = document.getElementById('delete-task-btn')
//     const createTaskBtn = document.getElementById('create-task-btn')

//     const taskSection = document.getElementById('tasks-section')

//     const totalPointsElement = document.getElementById('total-sprint-points')
//     let totalPoints = 0


//     createTaskBtn.addEventListener('click', beforeCreate)
//     deleteTaskBtn.addEventListener('click', onDeleteTask)
//     const memory = {}


//     function beforeCreate() {
//         let {title, description, label, points, assignee} = inputs

//         let isCorrect = Object.values(inputs).every(x => x.value !== '')
//         if (!isCorrect) {
//             return
//         }
//         createElements(title.value, description.value, label.value, points.value, assignee.value)
//         Object.values(inputs).forEach(x => x.value = '')

//     }

//     function createElements(title, description, label, points, assignee) {

//         const options = {
//             'Feature': 'Feature &#8865;',
//             'Low Priority Bug': 'Low Priority Bug &#9737;',
//             'High Priority Bug': 'High Priority Bug &#9888;',
//         }
//         const classes = {
//             'Feature': "feature",
//              'Low Priority Bug': "low-priority",
//              'High Priority Bug': "high-priority",
//         }

//         taskId += 1

//         const article = createElement('article', taskSection, null, ['task-card'], `task-${taskId}`)
//         createElement('div', article, options[label], ["task-card-label", classes[label]], null, null, true)
//         createElement('h3', article, title, ['task-card-title'])
//         createElement('p', article, description, ['task-card-description'])
//         createElement('div', article, `Estimated at ${points} pts`, ['task-card-points'])
//         createElement('div', article, `Assigned to: ${assignee}`, ['task-card-assignee'])
//         const divBtn = createElement('div', article, null, ['task-card-actions'])
//         const deleteBtn = createElement('button', divBtn, "Delete")
//         deleteBtn.addEventListener('click', onDelete)
//         incrementPoints(Number(points))
//         memory[`task-${taskId}`] = {title, description, label, points, assignee}
//     }

//     function incrementPoints(points) {
//         totalPoints += points
//         totalPointsElement.textContent = `Total Points ${totalPoints}pts`
//     }

//     function decrementPoints(points) {
//         totalPoints -= points
//         totalPointsElement.textContent = `Total Points ${totalPoints}pts`
//     }

//     function onDelete() {
//         let id = this.parentNode.parentNode.id
//         hidden.value = id

//         createTaskBtn.disabled = true
//         deleteTaskBtn.disabled = false

//         for (let input of Object.values(inputs)) {
//             input.value = memory[id][input.id]
//             input.disabled = true

//         }

//     }

//     function onDeleteTask() {
//         let points = inputs.points.value
//         let id = this.parentNode.parentNode.querySelector('#task-id').value
//         let task = taskSection.querySelector(`#${id}`)

//         task.remove()
//         Object.values(inputs).forEach(x => {
//             x.value = ''
//             x.disabled = false
//         })
//         delete memory[id]
//         decrementPoints(Number(points))

//         createTaskBtn.disabled = false
//         deleteTaskBtn.disabled = true
//     }

//     function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml) {
//         const htmlElement = document.createElement(type);

//         if (content && useInnerHtml) {
//             htmlElement.innerHTML = content;

//         } else {

//             if (content && type !== 'input') {
//                 htmlElement.textContent = content;

//             }
//             if (content && type === 'input') {
//                 htmlElement.value = content;
//             }
//         }

//         if (classes && classes.length > 0) {
//             htmlElement.classList.add(...classes);
//         }

//         if (id) {
//             htmlElement.id = id;
//         }

//         if (attributes) {
//             for (let key in attributes) {
//                 htmlElement.setAttribute(key, attributes[key]);
//             }

//         }
//         if (parentNode) {
//             parentNode.appendChild(htmlElement);
//         }

//         return htmlElement;
//     }

// }




