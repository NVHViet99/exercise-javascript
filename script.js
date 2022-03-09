'use strict';

let updatevalue;
let highscore = document.querySelector('.highscore').textContent;

// function deduct scores after checked
const deductScore = function () {
  const value = document.querySelector('.score').textContent;
  updatevalue = +value - 1;
  document.querySelector('.score').textContent = updatevalue;
  return updatevalue;
};

// function get high score
const getHighScore = function () {
  if (updatevalue > highscore) {
    highscore = updatevalue;
    document.querySelector('.highscore').textContent = +highscore;
  }
};

// random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//event click to check the score
document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;

  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No number! ';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!';
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;

    getHighScore();
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 too high';
    deductScore();
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 too low';
    deductScore();
  }
});

// event click to play again the game
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.body.style.backgroundColor = '#222';

  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
