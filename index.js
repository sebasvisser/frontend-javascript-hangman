const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost } = require("./gamelogic");

// beginnen met een schone terminal
console.clear();

function game(word, guesses) {
  if (guesses.length !== 0) {
    const guessesSoFar = guesses.toString();
//guesses als string displayen omdat anders niet mooi in terminal (multiple lines)
    console.log("Deze letters heb je al geprobeerd: ", guessesSoFar);
  }

  const letter = question("Raad een letter: ");
// voorkomen van zelfde letter nog eens raden.
  if(guesses.includes(letter)){
    console.log("Die letter had je al geprobeerd.")
    game(word, guesses);
  }
//voorkomen gekke tekens
  const searchLetter= letter.toString();
  if(!"abcdefghijklmnopqrstuvwxyz".includes(searchLetter)) {
    console.log("Dat is geen normale letter.")
    game(word, guesses);
  }
// controle of input 1 character lang is
  if(!letter.length === 1) {
    console.log("Zou het lukken om je te beperken tot 1 letter?.")
    game(word, guesses);
  }
// Letter toevoegen aan guesses (als lowercase)
  guesses.push(letter.toLowerCase());
// Aantal pogingen tellen
  const attempts = guesses.length + 1;
// elke poging met lege terminal beginnen
  console.clear();
  console.log(" ========== Poging " + attempts +  " ==========")
// laat zien hoe het woord er tot nu toe uitziet
  console.log("Het te raden woord: " + displayWordSoFar(word, guesses));

  if(isGameWon(word, guesses)) {
// als gewonnen => display gewonnen
    console.log("Je hebt gewonnen!");
  } else if(isGameLost(word, guesses)) {
// verloren => display verloren
    console.log("Te vaak een verkeerde letter geraden... Je hebt verloren, jammer!");
  } else  {
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
