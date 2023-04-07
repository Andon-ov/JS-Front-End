window.addEventListener('load', solve);


function solve() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => { event.preventDefault(); });

    const modelInput = document.getElementById('model');
    const yearInput = document.getElementById('year');
    const descriptionInput = document.getElementById('description');
    const priceInput = document.getElementById('price');
    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', onAdd);

    const tbody = document.getElementById('furniture-list');
    let itemPrice;

    const priceSum = document.querySelector('.total-price');
    let profit = 0;

    function onAdd() {
        if (modelInput.value === "" || yearInput.value === "" || descriptionInput.value === "" || priceInput.value === "") {
            return;
        }
        if (Number(yearInput.value) <= 0 || Number(priceInput.value) <= 0) {
            return;
        }

        const tr = createElement('tr', tbody, null, ['info']);
        createElement('td', tr, modelInput.value);
        createElement('td', tr, Number(priceInput.value).toFixed(2));
        const td = createElement('td', tr);
        const moreBtn = createElement('button', td, 'More Info', ['moreBtn']);
        const buyBtn = createElement('button', td, 'Buy it', ['buyBtn']);
        const trHide = createElement('tr', tbody, null, ['hide'], null, { 'style': 'display:none' });
        createElement('td', trHide, `Year: ${yearInput.value}`);
        createElement('td', trHide, `Description: ${descriptionInput.value}`, null, null, { 'colspan': '3' });

        itemPrice = priceInput.value;
        moreBtn.addEventListener('click', onMore);
        buyBtn.addEventListener('click', onBuy);
        form.reset();
    }

    function onMore() {
        const trHide = this.parentNode.parentNode.parentNode.querySelector('.hide');

        if (this.textContent === 'More Info') {
            this.textContent = 'Less Info';
            trHide.style.display = "contents";
        } else {
            this.textContent = 'More Info';
            trHide.style.display = "none";
        }
    }

    function onBuy() {

        profit += Number(itemPrice);
        priceSum.textContent = profit.toFixed(2);
        this.parentNode.parentNode.remove();
        info.nextSibling.remove();
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
//     const model = document.getElementById('model');
//     const year = document.getElementById('year');
//     const description = document.getElementById('description');
//     const price = document.getElementById('price');

//     const addBtn = document.getElementById('add');
//     addBtn.addEventListener("click", getInfo);

//     const totalPrice = document.getElementsByClassName('total-price')[0];
//     const furnitureList = document.getElementById('furniture-list');

//     function getInfo(event) {
//         event.preventDefault();
//         if (model.value === '' ||
//             year.value === '' ||
//             description.value === '' ||
//             price.value === '') {
//             return;
//         }
//         if (Number(year.value <= 0) || Number(price.value <= 0)) {
//             return;
//         }

//         const [trInfo, trHide] = createElement();
//         furnitureList.appendChild(trInfo);
//         furnitureList.appendChild(trHide);
//         model.value = '';
//         year.value = '';
//         description.value = '';
//         price.value = '';
//     }

//     function createElement() {

//         const trInfo = document.createElement('tr');
//         trInfo.classList.add('info');

//         const tdName = document.createElement('td');
//         tdName.textContent = model.value;

//         const tdPrice = document.createElement('td');
//         tdPrice.textContent = Number(price.value).toFixed(2);

//         const buttons = document.createElement('td');

//         const moreBtn = document.createElement('button');
//         moreBtn.classList.add('moreBtn');
//         moreBtn.textContent = 'More Info';
//         moreBtn.addEventListener("click", lessInfo);

//         const buyBtn = document.createElement('button');
//         buyBtn.classList.add('buyBtn');
//         buyBtn.textContent = 'Buy it';
//         buyBtn.addEventListener("click", buyItem);

//         buttons.appendChild(moreBtn);
//         buttons.appendChild(buyBtn);

//         trInfo.appendChild(tdName);
//         trInfo.appendChild(tdPrice);
//         trInfo.appendChild(buttons);

//         const trHide = document.createElement('tr');
//         trHide.classList.add('hide');

//         const tdYear = document.createElement('td');
//         tdYear.textContent = `Year: ${year.value}`;

//         const tdDesc = document.createElement('td');
//         tdDesc.setAttribute('colspan', 3);
//         tdDesc.textContent = `Description: ${description.value}`;

//         trHide.appendChild(tdYear);
//         trHide.appendChild(tdDesc);

//         return [trInfo, trHide];
//     }

//     function lessInfo(event) {
//         const trHide = event.target.parentElement.parentElement.nextSibling;

//         if (event.target.textContent === 'More Info') {

//             event.target.textContent = 'Less Info';
//             trHide.style.display = 'contents';

//         } else {
//             event.target.textContent = 'More Info';
//             trHide.style.display = 'none';

//         }
//     }
//     function buyItem(event) {
//         const trHide = event.target.parentElement.parentElement.nextSibling;
//         let price = event.target.parentElement.parentElement.querySelector('.info > td:nth-child(2)').textContent;

//         totalPrice.textContent = (Number(totalPrice.textContent) + Number(price)).toFixed(2);
//         event.target.parentElement.parentElement.remove();
//         trHide.remove();

//     }

// }





