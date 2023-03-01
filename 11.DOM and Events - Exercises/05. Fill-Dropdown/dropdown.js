function addItem() {
    let text = document.getElementById('newItemText')
    let value = document.getElementById('newItemValue')

    let option = document.createElement('option')
    let menu = document.getElementById('menu')

    menu.appendChild(option)
    option.textContent = text.value
    option.value = value.value

    text.value = ''
    value.value = ''
}

/*
Then you should create and append an <option>
 to the <select> with id "menu".

Hints
    • Your function should take the values of newItemText and newItemValue.
     After that, you should create a new option element and set its
     textContent and its value to the newly taken ones.
    • Once you have done all of that, you should append the newly created
    option as a child to the select item with id "menu".
 */