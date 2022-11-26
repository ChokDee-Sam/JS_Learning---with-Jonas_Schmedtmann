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

// Players
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')

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

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// ---------------------------------------------
// ---------------------------------------------

// Création d'une fonction lors d'un Click Event
bntRoll.addEventListener('click', function () {
  // 1. On génère un nombre rond aléatoire entre 1 et 6
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Afficher le dé
  //   On retire la classe hidden
  diceEl.classList.remove('hidden');

  //   On change la source de l'image du dé
  //      en générant un lien dynamique selon le dé
  diceEl.src = `dice-${dice}.png`;

  //   Et on assigne le résultat aléatoire du dé
  //   qui sera affiché et contenu dans une var
  score0El.textContent = dice;

  // 3. On vérifie si le dé est 1
//   Si le dé est autre chose que 1
  if (dice !== 1) {
    // On ajoute le résultat du dé au score actuel
    currentScore += dice;
    // On affiche ce résultat en injectant le score actuel
    //      de manière dynamique au joueur actif actuellement
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    //   Sinon, si le résultat est 1
  } else {
    // On affiche le résultat actuel à zéro
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // On remet le score actuel pour effectuer les calculs à zéro
    currentScore = 0;
    // On change de joueur actif
    activePlayer = activePlayer === 0 ? 1 : 0;
    // On fait un Toggle d'une class
    // Sur chaque player
    // De ce fait, elle s'affichera qu'à un seul endroit à la fois
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
  }
});
