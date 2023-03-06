function attachEvents() {
    document.getElementById('submit').addEventListener("click", onSubmit)
}

const firstName = document.querySelector("input[name='firstName']")
const lastName = document.querySelector("input[name='lastName']")
const facultyNumber = document.querySelector("input[name='facultyNumber']")
const grade = document.querySelector("input[name='grade']")

const results = document.querySelector('#results tbody')
const url = `http://localhost:3030/jsonstore/collections/students`

async function onSubmit() {

    await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            firstName: firstName.value,
            lastName: lastName.value,
            facultyNumber: facultyNumber.value,
            grade: grade.value
        }),
    });
    firstName.value = ''
    lastName.value = ''
    facultyNumber.value = ''
    grade.value = ''
    // show all students
    displayAllStudents()
}

async function displayAllStudents() {
    //get students from server
    const res = await fetch(url)
    const data = await res.json()

    // transform object to array
    Object.values(data).forEach(s => {

        // for each student
        const student = document.createElement('tr')
        results.appendChild(student)

        const tdFirstName = document.createElement('td')
        tdFirstName.textContent = s.firstName
        student.appendChild(tdFirstName)

        const tdLastName = document.createElement('td')
        tdLastName.textContent = s.lastName
        student.appendChild(tdLastName)

        const tdFacultyNumber = document.createElement('td')
        tdFacultyNumber.textContent = s.facultyNumber
        student.appendChild(tdFacultyNumber)

        const tdGrade = document.createElement('td')
        tdGrade.textContent = s.grade
        student.appendChild(tdGrade)
    })
}

attachEvents();


