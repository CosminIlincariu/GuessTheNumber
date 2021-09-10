"use strict";

const guess = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const bodyEl = document.querySelector("body");
const highscoreLabel = document.querySelector(".highscore");
const number = document.querySelector(".number");
const againBtn = document.querySelector(".again");

let randomValue = 0;
let score = 20;
let highscore = 0;

const luckyNumber = () => {
  randomValue = Math.trunc(Math.random() * 20) + 1;
  return randomValue;
};

const displayMessage = (display) => {
  message.textContent = display;
};

luckyNumber();
console.log(randomValue);

checkBtn.addEventListener("click", () => {
  const inputNumber = Number(document.querySelector(".guess").value);

  if (!inputNumber || inputNumber < 0 || inputNumber > 20) {
    displayMessage(`⛔ Choose a number between 1 and 20`);
    return;
  }

  if (inputNumber === randomValue) {
    displayMessage(`🎉 You found it!`);
    bodyEl.style.backgroundColor = "#60b347";
    number.textContent = randomValue;
    guess.disabled = true;
    checkBtn.disabled = true;
    highscoreLabel.textContent =
      score > highscore ? (highscore = score) : (highscore = highscore);
  } else if (inputNumber !== randomValue) {
    inputNumber > randomValue
      ? displayMessage(`😢 Too high`)
      : displayMessage(`😢 Too low`);

    score--;
    document.querySelector(".score").textContent = score;
  }

  if (score === 0) {
    displayMessage("You lost!");
    checkBtn.disabled = true;
    guess.disabled = true;
    bodyEl.style.backgroundColor = "#8b0000";
    return;
  }
});

againBtn.addEventListener("click", () => {
  guess.disabled = false;
  checkBtn.disabled = false;
  score = 20;
  document.querySelector(".score").textContent = score;
  bodyEl.style.backgroundColor = "#222";
  displayMessage(`Start guessing...`);
  number.textContent = "?";
  luckyNumber();
  console.log(randomValue);
});
