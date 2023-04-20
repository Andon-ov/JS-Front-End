window.addEventListener("load", solve);

function solve() {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", (ev) => ev.preventDefault());

  const Btn = document.getElementById("");

  Btn.addEventListener("click", onCreate);

  const inputs = {
    "": document.getElementById(""),
    "": document.getElementById(""),
    "": document.getElementById(""),
    "": document.getElementById(""),
    "": document.getElementById(""),
  };

  let memory = {};

  function onCreate() {
    let isValid = Object.values(inputs).every((input) => input.value !== "");
    if (!isValid) {
      return;
    }

    let {} = inputs;

    memory = {};
  }

  function createElement(
    type,
    parentNode,
    content,
    classes,
    id,
    attributes,
    useInnerHtml
  ) {
    const htmlElement = document.createElement(type);

    if (content && useInnerHtml) {
      htmlElement.innerHTML = content;
    } else {
      if (content && type !== "input") {
        htmlElement.textContent = content;
      }
      if (content && type === "input") {
        htmlElement.value = content;
      }
    }

    if (classes && classes.length > 0) {
      htmlElement.classList.add(...classes);
    }

    if (id) {
      htmlElement.id = id;
    }

    if (attributes) {
      for (let key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }
    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    return htmlElement;
  }
}
