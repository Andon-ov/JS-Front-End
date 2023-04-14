function solve() {
    const form = document.getElementById('add-new');
    const movies = document.querySelector('#movies ul');
    const archive = document.querySelector('#archive ul');
    const [name, hall, price] = Array.from(document.querySelectorAll('#container input'));
    const onScreenBtn = document.querySelector('#container button');
    const clearBtn = document.querySelector('#archive button');

    form.addEventListener('submit', (e) => { e.preventDefault(); });
    onScreenBtn.addEventListener('click', onScreen);
    clearBtn.addEventListener('click', onClear);

    let allMovies = {};

    function onScreen(e) {
        e.preventDefault();

        if (!name.value || !hall.value || !price.value || isNaN(price.value)) {
            return;
        }

        allMovies[name.value] = { hall: hall.value, price: price.value };

        const li = createElement('li', movies,);
        createElement('span', li, name.value);
        createElement('strong', li, `Hall: ${hall.value}`);
        const div = createElement('div', li);
        createElement('strong', div, Number(price.value).toFixed(2)); // toFixed(2)
        createElement('input', div, '', null, null, { "placeholder": "Tickets Sold" });
        const archiveBtn = createElement('button', div, 'Archive');

        archiveBtn.addEventListener('click', onArchive);
        form.reset();
    }

    function onArchive() {
        const input = this.parentNode.querySelector('input');
        const name = this.parentNode.parentNode.querySelector('span').textContent;

        if (input.value === '' || isNaN(input.value)) {
            return;
        }
        const { hall, price } = allMovies[name];

        const li = createElement('li', archive,);
        createElement('span', li, name);
        createElement('strong', li, `Total amount: ${(Number(price) * Number(input.value)).toFixed(2)}`);
        const deleteBtn = createElement('button', li, 'Delete');
        deleteBtn.addEventListener('click', onDelete);
    }

    function onDelete() {
        this.parentNode.remove();
    }

    function onClear() {
        archive.innerHTML = '';
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