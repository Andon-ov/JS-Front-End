function solve() {

    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');

    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', getInfo);

    const finishBtn = document.createElement('button');
    finishBtn.classList.add('orange');
    finishBtn.textContent = 'Finish';


    const open = document.querySelector('.wrapper > section:nth-child(2) > div:nth-child(2)');
    const inProgress = document.querySelector('#in-progress');
    const complete = document.querySelector('.wrapper > section:nth-child(4) > div:nth-child(2)');

    function getInfo(event) {
        event.preventDefault();

        if (
            task.value === '' ||
            description.value === '' ||
            date.value === ''
        ) {
            return;
        }

        const element = createElement();
        open.appendChild(element);

        const greenBtn = element.querySelector('.green');
        greenBtn.addEventListener('click', onStart);

        const redBtn = element.querySelector('.red');
        redBtn.addEventListener('click', onDelete);

        task.value = '';
        description.value = '';
        date.value = '';

        function onStart(event) {
            const buttons = document.querySelector('.flex');
            event.target.remove();
            inProgress.appendChild(element);

            buttons.appendChild(finishBtn);
            finishBtn.addEventListener('click', onFinish);
        }
        function onDelete() {
            element.remove();
        }
        function onFinish() {
            element.lastChild.remove();
            complete.appendChild(element);
        }

    }

    function createElement() {
        const article = document.createElement('article');
        article.innerHTML = `
        <h3>${task.value}</h3>
        <p>Description: ${description.value}</p>
        <p>Due Date: ${date.value}</p>
        <div class="flex">
            <button class="green">Start</button>
            <button class="red">Delete</button>
        </div>`;
        return article;
    }

}

