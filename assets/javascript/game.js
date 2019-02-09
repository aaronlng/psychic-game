//Variables for the game
var wins = 0;
var losses = 0;
var left = 9;
var soFar = [];
var computerLetter;

//variables for the reference in the body
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var leftText = document.getElementById("left-text");
var sofarText = document.getElementById("sofar-text");
    
//display the content
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
leftText.textContent = "Guesses Left: " + left;
sofarText.textContent = "Your Guesses so Far: " + soFar;

//initialize the game
initialize();

function initialize() {
    var computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
    computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerLetter);


    checkIfCorrect();

    function checkIfCorrect() {

        document.onkeypress = function(event) {
            var userGuess = event.key;
            if (userGuess === computerLetter) {
                alert("you win!");
                wins = wins +1;
                document.getElementById("wins-text").innerHTML = "Wins: " + wins;

                reset();
            } else {
                left = left - 1;
                document.getElementById("left-text").innerHTML = "Guesses Left: " + left;
                soFar.push(userGuess);
                document.getElementById("sofar-text").innerHTML = "Your Guesses so Far: " + soFar;

                noGuessesLeft();
            }
        }
    };

    function reset() {
        left = 9;
        soFar = [];
        document.getElementById("left-text").innerHTML = "Guesses Left: " + left;
        document.getElementById("sofar-text").innerHTML = "Your Guesses so Far: " + soFar;
        initialize();
    }

    function noGuessesLeft() {
        if (left === 0) {
            alert("You Lose.");
            losses = losses + 1;
            document.getElementById("losses-text").innerHTML = "Losses: " + losses;

            reset();
        } else {
            checkIfCorrect();
        }
    }
}






