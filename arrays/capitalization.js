// My solution
const capilizeStr = (text) => {
  const textLower = text.toLowerCase();
  const textArray = textLower.split(" ");

  for (let i = 0; i < textArray.length; i++) {
    textArray[i] = textArray[i].charAt(0).toUpperCase() + textArray[i].slice(1);
    // charAt(0).toUpperCase() pega as inicias e deixa muiculo
    // slice(1) e o restante da frase apos recorta a primeri letra
  }

  return textArray.join(" ");
};

console.log(capilizeStr("hello world"));

const capilize = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toLowerCase() + word.slice(1))
    .join(" ");
};

console.log(capilize("hello world"))