'use strict';

// -------------------------------------------------------
// --------- Game Logic ---------
// -------------------------------------------------------

// On implémente un variable aléatoire entre 1 et 20 (19 en réalité)
// On demande à ne pas mettre de chiffres après la virgule
// Et on ajoute +1 pour que le chiffre 20 soit pris en compte
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

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
    document.querySelector('main').style.backgroundColor = 'teal';
    document.querySelector('main').style.transition = '.3s';
    document.querySelector('.number').style.width = '100vw';
    document.querySelector('.number').style.transition = '.9s';
    document.querySelector('.message').textContent = '🍕 Correct Number !';

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
