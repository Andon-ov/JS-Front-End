window.addEventListener('load', solve);

function solve() {

    const typeProduct = document.getElementById('type-product');
    const description = document.getElementById('description');
    const clientName = document.getElementById('client-name');
    const clientPhone = document.getElementById('client-phone');

    const receivedOrders = document.getElementById('received-orders');
    const completedOrders = document.getElementById('completed-orders');
    const clearBtn = document.querySelector('.clear-btn');
    clearBtn.addEventListener('click', () => {

        const allContainers = document.getElementsByClassName('container');

        while (allContainers.length > 0) {

            completedOrders.lastChild.remove();
        }
    });
    const formBtn = document.querySelector('form>button');
    formBtn.addEventListener('click', getInfo);
    function getInfo(event) {
        event.preventDefault();

        if (description.value === '' ||
            clientName.value === '' ||
            clientPhone.value === '') {
            return;
        }

        const clientInfo = {
            typeProduct: typeProduct.value,
            description: description.value,
            clientName: clientName.value,
            clientPhone: clientPhone.value
        };

        const element = createElement(clientInfo);
        receivedOrders.appendChild(element);

        const startBtn = element.querySelector('.start-btn');
        startBtn.addEventListener('click', onStart);
        const finishBtn = element.querySelector('.finish-btn');
        finishBtn.addEventListener('click', onFinish);

        description.value = '';
        clientName.value = '';
        clientPhone.value = '';

        function onStart() {
            finishBtn.disabled = false;
            startBtn.disabled = true;
        }
        function onFinish() {
            element.lastChild.remove();
            element.lastChild.remove();
            element.lastChild.remove();
            completedOrders.appendChild(element);
        }

    }
    function createElement(clientInfo) {
        const div = document.createElement('div');
        div.classList.add('container');
        div.innerHTML = `
        <h2>Product type for repair: ${clientInfo.typeProduct}</h2>
        <h3>Client information: ${clientInfo.clientName}, ${clientInfo.clientPhone}</h3>
        <h4>Description of the problem: ${clientInfo.description}</h4>
        <button class ='start-btn'>Start repair</button>
        <button class ='finish-btn' disabled >Finish repair</button>`;
        return div;
    }


}
