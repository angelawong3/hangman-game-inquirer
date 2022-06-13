const inquirer = require("inquirer");

const gameSettingQuestions = [
  // Ask the name of the player
  {
    type: "input",
    message: "Please enter your name:",
    name: "name",
    validate: (answers) => {
      const name = answers.name;

      if (!answers) {
        return "Your name is required";
      }
      return true;
    },
  },
  {
    type: "list",
    message: (answers) => {
      const name = answers.name;
      return `${name} Please choose a category:`;
    },
    choices: [
      {
        name: "Movies",
        value: "movies",
        short: "Movies",
      },
      {
        name: "Food",
        value: "food",
        short: "Food",
      },
    ],
    name: "category",
  },
];

const init = async () => {
  // prompt the game setting question and store answers
  const answers = await inquirer.prompt(gameSettingQuestions);

  //   log the answers
  console.log(answers);
};

init();

// ask the catergory and console log the data from the chosen category
