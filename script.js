"use strict";
/*
// LECTURE 71 AND 72
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = " Correct Number !!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 17;
document.querySelector(".guess").value = 24;

console.log(
  document.querySelector(".number").textContent,
  document.querySelector(".score").textContent
  // document.querySelector(".guess").value;
);

console.log(document.querySelector(".guess").value);
*/

//LECTURE 73: HANDLING CLICK EVENTS
//functions
const numberGenerator = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const clickCheck = function () {
  guessInput = document.querySelector(".guess").value;
  guessInput = parseInt(guessInput);
  console.log("User guessed number = ", guessInput, typeof guessInput);
  // document.querySelector(".message").textContent = "Correct Number";
  if (guessInput !== computerGuess) {
    // console.log("if statement executed");
    userScore = userScore - 1;
    document.querySelector(".score").textContent = userScore;
    console.log("User Score = ", userScore);
    if (guessInput < computerGuess) {
      document.querySelector(".message").textContent =
        "Too low!!! Guess higher number.";
    } else if (guessInput > computerGuess) {
      document.querySelector(".message").textContent =
        "Too high!!! Guess lower number.";
    } else {
      console.log("Unknown Error!!");
    }
  } else if (guessInput === computerGuess) {
    document.querySelector(".message").textContent = "🎉 Correct Answer!!!!";
    document.querySelector(".highscore").textContent = userScore;
    document.querySelector(".number").textContent = guessInput;
    document.body.style.backgroundColor = "#19a447";
    console.log("Correct Guess!!!", "User Score = ", userScore);
  } else {
    console.log("Unknown Error");
  }
};
//
const computerGuess = numberGenerator();
let userScore = document.querySelector(".score").textContent;
userScore = Number.parseInt(userScore);
let guessInput = 0;
// console.log("Correct Answer = ", computerGuess);
//Store input of check class

document.querySelector(".check").addEventListener("click", clickCheck);
//Define Logic to verify user guess is === computerGuess
