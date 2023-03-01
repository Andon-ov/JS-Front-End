function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(b => b.addEventListener('click', onClick))

    function onClick(e) {
        let profile = e.target.parentElement
        let isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;
        let div = profile.querySelector('div')

        if (isActive) {

            if (e.target.textContent === 'Show more') {
                div.style.display = 'block'
                e.target.textContent = 'Hide it'

            } else {
                div.style.display = 'none'
                e.target.textContent = 'Show more'
            }
        }
    }
}