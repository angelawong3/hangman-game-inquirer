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
const { initGame, displayWord, displayHealth, play } = require("./utils/game");

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

  let inProgress = true;
  let remainingAttempts = 10;
  let gameStatus = "You Lose :(";

  // declare letters array to track letter from user
  const letters = [];

  while (inProgress) {
    // get game question
    const gameQuestion = generateGameQuestion(answers.gameMode, answers.name);

    // prompt game question
    const { letter } = await inquirer.prompt(gameQuestion);

    if (!word.includes(letter)) {
      // reduce attempts
      remainingAttempts -= 1;
    }

    console.log(letter);

    letters.push(letter);

    // play game for ltter entered by user
    const newWord = play(letters, word);

    // display the word
    displayWord(newWord);

    // display remaining attempts
    displayHealth(remainingAttempts);

    // check if new word = word
    if (word.toLowerCase() === newWord || remainingAttempts === 0) {
      if (word.toLowerCase() === newWord) {
        gameStatus = "You Win! :)";
      } else {
      }
      inProgress = false;
    }
  }
  console.log(`Game Status :${gameStatus}`);
};

init();
