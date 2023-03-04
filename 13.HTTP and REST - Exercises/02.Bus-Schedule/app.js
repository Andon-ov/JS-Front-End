function solve() {


    let info = document.getElementById('info')
    let departBtn = document.getElementById('depart')
    let arriveBtn = document.getElementById('arrive')

    let nextStopId = 'depot'
    let stopName

    async function depart() {
        departBtn.disabled = true
        try {
            let url = `http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`
            const response = await fetch(url)

            if (!response.ok) {
                let error = new Error()
                error.status = response.status
                error.statusText = response.statusText
                throw error

            }

            const data = await response.json()
            stopName = data.name
            nextStopId = data.next
            info.textContent = `Next stop ${stopName}`
            departBtn.disabled = true
            arriveBtn.disabled = false

        } catch (error) {
            info.textContent = `Error`
            departBtn.disabled = true
            arriveBtn.disabled = true
        }


    }

    async function arrive() {

        info.textContent = `Arriving at ${stopName}`
        departBtn.disabled = false
        arriveBtn.disabled = true
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
//TODO 66/100
