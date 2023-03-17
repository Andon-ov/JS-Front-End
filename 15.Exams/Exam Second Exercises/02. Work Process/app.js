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
            const [firsName, lastName, selfEmail, birthDay, wantedPosition, wantedSalary, buttons] = Array.from(event.target.parentElement.parentElement.children);

            event.target.parentElement.parentElement.remove();
            sum.textContent = (Number(sum.textContent) - Number(wantedSalary.textContent)).toFixed(2);
        }
        function onEdit(event) {

            console.log();
            const [firsName, lastName, selfEmail, birthDay, wantedPosition, wantedSalary, buttons] = Array.from(event.target.parentElement.parentElement.children);

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
