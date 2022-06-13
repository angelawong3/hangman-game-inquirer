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
    message: ({ name }) => `${name} Please choose a category:`,
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
  {
    type: "list",
    message: ({ name }) => `${name} Please choose the game level:`,
    choices: [
      {
        name: "Easy",
        value: "easy",
        short: "Easy",
      },
      {
        name: "Medium",
        value: "medium",
        short: "Medium",
      },
      {
        name: "Hard",
        value: "hard",
        short: "Hard",
      },
    ],
    name: "level",
  },
  {
    type: "list",
    message: ({ name }) => `${name} Please choose the game mode:`,
    choices: [
      {
        name: "Letter Input",
        value: "input",
        short: "Character Input",
      },
      {
        name: "Letter Choice",
        value: "choice",
        short: "Letter Choice",
      },
    ],
    name: "gameMode",
  },
  {
    type: "confirm",
    message: ({ name }) =>
      `${name} Do you want to generate a report of your game?`,
    name: "generateReport",
    default: true,
  },
];

module.exports = {
  gameSettingQuestions,
};
