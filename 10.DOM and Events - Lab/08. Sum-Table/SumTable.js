function sumTable() {
  let sum = 0;
  let price = document.querySelectorAll("table tr");
  for (let i = 1; i < price.length - 1; i++) {
    let row = price[i].children;
    for (let j = 1; j < row.length; j += 2) {
      sum += Number(row[j].textContent);
      console.log(row[j].textContent);
    }
  }
  document.getElementById("sum").textContent = sum;
}
