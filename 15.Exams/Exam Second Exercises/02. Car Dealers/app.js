window.addEventListener("load", solve);

function solve() {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  const makeInput = document.getElementById("make");
  const modelInput = document.getElementById("model");
  const yearInput = document.getElementById("year");
  const fuelInput = document.getElementById("fuel");
  const originalCostInput = document.getElementById("original-cost");
  const sellingPriceInput = document.getElementById("selling-price");

  const publishBtn = document.getElementById("publish");
  publishBtn.addEventListener("click", onPublish);

  const tbody = document.getElementById("table-body");

  const ul = document.getElementById("cars-list");

  const totalProfit = document.getElementById("profit");
  let allProfit = 0;

  function onPublish() {

    if (
      makeInput.value === "" ||
      modelInput.value === "" ||
      yearInput.value === "" ||
      fuelInput.value === "" ||
      originalCostInput.value === "" ||
      sellingPriceInput.value === "" ||
      Number(originalCostInput.value) > Number(sellingPriceInput.value)) {
      return;
    }

    const tr = createElement('tr', tbody, null, ['row']);
    createElement('td', tr, makeInput.value);
    createElement('td', tr, modelInput.value);
    createElement('td', tr, yearInput.value);
    createElement('td', tr, fuelInput.value);
    createElement('td', tr, originalCostInput.value);
    createElement('td', tr, sellingPriceInput.value);
    const tdBtn = createElement('td', tr,);
    const editBtn = createElement('button', tdBtn, 'Edit', ['action-btn', 'edit']);
    const sellBtn = createElement('button', tdBtn, 'Sell', ['action-btn', 'sell']);
    editBtn.addEventListener('click', onEdit);
    sellBtn.addEventListener('click', onSell);

    form.reset();
  }

  function onEdit() {
    let trRow = this.parentNode.parentNode;
    let [make, model, year, fuel, originalCost, sellingPrice] = Array.from(this.parentNode.parentNode.querySelectorAll('td:not(:last-child)'));
    makeInput.value = make.textContent;
    modelInput.value = model.textContent;
    yearInput.value = year.textContent;
    fuelInput.value = fuel.textContent;
    originalCostInput.value = originalCost.textContent;
    sellingPriceInput.value = sellingPrice.textContent;
    trRow.remove();

  }

  function onSell() {
    let trRow = this.parentNode.parentNode;
    let [make, model, year, fuel, originalCost, sellingPrice] = Array.from(this.parentNode.parentNode.querySelectorAll('td:not(:last-child)'));
    let profit = Number(sellingPrice.textContent) - Number(originalCost.textContent);

    allProfit += profit;
    totalProfit.textContent = allProfit.toFixed(2);

    const li = createElement('li', ul, null, ['each-list']);
    createElement('span', li, `${make.textContent} ${model.textContent}`);
    createElement('span', li, year.textContent);
    createElement('span', li, profit);
    trRow.remove();

  }

  function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml) {
    const htmlElement = document.createElement(type);

    if (content && useInnerHtml) {
      htmlElement.innerHTML = content;

    } else {

      if (content && type !== 'input') {
        htmlElement.textContent = content;

      }
      if (content && type === 'input') {
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
        // htmlElement[key] = attributes[key];
      }

    }
    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    return htmlElement;
  }
}

// window.addEventListener("load", solve);

// function solve() {
//   document.getElementById('publish').addEventListener('click', getInfo);
//   const tbody = document.getElementById('table-body');
//   const make = document.getElementById('make');
//   const model = document.getElementById('model');
//   const year = document.getElementById('year');
//   const fuel = document.getElementById('fuel');
//   const originalCost = document.getElementById('original-cost');
//   const sellingPrice = document.getElementById('selling-price');
//   const carsList = document.getElementById('cars-list');
//   const profit = document.getElementById('profit');

//   const car = { make, model, year, fuel, originalCost, sellingPrice };

//   function getInfo(event) {
//     event.preventDefault();

//     if (make.value === "" || model.value === "" || year.value === "" || fuel.value === "" || originalCost.value === "" || sellingPrice.value === "") {
//       return;

//     }
//     if (Number(sellingPrice.value) <= Number(originalCost.value)) {
//       return;
//     }

//     const tr = createElement(make, model, year, fuel, originalCost, sellingPrice);
//     car.make = make.value;
//     car.model = model.value;
//     car.year = year.value;
//     car.fuel = fuel.value;
//     car.originalCost = originalCost.value;
//     car.sellingPrice = sellingPrice.value;

//     make.value = '';
//     model.value = '';
//     year.value = '';
//     fuel.value = '';
//     originalCost.value = '';
//     sellingPrice.value = '';
//     tbody.appendChild(tr);

//   }

//   function createElement(make, model, year, fuel, originalCost, sellingPrice) {

//     const tr = document.createElement('tr');
//     tr.classList.add('row');

//     const tdMake = document.createElement('td');
//     tdMake.textContent = make.value;
//     const tdModel = document.createElement('td');
//     tdModel.textContent = model.value;
//     const tdYear = document.createElement('td');
//     tdYear.textContent = year.value;
//     const tdFuel = document.createElement('td');
//     tdFuel.textContent = fuel.value;
//     const tdOriginalCost = document.createElement('td');
//     tdOriginalCost.textContent = originalCost.value;
//     const tdSellingPrice = document.createElement('td');
//     tdSellingPrice.textContent = sellingPrice.value;
//     const tdButtons = document.createElement('td');

//     const editBtn = document.createElement('button');
//     editBtn.classList.add('action-btn', 'edit');
//     editBtn.textContent = 'Edit';
//     editBtn.addEventListener('click', editCar);

//     const sellBtn = document.createElement('button');
//     sellBtn.classList.add('action-btn', 'sell');
//     sellBtn.textContent = 'Sell';
//     sellBtn.addEventListener('click', sellCar);

//     tdButtons.appendChild(editBtn);
//     tdButtons.appendChild(sellBtn);

//     tr.appendChild(tdMake);
//     tr.appendChild(tdModel);
//     tr.appendChild(tdYear);
//     tr.appendChild(tdFuel);
//     tr.appendChild(tdOriginalCost);
//     tr.appendChild(tdSellingPrice);
//     tr.appendChild(tdButtons);

//     return tr;
//   }

//   function editCar(event) {
//     console.log(document.getElementsByTagName('td'));

//     make.value = car.make;
//     model.value = car.model;
//     year.value = car.year;
//     fuel.value = car.fuel;
//     originalCost.value = car.originalCost;
//     sellingPrice.value = car.sellingPrice;
//     event.target.parentElement.parentElement.remove();

//   }
//   function sellCar(event) {
//     let carProfit = Number(car.sellingPrice) - Number(car.originalCost);
//     let allProfit = Number(profit.textContent)

//     const li = document.createElement('li');
//     li.classList.add('each-list');

//     const spanModel = document.createElement('span');
//     spanModel.textContent = `${car.make} ${car.model}`;
//     const spanYear = document.createElement('span');
//     spanYear.textContent = `${car.year}`;
//     const spanProfit = document.createElement('span');
//     spanProfit.textContent = `${carProfit}`;

//     li.appendChild(spanModel);
//     li.appendChild(spanYear);
//     li.appendChild(spanProfit);

//     carsList.appendChild(li);
//     event.target.parentElement.parentElement.remove();
//     allProfit += Number(carProfit.toFixed(2))
//     profit.textContent = `${allProfit.toFixed(2)}`
//     // console.log(typeof allProfit);
//     // console.log(carProfit.toFixed(2));
//     // Number(profit.textContent) += carProfit.toFixed(2)

//   }
// }

