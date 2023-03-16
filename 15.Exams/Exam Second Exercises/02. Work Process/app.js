function solve() {

    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const birth = document.getElementById('birth');
    const position = document.getElementById('position');
    const salary = document.getElementById('salary');

    const tbody = document.getElementById('tbody');
    const sum = document.getElementById('sum');

    const addBtn = document.getElementById('add-worker');
    addBtn.addEventListener('click', getInfo);

    function getInfo(event) {
        event.preventDefault();

        if (fname.value === "" ||
            lname.value === "" ||
            email.value === "" ||
            birth.value === "" ||
            position.value === "" ||
            salary.value === "") {
            return;
        }

        const element = createElement();
        tbody.appendChild(element);
        sum.textContent = (Number(sum.textContent) + Number(salary.value)).toFixed(2);

        resetInput();

        const firedBtn = element.querySelector('.fired');
        firedBtn.addEventListener('click', onFired);

        const editBtn = element.querySelector('.edit');
        editBtn.addEventListener('click', onEdit);

        function onFired(event) {
            const [firsName, lastName, selfEmail, birthDay, wantedPosition, wantedSalary, buttons] = event.target.parentElement.parentElement.children;
            
            event.target.parentElement.parentElement.remove();
            sum.textContent = (Number(sum.textContent) - Number(wantedSalary.textContent)).toFixed(2);
        }
        function onEdit(event) {

            console.log();
            const [firsName, lastName, selfEmail, birthDay, wantedPosition, wantedSalary, buttons] = event.target.parentElement.parentElement.children;

            fname.value = firsName.textContent;
            lname.value = lastName.textContent;
            email.value = selfEmail.textContent;
            birth.value = birthDay.textContent;
            position.value = wantedPosition.textContent;
            salary.value = wantedSalary.textContent;

            event.target.parentElement.parentElement.remove();
            sum.textContent = (Number(sum.textContent) - Number(wantedSalary.textContent)).toFixed(2);
        }

        function createElement() {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${fname.value}</td>
            <td>${lname.value}</td>
            <td>${email.value}</td>
            <td>${birth.value}</td>
            <td>${position.value}</td>
            <td>${salary.value}</td>
            <td>
                <button class="fired">Fired</button> <button class="edit">Edit</button>
            </td>`;
            return row;
        }

    }
    function resetInput() {
        fname.value = "";
        lname.value = "";
        email.value = "";
        birth.value = "";
        position.value = "";
        salary.value = "";
    }
}
solve();
// TODO 60 / 100

// function solve() {

//     const fname = document.getElementById("fname");
//     const lname = document.getElementById("lname");
//     const email = document.getElementById("email");
//     const birth = document.getElementById("birth");
//     const position = document.getElementById("position");
//     const salary = document.getElementById("salary");
//     const tbody = document.getElementById("tbody");
//     const addSalary = document.getElementById("sum");

//     document.getElementById("add-worker").addEventListener("click", (ev) => {
//         if (fname.value !== "" && lname.value !== "" && email.value !== "" && birth.value !== "" && position.value !== "" && salary.value !== "") {
//             console.log("tyk")
//             addWorker(ev, fname.value, lname.value, email.value, birth.value, position.value, salary.value);
//             clearInputFileds();
//         }
//     });


//     function addWorker(ev, fname, lname, email, birth, position, salary) {
//         ev.preventDefault();
//         const tr = e("tr");
//         e("td", `${fname}`, tr);
//         e("td", `${lname}`, tr);
//         e("td", `${email}`, tr);
//         e("td", `${birth}`, tr);
//         e("td", `${position}`, tr);
//         e("td", `${salary}`, tr);

//         const td = e("td", "", tr);
//         let firedBtn = e("button", "Fired", td);
//         firedBtn.setAttribute("class", "fired");
//         let editBtn = e("button", "Edit", td);
//         editBtn.setAttribute("class", "edit")

//         tbody.appendChild(tr);

//         const currentSalary = Number(addSalary.textContent);
//         addSalary.textContent = (Number(salary) + currentSalary).toFixed(2);

//         editBtn.addEventListener("click", (ev) => editWorker(ev, fname, lname, email, birth, position, salary));

//         firedBtn.addEventListener("click", (ev) => firedWorker(ev, salary));

//     }

//     function firedWorker(ev, salary) {

//         ev.preventDefault();
//         ev.target.parentNode.parentNode.remove();
//         reduceSalary(salary);
//     }

//     function editWorker(ev, _fname, _lname, _email, _birth, _position, _salary) {

//         ev.preventDefault();
//         ev.target.parentNode.parentNode.remove();

//         fname.value = _fname;
//         lname.value = _lname;
//         email.value = _email;
//         birth.value = _birth;
//         position.value = _position;
//         salary.value = _salary;

//         reduceSalary(_salary);

//     }

//     function reduceSalary(salary) {
//         const currentSalary = Number(addSalary.textContent);
//         addSalary.textContent = Math.abs((Number(salary) - currentSalary)).toFixed(2);
//     }


//     function clearInputFileds() {
//         fname.value = "";
//         lname.value = "";
//         email.value = "";
//         birth.value = "";
//         position.value = "";
//         salary.value = "";
//     }

//     function e(type, content, parent) {
//         const element = document.createElement(type);
//         element.textContent = content;

//         if (parent) {
//             parent.appendChild(element);
//         }
//         return element;
//     }

// }
// solve()