function displayWordSoFar(word, guesses) {
  let displayedWord = "";
  for (let i = 0; i < word.length; i++) {
    displayedWord =displayedWord + ("_ ");
  }
return displayedWord;
}

function isGameWon(word, guesses) {
  // WRITE ME
}

function isGameLost(word, guesses) {
  // WRITE ME
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
