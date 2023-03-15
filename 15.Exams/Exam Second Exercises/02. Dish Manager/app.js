window.addEventListener("load", solve);

function solve() {
    const firstName = document.getElementById('first-name')
    const lastName = document.getElementById('last-name')
    const age = document.getElementById('age')
    const gender = document.getElementById('genderSelect')
    const task = document.getElementById('task')

    const submitBtn = document.getElementById('form-btn')
    submitBtn.addEventListener('click', getInfo)

    const inProgress = document.getElementById('in-progress')
    const finished = document.getElementById('finished')

    const clearBtn = document.getElementById('clear-btn')
    clearBtn.addEventListener('click', () => {
        finished.innerHTML = ''
    })

    const countText = document.getElementById('progress-count')
    let count = Number(countText.textContent)


    const dish = {
        firstName, lastName, age, gender, task
    }

    function getInfo() {
        console.log(firstName, lastName, age.value, task)
        if (firstName.value === '' || lastName.value === '' || age.value === '' || task.value === '') {
            return
        }

        dish.firstName = firstName.value
        dish.lastName = lastName.value
        dish.age = age.value
        dish.gender = gender.value
        dish.task = task.value

        const li = createElement()

        firstName.value = ''
        lastName.value = ''
        age.value = ''
        task.value = ''
        inProgress.appendChild(li)
        count += 1
        countText.textContent = count


    }

    function clearAll() {

    }

    function createElement() {
        const li = document.createElement('li')
        li.classList.add('each-line')

        const article = document.createElement('article')

        const fullName = document.createElement('h4')
        fullName.textContent = `${firstName.value} ${lastName.value}`

        const ageP = document.createElement('p')
        ageP.textContent = `${gender.value}, ${age.value}`

        const description = document.createElement('p')
        description.textContent = `Dish description: ${task.value}`

        const editBtn = document.createElement('button')
        editBtn.classList.add('edit-btn')
        editBtn.textContent = 'Edit'
        editBtn.addEventListener("click", editDish)

        const completeBtn = document.createElement('button')
        completeBtn.classList.add('complete-btn')
        completeBtn.textContent = 'Mark as complete'
        completeBtn.addEventListener("click", completeDish)

        article.appendChild(fullName)
        article.appendChild(ageP)
        article.appendChild(description)

        li.appendChild(article)
        li.appendChild(editBtn)
        li.appendChild(completeBtn)

        return li
    }

    function editDish(event) {

        event.target.parentElement.remove()

        firstName.value = dish.firstName
        lastName.value = dish.lastName
        age.value = dish.age
        gender.value = dish.gender
        task.value = dish.task

        count -= 1
        countText.textContent = count

    }

    function completeDish(event) {

        const li = event.target.parentElement
        li.lastChild.remove()
        li.lastChild.remove()
        finished.appendChild(li)
        count -= 1
        countText.textContent = count

    }


    //TODO ....
}
