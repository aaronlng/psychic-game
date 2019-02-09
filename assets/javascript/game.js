//defining array for computer choices
var computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

//variables to hold values of wins, losses, attempts, and guesses so far.
var wins = 0;
var losses = 0;
var gleft = 9;

//variables for the reference in the body
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var gleftText = document.getElementById("gleft-text");
var gsofarText = document.getElementById("gsofar-text");

//computer guess onload
// document.body.onload = function () {
    
     //display the content
     winsText.textContent = "Wins: " + wins;
     lossesText.textContent = "Losses: " + losses;
     gleftText.textContent = "Guesses Left: " + gleft;
     gsofarText.textContent = "Your Guesses so far: ";
// };

//defining computer selection
var computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function(event) {

    //determining user selection
    var userSelect = event.key;

    //determining if user guessed correct key
    if (userSelect === computerSelection) {
        wins++;
    }
    else {
        losses++;
        gleft--;
    }
};




