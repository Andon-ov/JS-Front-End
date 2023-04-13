window.addEventListener("load", solve);

function solve() {
    // get all inputs in obj
    const inputDOMSelectors = {
        firstName: document.getElementById("first-name"),
        lastName: document.getElementById("last-name"),
        peopleCount: document.getElementById("people-count"),
        fromData: document.getElementById("from-date"),
        daysCount: document.getElementById("days-count"),
    };

    // get other DOM elements
    const nextBtn = document.getElementById("next-btn");
    const infoContainer = document.querySelector('.ticket-info-list');
    const confirmContainer = document.querySelector('.confirm-ticket');
    const main = document.querySelector('#main');
    const body = document.querySelector('#body');
    const form = document.querySelector("form");

    // make object which take all info
    let ticketInfo = {};

    // add event listener
    nextBtn.addEventListener("click", nextStepHandler);

    function nextStepHandler(event) {
        // event prevent Default
        event.preventDefault();

        // check all inputs
        const allFieldAreValid = Object.values(inputDOMSelectors).every((x) => x.value !== "");
        if (!allFieldAreValid) {
            return;
        }

        // get all inputs
        const { firstName, lastName, peopleCount, fromData, daysCount } = inputDOMSelectors;

        // push info in object
        ticketInfo = {
            firstName: firstName.value,
            lastName: lastName.value,
            peopleCount: peopleCount.value,
            fromData: fromData.value,
            daysCount: daysCount.value,
        };

        // create element
        const li = createElement('li', infoContainer, '', ["ticket"]);
        const article = createElement('article', li);
        createElement('h3', article, `Name: ${firstName.value} ${lastName.value}`);
        createElement('p', article, `From date: ${fromData.value}`);
        createElement('p', article, `For ${daysCount.value} days`);
        createElement('p', article, `For ${peopleCount.value} people`);

        const editBtn = createElement('button', li, `Edit`, ["edit-btn"]);
        const continueBtn = createElement('button', li, `Continue`, ["continue-btn"]);

        // add event listener
        editBtn.addEventListener('click', onEdit);
        continueBtn.addEventListener('click', onContinue);

        // reset form
        form.reset();

        // disable button
        nextBtn.setAttribute('disabled', true);
    }

    function onEdit() {
        // get li
        const li = this.parentNode;

        // push all object value in inputs
        for (const key in ticketInfo) {
            inputDOMSelectors[key].value = ticketInfo[key];
        }

        // remove li
        li.remove();

        // remove disabled attribute
        nextBtn.removeAttribute('disabled');
    }
    
    function onContinue() {

        // get li
        const oldLi = this.parentNode;

        // remove li
        oldLi.remove();

        // create element
        const li = createElement('li', confirmContainer, '', ["ticket-content"]);
        const article = createElement('article', li);
        createElement('h3', article, `Name: ${ticketInfo['firstName']} ${ticketInfo['lastName']}`);
        createElement('p', article, `From date: ${ticketInfo['fromData']}`);
        createElement('p', article, `For ${ticketInfo['daysCount']} days`);
        createElement('p', article, `For ${ticketInfo['peopleCount']} people`);

        const confirmBtn = createElement('button', li, `Confirm`, ["confirm-btn"]);
        const cancelBtn = createElement('button', li, `Cancel`, ["cancel-btn"]);

        // add event listener
        confirmBtn.addEventListener('click', onConfirm);
        cancelBtn.addEventListener('click', onCancel);
    }

    function onConfirm() {

        // remove main
        main.remove();

        // add elements
        createElement('h1', body, "Thank you, have a nice day!", null, "thank-you");
        const backBtn = createElement("button", body, "Back", null, "back-btn");

        // add event listener
        backBtn.addEventListener('click', () => { window.location.reload(); });
    }

    function onCancel() {

        // get li
        const li = this.parentNode;

        // remove li
        li.remove();

        // remove disabled attribute
        nextBtn.removeAttribute('disabled');
    }

    function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml) {
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
