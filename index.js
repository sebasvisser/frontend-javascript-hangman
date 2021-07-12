const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost, wrongGuesses } = require("./gamelogic");

function game(word, guesses) {
  if (guesses.length !== 0) {
    const guessesSoFar = guesses.toString();
//guesses als string displayen omdat anders niet mooi in terminal (multiple lines)
    console.log("Deze letters heb je al geprobeerd: ", guessesSoFar);
  }

  const letter = question("Raad een letter: ");

// Controle van input
// opzet nodige variabele
  // input als string waarde
  const searchLetter = letter.toString();
  // lengte van input als boolean (1 = ja)
  let guessLength = false;
  if(letter.length === 1){
    guessLength = true;
  }
// controle van input
  // Controle input letter niet al geprobeerd.
  if(guesses.includes(letter)) {
    console.log("Die letter had je al geprobeerd. \n Probeer het opnieuw.")
    game(word, guesses);
  // Controle of input = normale letter
  }else if(!"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(searchLetter)) {
    console.log("Dat is geen normale letter.\n Zo heeft het geen zin. \n  Probeer het opnieuw.")
    game(word, guesses);
  // Controle of input is 1 lang
  }else if(guessLength === false) {
    console.log("Zou het lukken om gewoon 1 letter in te voeren?. \n" +
        "Zo heeft het geen zin. \n" +
        "Probeer het opnieuw.");
    game(word, guesses);
  } else {
  // Letter toevoegen aan guesses (als lowercase)
    guesses.push(letter.toLowerCase());
  }

// Aantal pogingen tellen
  const attempts = guesses.length + 1;
  console.log(" ========== Poging " + attempts +  " ==========")
// laat zien hoe het woord er tot nu toe uitziet
  console.log("Het te raden woord: " + displayWordSoFar(word, guesses));

// extra exit bij 7 fouten
if (wrongGuesses >= 7){
  return;
}

  if(isGameWon(word, guesses) === true) {
// als gewonnen => display gewonnen
    console.log("Je hebt gewonnen!");
  } else if(isGameLost(word, guesses) === true) {
// verloren => display verloren
    console.log("Te vaak een verkeerde letter geraden... Je hebt verloren, jammer!");
  } else {
// anders game nog een keer aanroepen
    game(word, guesses);
  }
}

console.log(`
__________
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);
