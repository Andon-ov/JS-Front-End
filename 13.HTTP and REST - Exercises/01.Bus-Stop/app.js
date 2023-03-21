async function getInfo() {
  let input = document.getElementById("stopId");
  let stopName = document.getElementById("stopName");
  let buses = document.getElementById("buses");

  const url = `http://localhost:3030/jsonstore/bus/businfo/${input.value}`;

  buses.innerHTML = "";
  input.value = "";

  try {
    const response = await fetch(url);
    const data = await response.json();

    stopName.textContent = data.name;

    for (let bus in data.buses) {
      let li = document.createElement("li");
      li.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;
      buses.appendChild(li);
    }
  } catch (error) {
    stopName.textContent = "Error";
  }
}
