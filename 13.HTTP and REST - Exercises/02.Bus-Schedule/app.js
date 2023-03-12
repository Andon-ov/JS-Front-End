/*
function solve() {

    let info = document.getElementById('info');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');

    let nextStopId = 'depot';
    let stopName;

    function depart() {
        let url = `http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                stopName = data.name;
                nextStopId = data.next;

                info.textContent = `Next stop ${stopName}`;
                departBtn.disabled = true;
                arriveBtn.disabled = false;

            })
            .catch((error) => {

                error.status = response.status;
                error.statusText = response.statusText;
                throw error;

                info.textContent = `Error`;
                departBtn.disabled = true;
                arriveBtn.disabled = true;
            });

    }

    function arrive() {

        info.textContent = `Arriving at ${stopName}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
*/
//TODO 66/100

// async function depart() {
//     let url = `http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`;
// departBtn.disabled = true
// try {
//     const response = await fetch(url);
//     if (response.ok !== true) {
//         let error = new Error();
//         error.status = response.status;
//         error.statusText = response.statusText;
//         throw error;
//     }
//     const data = await response.json();
//     stopName = data.name;
//     nextStopId = data.next;
//     info.textContent = `Next stop ${stopName}`;
//     departBtn.disabled = true;
//     arriveBtn.disabled = false;
// } catch (error) {
//     info.textContent = `Error`;
//     departBtn.disabled = true;
//     arriveBtn.disabled = true;
// }


function solve() {

    let info = document.getElementById('info');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');

    let stop = {
        next: 'depot',

    };

    function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;

        // get info for next stop
        // activate other btn and disable this
        // display name of next stop

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                stop = data;
                info.textContent = `Next stop ${stop.name}`;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
            })
            .catch(error => {
                info.textContent = `Error`;
                departBtn.disabled = true;
                arriveBtn.disabled = true;

            });

    }
    function arrive() {

        //  display name of current stop
        // activate other btn and disable this

        info.textContent = `Arriving at ${stop.name}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }


    return {
        depart,
        arrive
    };

}
let result = solve();


