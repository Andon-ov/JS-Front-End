function attachEvents() {
  document.getElementById("submit").addEventListener("click", onSubmit);
  document.getElementById("refresh").addEventListener("click", loadMessages);

  loadMessages();
}
const authorInput = document.querySelector('input[name="author"]');
const contentInput = document.querySelector('input[name="content"]');
const list = document.getElementById("messages");
const url = `http://localhost:3030/jsonstore/messenger`;

// add single message to list
async function onSubmit() {
  const author = authorInput.value;
  const content = contentInput.value;

  const result = await createMessage({ author, content });
  contentInput.value = "";
  list.value += "\n" + `${author}: ${content}`;
}

// load and display all messages
async function loadMessages() {
  const res = await fetch(url);
  const data = await res.json();

  const messages = Object.values(data);

  list.value = messages.map((m) => `${m.author}: ${m.content}`).join("\n");
}

//  post messages
async function createMessage(message) {
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  };
  const res = await fetch(url, options);
  const result = await res.json();

  return result;
}

attachEvents();
