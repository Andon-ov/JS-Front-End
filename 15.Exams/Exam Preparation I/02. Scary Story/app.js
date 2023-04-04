window.addEventListener("load", solve);

function solve() {
  // get HTML elements
  const main = document.getElementById('main');
  const formBtn = document.getElementById('form-btn');
  const previewList = document.getElementById('preview-list');
  const form = document.querySelector('form');

  // get all inputs in object
  const allInput = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    storyTitle: document.getElementById('story-title'),
    genre: document.getElementById('genre'),
    story: document.getElementById('story'),
  };


  const { firstName, lastName, age, storyTitle, genre, story } = allInput;
  // object with all inputs value
  const memory = {};


  formBtn.addEventListener('click', onPublish);

  function onPublish(event) {
    event.preventDefault();

    // check input for empty string
    let allInputIsCorrect = Object.values(allInput)
      .every((input) => input.value !== '');


    if (!allInputIsCorrect) {
      return;
    }

    // push all inputs in memory if is correct
    for (const input in allInput) {
      memory[input] = allInput[input].value;
    }

    // create elements
    const li = createElement('li', previewList, null, ['story-info']);
    const article = createElement('article', li);
    const h4Name = createElement('h4', article, `Name: ${firstName.value} ${lastName.value}`);
    const pAge = createElement('p', article, `Age: ${age.value}`);
    const pTitle = createElement('p', article, `Title: ${storyTitle.value}`);
    const pGenre = createElement('p', article, `Genre: ${genre.value}`);
    const pStory = createElement('p', article, story.value);
    const saveBtn = createElement('button', li, 'Save Story', ['save-btn']);
    const editBtn = createElement('button', li, 'Edit Story', ['edit-btn']);
    const deleteBtn = createElement('button', li, 'Delete Story', ['delete-btn']);

    saveBtn.addEventListener('click', onSave);
    editBtn.addEventListener('click', onEdit);
    deleteBtn.addEventListener('click', onDelete);
    // disable button
    formBtn.disabled = true;
    // reset form inputs
    form.reset();
  }


  function onSave() {

    main.innerHTML = '';
    const h1 = createElement('h1', main, "Your scary story is saved!");
  }

  function onEdit() {

    for (const key in memory) {
      allInput[key].value = memory[key];
    }

    formBtn.disabled = false;
    let li = this.parentNode;
    previewList.removeChild(li);

  }
  function onDelete() {
    
    let li = this.parentNode;
    previewList.removeChild(li);
    formBtn.disabled = false;
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



// window.addEventListener("load", solve);

// function solve() {


//     // get 'publish' btn
//     let publish = document.getElementById('form-btn');
//     publish.addEventListener("click", getInfo);


//     // get all info
//     function getInfo() {
//         const previewList = document.getElementById('preview-list');
//         const firstName = document.getElementById("first-name");
//         const lastName = document.getElementById("last-name");
//         const age = document.getElementById("age");
//         const title = document.getElementById("story-title");
//         const genre = document.getElementById("genre");
//         const story = document.getElementById("story");


//         // if info not empty
//         if (firstName.value !== '' && lastName.value !== '' && age.value !== '' && title.value !== '' && story.value !== '') {

//             //make li element
//             let li = createElement(firstName, lastName, age, title, genre, story);
//             // append to ul
//             previewList.appendChild(li);

//             // make backup class for all data
//             let backup = {
//                 firstName: firstName.value,
//                 lastName: lastName.value,
//                 age: age.value,
//                 title: title.value,
//                 genre: genre.value,
//                 story: story.value
//             };

//             // clear all inputs
//             firstName.value = '';
//             lastName.value = '';
//             age.value = '';
//             title.value = '';
//             story.value = '';

//             // disable 'publish' btn
//             publish.disabled = true;

//             // get save edit and delete btn
//             saveBtn = document.getElementsByClassName('save-btn')[0];
//             saveBtn.addEventListener('click', finish);
//             editBtn = document.getElementsByClassName('edit-btn')[0];
//             editBtn.addEventListener('click', loadBack);
//             deleteBtn = document.getElementsByClassName('delete-btn')[0];
//             deleteBtn.addEventListener('click', deleteAll);

//             // edit btn on click
//             function loadBack() {
//                 // backup all info from class
//                 firstName.value = backup.firstName;
//                 lastName.value = backup.lastName;
//                 age.value = backup.age;
//                 title.value = backup.title;
//                 story.value = backup.story;

//                 // enable btn
//                 publish.disabled = false;
//                 // disable save edit and delete btn
//                 saveBtn.disabled = true;
//                 editBtn.disabled = true;
//                 deleteBtn.disabled = true;

//                 // remove li from ul
//                 previewList.removeChild(li);
//             }

//             // save btn on click
//             function finish() {
//                 // get 'main'
//                 let main = document.getElementById('main');

//                 // remove all from 'main'
//                 main.innerHTML = '';

//                 // create 'h1' with content "Your scary story is saved!"
//                 let h1 = document.createElement('h1');
//                 h1.textContent = "Your scary story is saved!";

//                 // add 'h1' to 'main'
//                 main.appendChild(h1);
//             }

//             // delete btn on click
//             function deleteAll() {

//                 // remove li from ul
//                 previewList.removeChild(li);

//                 //enable 'publish' btn
//                 publish.disabled = false;

//             }
//         }


//     }
//     // create elements and add text content func
//     function createElement(firstName, lastName, age, title, genre, story) {
//         let li = document.createElement('li');
//         li.classList.add('story-info');

//         let article = document.createElement('article');
//         li.appendChild(article);

//         let h4 = document.createElement('h4');
//         h4.textContent = `Name: ${firstName.value} ${lastName.value}`;
//         let pAge = document.createElement('p');
//         pAge.textContent = `Age: ${age.value}`;

//         let pTitle = document.createElement('p');
//         pTitle.textContent = `Title: ${title.value}`;

//         let pGenre = document.createElement('p');
//         pGenre.textContent = `Genre: ${genre.value}`;

//         let p = document.createElement('p');
//         p.textContent = story.value;

//         article.appendChild(h4);
//         article.appendChild(pAge);
//         article.appendChild(pTitle);
//         article.appendChild(pGenre);
//         article.appendChild(p);

//         let saveBtn = document.createElement('button');
//         saveBtn.classList.add('save-btn');
//         saveBtn.textContent = 'Save Story';
//         let editBtn = document.createElement('button');
//         editBtn.classList.add('edit-btn');
//         editBtn.textContent = 'Edit Story';
//         let deleteBtn = document.createElement('button');
//         deleteBtn.classList.add('delete-btn');
//         deleteBtn.textContent = 'Delete Story';

//         li.appendChild(saveBtn);
//         li.appendChild(editBtn);
//         li.appendChild(deleteBtn);

//         return li;

//     }
// }

