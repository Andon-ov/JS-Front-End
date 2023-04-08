window.addEventListener('load', solve);


function solve() {
    const hidden = document.getElementById('task-id');
    const tasksSection = document.getElementById('tasks-section');
    const createTaskBtn = document.getElementById('create-task-btn');

    createTaskBtn.addEventListener('click', createTask);
    const deleteTaskBtn = document.getElementById('delete-task-btn');
    deleteTaskBtn.addEventListener('click', onClear);

    const taskTitleInput = document.getElementById('title');
    const taskDescriptionInput = document.getElementById('description');
    const taskLabelInput = document.getElementById('label');
    const taskEstimationInput = document.getElementById('points');
    const taskAssigneeInput = document.getElementById('assignee');


    let memory = {};

    function createTask() {
        // Validate input fields
        if (taskTitleInput.value === '' || taskDescriptionInput.value === '' || taskLabelInput.value === '' || taskEstimationInput.value === '' || taskAssigneeInput.value === '') {

            return;
        }

        // Create task article
        const taskArticle = document.createElement('article');
        taskArticle.id = `task-${tasksSection.children.length + 1}`;
        taskArticle.classList.add('task-card');


        // Create task card label div
        const taskCardLabelDiv = document.createElement('div');
        taskCardLabelDiv.classList.add('task-card-label', 'feature');

        if (taskLabelInput.value === 'Feature') {
            taskCardLabelDiv.innerHTML = 'Feature &#8865;';
            taskCardLabelDiv.classList.add('feature');

        } else if (taskLabelInput.value === 'Low Priority Bug') {
            taskCardLabelDiv.innerHTML = 'Low Priority Bug &#9737;';
            taskCardLabelDiv.classList.add('low-priority');

        } else if (taskLabelInput.value === 'High Priority Bug') {
            taskCardLabelDiv.innerHTML = 'High Priority Bug &#9888;';
            taskCardLabelDiv.classList.add('high-priority');
        }
        taskArticle.appendChild(taskCardLabelDiv);


        // Create task card title h3
        const taskCardTitleH3 = document.createElement('h3');
        taskCardTitleH3.classList.add('task-card-title');
        taskCardTitleH3.textContent = taskTitleInput.value;
        taskArticle.appendChild(taskCardTitleH3);

        // Create task card description p
        const taskCardDescriptionP = document.createElement('p');
        taskCardDescriptionP.classList.add('task-card-description');
        taskCardDescriptionP.textContent = taskDescriptionInput.value;
        taskArticle.appendChild(taskCardDescriptionP);

        // Create task card estimation div
        const taskCardPointsDiv = document.createElement('div');
        taskCardPointsDiv.classList.add('task-card-points');
        taskCardPointsDiv.textContent = taskEstimationInput.value;
        taskArticle.appendChild(taskCardPointsDiv);

        // Create task card assignee div
        const taskCardAssigneeDiv = document.createElement('div');
        taskCardAssigneeDiv.classList.add('task-card-assignee');
        taskCardAssigneeDiv.textContent = `Assignee to: ${taskAssigneeInput.value}`;
        taskArticle.appendChild(taskCardAssigneeDiv);

        // Create task card action div
        const taskCardActionDiv = document.createElement('div');
        taskCardActionDiv.classList.add('task-card-actions');
        taskArticle.appendChild(taskCardActionDiv);

        const dellBtn = document.createElement('button');
        dellBtn.textContent = 'Delete';
        dellBtn.addEventListener('click', onDelete);
        taskCardActionDiv.appendChild(dellBtn);


        let title = taskTitleInput.value;
        let description = taskDescriptionInput.value;
        let label = taskLabelInput.value;
        let points = taskEstimationInput.value;
        let assignee = taskAssigneeInput.value;

        updateTotalPoints(Number(taskEstimationInput.value));
        
        memory[taskArticle.id] = {
            title,
            description,
            label,
            points,
            assignee
        };

        tasksSection.appendChild(taskArticle);


        // Clear input fields
        taskTitleInput.value = '';
        taskDescriptionInput.value = '';
        taskLabelInput.value = '';
        taskEstimationInput.value = '';
        taskAssigneeInput.value = '';

        function onDelete() {
            let id = this.parentElement.parentElement.id;

            taskTitleInput.value = memory[id].title;
            taskTitleInput.disabled = true;
            taskDescriptionInput.value = memory[id].description;
            taskDescriptionInput.disabled = true;
            taskLabelInput.value = memory[id].label;
            taskLabelInput.disabled = true;
            taskEstimationInput.value = memory[id].points;
            taskEstimationInput.disabled = true;
            taskAssigneeInput.value = memory[id].assignee;
            taskAssigneeInput.disabled = true;
            hidden.value = id;


            createTaskBtn.disabled = true;
            deleteTaskBtn.disabled = false;

        }

    }
    function onClear() {
        let id = hidden.value;
        let article = document.getElementById(id);
        article.remove();
        subtractPoints(Number(taskEstimationInput.value));
        taskTitleInput.value = '';
        taskDescriptionInput.value = '';
        taskLabelInput.value = 'feature';
        taskEstimationInput.value = '';
        taskAssigneeInput.value = '';
        taskTitleInput.disabled = false;
        taskDescriptionInput.disabled = false;
        taskLabelInput.disabled = false;
        taskEstimationInput.disabled = false;
        taskAssigneeInput.disabled = false;
        deleteTaskBtn.disabled = true;
        createTaskBtn.disabled = false;
    }
    // Update total points
    let totalPoints = 0;
    const totalPointsEl = document.querySelector("#total-sprint-points");

    function updateTotalPoints(points) {
        totalPoints += points;
        totalPointsEl.textContent = `Total Points: ${totalPoints}`;
    }

    function subtractPoints(points) {
        totalPoints -= points;
        totalPointsEl.textContent = `Total Points: ${totalPoints}`;
    }
}


