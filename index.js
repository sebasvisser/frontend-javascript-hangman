const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost } = require("./gamelogic");

function game(word, guesses) {
  if (guesses.length != 0) {
    console.log("Deze letters heb je al geprobeerd: ", guesses);
  }

  const letter = question("Raad een letter: ");
// controle of input 1 character lang is => anders boos worden
  if(letter.length === 1) {
// voeg de geraden letter toe aan de array met guesses,
// waarbij letter is omgezet naar lowercase.
  guesses.push(letter.toLowerCase());
    } else { //  indien meerdere letters ingevoerd, afstraffen! ;P
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
        console.log(failGraphic);
        console.log(" You had one task..1 letter invoeren. Hoe moeilijk kan het zijn?");
        console.log(" Doeidoei. We beginnen voor straf HELEMAAL OPNIEUW!");
        game(word, []);
      }

  const attempts = guesses.length + 1; //pogingen tellen
  console.log(" ========== Poging " + attempts +  " ==========")
// laat zien hoe het woord er tot nu toe uitziet
  console.log("Het te raden woord: " + displayWordSoFar(word, guesses));

// als gewonnen => display gewonnen
// verloren => display verloren
// anders game nog een keer aanroepen
  if(isGameWon(word, guesses)) {
    console.log("Je hebt gewonnen!");
    return;
  }
  if(isGameLost(word, guesses)){
    console.log("Te vaak een verkeerde letter geraden... Je hebt verloren, jammer!");
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
