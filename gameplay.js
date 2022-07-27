const prompt = require("prompt-sync")({ sigint: true });

function initIntro() {
    console.clear();
    console.log("Welcome to the Number Guessing Game!");
    console.log("\n");
    console.log("I'm thinking of a number between 1 and 100");
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function chooseDifficulty() {
    let difficulty = prompt("Choose a difficulty. Type 'easy' or 'hard': ");
    return difficulty;
}

function generateNumberOfChances(difficulty) {
    if (difficulty === "easy") {
        return 10;
    } else if (difficulty === "hard") {
        return 5;
    } else {
        console.log("Invalid command");
        process.exit(1);
    }
}

function showUserChancesRemaining(num) {
    console.log("\n");
    console.log(`You have ${num} attempts remaining to guess the number`);
}

function determineUserGuess(num, target) { 
    if (num === target) {
        console.log("You win!");
        return true;
    } else if (num > target) {
        console.log("too high");
        return false;
    } else if (num < target) {
        console.log("too low");
        return false;
    } else {
        console.log("ERROR");
        return true;
    }
}



exports.initIntro = initIntro;
exports.generateRandomNumber = generateRandomNumber;
exports.chooseDifficulty = chooseDifficulty;
exports.generateNumberOfChances = generateNumberOfChances;
exports.showUserChancesRemaining = showUserChancesRemaining;
exports.determineUserGuess = determineUserGuess;