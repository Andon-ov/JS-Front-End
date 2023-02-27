function wordsTracker(array) {
    let wantedWords = array.shift().split(' ');
    let wantedWordsCounts = {};

    wantedWords.forEach(word => wantedWordsCounts[word] = 0);
    array.forEach(word => word in wantedWordsCounts && wantedWordsCounts[word]++);
    wantedWords.sort((a, b) => wantedWordsCounts[b] - wantedWordsCounts[a]);
    wantedWords.forEach(word => console.log(`${word} - ${wantedWordsCounts[word]}`));
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


// function solve(arr) {
//     let words = {};
//     let searchedWords = arr.shift();
    
//     let [firstWord, secondWord] = searchedWords.split(" ");
//     words[firstWord] = 0;
//     words[secondWord] = 0;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === firstWord) {
//         words[firstWord]++;
//       } else if (arr[i] === secondWord) {
//         words[secondWord]++;
//       }
//     }
  
//     const entries = Object.entries(words);
//     entries.sort((a, b) => b[1] - a[1]);
  
//     entries.forEach((elm, i) => {
//       console.log(`${elm[0]} - ${elm[1]}`);
//     });
//   }