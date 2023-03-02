function solve() {
    let input = document.getElementById('input')
    let output = document.getElementById('output')
    let sentences = input.value.split('.').filter(s => s.length !== 0)


    while (sentences.length > 0) {

        let textForP = sentences.splice(0, 3).join('. ') + '.'
        let p = document.createElement('p')

        p.textContent = textForP
        output.appendChild(p)

    }
}