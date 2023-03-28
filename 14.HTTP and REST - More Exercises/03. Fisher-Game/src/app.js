const userData = JSON.parse(localStorage.getItem('userData'));
const catches = document.getElementById('catches');
// document.getElementById('logout').addEventListener('click', () => {
//     fetch(`http://localhost:3030/users/logout/`)
//     .then((response) => {
//         if (!response.ok) {
//             alert(response.message)
//         }
//     })
// });
const url = `http://localhost:3030/data/catches/`;
const loadAddBtn = document.querySelector('#addForm .add');
const loadBtn = document.querySelector('.load');
loadBtn.addEventListener('click', loadData);

if (userData) {
    document.querySelector('.email span').textContent = userData.email;
    document.querySelector('#guest').style.display = 'none';
    loadAddBtn.disabled = false;
    loadData();

} else {
    document.querySelector('#user').style.display = 'none';
}

async function loadData(event) {
    const res = await fetch(url);
    const data = await res.json();

    catches.innerHTML = '';
    for (const row of data) {
        createCatch(row);
    }

}

function createCatch(data) {

    const divCatch = document.createElement('div');
    divCatch.classList.add('catch');
    divCatch.innerHTML = `
        <label>Angler</label>
        <input type="text" class="angler" value="${data.angler}">
        <label>Weight</label>
        <input type="text" class="weight" value="${data.weight}">
        <label>Species</label>
        <input type="text" class="species" value="${data.species}">
        <label>Location</label>
        <input type="text" class="location" value="${data.location}">
        <label>Bait</label>
        <input type="text" class="bait" value="${data.bait}">
        <label>Capture Time</label>
        <input type="number" class="captureTime" value="${data.captureTime}">
        <button class="update" data-id="${data._id}">Update</button>
        <button class="delete" data-id="${data._id}">Delete</button>`;


    catches.appendChild(divCatch);
}