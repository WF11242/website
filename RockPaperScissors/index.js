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

playGame (); 