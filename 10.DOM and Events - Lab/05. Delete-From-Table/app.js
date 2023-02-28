function deleteByEmail() {
    let searchedMail = document.querySelector('label input')
    let allMail = Array.from(document.querySelectorAll("tr td:nth-child(2)"))
    let result = document.getElementById('result')
    let forRemove = allMail.find(e => e.textContent === searchedMail.value)
    if (forRemove) {
        result.textContent = "Deleted."
        forRemove.parentElement.remove()
        searchedMail.value = ''

    } else {
        result.textContent = "Not found."

    }

}

