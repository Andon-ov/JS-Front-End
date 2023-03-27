function lockedProfile() {
    getInfo();

    async function getInfo() {
        const showBtn = document.getElementsByClassName('show');
        const main = document.getElementById('main');

        try {
            const url = `http://localhost:3030/jsonstore/advanced/profiles`;
            const res = await fetch(url);
            if (res.ok === false) {
                let err = new Error();
                console.log(err.message);
            }
            const data = await res.json();
            for (const { id, username, email, age } of Object.values(data)) {
                const div = document.createElement('div');
                div.classList.add('profile');
                div.innerHTML = `
                <img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user1Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user1Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user1Username" value="${username}" disabled readonly />
				<div class="user1Username" >
					<hr>
					<label>Email:</label>
					<input type="email" name="user1Email" value="${email}" disabled readonly />
					<label>Age:</label>
					<input type="text" name="user1Age" value="${age}" disabled readonly />
				</div>
				
				<button class="show">Show more</button>`;
                
                main.appendChild(div);
            }
            Array.from(document.getElementsByClassName('user1Username')).forEach(e => e.style.display = 'none')
            Array.from(showBtn).forEach(button => button.addEventListener('click', (event) => {

                let hideInfo = event.target.parentNode.querySelector('.user1Username');
                let radio = event.target.parentNode.querySelector('input[type="radio"]');

                if (radio.checked === false) {
                    if (event.target.textContent === 'Show more') {
                        hideInfo.style.display = 'block';
                        event.target.textContent = 'Hide it';
                    } else {
                        hideInfo.style.display = 'none';
                        event.target.textContent = 'Show more';
                    }
                }

            }));
        } catch (error) {
            throw error;
        }
    }


}
