function addItem() {
  let ulToAdd = document.getElementById("items");
  let newLi = document.createElement("li");
  let name = document.getElementById("newItemText").value;
  newLi.textContent = name;
  ulToAdd.appendChild(newLi);
}
