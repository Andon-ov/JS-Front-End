window.addEventListener("load", solve);

function solve() {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    });
    const inputs = {
        firstName: document.getElementById("first-name"),
        lastName: document.getElementById("last-name"),
        peopleCount: document.getElementById("people-count"),
        fromData: document.getElementById("from-date"),
        daysCount: document.getElementById("days-count"),
    };
    const previewUl = document.querySelector('.ticket-info-list');
    const confirmUl = document.querySelector('.confirm-ticket');
    const main = document.querySelector('#main');
    const body = document.querySelector('#body');
    const nextBtn = document.getElementById("next-btn");
    nextBtn.addEventListener("click", onAdd);

    const memory = {};

    function onAdd() {
        const isValid = Object.values(inputs).every((x) => x.value !== "");
        if (!isValid) {
            return;
        }

        for (const input in inputs) {
            memory[input] = inputs[input].value;
        }
        const li = createElement('li', previewUl, '', ["ticket"]);
        const article = createElement('article', li);
        createElement('h3', article, `Name: ${inputs['firstName'].value} ${inputs['lastName'].value}`);
        createElement('p', article, `From date: ${inputs['fromData'].value}`);
        createElement('p', article, `For ${inputs['daysCount'].value} days`);
        createElement('p', article, `For ${inputs['peopleCount'].value} peoples`);

        const editBtn = createElement('button', li, `Edit`, ["edit-btn"]);
        const continueBtn = createElement('button', li, `Continue`, ["continue-btn"]);

        editBtn.addEventListener('click', onEdit);
        continueBtn.addEventListener('click', onContinue);

        form.reset();
        this.disabled = true;
    }
    function onEdit() {
        const li = this.parentNode;
        for (const key in memory) {
            inputs[key].value = memory[key];
        }
        li.remove();
        nextBtn.disabled = false;


    }
    function onContinue() {
        const oldLi = this.parentNode;
        oldLi.remove();

        const li = createElement('li', confirmUl, '', ["ticket-content"]);
        const article = createElement('article', li);
        createElement('h3', article, `Name: ${memory['firstName']} ${memory['lastName']}`);
        createElement('p', article, `From date: ${memory['fromData']}`);
        createElement('p', article, `For ${memory['daysCount']} days`);
        createElement('p', article, `For ${memory['peopleCount']} peoples`);

        const confirmBtn = createElement('button', li, `Confirm`, ["confirm-btn"]);
        const cancelBtn = createElement('button', li, `Cancel`, ["cancel-btn"]);

        confirmBtn.addEventListener('click', onConfirm);
        cancelBtn.addEventListener('click', onCancel);

    }

    function onConfirm() {
        main.remove();
        createElement('h1', body, "Thank you, have a nice day!", null, "thank-you");
        const backBtn = createElement("button", body, "Back", null, "back-btn");
        backBtn.addEventListener('click', () => { window.location.reload(); });
    }
    function onCancel() {
        const li = this.parentNode;
        li.remove();
        nextBtn.disabled = false;
    }
    function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml
    ) {
        const htmlElement = document.createElement(type);

        if (content && useInnerHtml) {
            htmlElement.innerHTML = content;
        } else {
            if (content && type !== "input") {
                htmlElement.textContent = content;
            }
            if (content && type === "input") {
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

//     // get html elements
//     const body = document.getElementById('body');
//     const main = document.getElementById('main');
//     const form = document.querySelector('.container-text form');
//     const formBtn = document.getElementById('next-btn');
//     const ulInfoList = document.querySelector('.ticket-info-list');
//     const ulConfirmList = document.querySelector('.confirm-ticket');
//     form.addEventListener('click', nextStep);

//     // get form inputs
//     let ticket = {
//         firstName: document.getElementById("first-name"),
//         lastName: document.getElementById("last-name"),
//         numberOfPeople: document.getElementById("people-count"),
//         fromData: document.getElementById("from-date"),
//         numberOfDay: document.getElementById("days-count"),
//     };

//     function nextStep(event) {
//         event.preventDefault();
//         // check inputs
//         let allInputIsCorrect = Object.values(ticket).every((input) => input.value !== '');
//         if (!allInputIsCorrect) {
//             return;
//         }

//         // get all from ticket
//         let { firstName, lastName, numberOfPeople, fromData, numberOfDay } = ticket;

//         // make object copy
//         ticketInfo = {
//             firstName: firstName.value,
//             lastName: lastName.value,
//             numberOfPeople: numberOfPeople.value,
//             fromData: fromData.value,
//             numberOfDay: numberOfDay.value,
//         };

//         // create elements
//         const liElement = createElement('li', ulInfoList, null, ['ticket']);
//         const article = createElement('article', liElement);
//         const h3 = createElement('h3', article, `Name: ${firstName.value} ${lastName.value}`);
//         const pData = createElement('p', article, `From data: ${fromData.value}`);
//         const pDays = createElement('p', article, `For ${numberOfDay.value} days`);
//         const pPeople = createElement('p', article, `For ${numberOfPeople.value} people`);
//         const editBtn = createElement('button', liElement, 'Edit', ['edit-btn']);
//         editBtn.addEventListener('click', onEdit);
//         const continueBtn = createElement('button', liElement, 'Continue', ['continue-btn']);
//         continueBtn.addEventListener('click', onContinue);

//         // disable btn
//         formBtn.disabled = true;

//         // clear form inputs
//         form.reset();

//         function onEdit() {
//             // add data from copy object to inputs
//             for (const key in ticketInfo) {
//                 ticket[key].value = ticketInfo[key];
//             }
//             // clear ul element
//             // ulInfoList.innerHTML = '';
//             this.parentNode.remove()

//             // unable btn
//             formBtn.removeAttribute('disabled');
//         }

//         function onContinue() {

//             let liItem = this.parentNode
//             liItem.classList.remove('ticket')
//             liItem.classList.add('ticket-content')
//             const confirmBtn = createElement('button', liItem, 'Confirm', ['confirm-btn']);
//             confirmBtn.addEventListener('click', onConfirm);
//             const cancel = createElement('button', liItem, 'Cancel', ['cancel-btn']);
//             cancel.addEventListener('click', onCancel);

//             editBtn.remove();
//             continueBtn.remove();
//             ulConfirmList.appendChild(liItem);
//         }

//         function onConfirm() {
//             main.remove();
//             const h1 = createElement('h1', body, "Thank you, have a nice day! ", null, "thank-you");
//             const btn = createElement('button', body, "Back", null, "back-btn");
//             btn.addEventListener('click', () => {
//                 location.reload();
//             });
//         }
//         function onCancel() {
//             this.parentNode.remove()

//             formBtn.removeAttribute('disabled');
//         }
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
//                 // htmlElement[key] = attributes[key];
//             }

//         }
//         if (parentNode) {
//             parentNode.appendChild(htmlElement);
//         }

//         return htmlElement;
//     }
// }
