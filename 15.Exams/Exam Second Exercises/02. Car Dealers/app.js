window.addEventListener("load", solve);

function solve() {
  document.getElementById('publish').addEventListener('click', getInfo);
  const tbody = document.getElementById('table-body');
  const make = document.getElementById('make');
  const model = document.getElementById('model');
  const year = document.getElementById('year');
  const fuel = document.getElementById('fuel');
  const originalCost = document.getElementById('original-cost');
  const sellingPrice = document.getElementById('selling-price');
  const carsList = document.getElementById('cars-list');
  const profit = document.getElementById('profit');
  const car = { make, model, year, fuel, originalCost, sellingPrice };


  function getInfo(event) {
    event.preventDefault();

    if (make.value === "" || model.value === "" || year.value === "" || fuel.value === "" || originalCost.value === "" || sellingPrice.value === "") {
      return;

    }
    if (Number(sellingPrice.value) <= Number(originalCost.value)) {
      return;
    }

    const tr = createElement(make, model, year, fuel, originalCost, sellingPrice);
    car.make = make.value;
    car.model = model.value;
    car.year = year.value;
    car.fuel = fuel.value;
    car.originalCost = originalCost.value;
    car.sellingPrice = sellingPrice.value;

    make.value = '';
    model.value = '';
    year.value = '';
    fuel.value = '';
    originalCost.value = '';
    sellingPrice.value = '';
    tbody.appendChild(tr);

  }

  function createElement(make, model, year, fuel, originalCost, sellingPrice) {

    const tr = document.createElement('tr');
    tr.classList.add('row');

    const tdMake = document.createElement('td');
    tdMake.textContent = make.value;
    const tdModel = document.createElement('td');
    tdModel.textContent = model.value;
    const tdYear = document.createElement('td');
    tdYear.textContent = year.value;
    const tdFuel = document.createElement('td');
    tdFuel.textContent = fuel.value;
    const tdOriginalCost = document.createElement('td');
    tdOriginalCost.textContent = originalCost.value;
    const tdSellingPrice = document.createElement('td');
    tdSellingPrice.textContent = sellingPrice.value;
    const tdButtons = document.createElement('td');

    const editBtn = document.createElement('button');
    editBtn.classList.add('action-btn', 'edit');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', editCar);

    const sellBtn = document.createElement('button');
    sellBtn.classList.add('action-btn', 'sell');
    sellBtn.textContent = 'Sell';
    sellBtn.addEventListener('click', sellCar);

    tdButtons.appendChild(editBtn);
    tdButtons.appendChild(sellBtn);

    tr.appendChild(tdMake);
    tr.appendChild(tdModel);
    tr.appendChild(tdYear);
    tr.appendChild(tdFuel);
    tr.appendChild(tdOriginalCost);
    tr.appendChild(tdSellingPrice);
    tr.appendChild(tdButtons);

    return tr;
  }

  function editCar(event) {
    // console.log(event.target.parentElement.parentElement.getElementsBy);
    console.log(document.getElementsByTagName('td'));
    

    make.value = car.make;
    model.value = car.model;
    year.value = car.year;
    fuel.value = car.fuel;
    originalCost.value = car.originalCost;
    sellingPrice.value = car.sellingPrice;
    event.target.parentElement.parentElement.remove();
    
   



  }
  function sellCar(event) {
    let carProfit = Number(car.sellingPrice) - Number(car.originalCost);
    let allProfit = Number(profit.textContent)

    const li = document.createElement('li');
    li.classList.add('each-list');

    const spanModel = document.createElement('span');
    spanModel.textContent = `${car.make} ${car.model}`;
    const spanYear = document.createElement('span');
    spanYear.textContent = `${car.year}`;
    const spanProfit = document.createElement('span');
    spanProfit.textContent = `${carProfit}`;

    li.appendChild(spanModel);
    li.appendChild(spanYear);
    li.appendChild(spanProfit);


    carsList.appendChild(li);
    event.target.parentElement.parentElement.remove();
    allProfit += Number(carProfit.toFixed(2))
    profit.textContent = `${allProfit.toFixed(2)}`
    // console.log(typeof allProfit);
    // console.log(carProfit.toFixed(2));
    // Number(profit.textContent) += carProfit.toFixed(2)

  }
}


