function lockedProfile() {
    getInfo()

    async function getInfo() {
        const showBtn = document.querySelector('button')
        const usernameValue = document.querySelector('input[name="user1Username"]')
        const emailValue = document.querySelector('input[name="user1Email"]')
        const ageValue = document.querySelector('input[name="user1Age"]')
        const hideInfo = document.querySelector('.user1Username')


        try {
            const url = `http://localhost:3030/jsonstore/advanced/profiles`;
            const res = await fetch(url)
            if (res.ok === false) {
                let err = new Error()
                console.log(err.message)
            }
            const data = await res.json()
            const {id, username, email, age} = Object.values(data)[0]
            usernameValue.value = username
            emailValue.value = email
            ageValue.value = age
            hideInfo.style.display = 'none'


            showBtn.addEventListener("click", (event) => {
                let radio = event.target.parentNode.querySelector('input[type="radio"]')

                if (radio.checked === false) {
                    if (event.target.textContent === 'Show more') {
                        hideInfo.style.display = 'block'
                        event.target.textContent = 'Hide it'
                    } else {
                        hideInfo.style.display = 'none'
                        event.target.textContent = 'Show more'
                    }
                }
            })
        } catch (error) {
            throw error
        }
    }


}
