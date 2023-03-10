window.addEventListener("load", solve);

function solve() {


    // get 'publish' btn
    let publish = document.getElementById('form-btn');
    publish.addEventListener("click", getInfo);


    // get all info
    function getInfo() {
        const previewList = document.getElementById('preview-list');
        const firstName = document.getElementById("first-name");
        const lastName = document.getElementById("last-name");
        const age = document.getElementById("age");
        const title = document.getElementById("story-title");
        const genre = document.getElementById("genre");
        const story = document.getElementById("story");


        // if info not empty
        if (firstName.value !== '' && lastName.value !== '' && age.value !== '' && title.value !== '' && story.value !== '') {

            //make li element
            let li = createElement(firstName, lastName, age, title, genre, story);
            // append to ul
            previewList.appendChild(li);

            // make backup class for all data
            let backup = {
                firstName: firstName.value,
                lastName: lastName.value,
                age: age.value,
                title: title.value,
                genre: genre.value,
                story: story.value
            };

            // clear all inputs
            firstName.value = '';
            lastName.value = '';
            age.value = '';
            title.value = '';
            story.value = '';

            // disable 'publish' btn
            publish.disabled = true;

            // get save edit and delete btn
            saveBtn = document.getElementsByClassName('save-btn')[0];
            saveBtn.addEventListener('click', finish);
            editBtn = document.getElementsByClassName('edit-btn')[0];
            editBtn.addEventListener('click', loadBack);
            deleteBtn = document.getElementsByClassName('delete-btn')[0];
            deleteBtn.addEventListener('click', deleteAll);

            // edit btn on click
            function loadBack() {
                // backup all info from class
                firstName.value = backup.firstName;
                lastName.value = backup.lastName;
                age.value = backup.age;
                title.value = backup.title;
                story.value = backup.story;

                // enable btn
                publish.disabled = false;
                // disable save edit and delete btn
                saveBtn.disabled = true;
                editBtn.disabled = true;
                deleteBtn.disabled = true;

                // remove li from ul
                previewList.removeChild(li);
            }

            // save btn on click
            function finish() {
                // get 'main'
                let main = document.getElementById('main');

                // remove all from 'main'
                main.innerHTML = '';

                // create 'h1' with content "Your scary story is saved!"
                let h1 = document.createElement('h1');
                h1.textContent = "Your scary story is saved!";

                // add 'h1' to 'main'
                main.appendChild(h1);
            }

            // delete btn on click
            function deleteAll() {

                // remove li from ul
                previewList.removeChild(li);

                //enable 'publish' btn
                publish.disabled = false;

            }
        }


    }
    // create elements and add text content func
    function createElement(firstName, lastName, age, title, genre, story) {
        let li = document.createElement('li');
        li.classList.add('story-info');

        let article = document.createElement('article');
        li.appendChild(article);

        let h4 = document.createElement('h4');
        h4.textContent = `Name: ${firstName.value} ${lastName.value}`;
        let pAge = document.createElement('p');
        pAge.textContent = `Age: ${age.value}`;

        let pTitle = document.createElement('p');
        pTitle.textContent = `Title: ${title.value}`;

        let pGenre = document.createElement('p');
        pGenre.textContent = `Genre: ${genre.value}`;

        let p = document.createElement('p');
        p.textContent = story.value;

        article.appendChild(h4);
        article.appendChild(pAge);
        article.appendChild(pTitle);
        article.appendChild(pGenre);
        article.appendChild(p);

        let saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save Story';
        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit Story';
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete Story';

        li.appendChild(saveBtn);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        return li;

    }
}