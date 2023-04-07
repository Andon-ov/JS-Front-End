function solve() {
    const form = document.getElementById('add');
    form.addEventListener('submit', (event) => { event.preventDefault(); });
    const [name, age, kind, owner] = document.querySelectorAll('#container input');
    const addBtn = document.querySelector('#container button');
    addBtn.addEventListener('click', onAdd);
    const ulAdoption = document.querySelector('#adoption ul');
    const ulAdopted = document.querySelector('#adopted ul');

    function onAdd() {
        if (name.value === '' || !Number(age.value) || kind.value === '' || owner.value === '') {
            return;
        }
        const li = createElement('li', ulAdoption,);
        createElement('p', li, `<strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong>`, null, null, null, true);
        createElement('span', li, `Owner: ${owner.value}`);
        const contactBtn = createElement('button', li, `Contact with owner`);
        contactBtn.addEventListener('click', onContact);
        form.reset();
    }
    function onContact() {
        const li = this.parentNode;
        const contactBtn = li.querySelector('button');
        contactBtn.remove();
        const div = createElement('div', li);
        const input = createElement('input', div, null, null, null, { 'placeholder': 'Enter your names' });
        const takeBtn = createElement('button', div, `Yes! I take it!`);
        takeBtn.addEventListener('click', (e) => {

            const p = li.querySelector('p');
            const newOwner = li.querySelector('input').value;
            if (newOwner === '') {
                return;
            }

            li.querySelector('span').remove();
            li.querySelector('div').remove();

            createElement('span', li, `New Owner: ${newOwner}`);
            const contactBtn = createElement('button', li, `Checked`);
            contactBtn.addEventListener('click', onChecked);

            ulAdopted.appendChild(li);


        });
        function onChecked() {
            this.parentNode.remove();
        }

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
// https://judge.softuni.org/Contests/Practice/Index/2469#0
