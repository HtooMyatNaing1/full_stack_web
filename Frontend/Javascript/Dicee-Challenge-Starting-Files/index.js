// The following code is getting a random dice for each refresh
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

randomDice1 = "images/dice"+randomNumber1+".png";
randomDice2 = "images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src", randomDice1);
document.querySelector(".img2").setAttribute("src", randomDice2);

// The following code is changing the title h1 text
var playerOneWins = "🚩 Player 1 Wins!";
var playerTwoWins = "Player 2 Wins! 🚩";
var drawCase = "Draw!";
var message;

if(randomNumber1>randomNumber2){
    message = playerOneWins;
}else if(randomNumber1<randomNumber2){
    message = playerTwoWins;
}else{
    message = drawCase;
}

document.querySelector(".container h1").textContent = message;

// This code is just a step by step beginner code and there's a lot to be improved with the logic.
