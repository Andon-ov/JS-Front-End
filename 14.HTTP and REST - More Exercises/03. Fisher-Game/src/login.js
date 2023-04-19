const form = document.querySelector("form");
form.addEventListener("submit", onLogin);

document.getElementById("logout").style.display = "none";
const url = `http://localhost:3030/users/login/`;

function onLogin(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const email = formData.get("email");
    const password = formData.get("password");

    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
    })
        .then(res => {
            if (!res.ok) {
                const error = res.json();
                throw new Error(error.message);
            }
            return res.json();
        })
        .then(data => {

            const userData = {
                email: data.email,
                id: data._id,
                token: data.accessToken
            };
            localStorage.setItem('userData', JSON.stringify(userData));
            window.location = './index.html';
        })
        .catch(error => {
            console.log(error.message);
            alert(error);
            form.reset();
        });
}

// async function onLogin(event) {
//     event.preventDefault();

//     const formData = new FormData(event.target);

//     const email = formData.get('email');
//     const password = formData.get('password');

//     try {

//         const res = await fetch(url, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, password })
//         });
//         if (res.ok !== true) {

//             const error = await res.json();
//             throw new Error(error.message);
//         }

//         const data = await res.json();

//         const user = {
//             email: data.email,
//             id: data._id,
//             token: data.accessToken
//         };

//         localStorage.setItem('userData', JSON.stringify(user));
//         window.location = './index.html';

//     } catch (error) {
//         document.querySelector('form').reset();
//         alert(error.message);
//     }

// }
