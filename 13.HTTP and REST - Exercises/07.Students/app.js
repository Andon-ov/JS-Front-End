function attachEvents() {
    document.querySelector('#submit').addEventListener("click", onSubmit)
}

const firstName = document.querySelector("input[name='firstName']")
const lastName = document.querySelector("input[name='lastName']")
const facultyNumber = document.querySelector("input[name='facultyNumber']")
const grade = document.querySelector("input[name='grade']")

const url = `http://localhost:3030/jsonstore/collections/students`
const results = document.querySelector('#results > tbody')
// const firstName = document.querySelector(".inputs > input:nth-child(1)")
// const lastName = document.querySelector(".inputs > input:nth-child(2)")
// const facultyNumber = document.querySelector(".inputs > input:nth-child(3)")
// const grade = document.querySelector(".inputs > input:nth-child(4)")

async function onSubmit() {
    if (firstName.value === '' || lastName.value === '' || facultyNumber.value === '' || grade.value === '') return
    if (!Number(grade.value)) return
    if (!Number(facultyNumber.value)) return

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

    // show all students
    await getInfo()

    firstName.value = ''
    lastName.value = ''
    facultyNumber.value = ''
    grade.value = ''
}

async function getInfo() {
    //get students from server
    const res = await fetch(url)
    const data = await res.json()
    displayAllStudents(data)

}

function displayAllStudents(data) {

    // transform object to array
    Object.values(data).forEach(s => {

        // for each student
        const student = document.createElement('tr')

        const tdFirstName = document.createElement('td')
        tdFirstName.textContent = s.firstName
        student.appendChild(tdFirstName)

        const tdLastName = document.createElement('td')
        tdLastName.textContent = s.lastName
        student.appendChild(tdLastName)

        const tdFacultyNumber = document.createElement('td')
        tdFacultyNumber.textContent = Number(s.facultyNumber)
        student.appendChild(tdFacultyNumber)

        const tdGrade = document.createElement('td')
        tdGrade.textContent = Number(s.grade)
        student.appendChild(tdGrade)

        results.appendChild(student)
    })
}

attachEvents();


