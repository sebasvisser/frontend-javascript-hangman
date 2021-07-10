const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost } = require("./gamelogic");

function game(word, guesses) {
  if (guesses.length !== 0) {
    const guessesSoFar = guesses.toString();
//guesses als string displayen omdat anders niet mooi in terminal (multiple lines)
    console.log("Deze letters heb je al geprobeerd: ", guessesSoFar);
  }

  const letter = question("Raad een letter: ");

// voorkomen van zelfde letter nog eens raden.
  if(guesses.includes(letter)) {
    console.log("Die letter had je al geprobeerd.")
    game(word, guesses);
  }
//voorkomen gekke tekens
  const searchLetter = letter.toString();
  if(!"abcdefghijklmnopqrstuvwxyz".includes(searchLetter)) {
    console.log("Dat is geen normale letter.\n Zo heeft het geen zin. \n  Ik sluit af.")
    return;
  }
// controle of input 1 character lang is
  let guessLength = false;
  if(letter.length === 1){
   guessLength = true;
  }
  if(guessLength === false) {
    console.log("Zou het lukken om gewoon 1 letter in te voeren?.")
    game(word, guesses);
  }
// Letter toevoegen aan guesses (als lowercase)
  guesses.push(letter.toLowerCase());
// Aantal pogingen tellen
  const attempts = guesses.length + 1;
  console.log(" ========== Poging " + attempts +  " ==========")
// laat zien hoe het woord er tot nu toe uitziet
  console.log("Het te raden woord: " + displayWordSoFar(word, guesses));

  if(isGameWon(word, guesses) === true) {
// als gewonnen => display gewonnen en reset de controle van input om foutmeldingen te voorkomen.
    console.log("Je hebt gewonnen!");
  }

  if(isGameLost(word, guesses) === true) {
// verloren => display verloren
    console.log("Te vaak een verkeerde letter geraden... Je hebt verloren, jammer!");
  } else {
// anders game nog een keer aanroepen
    game(word, guesses);
  }
}

// console.log(`
// __________
// | /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
// |/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
// |       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
// |      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
// |            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
// ===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
// `);

console.log("__________  \n| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗\n|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝\n|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░\n|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░\n|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗\n===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝")

game("javascript", []);
