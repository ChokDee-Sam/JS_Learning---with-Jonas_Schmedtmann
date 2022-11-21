'use strict';

// -------------------------------------------------------
// --------- Selecting and Manipulating Elements ---------
// -------------------------------------------------------

// Pointer et afficher un contenu existant
console.log(document.querySelector('.message').textContent);

// Modifier un contenu
// document.querySelector('.message').textContent = '🍕 Correct Number';

// Afficher le contenu modifié
console.log(document.querySelector('.message').textContent);

// Pointer et afficher un contenu existant
document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';

// Dans un Input, on utilise .value
// document.querySelector('.guess').value = '0';
// console.log(document.querySelector('.guess').value);

// 
// --------------------------------
// --------- Click Events ---------
// --------------------------------

// Ici, on crée une fonction localement, qui sera call quand il y aura l'event
// Celle ci créera une variable contenant l'input
// Et cet input passera de String à Number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number, try again...';
}
});
