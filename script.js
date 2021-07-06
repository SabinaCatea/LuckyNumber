"use strict";

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let checkNumber = Number(document.querySelector(".guess").value);
let score = 20;
let highscore = 0;

document.querySelector(".checkButton").addEventListener("click", function () {
  checkNumber = document.querySelector(".guess").value;
  console.log(checkNumber, randomNumber);
  if (!checkNumber) {
    document.querySelector(".message").textContent =
      "🔢 Please choose a number!";
  } else if (checkNumber > randomNumber) {
    document.querySelector(".message").textContent = "📈 Too high!";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (checkNumber < randomNumber) {
    document.querySelector(".message").textContent = "📉 Too low!";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (checkNumber == randomNumber) {
    document.querySelector(".message").textContent =
      "🏆 Great, this is the correct number!";
    document.querySelector("body").style.backgroundColor = "rgb(76, 197, 52)";
    document.querySelector(".number").textContent = randomNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  document.querySelector(".tryAgain").addEventListener("click", function () {
    document.querySelector(".message").textContent = "🎬 Start guessing...";
    document.querySelector(".score").textContent = 20;

    document.querySelector("body").style.backgroundColor =
      "rgba(220, 80, 180, 0.78)";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
  });
});
