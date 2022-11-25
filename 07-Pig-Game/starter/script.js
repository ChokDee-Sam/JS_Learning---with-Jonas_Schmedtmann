'use strict';

// ---------------------------------------------
// First Steps
// ---------------------------------------------

// use rolls dice
// Generate Random Dice Roll > Show the Dice image > Display the dice roll
// is it a 1 ?
// Yes = Switch Player
// No = Add dice roll to current score  >   Display New Score

// ---------------------------------------------
// Selecting Elements : Variables
// ---------------------------------------------

// Scores
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');

// Current Scores
let currentScore0El = document.getElementById('current--0');
let currentScore1El = document.getElementById('current--1');

// Show Image : Dice Number
let diceEl = document.querySelector('.dice');

// 3 Buttons
const bntRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

// ---------------------------------------------
// Starting conditions
// ---------------------------------------------

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// ---------------------------------------------
// ---------------------------------------------

bntRoll.addEventListener('click', function () {
  // 1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  score0El.textContent = dice;

  // 3. Check for rolled 1 : if true,
  if (dice !== 1) {
    // add dice to the current score
    currentScore += dice;
    currentScore0El.textContent = currentScore; // CHANGER LATER

    // switch to next player
  } else {
  }
});
