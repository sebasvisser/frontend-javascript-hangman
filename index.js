const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost } = require("./gamelogic");

function game(word, guesses) {
  console.log("Dit heb je tot nu toe geraden: ", guesses);

  const letter = question("Raad een letter: ");

  // voeg de geraden letter toe aan de array met guesses
  guesses.push(letter);

  // laat zien hoe het woord er tot nu toe uitziet
  console.log(displayWordSoFar(word, guesses));

// als gewonnen => display gewonnen
// verloren => display verloren
// anders game nog een keer aanroepen
  if(isGameWon(word, guesses)) {
    console.log("Je hebt gewonnen!");
    return;
  }
  if(isGameLost(word, guesses)){
    console.log("Verloren, jammer!");
    return;
  }
// volgende ronde! we roepen game nog een keer aan
    game(word, guesses);
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