/*

function solve() {
  const makeInputEl = document.getElementById("make");
  const modelInputEl = document.getElementById("model");
  const yearInputEl = document.getElementById("year");
  const fuelInputEl = document.getElementById("fuel");
  const firstPriceInputEl = document.getElementById("original-cost");
  const sellingPriceInputEl = document.getElementById("selling-price");
  const tableEl = document.getElementById("table-body");
  const soldCarsEl = document.getElementById("cars-list");
  const totalProfit = document.getElementById("profit");
  let profitMade = 0;

  const submitButtonEl = document
    .getElementById("publish")
    .addEventListener("click", (ev) => {
      ev.preventDefault();
      if (
        makeInputEl.value !== "" &&
        modelInputEl.value !== "" &&
        yearInputEl.value !== "" &&
        fuelInputEl.value !== "" &&
        firstPriceInputEl.value !== "" &&
        sellingPriceInputEl.value
      ) {
        addPost(
          ev,
          makeInputEl.value,
          modelInputEl.value,
          yearInputEl.value,
          fuelInputEl.value,
          firstPriceInputEl.value,
          sellingPriceInputEl.value
        );
        clearInputFileds();
      }
    });

  function addPost(
    ev,
    makeInputEl,
    modelInputEl,
    yearInputEl,
    fuelInputEl,
    firstPriceInputEl,
    sellingPriceInputEl
  ) {
    // ev.preventDefault();

    const tr = elGenerator("tr");
    tr.setAttribute("class", "row");
    elGenerator("td", `${makeInputEl}`, tr);
    elGenerator("td", `${modelInputEl}`, tr);
    elGenerator("td", `${yearInputEl}`, tr);
    elGenerator("td", `${fuelInputEl}`, tr);
    elGenerator("td", `${firstPriceInputEl}`, tr);
    elGenerator("td", `${sellingPriceInputEl}`, tr);
    const actionCell = elGenerator("td");
    tr.appendChild(actionCell);

    const editBtn = elGenerator("button", "Edit", actionCell);
    editBtn.setAttribute("class", "action-btn");
    editBtn.setAttribute("id", "edit");
    const sellBtn = elGenerator("button", "Sell", actionCell);
    sellBtn.setAttribute("class", "action-btn");
    sellBtn.setAttribute("id", "sell");

    tableEl.appendChild(tr);

    sellBtn.addEventListener("click", (ev) =>
      sellCar(
        ev,
        makeInputEl,
        modelInputEl,
        yearInputEl,
        firstPriceInputEl,
        sellingPriceInputEl
      )
    );
    editBtn.addEventListener("click", (ev) =>
      editPost(
        ev,
        makeInputEl,
        modelInputEl,
        yearInputEl,
        fuelInputEl,
        firstPriceInputEl,
        sellingPriceInputEl
      )
    );
  }

  function editPost(
    ev,
    _makeInputEl,
    _modelInputEl,
    _yearInputEl,
    _fuelInputEl,
    _firstPriceInputEl,
    _sellingPriceInputEl
  ) {
    ev.target.parentNode.parentNode.remove();

    makeInputEl.value = _makeInputEl;
    modelInputEl.value = _modelInputEl;
    yearInputEl.value = _yearInputEl;
    fuelInputEl.value = _fuelInputEl;
    firstPriceInputEl.value = _firstPriceInputEl;
    sellingPriceInputEl.value = _sellingPriceInputEl;
  }

  function sellCar(
    ev,
    _makeInputEl,
    _modelInputEl,
    _yearInputEl,
    _firstPriceInputEl,
    _sellingPriceInputEl
  ) {
    ev.target.parentNode.parentNode.remove();

    let profitForCurrentCar = _sellingPriceInputEl - _firstPriceInputEl;

    const soldLiEl = document.createElement("li");
    soldLiEl.className = "each-list";
    const carName = document.createElement("span");
    carName.textContent = _makeInputEl + " " + _modelInputEl;
    const carYear = document.createElement("span");
    carYear.textContent = _yearInputEl;
    const carProfit = document.createElement("span");
    carProfit.textContent = profitForCurrentCar;

    soldLiEl.appendChild(carName);
    soldLiEl.appendChild(carYear);
    soldLiEl.appendChild(carProfit);

    soldCarsEl.appendChild(soldLiEl);

    profitMade += profitForCurrentCar;

    totalProfit.textContent = profitMade;
  }

  function clearInputFileds() {
    makeInputEl.value = "";
    modelInputEl.value = "";
    yearInputEl.value = "";
    fuelInputEl.value = "";
    firstPriceInputEl.value = "";
    sellingPriceInputEl.value = "";
  }

  function elGenerator(type, content, parent) {
    const element = document.createElement(type);
    element.textContent = content;

    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }
}
*/ 

// TODO  92 / 100