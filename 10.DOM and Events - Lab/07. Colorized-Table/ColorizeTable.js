function colorize() {
  let allTd = document.querySelectorAll("tr:nth-child(even)");
  for (const e of allTd) {
    e.style.background = "teal";
  }

  //   allTd.forEach((e) => (e.style.background = "teal"));
}
