"use strict";

const guess = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const bodyEl = document.getElementById("body");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const number = document.querySelector(".number");
const againBtn = document.querySelector(".again");

let randomValue = 0;

const luckyNumber = () => {
  randomValue = Math.trunc(Math.random() * 20) + 1;
  return randomValue;
};

luckyNumber();
console.log(randomValue);
const writeMessage = (display) => {
  message.textContent = display;
};

checkBtn.addEventListener("click", () => {
  let inputNumber = Number(guess.value);

  if (!inputNumber) {
    writeMessage(`⛔ Not a number!`);
    return;
  }

  if (inputNumber === randomValue) {
    writeMessage(`You found it!`);
    bodyEl.style.backgroundColor = "#60b347";
    number.textContent = randomValue;
  } else {
    writeMessage(`Try again!`);
    Number(score.textContent--);
    return;
  }

  if (score.textContent > highscore.textContent) {
    highscore.textContent = score.textContent;
  }
});

againBtn.addEventListener("click", () => {
  score.textContent = 20;
  bodyEl.style.backgroundColor = "#222";
  writeMessage(`Start guessing...`);
  number.textContent = "?";
  luckyNumber();
  console.log(randomValue);
});
