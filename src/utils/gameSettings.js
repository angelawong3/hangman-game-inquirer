const fs = require("fs");
const path = require("path");

const getCategoryFromFile = (category) => {
  // buile the file path
  const fileName = `${category}.json`;
  const filePath = path.join(__dirname, "../data", fileName);

  // read from file using file path
  const rawData = fs.readFileSync(filePath, "utf-8");

  const parsedData = JSON.parse(rawData);

  // return data from file
  return parsedData;
};

const getRandomWordFromList = (words) =>
  // return the word from the words array
  words[Math.floor(Math.random() * words.length)];

module.exports = {
  getCategoryFromFile,
  getRandomWordFromList,
};
