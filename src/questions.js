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
        name: "Movie",
        value: "movie",
        short: "Movie",
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

const generateGameQuestion = (gameMode, name) => {
  if (gameMode === "input") {
    return {
      type: "input",
      message: "Please enter a letter from a-z",
      name: "letter",
    };
  }
  return {
    type: "list",
    message: "Please select a letter:",
    name: "letter",
    choices: [..."abcdefghijklmnopqrstuvwyz"],
    // or choices: "abcdefghijklmnopqrstuvwyz".split(""),
  };
};

module.exports = {
  gameSettingQuestions,
  generateGameQuestion,
};
