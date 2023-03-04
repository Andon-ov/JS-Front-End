function attachEvents() {

    let submitBtn = document.getElementById("submit")
    let current = document.getElementById("current");
    let upcoming = document.getElementById("upcoming");
    let forecast = document.getElementById("forecast");
    let searchLocation = document.getElementById("location");
    submitBtn.addEventListener("click", getWeather);

    const conditions = {
        Sunny: "&#x2600", // ☀
        "Partly sunny": "&#x26C5", // ⛅
        Overcast: "&#x2601", // ☁
        Rain: "&#x2614", // ☂
        Degrees: "&#176", // °
    };

    async function getWeather() {
        const url = `http://localhost:3030/jsonstore/forecaster/locations`;
        const res = await fetch(url);
        const data = await res.json();

        let searchedTown
        data.forEach(locationInfoObject => {
            if (locationInfoObject.name === searchLocation.value) {
                searchedTown =  locationInfoObject.code
            }
        })
        createForecaster(searchedTown);
    }

    async function createForecaster(townCode) {
        const urlToday = `http://localhost:3030/jsonstore/forecaster/today/${townCode}`;
        const urlUpcoming = `http://localhost:3030/jsonstore/forecaster/upcoming/${townCode}`;

        const resToday = await fetch(urlToday);
        const dataToday = await resToday.json();

        const resUpcoming = await fetch(urlUpcoming);
        const dataUpcoming = await resUpcoming.json();

        createToday(dataToday)
        createUpcoming(dataUpcoming)
    }

    function createUpcoming(data) {


        let divContainer = document.createElement('div')
        divContainer.classList.add('forecast-info')
        data.forecast.forEach(data => {
            const spanContainer = generateSpan(data)
            divContainer.appendChild(spanContainer)
        })

        upcoming.appendChild(divContainer)

    }

    function generateSpan(data) {
        const {condition, high, low,} = data

        let spanContainer = document.createElement('span')
        spanContainer.classList.add('upcoming')

        let spanSymbol = document.createElement('span')
        spanSymbol.classList.add('symbol')
        spanSymbol.innerHTML = conditions[condition]

        let spanDegree = document.createElement('span')
        spanDegree.classList.add('forecast-data')
        spanDegree.innerHTML = `${low}${conditions.Degrees}/${high}${conditions.Degrees}`;

        let spanConditions = document.createElement('span')
        spanConditions.classList.add('forecast-data')
        spanConditions.innerHTML = condition

        spanContainer.appendChild(spanSymbol)
        spanContainer.appendChild(spanDegree)
        spanContainer.appendChild(spanConditions)

        return spanContainer

    }

    function createToday(data) {
        const {condition, high, low} = data.forecast;

        let forecastContainer = document.createElement("div");
        forecastContainer.classList.add("forecast");

        let conditionSymbolSpan = document.createElement("span");
        conditionSymbolSpan.classList.add("condition", "symbol");
        conditionSymbolSpan.innerHTML = conditions[condition];

        let conditionContainerSpan = document.createElement("span");
        conditionContainerSpan.classList.add("condition");

        let nameSpan = document.createElement("span");
        nameSpan.classList.add("forecast-data");
        nameSpan.textContent = data.name;

        let tempSpan = document.createElement("span");
        tempSpan.classList.add("forecast-data");
        tempSpan.innerHTML = `${low}${conditions.Degrees}/${high}${conditions.Degrees}`;

        let conditionSpan = document.createElement("span");
        conditionSpan.classList.add("forecast-data");
        conditionSpan.textContent = condition;

        conditionContainerSpan.appendChild(nameSpan)
        conditionContainerSpan.appendChild(tempSpan)
        conditionContainerSpan.appendChild(conditionSpan)

        forecastContainer.appendChild(conditionSymbolSpan)
        forecastContainer.appendChild(conditionContainerSpan)

        current.appendChild(forecastContainer)

        forecast.style.display = 'block'


    }
}

attachEvents();
