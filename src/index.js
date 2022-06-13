// inquirer package
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// import questions
const { gameSettingQuestions } = require("./questions");

const getWordListByCategory = (category) => {
  // buile the file path
  const fileName = `${category}.json`;
  const filePath = path.join(__dirname, "data", fileName);

  // read from file using file path
  const data = fs.readFileSync(filePath, "utf-8");

  // return data from file
  return data;
};

const init = async () => {
  // prompt the game setting question and store answers
  const answers = await inquirer.prompt(gameSettingQuestions);

  //   log the answers
  console.log(answers);

  // ask the catergory and console log the data from the chosen category
  const wordList = getWordListByCategory(answers.category);

  console.log(wordList);
};

init();
