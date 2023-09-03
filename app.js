"use strict"

// Get the score elements and buttons
let score1Element = document.querySelector('.score-1');
let score2Element = document.querySelector('.score-2');
let addScoreButtons1 = document.querySelectorAll('.added-score-1 button');
let addScoreButtons2 = document.querySelectorAll('.added-score-2 button');
let resetButton = document.querySelector('.reset');

// Initialize scores
let score1 = 0;
let score2 = 0;

// Function to update the scores and background colors
function updateScores() {
  score1Element.textContent = score1;
  score2Element.textContent = score2;

  // Change background color based on the score values
  score1Element.style.backgroundColor = getBackgroundColor(score1);
  score2Element.style.backgroundColor = getBackgroundColor(score2);
}

// Function to determine background color based on score value
function getBackgroundColor(score) {
  if (score > 0) {
    return 'green';
  } else if (score === 0) {
    return 'yellow';
  } else {
    return 'red';
  }
}

// Add event listeners to score buttons
addScoreButtons1.forEach((button) => {
  button.addEventListener('click', () => {
    const points = parseInt(button.textContent);
    score1 += points;
    updateScores();
  });
});

addScoreButtons2.forEach((button) => {
  button.addEventListener('click', () => {
    const points = parseInt(button.textContent);
    score2 += points;
    updateScores();
  });
});

// Add event listener to reset button
resetButton.addEventListener('click', () => {
  score1 = 0;
  score2 = 0;
  updateScores();
});

// Initial update of scores
updateScores();
