//Variables for the game

//The array of options for the computer to choose from
var computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

//Number of guesses left that will decrease every guess
var left = 9;

//This array will hold whatever letters are guessed
var soFar = [];

//This variable will contain the random letter selected by the computer
var computerLetter = null;

//counter for wins/losses
var wins = 0;
var losses = 0;

//creating the functions to updateGuesses, updateGuessesLeft, and updateGuessesSoFar
var updateGuessesLeft = function() {
    document.querySelector("#left-text").innerHTML = left;
};

var updateLetterToGuess = function() {
    computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

var updateGuessesSoFar = function() {
    document.querySelector("#sofar-text").innerHTML = soFar.join(", ");
};

//Function to be called when we reset everything
var reset = function() {
    left = 9;
    soFar = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
};

//Execute on page load.
updateLetterToGuess();
updateGuessesLeft();
// console.log(computerLetter);

//Function to capture the keyboard clicks
document.onkeydown = function(event) {
    
    left--;
    var letter = String.fromCharCode(event.which).toLowerCase();
    soFar.push(letter);

    //Run the update functions
    updateGuessesLeft();
    updateGuessesSoFar();

    //Check for a match
    if (letter === computerLetter) {
        wins++;
        document.querySelector("#wins-text").innerHTML = wins;
        alert("You guessed correctly. You win!");
        reset();
        // console.log(computerLetter);
    }

    if (left === 0) {
        losses++;
        document.querySelector("#losses-text").innerHTML = losses;
        alert("You are out of guesses. You Lose!");
        reset();
        // console.log(computerLetter);        
    }
};