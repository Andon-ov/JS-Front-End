window.addEventListener('load', solve);

function solve() {
    // form preventDefault
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => { event.preventDefault(); });

    // get Add song
    const genre = document.getElementById('genre');
    const name = document.getElementById('name');
    const author = document.getElementById('author');
    const date = document.getElementById('date');

    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', onAdd);

    // get Collection of songs
    const collection = document.querySelector('.all-hits-container');

    // get Saved songs
    const saved = document.querySelector('.saved-container');


    // get Total Likes
    const likeP = document.querySelector('.likes p');
    let like = 0;



    function onAdd() {
        if (genre.value === "" || name.value === "" || author.value === "" || date.value === "") {
            return;
        }
        const div = createElement('div', collection, null, ['hits-info']);
        createElement('img', div, null, null, null, { 'src': './static/img/img.png' });
        createElement('h2', div, `Genre: ${genre.value}`);
        createElement('h2', div, `Name: ${name.value}`);
        createElement('h2', div, `Author: ${author.value}`);
        createElement('h3', div, `Date: ${date.value}`);
        const saveBtn = createElement('button', div, 'Save song', ['save-btn']);
        const likeBtn = createElement('button', div, 'Like song', ['like-btn']);
        const deleteBtn = createElement('button', div, 'Delete', ['delete-btn']);

        saveBtn.addEventListener('click', onSave);
        likeBtn.addEventListener('click', onLike);
        deleteBtn.addEventListener('click', onDelete);
        form.reset()
    }

    function onLike() {
        like++;
        likeP.textContent = `Total Likes: ${like}`;
        this.disabled = true;
    }

    function onSave() {
        const div = this.parentNode;
        div.querySelector('.save-btn').remove();
        div.querySelector('.like-btn').remove();
        saved.appendChild(div);
    }

    function onDelete() {
        this.parentNode.remove();
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












// window.addEventListener('load', solve);

// function solve() {
//     const div = document.querySelector('.all-hits-container');
//     const like = document.querySelector('.likes p');
//     const saveSongDiv = document.querySelector('.saved-container');
//     const genre = document.getElementById('genre');
//     const name = document.getElementById('name');
//     const author = document.getElementById('author');
//     const date = document.getElementById('date');
//     const addBtn = document.getElementById('add-btn');

//     let count = Number(like.textContent.split(' ')[2]);


//     addBtn.addEventListener('click', getInfo);

//     function getInfo(e) {

//         e.preventDefault();

//         if (genre.value === '' || name.value === '' || author.value === '' || date.value === '') {
//             return;
//         }

//         let element = createElement(genre, name, author, date);
//         div.appendChild(element);

//         genre.value = '';
//         name.value = '';
//         author.value = '';
//         date.value = '';
//     }

//     function createElement(genre, name, author, data) {
//         let div = document.createElement('div');
//         div.classList.add('hits-info');

//         let img = document.createElement('img');
//         img.src = './static/img/img.png';

//         let hGenre = document.createElement('h2');
//         hGenre.textContent = `Genre: ${genre.value}`;

//         let hName = document.createElement('h2');
//         hName.textContent = `Name: ${name.value}`;

//         let hAuthor = document.createElement('h2');
//         hAuthor.textContent = `Author: ${author.value}`;

//         let hData = document.createElement('h3');
//         hData.textContent = `Date: ${data.value}`;

//         let saveButton = document.createElement('button');
//         saveButton.textContent = `Save song`;
//         saveButton.classList.add("save-btn");
//         saveButton.addEventListener('click', saveSong);

//         let likeButton = document.createElement('button');
//         likeButton.textContent = `Like song`;
//         likeButton.classList.add("like-btn");
//         likeButton.addEventListener('click', likeSong);

//         let deleteButton = document.createElement('button');
//         deleteButton.textContent = `Delete`;
//         deleteButton.classList.add("delete-btn");
//         deleteButton.addEventListener('click', deleteSong);

//         div.appendChild(img);
//         div.appendChild(hGenre);
//         div.appendChild(hName);
//         div.appendChild(hAuthor);
//         div.appendChild(hData);
//         div.appendChild(saveButton);
//         div.appendChild(likeButton);
//         div.appendChild(deleteButton);

//         return div;
//     }

//     function likeSong(event) {
//         count++;
//         like.textContent = `Total Likes: ${count}`;
//         event.target.disabled = true;

//     }
//     function deleteSong(event) {
//         event.target.parentElement.remove();
//     }

//     function saveSong() {
//         let likeBtn = document.querySelector('.like-btn');
//         let saveBtn = document.querySelector('.save-btn');
//         let song = document.querySelector('.hits-info');

//         song.removeChild(likeBtn);
//         song.removeChild(saveBtn);

//         saveSongDiv.appendChild(song);
//     }

// }


// window.addEventListener('load', solve);

// function solve() {
//     let infoForm = document.getElementsByTagName('form')[0];
//     infoForm.addEventListener('submit', getInfo);
//     let div = document.getElementsByClassName('all-hits-container')[0];


//     function getInfo(event) {
//         event.preventDefault();
//         const formData = new FormData(event.target);

//         const genre = formData.get('genre');
//         const name = formData.get('name');
//         const author = formData.get('author');
//         const date = formData.get('date');

//         event.target.reset();
//         if (genre !== '' && name !== '' && author !== '' && date !== '') {
//             let element = createElement(genre, name, author, date);
//             div.appendChild(element);


//             let likeBtn = document.getElementsByClassName('like-btn')[0];
//             likeBtn.addEventListener('click',
//                 (event) => {
//                     let like = document.querySelector('.likes p');
//                     like.textContent = `Total Likes: 1`;
//                     event.target.disabled = true;
//                 }
//             );

//             let deleteBtn = document.getElementsByClassName('delete-btn')[0];
//             deleteBtn.addEventListener('click',
//                 (event) => {
//                     event.currentTarget.parentElement.parentElement.children[1].remove();
//                 }
//             );

//             let saveBtn = document.getElementsByClassName('save-btn')[0];
//             saveBtn.addEventListener('click',
//                 () => {
//                     let saveSongDiv = document.getElementsByClassName('saved-container')[0];
//                     element.removeChild(likeBtn);
//                     element.removeChild(saveBtn);
//                     saveSongDiv.appendChild(element);
//                 }
//             );
//         }
//     }
//     function createElement(genre, name, author, data) {
//         let div = document.createElement('div');
//         div.classList.add('hits-info');

//         // with textContent

//         div.innerHTML = `<img src="./static/img/img.png">
//                 <h2>Genre: ${genre}</h2>
//                 <h2>Name: ${name}</h2>
//                 <h2>Author: ${author}</h2>
//                 <h3>Date: ${data}</h3>
//                 <button class="save-btn">Save song</button>
//                 <button class="like-btn">Like song</button>
//                 <button class="delete-btn">Delete</button>`;

//         return div;
//     }
// }


