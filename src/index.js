// inquirer package
const inquirer = require("inquirer");

// import questions
const { gameSettingQuestions } = require("./questions");

const init = async () => {
  // prompt the game setting question and store answers
  const answers = await inquirer.prompt(gameSettingQuestions);

  //   log the answers
  console.log(answers);
};

init();

// ask the catergory and console log the data from the chosen category
