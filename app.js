const prompt = require("prompt-sync")({ sigint: true });
const gameplay = require("./gameplay");

function main() {
    gameplay.initIntro();
    let targetNumber = gameplay.generateRandomNumber();
    let difficulty = gameplay.chooseDifficulty();
    let chances = gameplay.generateNumberOfChances(difficulty);
    while (chances >= 0) {
        gameplay.showUserChancesRemaining(chances);
        let userGuess = prompt("Make a guess: ");
        let guessIsCorrect = gameplay.determineUserGuess(Number(userGuess), targetNumber);
        if (guessIsCorrect) break;
        else chances--;
    }
    if (chances < 0) console.log("You lose!");
}

main();