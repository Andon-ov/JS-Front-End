
const form = document.querySelector('form');
form.addEventListener('submit', onRegister);

const url = 'http://localhost:3030/users/register';
document.getElementById('logout').style.display = 'none';

function onRegister(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);
    const { email, password, rePass } = Object.fromEntries(formData);
    const validInputs = [...formData.values()].every(x => x !== "");

    if (!validInputs) {
        alert('Input is not correct!');
        return;
    }

    if (password !== rePass) {
        alert('Password and Repeat not equal!');
        return;
    }

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password, rePass })
    })
        .then(res => {
            if (!res.ok) {
                const error = res.json();
                throw new Error(error.message);
            }
            return res.json();
        })
        .then(data => {

            const user = {
                email: data.email,
                id: data._id,
                token: data.accessToken
            };

            localStorage.setItem('userData', JSON.stringify(user));
            window.location = './index.html';


        })
        .catch(error => {
            alert(error.message);
            form.reset();
        });



}

// async function onRegister(event) {
//     event.preventDefault();

//     const formData = new FormData(event.target);

//     const email = formData.get('email');
//     const password = formData.get('password');
//     const rePass = formData.get('rePass');

//     try {

//         if (email === '' || password === '' || rePass === '') {
//             throw new Error('Input is not correct!');
//         }
//         if (password !== rePass) {
//             throw new Error('Password is not same with Repeat');
//         }

//         const res = await fetch(url, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, password, rePass })
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