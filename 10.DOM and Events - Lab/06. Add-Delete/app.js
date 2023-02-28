function addItem() {
  let textToAdd = document.getElementById("newItemText");

  let li = document.createElement("li");
  li.textContent = textToAdd.value;

  let deleteButton = document.createElement("a");
  deleteButton.textContent = "[Delete]";
  deleteButton.href = "#";
  li.appendChild(deleteButton);

  deleteButton.addEventListener("click", onDelete);

  document.getElementById("items").appendChild(li);

  function onDelete(event) {
    event.target.parentElement.remove();
  }
  
}

