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
// aanmaken variabele om te verzamelen
  let displayedWord = "";
// word argument omzetten naar array om te kunnen doorlopen
  const splitWord = word.split("");
// array doorlopen in array
  for (let i = 0; i < splitWord.length; i++) {
// als in de geraden letters de huidige letter zit, dan...
    if (guesses.includes(splitWord[i])){
// huidige letter stoppen in verzamelvariabele ZONDER spatie
      displayedWord = displayedWord + splitWord[i];
//als in guesses geen letter zit die overeenkomt met huidige letter
    } else {
// dan een underscore laten zien
      displayedWord = displayedWord + ("_ ");
    }
  }
// als verzamelvariabele gelijk is aan argument word, dan return true
  if (displayedWord == word) {
  return true;
  } else {
  return false;
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
