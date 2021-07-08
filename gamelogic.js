function displayWordSoFar(word, guesses) {
// aanmaken variabele om te verzamelen
  let displayedWord = "";
// word argument omzetten naar array om te kunnen doorlopen
  const splitWord = word.split("");
// array doorlopen in array
  for (let i = 0; i < splitWord.length; i++) {
// als in de geraden letters de huidige letter zit, dan...
    if (guesses.includes(splitWord[i])){
// huidige letter stoppen in verzamelvariabele met extra spatie
      displayedWord = displayedWord + splitWord[i] + " ";
//als in guesses geen letter zit die overeenkomt met huidige letter
    } else {
// dan een underscore laten zien
      displayedWord = displayedWord + ("_ ");
    }
  }
// verzamel variabele teruggeven
return displayedWord;
}

function isGameWon(word, guesses) {
  for (let i = 0; i < word.length; i++) {
    let singleLetter = word[i];
// als een enkele letter van het woord NIET voorkomt in guesses, dan return false, anders true.
    if (!guesses.includes(singleLetter)) {
      return false;
    } else {
      return true;
    }
  }
}

function isGameLost(word, guesses) {
  // WRITE ME
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
