var wins = 0; 
var ties = 0; 
var losses = 0; 


var gameOptions = ["R", "P", "S"]; 

var playGame = function() {
    var playerChoice = window.prompt("Pick R, P, or S:");

if (!playerChoice) {
    return; 
}

playerChoice = playerChoice.toLowerCase(); 
}; 

var index = Math.floor(Math.random() * gameOptions.length); 
var computerChoice = gameOptions[index]; 

window.alert("The computer picked " + computerChoice)

if (playerChoice === computerChoice) {
    ties++; 
    window.alert("It's a tie! Try again."); 
}

playGame (); 