"use strict";

//functions
let numberGenerator = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
//function for again button
function clickAgain() {
  numberGenerator();
  computerGuess = numberGenerator();
  userScore = 20;
  console.log("Correct Answer = ", computerGuess);
  document.body.style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".score").value = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = 0;
}
//funtion for game logic
const clickCheck = function () {
  guessInput = document.querySelector(".guess").value;
  guessInput = parseInt(guessInput);
  console.log("User guessed number = ", guessInput, typeof guessInput);
  // document.querySelector(".message").textContent = "Correct Number";
  if (guessInput > 20 || guessInput === 0) {
    document.querySelector(".message").textContent =
      "Guess number between 1-20";
    console.log("Guess number between 1-20");
  } else if (guessInput !== computerGuess) {
    // console.log("if statement executed");
    if (userScore === 1) {
      document.body.style.backgroundColor = "#d30f0f";
      document.querySelector(".message").textContent = "You Lost 🥲";
      document.querySelector(".score").textContent = 0;
    } else if (userScore > 1) {
      userScore--;
      document.querySelector(".score").textContent = userScore;
      console.log("User Score = ", userScore);
      if (guessInput < computerGuess) {
        document.querySelector(".message").textContent =
          "Too low!!! Guess higher number.";
      } else if (guessInput > computerGuess) {
        document.querySelector(".message").textContent =
          "Too high!!! Guess lower number.";
      } else if (!guessInput) {
        document.querySelector(".message").textContent =
          "Please enter valid Number!";
      } else {
        console.log("Unknown Error!!");
      }
    }
  } else if (guessInput === computerGuess) {
    document.querySelector(".message").textContent = "🎉 Correct Answer!!!!";
    // document.querySelector(".highscore").textContent = userScore;
    document.querySelector(".number").textContent = guessInput;
    document.body.style.backgroundColor = "#19a447";
    console.log("Correct Guess!!!", "User Score = ", userScore);
    if (userScore > highScore) {
      highScore = userScore;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else {
    console.log("Unknown Error");
  }
};

//
let computerGuess = numberGenerator();
let userScore = document.querySelector(".score").textContent;
userScore = Number.parseInt(userScore);
let guessInput = 0;
let highScore = 0;
// console.log("Correct Answer = ", computerGuess);
//Store input of check class
document.querySelector(".check").addEventListener("click", clickCheck);
//add functionality in again button
document.querySelector(".again").addEventListener("click", clickAgain);
