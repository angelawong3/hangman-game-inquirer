const maskWord = (word) => word.replace(/[a-z]/gi, "_");

const displayWord = (word) => {
  console.log(`Your Word: ${word}`);
};

const displayInitialHealth = (attempts = 10) => {
  const healthArray = new Array(attempts).fill("💛");

  console.log(`Remaining attempts: ${healthArray.join("")}`);
};

const initGame = (word) => {
  //   mask word and log masked letters
  const maskedWord = maskWord(word);

  displayWord(maskedWord);

  // display initial health
  displayInitialHealth();
};

module.exports = {
  initGame,
};
