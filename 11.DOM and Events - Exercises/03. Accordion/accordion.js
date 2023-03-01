function toggle() {
    let extra = document.getElementById('extra')
    let btn = document.getElementsByClassName('button')[0]
    if (btn.textContent === 'More') {
        extra.style.display = 'block'
        btn.textContent = 'Less'
    } else {
        extra.style.display = 'none'
        btn.textContent = 'More'
    }
}