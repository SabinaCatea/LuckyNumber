"use strict;";

const guessedNumber = document.querySelector(".guessed-number");

const chosenNumber = document.querySelector(".chosen-number");

const checkButton = document.querySelector(".check-button");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
const again = document.querySelector(".again");
console.log(
  guessedNumber,
  chosenNumber,
  checkButton,
  message,
  score,
  highScore
);
guessedNumber.textContent = "?";
chosenNumber.textContent = " ";
let highScoreNumber = 0;
let scoreNumber = 20;

let randomNumber = Math.floor(Math.random() * 20 + 1);

console.log(randomNumber);

checkButton.addEventListener("click", function () {
  let chosenNumberN = Number(chosenNumber.value);

  //console.log(chosenNumberN);
  if (!chosenNumberN) {
    message.textContent = "No number!";
  }
  //console.log(randomNumber);

  if (randomNumber === chosenNumberN) {
    guessedNumber.textContent = randomNumber;
    if (scoreNumber > 0) {
      message.textContent = "Correct Number!";
      //  console.log(scoreNumber);
      score.textContent = `Score: ${scoreNumber}`;
      console.log(highScoreNumber, scoreNumber);

      if (highScoreNumber < scoreNumber) {
        highScoreNumber = scoreNumber;
        highScore.textContent = `HighScore: ${highScoreNumber}`;
        console.log(highScoreNumber, scoreNumber);
      } else {
        highScore.textContent = `HighScore: ${scoreNumber}`;
      }
    }
  } else {
    if (scoreNumber > 0) {
      message.textContent = "Try again!";
      scoreNumber--;
      score.textContent = `Score: ${scoreNumber}`;
    }
  }

  //console.log(scoreNumber, highScoreNumber);
});

again.addEventListener("click", function () {
  guessedNumber.textContent = "?";
  chosenNumber.value = "";
  message.textContent = "Start guessing...";
  score.textContent = "Score: 20";
  scoreNumber = 20;
  randomNumber = Math.floor(Math.random() * 20 + 1);
  console.log(randomNumber);
});
