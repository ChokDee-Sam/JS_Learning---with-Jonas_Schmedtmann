'use strict';

// Pointer et afficher un contenu existant
console.log(document.querySelector('.message').textContent);

// Modifier un contenu
document.querySelector('.message').textContent = '🍕 Correct Number';

// Afficher le contenu modifié
console.log(document.querySelector('.message').textContent);

// Pointer et afficher un contenu existant
document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';

// Dans un Input, on utilise .value
document.querySelector('.guess').value = '23';
console.log(document.querySelector('.guess').value);
