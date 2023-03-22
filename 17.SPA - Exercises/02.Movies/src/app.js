import { showHome } from "./home.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";

const views = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister,
};
const nav = document.querySelector('.navbar');

document.getElementById('logoutBtn').addEventListener('click', onLogout);
document.querySelector('nav').addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        const view = views[event.target.id];
        if (typeof view === "function") {
            event.preventDefault();
            view();
        }

    }
});


updateNav();
// start app in home view
showHome();


export function updateNav() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData !== null) {
        nav.querySelector('#welcomeMsg').textContent = `Welcome, ${userData.email}`;
        [...nav.querySelectorAll('.user')].forEach(e => e.style.display = 'block');
        [...nav.querySelectorAll('.guest')].forEach(e => e.style.display = 'none');
    } else {
        [...nav.querySelectorAll('.user')].forEach(e => e.style.display = 'none');
        [...nav.querySelectorAll('.guest')].forEach(e => e.style.display = 'block');
    }
}

async function onLogout(event) {
    event.preventDefault();
    event.stopImmediatePropagation();

    const { token } = JSON.parse(sessionStorage.getItem('userData'));

    await fetch('http://localhost:3030/users/logout', {
        headers: {
            'X-Authorization': token
        },

    });
    sessionStorage.removeItem('userData');
    updateNav();
    showLogin();
}

// import { showCatalogPage } from './catalog.js';
// import { showHomePage, showAboutPage } from './home.js';
// import { showLoginPage } from './login.js';
// import { showRegisterPage } from './register.js';

// document.getElementById('logoutBtn').addEventListener('click', onLogout);
// document.querySelector('nav').addEventListener('click', onNavigate);

// const sections = {
//     'homeBtn': showHomePage,
//     'catalogBtn': showCatalogPage,
//     'aboutBtn': showAboutPage,
//     'loginBtn': showLoginPage,
//     'registerBtn': showRegisterPage
// };

// updateUserNav();

// // Start application in home view
// showHomePage();

// function onNavigate(event) {
//     if (event.target.tagName == 'A') {
//         const view = sections[event.target.id];
//         if (typeof view == 'function') {
//             event.preventDefault();
//             view();
//         }
//     }
// }

// export function updateUserNav() {
//     const userData = JSON.parse(sessionStorage.getItem('userData'));
//     if (userData != null) {
//         document.getElementById('userNav').style.display = 'inline-block';
//         document.getElementById('guestNav').style.display = 'none';
//     } else {
//         document.getElementById('userNav').style.display = 'none';
//         document.getElementById('guestNav').style.display = 'inline-block';
//     }
// }

// async function onLogout(event) {
//     event.stopImmediatePropagation();
//     const { token } = JSON.parse(sessionStorage.getItem('userData'));

//     await fetch('http://localhost:3030/users/logout', {
//         headers: {
//             'X-Authorization': token
//         }
//     });

//     sessionStorage.removeItem('userData');
//     updateUserNav();
//     showHomePage();
// }