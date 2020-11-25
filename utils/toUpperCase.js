function toUpperCase(word) {
  const eachWord = word.split(" ");

  const newArr = eachWord.map((el) => {
    const firstLetter = el.slice(0, 1);
    const restWord = el.slice(1);
    return firstLetter.toUpperCase() + restWord;
  });
  return newArr.join(" ");
}

module.exports = toUpperCase;
