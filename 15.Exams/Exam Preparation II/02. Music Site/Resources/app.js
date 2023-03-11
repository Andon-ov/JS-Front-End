window.addEventListener('load', solve);

function solve() {
    const div = document.querySelector('.all-hits-container');
    const like = document.querySelector('.likes p');
    const saveSongDiv = document.querySelector('.saved-container');
    const genre = document.getElementById('genre');
    const name = document.getElementById('name');
    const author = document.getElementById('author');
    const date = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');

    let count = Number(like.textContent.split(' ')[2]);


    addBtn.addEventListener('click', getInfo);

    function getInfo(e) {

        e.preventDefault();

        if (genre.value === '' || name.value === '' || author.value === '' || date.value === '') {
            return;
        }

        let element = createElement(genre, name, author, date);
        div.appendChild(element);

        genre.value = '';
        name.value = '';
        author.value = '';
        date.value = '';
    }

    function createElement(genre, name, author, data) {
        let div = document.createElement('div');
        div.classList.add('hits-info');

        let img = document.createElement('img');
        img.src = './static/img/img.png';

        let hGenre = document.createElement('h2');
        hGenre.textContent = `Genre: ${genre.value}`;

        let hName = document.createElement('h2');
        hName.textContent = `Name: ${name.value}`;

        let hAuthor = document.createElement('h2');
        hAuthor.textContent = `Author: ${author.value}`;

        let hData = document.createElement('h3');
        hData.textContent = `Date: ${data.value}`;

        let saveButton = document.createElement('button');
        saveButton.textContent = `Save song`;
        saveButton.classList.add("save-btn");
        saveButton.addEventListener('click', saveSong);

        let likeButton = document.createElement('button');
        likeButton.textContent = `Like song`;
        likeButton.classList.add("like-btn");
        likeButton.addEventListener('click', likeSong);

        let deleteButton = document.createElement('button');
        deleteButton.textContent = `Delete`;
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener('click', deleteSong);

        div.appendChild(img);
        div.appendChild(hGenre);
        div.appendChild(hName);
        div.appendChild(hAuthor);
        div.appendChild(hData);
        div.appendChild(saveButton);
        div.appendChild(likeButton);
        div.appendChild(deleteButton);

        return div;
    }

    function likeSong(event) {
        count++;
        like.textContent = `Total Likes: ${count}`;
        event.target.disabled = true;

    }
    function deleteSong(event) {
        event.target.parentElement.remove();
    }

    function saveSong() {
        let likeBtn = document.querySelector('.like-btn');
        let saveBtn = document.querySelector('.save-btn');
        let song = document.querySelector('.hits-info');

        song.removeChild(likeBtn);
        song.removeChild(saveBtn);

        saveSongDiv.appendChild(song);
    }

}


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


