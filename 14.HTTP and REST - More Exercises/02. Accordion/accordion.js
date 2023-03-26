function solution() {
    const baseUrl = `http://localhost:3030/jsonstore/advanced/articles/list`;
    const moreInfoUrl = `http://localhost:3030/jsonstore/advanced/articles/details/`;
    
    getData();

    async function getData() {
        const res = await fetch(baseUrl);
        const data = await res.json();
        for (const { _id, title } of Object.values(data)) {
            createBaseElement(_id, title);
        }

    }

    function createBaseElement(id, title) {
        

        const divContainer = document.createElement('div');
        divContainer.classList.add('accordion');

        const divHead = document.createElement('div');
        divHead.classList.add('head');

        const spam = document.createElement('spam');
        spam.textContent = title;

        const button = document.createElement('button');
        button.classList.add('button');
        button.value = id;
        button.textContent = `More`;

        button.addEventListener('click', getMoreInfo);

        divHead.appendChild(spam);
        divHead.appendChild(button);

        const divExtra = document.createElement('div');
        divExtra.classList.add('extra');

        divContainer.appendChild(divHead);
        divContainer.appendChild(divExtra);

        document.getElementById('main').appendChild(divContainer);

    }

    function getMoreInfo(event) {
        const extra = event.target.parentElement.parentElement.querySelector('.extra')
        let id = event.target.value

        if (event.target.textContent === 'Less') {
            extra.style.display = 'none'
            event.target.textContent = 'More'
            return
        }


        fetch(moreInfoUrl + id)
        .then((response) => response.json())
        .then((data) => {
            extra.innerHTML = ''
            const{_id,title,content} = data
            const p = document.createElement('p')
            p.textContent = content

            extra.appendChild(p)
            extra.style.display = 'block'
        });
        event.target.textContent = 'Less'
    }

}
solution();