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
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

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
// Function initialization
// ---------------------------------------------

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;

  activePlayer = 0;
  playing = true;

  // Reset Big Score
  score0El.textContent = 0;
  score1El.textContent = 0;

  // Reset Current Score
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  //   Hide Dice
  diceEl.classList.add('hidden');

  // Remove Player Winner
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');

  //   Reset background
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

// ---------------------------------------------
// Function Switch Player
// ---------------------------------------------

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0; //affiche zero dans Current
  currentScore = 0; //stock zéro dabs Current
  activePlayer = activePlayer === 0 ? 1 : 0; //change de joueur (= index des futurs tableaux de joueur)
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active'); //toggle le background du joueur actif
};

// ---------------------------------------------
// CLICK EVENT : ROLL DICE
// ---------------------------------------------
// Generer un lancement de dé aléatoire > Afficher l'image du résultat du dé > Afficher le chiffre
// Est-ce le chiffre 1 ?      // Oui = Changer de joueur      // Non = Ajouter le résultat du dé au Current
// Afficher le cumule des chiffres dans le Current
// ---------------------------------------------

bntRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1; // 1. On génère un nombre rond aléatoire entre 1 et 6

    // 2. Afficher visuellement le dé
    diceEl.classList.remove('hidden'); // On affiche l'image du dé en retirant la classe hidden qui le cachait
    diceEl.src = `dice-${dice}.png`; //  On affiche l'image du dé dynamiquement grace à la variable 'dice'

    // 3. On vérifie si le dé est 1
    if (dice !== 1) {
      currentScore += dice; // On STOCK le résultat du dé au score actuel
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // On AFFICHE ce résultat en injectant le score actuel dynamiquement (pour le joueur actuel)
    } else {
      diceEl.classList.add('hidden');
      switchPlayer(); // Changer de joueur actif
    }
  }
});

// ---------------------------------------------
// CLICK EVENT : HOLD
// ---------------------------------------------
// Ajouter le score au joueur actif     // Verifier si le score est >= 100      // Terminer le jeu
// ---------------------------------------------

btnHold.addEventListener('click', function () {
  if (playing) {
    diceEl.classList.add('hidden'); // On retire l'affichage du dé (avant le lancement)
    scores[activePlayer] += currentScore; // Ajouter le score au joueur actif dans le tableau
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer]; //   Affichage du score actuel (total) grace au tableau

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer(); // Changer de joueur actif
    }
  }
});

// ---------------------------------------------
// CLICK EVENT : NEW GAME (reset)
// ---------------------------------------------

btnNew.addEventListener('click', init);
