const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost } = require("./gamelogic");

console.clear(); // beginnen met een schone terminal

function game(word, guesses) {
  if (guesses.length !== 0) {
      const guessesSoFar = guesses.toString();
//guesses als string displayen omdat anders niet mooi in terminal (multiple lines)
    console.log("Deze letters heb je al geprobeerd: ", guessesSoFar);
  }

  const letter = question("Raad een letter: ");
  // voorkomen van zelfde letter nog eens raden.
  if(guesses.includes(letter)){
      console.log("Die letter had je al.")
      game(word, guesses);
  }
  const allowedCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
// controle of input 1 character lang is => anders boos worden
  if(letter.length === 1 && allowedCharacters.includes(letter)) {
// voeg de geraden letter toe aan de array met guesses,
// waarbij letter is omgezet naar lowercase.
  guesses.push(letter.toLowerCase());
    } else { //  indien meerdere letters ingevoerd, of niet alfabet afstraffen! ;P
        const failGraphic = "   _______________                        |*\\_/*|________\n" +
        "  |  ___________  |     .-.     .-.      ||_/-\\_|______  |\n" +
        "  | |           | |    .****. .****.     | |           | |\n" +
        "  | |   0   0   | |    .*****.*****.     | |   0   0   | |\n" +
        "  | |     -     | |     .*********.      | |     -     | |\n" +
        "  | |   \\___/   | |      .*******.       | |   \\___/   | |\n" +
        "  | |___     ___| |       .*****.        | |___________| |\n" +
        "  |_____|\\_/|_____|        .***.         |_______________|\n" +
        "    _|__|/ \\|_|_.............*.............._|________|_\n" +
        "   / ********** \\                          / ********** \\\n" +
        " /  ************  \\                      /  ************  \\\n" +
        "--------------------                    --------------------";
        console.clear(); // lege terminal bij deze faal
        console.log(failGraphic);
        console.log(" You had one task..1 letter invoeren. Hoe moeilijk kan het zijn?");
        console.log(" Doei doei. We beginnen voor straf HELEMAAL OPNIEUW!");
        game(word, []);
      }

  console.clear(); // elke poging met lege terminal beginnen
    const attempts = guesses.length + 1; //pogingen tellen
    console.log(" ========== Poging " + attempts +  " ==========")
// laat zien hoe het woord er tot nu toe uitziet
    console.log("Het te raden woord: " + displayWordSoFar(word, guesses));

// als gewonnen => display gewonnen
// verloren => display verloren
// anders game nog een keer aanroepen
  if(isGameWon(word, guesses)) {
    console.log("Je hebt gewonnen!");
  } else if(isGameLost(word, guesses)) {
    console.log("Te vaak een verkeerde letter geraden... Je hebt verloren, jammer!");
  } else  {
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
