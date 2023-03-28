
const form = document.querySelector('form');
const url = 'http://localhost:3030/users/register';
document.getElementById('logout').style.display = 'none'


form.addEventListener('submit', onRegister);

async function onRegister(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');

    try {

        if (email === '' || password === '' || rePass === '') {
            throw new Error('Input is not correct!');
        }
        if (password !== rePass) {
            throw new Error('Password is not same with Repeat');
        }

        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, rePass })
        });

        if (res.ok !== true) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const data = await res.json();

        const user = {
            email: data.email,
            id: data._id,
            token: data.accessToken
        };

        localStorage.setItem('userData', JSON.stringify(user));
        window.location = './index.html'

    } catch (error) {
        document.querySelector('form').reset();
        alert(error.message);

    }

}