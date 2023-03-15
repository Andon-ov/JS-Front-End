function solution() {
    const [gifts, send, discard] = document.querySelectorAll('section ul');

    const addBtn = document.querySelector('button');
    addBtn.addEventListener('click', addItem);

    const addInput = document.querySelector('input');

    function addItem() {
        if (addInput.value === '') {
            return;
        }

        const li = createElement();
        gifts.appendChild(li);

        sortGifts()

        addInput.value = '';
    }

    function createElement() {
        const li = document.createElement('li');
        li.textContent = addInput.value;
        li.classList.add('gift');

        const discardButton = document.createElement('button');
        discardButton.textContent = 'Discard';
        discardButton.id = 'discardButton';
        discardButton.addEventListener('click', discardGift);

        const sendButton = document.createElement('button');
        sendButton.textContent = 'Send';
        sendButton.id = 'sendButton';
        sendButton.addEventListener('click', sendGift);

        li.appendChild(sendButton);
        li.appendChild(discardButton);

        return li;

    }

    function discardGift(event) {
        const li = event.target.parentElement;
        li.lastChild.remove();
        li.lastChild.remove();

        discard.appendChild(li);
    }

    function sendGift(event) {
        const li = event.target.parentElement;
        li.lastChild.remove();
        li.lastChild.remove();

        send.appendChild(li);
    }

    function sortGifts() {

        Array.
        from(gifts.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(g => gifts.appendChild(g))

    }
}