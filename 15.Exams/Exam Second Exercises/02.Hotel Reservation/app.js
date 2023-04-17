window.addEventListener('load', solve);

function solve() {

    const form = document.querySelector('form');
    form.addEventListener('submit', (ev) => ev.preventDefault());

    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onNext);
    const reservation = document.querySelector('.info-list');
    const confirm = document.querySelector('.confirm-list');
    const verification = document.getElementById('verification');

    let memory = {};

    const inputs = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        dateIn: document.getElementById('date-in'),
        dateOut: document.getElementById('date-out'),
        peopleCount: document.getElementById('people-count')
    };

    function onNext() {



        let isValidInputs = Object.values(inputs).every(x => x.value !== "");

        if (new Date(inputs['dateIn'].value) >= new Date(inputs['dateOut'].value)) {
            return;
        }

        if (!isValidInputs) {
            return;
        }

        let { firstName, lastName, dateIn, dateOut, peopleCount, } = inputs;

        memory = {
            firstName: firstName.value,
            lastName: lastName.value,
            dateIn: dateIn.value,
            dateOut: dateOut.value,
            peopleCount: peopleCount.value,
        };

        const li = createElement('li', reservation, '', ['reservation-content']);
        const article = createElement('article', li);
        createElement('h3', article, `Name: ${firstName.value} ${lastName.value}`);
        createElement('p', article, `From date: ${dateIn.value}`);
        createElement('p', article, `To date: ${dateOut.value}`);
        createElement('p', article, `For ${peopleCount.value} people`);
        const editBtn = createElement('button', li, 'Edit', ['edit-btn']);
        const continueBtn = createElement('button', li, 'Continue', ['continue-btn']);

        editBtn.addEventListener('click', onEdit);
        continueBtn.addEventListener('click', onContinue);

        nextBtn.disabled = true;
        form.reset();

    }
    function onEdit() {
        const li = this.parentNode;
        for (const key in memory) {
            inputs[key].value = memory[key];
        }
        nextBtn.disabled = false;
        li.remove();

    }
    function onContinue() {
        const oldLi = this.parentNode;
        const li = createElement('li', confirm, '', ['reservation-content']);
        const article = createElement('article', li);
        createElement('h3', article, `Name: ${memory["firstName"]} ${memory["lastName"]}`);
        createElement('p', article, `From date: ${memory["dateIn"]}`);
        createElement('p', article, `To date: ${memory["dateOut"]}`);
        createElement('p', article, `For ${memory["peopleCount"]} people`);

        const confirmBtn = createElement('button', li, 'Confirm', ['confirm-btn']);
        const cancelBtn = createElement('button', li, 'Cancel', ['cancel-btn']);

        confirmBtn.addEventListener('click', onConfirm);
        cancelBtn.addEventListener('click', onCancel);

        oldLi.remove();

    }
    function onConfirm() {
        const li = this.parentNode;
        li.remove();
        nextBtn.disabled = false;
        verification.textContent = "Confirmed."
        verification.classList.add("reservation-confirmed")
    }
    function onCancel() {
        const li = this.parentNode;
        li.remove();
        nextBtn.disabled = false;
        verification.textContent = "Cancelled."
        verification.classList.add("reservation-cancelled")
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
//     //  Inputs
//     const firstName = document.getElementById('first-name')
//     const lastName = document.getElementById('last-name')
//     const dateIn = document.getElementById('date-in')
//     const dateOut = document.getElementById('date-out')
//     const peopleCount = document.getElementById('people-count')
//
//     // Btn
//     const nextBtn = document.getElementById('next-btn')
//     nextBtn.addEventListener("click", goToReservation)
//
//     // Ul
//     const infoList = document.querySelector('.info-list')
//     const confirmList = document.querySelector('.confirm-list')
//     // H1
//     const reservationStatus = document.getElementById('verification')
//
//     function goToReservation(e) {
//         e.preventDefault()
//
//         const reservation = {
//             firstNameValue: firstName.value,
//             lastNameValue: lastName.value,
//             dateInValue: dateIn.value,
//             dateOutValue: dateOut.value,
//             peopleCountValue: peopleCount.value,
//         }
//
//         if (reservation.firstNameValue === '' ||
//             reservation.lastNameValue === '' ||
//             reservation.dateInValue === '' ||
//             reservation.dateOutValue === '' ||
//             reservation.peopleCountValue === '') {
//             return
//         }
//         if (reservation.dateInValue > reservation.dateOutValue) {
//             return
//         }
//         const element = document.createElement('li')
//         element.innerHTML = `
//         <li class='reservation-content'>
//             <article>
//                 <h3>Name: ${reservation.firstNameValue} ${reservation.lastNameValue}</h3>
//                 <p>From data: ${reservation.dateInValue}</p>
//                 <p>To data: ${reservation.dateOutValue}</p>
//                 <p>For ${reservation.peopleCountValue} people</p>
//             </article>
//             <button class="edit-btn">Edit</button>
//             <button class="continue-btn">Continue</button>
//         </li>`
//         infoList.appendChild(element)
//         nextBtn.disabled = true
//         resetForm()
//
//         element.querySelector('.edit-btn').addEventListener('click', onEdit)
//         element.querySelector('.continue-btn').addEventListener('click', onContinue)
//
//         function onEdit() {
//             firstName.value = reservation.firstNameValue
//             lastName.value = reservation.lastNameValue
//             dateIn.value = reservation.dateInValue
//             dateOut.value = reservation.dateOutValue
//             peopleCount.value = reservation.peopleCountValue
//             element.remove()
//             nextBtn.disabled = false
//         }
//
//         function onContinue() {
//
//             const confirmElement = document.createElement('li')
//             confirmElement.innerHTML = `
//             <li class='reservation-content'>
//                 <article>
//                     <h3>Name: ${reservation.firstNameValue} ${reservation.lastNameValue}</h3>
//                     <p>From data: ${reservation.dateInValue}</p>
//                     <p>To data: ${reservation.dateOutValue}</p>
//                     <p>For ${reservation.peopleCountValue} people</p>
//                 </article>
//                 <button class="confirm-btn">Confirm</button>
//                 <button class="cancel-btn">Cancel</button>
//             </li>`
//             confirmList.appendChild(confirmElement)
//             element.remove()
//
//             confirmElement.querySelector('.confirm-btn').addEventListener('click', onConfirm)
//             confirmElement.querySelector('.cancel-btn').addEventListener('click', onCancel)
//
//             function onConfirm() {
//                 nextBtn.disabled = false
//                 reservationStatus.textContent = "Confirmed."
//                 reservationStatus.classList.add("reservation-confirmed")
//                 confirmElement.remove()
//
//             }
//             function onCancel() {
//                 nextBtn.disabled = false
//                 reservationStatus.textContent = "Cancelled."
//                 reservationStatus.classList.add("reservation-cancelled")
//                 confirmElement.remove()
//             }
//         }
//     }
//
//     function resetForm() {
//         firstName.value = ''
//         lastName.value = ''
//         dateIn.value = ''
//         dateOut.value = ''
//         peopleCount.value = ''
//     }
//
// }
//
//
//
//
//

// function solve() {

//     let firstNameElement = document.getElementById('first-name');
//     let lastNameElement = document.getElementById('last-name');
//     let dateInElement = document.getElementById('date-in');
//     let dateOutElement = document.getElementById('date-out');
//     let countElement = document.getElementById('people-count');
//     let nextBtnElement = document.getElementById('next-btn');
//     let infoListElement = document.querySelector('.info-list');
//     let confirmListElement = document.querySelector('.confirm-list');
//     let verification = document.getElementById('verification');


//     nextBtnElement.addEventListener('click',onNext)
//     function onNext(e) {
//         e.preventDefault();
//         if(firstNameElement.value == ''
//             || lastNameElement.value == ''
//             || dateInElement.value == ''
//             ||dateOutElement.value == ''
//             ||countElement.value == ''
//             || new Date(dateInElement.value) >= new Date(dateOutElement.value)) {
//             return;
//         }
//         let liElementInfo = document.createElement('li');
//         liElementInfo.setAttribute('class', 'reservation-content');

//         let articleElementInfo = document.createElement("article");

//         let fullName =  document.createElement('h3');
//         fullName.textContent = `Name: ${firstNameElement.value} ${lastNameElement.value}`;

//         let dateIn = document.createElement('p');
//         dateIn.textContent = `From date: ${dateInElement.value}`;

//         let dateOut = document.createElement('p');
//         dateOut.textContent = `To date: ${dateOutElement.value}`;

//         let numPople = document.createElement('p');
//         numPople.textContent = `For ${countElement.value} people`;

//         let editBtn = document.createElement("button");
//         editBtn.setAttribute('class', 'edit-btn');
//         editBtn.textContent = 'Edit';

//         let continueBtn = document.createElement("button");
//         continueBtn.setAttribute('class', 'continue-btn');
//         continueBtn.textContent = 'Continue';

//         articleElementInfo.appendChild(fullName);
//         articleElementInfo.appendChild(dateIn);
//         articleElementInfo.appendChild(dateOut);
//         articleElementInfo.appendChild(numPople);

//         liElementInfo.appendChild(articleElementInfo);
//         liElementInfo.appendChild(editBtn);
//         liElementInfo.appendChild(continueBtn);

//         infoListElement.appendChild(liElementInfo);

//         let editFirstName = firstNameElement.value;
//         let editLastName = lastNameElement.value;
//         let editDateIn = dateInElement.value;
//         let editDateOut = dateOutElement.value;
//         let editcountElement = countElement.value;

//         firstNameElement.value = "";
//         lastNameElement.value = "";
//         dateInElement.value = "";
//         dateOutElement.value = "";
//         countElement.value = "";

//         nextBtnElement.disabled = true;

//         editBtn.addEventListener("click", onEdit);
//         function onEdit() {
//             firstNameElement.value = editFirstName;
//             lastNameElement.value = editLastName;
//             dateInElement.value = editDateIn;
//             dateOutElement.value = editDateOut;
//             countElement.value = editcountElement;


//             liElementInfo.remove();

//             nextBtnElement.disabled = false;
//         }
//         continueBtn.addEventListener('click', onContinue);
//         function onContinue() {
//             let liElementconfirm = document.createElement('li');
//             liElementconfirm.setAttribute('class', 'reservation-content');

//             let articleElementContinue = document.createElement("article");
//             articleElementContinue = articleElementInfo;

//             let confirmBtn = document.createElement("button");
//             confirmBtn.setAttribute('class', 'confirm-btn');
//             confirmBtn.textContent = 'Confirm';

//             let cancelBtn = document.createElement("button");
//             cancelBtn.setAttribute('class', 'cancel-btn');
//             cancelBtn.textContent = 'Cancel';


//             liElementconfirm.appendChild(articleElementContinue);
//             liElementconfirm.appendChild(confirmBtn);
//             liElementconfirm.appendChild(cancelBtn);
//             liElementInfo.remove();

//             confirmListElement.appendChild(liElementconfirm)

//             confirmBtn.addEventListener('click', onConfirm);
//             function onConfirm() {
//                 liElementconfirm.remove();
//                 nextBtnElement.disabled = false;

//                 verification.setAttribute('class', 'reservation-confirmed');
//                 verification.textContent = 'Confirmed.';
//             }

//             cancelBtn.addEventListener('click',onCancel);
//             function onCancel() {

//                 liElementconfirm.remove();
//                 nextBtnElement.disabled = false;

//                 verification.setAttribute('class', 'reservation-cancelled');
//                 verification.textContent = 'Cancelled.';

//             }

//         }

//     }

// }
