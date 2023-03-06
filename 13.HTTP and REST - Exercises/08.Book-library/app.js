function attachEvents() {
  document.getElementById("loadBooks").addEventListener("click", showAllBooks);
}

const url = `http://localhost:3030/jsonstore/collections/books`;
const tbody = document.querySelector("tbody");

async function showAllBooks() {
  const books = await request(url);
  return books;
}

async function createBook(book) {
  const result = await request(url, {
    method: "POST",
    body: JSON.stringify(book),
  });
  return result;
}

async function request(url, options) {
  if (options.body !== undefined) {
    Object.assign(options, {
      headers: {
        "Content-type": "application/json",
      },
    });
  }
  const response = await fetch(url, options);
  if (response.ok !== true) {
    const error = await response.json();
    alert(error.message);
    throw new Error(error.message);
  }
  const data = await response.json();
  return data;
}

async function updateBook(id, book) {
  const result = await request(url, {
    method: "PUT",
    body: JSON.stringify(book),
  });
  return result;
}

attachEvents();
