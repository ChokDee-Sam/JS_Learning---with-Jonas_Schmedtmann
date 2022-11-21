'use strict';

// -------------------------------------------------------
// --------- Game Logic ---------
// -------------------------------------------------------

// On implémente un variable aléatoire entre 1 et 20 (19 en réalité)
// On demande à ne pas mettre de chiffres après la virgule
// Et on ajoute +1 pour que le chiffre 20 soit pris en compte
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

// On affiche
console.log(secretNumber);

// Event au click
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Si la variable guess n'existe pas (car aucun input)
  if (!guess) {
    document.querySelector('.message').textContent =
      '⛔ No Number, try again...';

    // Si l'utilisateur entre le bon input
  } else if (guess === secretNumber) {
    // Ajout / modification de CSS

    document.querySelector('.message').textContent = '🍕 Correct Number !';

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '100vw';
    document.querySelector('.number').style.transition = '.9s';

    document.querySelector('main').style.backgroundColor = 'teal';
    document.querySelector('main').style.transition = '.3s';

    // HighScore
    console.log(`score : ${score}`);
    console.log(`highscore : ${highscore}`);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // Si input trop haut
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😒 You lost this game !';
      document.querySelector('.score').textContent = 0;
    }

    // Si input trop bas
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😒 You lost this game !';
      document.querySelector('.score').textContent = 0;
    }
  }

  // La simplicité ?
  // if (score <= 0) {
  //   document.querySelector('.message').textContent = '😒 You lost this game !';
  //   document.querySelector('.score').textContent = 0;
  //   score = 0;
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  console.log(`The New Highscore Challenge : ${highscore}`);

  // Secret Number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(`The New Secret Number  : ${secretNumber}`);

  // Score
  score = 20; // variable
  document.querySelector('.score').textContent = score; // variable affichée

  // Message
  document.querySelector('.message').textContent = 'Start guessing';

  // Input Guess
  document.querySelector('input.guess').value = '';

  // Le Background
  document.querySelector('main').style.backgroundColor = '#222';
  document.querySelector('main').style.transition = '.3s';

  // L'emplacement et la visibilité du Secret Number
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.transition = '.9s';
});
