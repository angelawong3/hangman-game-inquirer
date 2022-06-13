// inquirer package
const inquirer = require("inquirer");

// import questions
const { gameSettingQuestions } = require("./questions");
// import category and level
const {
  getCategoryFromFile,
  getRandomWordFromList,
} = require("./utils/gameSettings");

const init = async () => {
  // prompt the game setting question and store answers
  const answers = await inquirer.prompt(gameSettingQuestions);

  //   log the answers
  console.log(answers);

  // ask the catergory and console log the data from the chosen category
  const categoryDataFromFile = getCategoryFromFile(answers.category);

  //   extract the level from categoryDataFromFile
  const wordList = categoryDataFromFile[answers.level];

  console.log(categoryDataFromFile);
  console.log(wordList);

  // pick a random word form word list
  const word = getRandomWordFromList(wordList);
  console.log(word);
};

init();
