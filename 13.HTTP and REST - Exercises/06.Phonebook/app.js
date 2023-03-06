function attachEvents() {
  document
    .getElementById("btnCreate")
    .addEventListener("click", createContacts);
  const btnLoad = document
    .getElementById("btnLoad")
    .addEventListener("click", loadContacts);
}

const phoneBook = document.getElementById("phonebook");
const url = `http://localhost:3030/jsonstore/phonebook`;
const person = document.getElementById("person");
const phone = document.getElementById("phone");

async function loadContacts() {
  const res = await fetch(url);
  const data = await res.json();

  Object.values(data).forEach((d) => {
    const li = document.createElement("li");
    li.textContent = `${d.person}: ${d.phone}`;

    const btnDelete = document.createElement("button");
    btnDelete.setAttribute(`id`, d._id);
    btnDelete.textContent = "Delete";

    li.appendChild(btnDelete);
    phoneBook.appendChild(li);

    btnDelete.addEventListener("click", async (ev) => {
      const userId = ev.target.id;
      const targetUrl = `${url}/${userId}`;
      await fetch(targetUrl, {
        method: "DELETE",
      });
      ev.target.parentNode.remove();
    });
  });
}
async function createContacts() {
  if (!phone.value || !person.value) {
    return alert("No empty fields allowed");
  }
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      person: person.value,
      phone: phone.value,
    }),
  });

  person.value = "";
  phone.value = "";
  btnLoad.click();
}

attachEvents();
