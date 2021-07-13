function displayWordSoFar(word, guesses) {
// aanmaken variabele om te verzamelen
  let displayedWord = "";
// word argument omzetten naar array om te kunnen doorlopen
  const splitWord = word.split("");
// array doorlopen in array
  for (let i = 0; i < splitWord.length; i++) {
// als in de geraden letters de huidige letter zit, dan...
    if (guesses.includes(splitWord[i])){
// huidige letter stoppen in verzamel-variabele met extra spatie
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

// als een enkele letter van het woord (word[i])
// NIET voorkomt in guesses, dan return false, anders true.
function isGameWon(word, guesses) {
  let gameWin = true;
  for (let i = 0; i < word.length; i++) {
    if (!guesses.includes(word[i])) {
      gameWin = false;
    }
  }
  return gameWin;
}

function isGameLost(word, guesses) {
// teller verkeerde letters aanmaken
  let wrongGuesses = 0;
// variabele om terug te geven
  let gameLost ;
// als guesses[i] NIET voorkomt in word, dan wrongGuesses ++
  for (let i = 0; i < guesses.length; i++) {
    if(!word.includes(guesses[i])) {
      wrongGuesses ++;
    }
  }
  switch (wrongGuesses) {
    case 0:
      console.log("\n" +
          "\n" +
          "\n" +
          "\n" +
          "\n" +
          "\n" +
          "\n" + " Nog geen fouten gemaakt!");
      gameLost = false;
      break;

    case 1:
      console.log("|\n" +
          "|\n" +
          "|\n" +
          "|\n" +
          "|\n" +
          "===========" + " Pas 1 fout gemaakt, maar 1 fout is geen fout ;)");
      gameLost = false;
      break;

    case 2:
      console.log("___\n" +
          "| /\n" +
          "|/\n" +
          "|\n" +
          "|\n" +
          "|\n" +
          "===========" + " Pas 2 fouten gemaakt, kan gebeuren...");
      gameLost = false;
      break;

    case 3:
      console.log("__________\n" +
          "| /\n" +
          "|/\n" +
          "|\n" +
          "|\n" +
          "|\n" +
          "===========" + " Pas 3 fouten gemaakt, geen stress, je hebt het onder controle.");
      gameLost = false;
      break;

    case 4:
      console.log("__________\n" +
          "| /     |\n" +
          "|/      o\n" +
          "|\n" +
          "|\n" +
          "|\n" +
          "===========" + " Pas 4 fouten gemaakt, geen nood, alles kan nog.");
      gameLost = false;
      break;

    case 5:
      console.log("__________\n" +
          "| /     |\n" +
          "|/     _o_\n" +
          "|\n" +
          "|\n" +
          "|\n" +
          "===========" + " Al 5 fouten gemaakt...nu komt het er op aan!");
      gameLost = false;
      break;

    case 6:
      console.log("__________\n" +
          "| /     |\n" +
          "|/     _o_\n" +
          "|       O\n" +
          "|\n" +
          "|\n" +
          "===========" + " Al 6 fouten gemaakt, bij de volgende fout ben je af!");
      gameLost = false;
      break;

    default:
      console.log("__________\n" +
          "| /     |\n" +
          "|/     _o_\n" +
          "|       O\n" +
          "|      / \\\n" +
          "|\n" +
          "===========" + " Je hangt, jammer. Je hebt verloren!");
      gameLost = true;
      break;
    }
  return gameLost;
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
