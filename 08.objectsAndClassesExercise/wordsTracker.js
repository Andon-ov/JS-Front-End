function solve(arr) {
  let words = {};
  let searchedWords = arr.shift().split(" ");

  searchedWords.forEach((word) => (words[word] = 0));

  arr.forEach((elm) => {
    if (elm in words) {
      words[elm]++;
    }
  });

  const entries = Object.entries(words);
  entries.sort((a, b) => b[1] - a[1]);

  entries.forEach((elm, i) => {
    console.log(`${elm[0]} - ${elm[1]}`);
  });
}

solve([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
solve([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
