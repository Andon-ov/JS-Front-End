function solve() {
  const text = document.getElementById("text").value.toLowerCase().split(" ");
  const namingConvention = document.getElementById("naming-convention").value;

  function camelOrPascal(namingConvention, text) {
    for (
      let index = namingConvention === "Camel Case" ? 1 : 0;
      index < text.length;
      index++
    ) {
      text[index] =
        text[index].charAt(0).toUpperCase() + text[index].substring(1);
      document.getElementById("result").innerText = text.join("");
    }
  }

  if (namingConvention === "Camel Case" || namingConvention === "Pascal Case") {
    camelOrPascal(namingConvention, text);
  } else {
    document.getElementById("result").innerText = "Error!";
  }
}
