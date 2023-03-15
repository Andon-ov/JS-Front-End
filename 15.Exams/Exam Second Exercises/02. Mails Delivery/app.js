function solve() {
    const formRecipientName = document.getElementById('recipientName')
    const formTitle = document.getElementById('title')
    const formMessage = document.getElementById('message')
    const addBtn = document.getElementById('add')
    addBtn.addEventListener("click", createElement)
    const resetBtn = document.getElementById('reset')
    resetBtn.addEventListener("click", onReset)
    const list = document.getElementById('list')
    const sentList = document.getElementsByClassName('sent-list')[0]
    const deleteList = document.getElementsByClassName('delete-list')[0]

    function createElement(event) {
        event.preventDefault()
        const recipientName = formRecipientName.value
        const title = formTitle.value
        const message = formMessage.value
        if (formRecipientName.value === '' || formTitle.value === '' || formMessage.value === '') {
            return
        }
        const element = document.createElement('li')
        element.innerHTML = `<h4>Title: ${title}</h4>
                    <h4>Recipient Name: ${recipientName}</h4>
                    <span>${message}</span>
                    <div id="list-action">
                        <button type="submit" id="send">Send</button>
                        <button type="submit" id="delete">Delete</button>
                    </div>`

        list.appendChild(element)
        resetForm()

        element.querySelector('#send').addEventListener("click", sendMails)
        element.querySelector('#delete').addEventListener("click", deleteMails)

        function deleteMails() {
            const deletedElement = document.createElement('li')
            deletedElement.innerHTML = `<span>To: ${recipientName}</span>
                        <span>Title: ${title}</span>`

            deleteList.appendChild(deletedElement)
            element.remove()
        }

        function sendMails() {
            const sendElement = document.createElement('li')

            sendElement.innerHTML = `<span>To: ${recipientName}</span>
                        <span>Title: ${title}</span>
                        <div class="btn">
                            <button type="submit" class="delete">Delete</button>
                        </div>`

            sendElement.querySelector('.delete').addEventListener('click', () => {
                const deleteSendElement = document.createElement('li')
                deleteSendElement.innerHTML = `<span>To: ${recipientName}</span>
                        <span>Title: ${title}</span>`

                deleteList.appendChild(deleteSendElement)
                sendElement.remove()
            })
            sentList.appendChild(sendElement)
            element.remove()
        }
    }

    function onReset(event) {
        event.preventDefault()
        resetForm()
    }

    function resetForm() {
        formRecipientName.value = ''
        formTitle.value = ''
        formMessage.value = ''
    }
}

solve()