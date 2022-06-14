// inquirer package
const inquirer = require("inquirer");

// import questions
const { gameSettingQuestions, generateGameQuestion } = require("./questions");
// import category and level
const {
  getCategoryFromFile,
  getRandomWordFromList,
} = require("./utils/gameSettings");
// import game for word and attempts
const { initGame } = require("./utils/game");

const init = async () => {
  // prompt the game setting question and store answers
  const answers = await inquirer.prompt(gameSettingQuestions);

  // ask the catergory and console log the data from the chosen category
  const categoryDataFromFile = getCategoryFromFile(answers.category);

  //   extract the level from categoryDataFromFile
  const wordList = categoryDataFromFile[answers.level];

  // pick a random word form word list
  const word = getRandomWordFromList(wordList);

  // initalize the game for word
  initGame(word);

  // get game question
  const gameQuestion = generateGameQuestion(answers.gameMode, answers.name);

  //   prompt game question
  const gameAnswer = await inquirer.prompt(gameQuestion);

  console.log(gameAnswer);
};

init();
