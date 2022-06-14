// inquirer package
const inquirer = require("inquirer");

// import questions
const { gameSettingQuestions } = require("./questions");
// import category and level
const {
  getCategoryFromFile,
  getRandomWordFromList,
} = require("./utils/gameSettings");

const maskWord = (word) => word.replace(/[a-z]/gi, "_");

const displayWord = (word) => {
  console.log(`Your word: ${word}`);
};

const displayInitialHealth = (attempts = 10) => {
  const healthArray = new Array(attempts).fill("💛");

  console.log(healthArray.join(""));
};

const init = async () => {
  // prompt the game setting question and store answers
  const answers = await inquirer.prompt(gameSettingQuestions);

  // ask the catergory and console log the data from the chosen category
  const categoryDataFromFile = getCategoryFromFile(answers.category);

  //   extract the level from categoryDataFromFile
  const wordList = categoryDataFromFile[answers.level];

  // pick a random word form word list
  const word = getRandomWordFromList(wordList);

  //   mask word and log masked letters
  const maskedWord = maskWord(word);

  displayWord(maskedWord);

  // display initial health
  displayInitialHealth();
};

init();
