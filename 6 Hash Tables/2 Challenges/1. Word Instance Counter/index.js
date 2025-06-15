// hello 1, my 1, name 3, is 1, fagno 1:
function wordCounter(text) {
  const loweText = text.toLowerCase();

  const wordMap = {};

  const words = loweText.split(/\s+/);
  // console.log(words);
  for (const word of words) {
    if (word in wordMap) {
      wordMap[word]++;
    } else {
      wordMap[word] = 1;
    }
  }

  return wordMap;
}

const text = "Hello my name name name is  fagno";
const result =  wordCounter(text);
console.log(result)
