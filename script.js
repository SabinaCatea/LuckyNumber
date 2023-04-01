"use strict;";

const guessedNumber = document.querySelector(".guessed-number");

const chosenNumber = document.querySelector(".chosen-number");

const checkButton = document.querySelector(".check-button");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
console.log(
  guessedNumber,
  chosenNumber,
  checkButton,
  message,
  score,
  highScore
);
let highScoreNumber = 0;
let scoreNumber = 0;
checkButton.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 20);

  let chosenNumberN = chosenNumber.value;
  guessedNumber.textContent = chosenNumberN;
  console.log(randomNumber);
  if (randomNumber === Number(chosenNumberN)) {
    console.log("you guessed my number");
    message.textContent = "Correct Number!";
    scoreNumber = scoreNumber + 1;
    console.log(scoreNumber);
    score.textContent = `Score: ${scoreNumber}`;
  } else {
    console.log("try again");
  }
});
