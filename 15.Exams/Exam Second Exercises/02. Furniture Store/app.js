window.addEventListener('load', solve);

function solve() {
    const model = document.getElementById('model')
    const year = document.getElementById('year')
    const description = document.getElementById('description')
    const price = document.getElementById('price')

    const addBtn = document.getElementById('add')
    addBtn.addEventListener("click", getInfo)

    const totalPrice = document.getElementsByClassName('total-price')[0]
    const furnitureList = document.getElementById('furniture-list')

    function getInfo(event) {
        event.preventDefault()
        if (model.value === '' ||
            year.value === '' ||
            description.value === '' ||
            price.value === '') {
            return
        }
        if (Number(year.value <= 0) && Number(price.value <= 0)){
            return;
        }

        const [trInfo, trHide] = createElement()
        furnitureList.appendChild(trInfo)
        furnitureList.appendChild(trHide)
        model.value = ''
        year.value = ''
        description.value = ''
        price.value = ''
    }

    function createElement() {

        const trInfo = document.createElement('tr')
        trInfo.classList.add('info')

        const tdName = document.createElement('td')
        tdName.textContent = model.value

        const tdPrice = document.createElement('td')
        tdPrice.textContent = Number(price.value).toFixed(2)

        const buttons = document.createElement('td')

        const moreBtn = document.createElement('button')
        moreBtn.classList.add('moreBtn')
        moreBtn.textContent = 'More Info'
        moreBtn.addEventListener("click", lessInfo)

        const buyBtn = document.createElement('button')
        buyBtn.classList.add('buyBtn')
        buyBtn.textContent = 'Buy it'
        buyBtn.addEventListener("click", buyItem)

        buttons.appendChild(moreBtn)
        buttons.appendChild(buyBtn)

        trInfo.appendChild(tdName)
        trInfo.appendChild(tdPrice)
        trInfo.appendChild(buttons)

        const trHide = document.createElement('tr')
        trHide.classList.add('hide')

        const tdYear = document.createElement('td')
        tdYear.textContent = `Year: ${year.value}`

        const tdDesc = document.createElement('td')
        tdDesc.setAttribute('colspan', 3)
        // tdDesc.colSpan = 3
        tdDesc.textContent = `Description: ${description.value}`

        trHide.appendChild(tdYear)
        trHide.appendChild(tdDesc)

        return [trInfo, trHide]
    }

    function lessInfo(event) {
        const trHide = event.target.parentElement.parentElement.nextSibling

        if (event.target.textContent === 'More Info') {
            event.target.textContent = 'Less Info'

            trHide.style.display = 'contents'


        } else {
            event.target.textContent = 'More Info'
            trHide.style.display = 'none'



        }
    }
    function buyItem(event) {
        const trHide = event.target.parentElement.parentElement.nextSibling
        let price = event.target.parentElement.parentElement.querySelector('.info > td:nth-child(2)').textContent

        totalPrice.textContent = (Number(totalPrice.textContent) + Number(price)).toFixed(2)
        event.target.parentElement.parentElement.remove()
        trHide.remove()

    }

}

// TODO  88 / 100