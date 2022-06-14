const maskWord = (word) => word.replace(/[a-z]/gi, "_");

const displayWord = (word) => {
  console.log(`Your Word: ${word}`);
};

const displayHealth = (attempts = 10) => {
  const healthArray = new Array(attempts).fill("💛");

  console.log(`Remaining attempts: ${healthArray.join("")}`);
};

const initGame = (word) => {
  //   mask word and log masked letters
  const maskedWord = maskWord(word);

  displayWord(maskedWord);

  // display initial health
  displayHealth();
};

module.exports = {
  initGame,
  displayWord,
  displayHealth,
};
