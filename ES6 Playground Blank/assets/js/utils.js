const average = (total, quantity) => total/quantity;

const detectSong = (songArray, wordInSongTitle) =>
  songArray
    .filter(({ title }) => title.includes(wordInSongTitle))
    .map(({ title }) => title);

const random = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

//arrow function, le saque function y lo reemplace por const. puse un = antes de los parametros
const detectSongsWithXWords = (songArray, amountOfWords) =>
  songArray
    .filter(({ title }) => title.split(" ").length === amountOfWords)
    .map(({ title }) => title);

export { average, detectSong, random, detectSongsWithXWords };
