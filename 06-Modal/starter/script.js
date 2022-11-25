'use strict';

// On crée des variables contenant le chemin d'un element
//      ici, une classe à chaque fois
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// On crée une variable contenant une fonction
//  et celle-ci AJOUTERA une classe CSS
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// On crée une variable contenant une fonction
//  et celle-ci RETIRERA une classe CSS
const OpenModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// On crée une boucle afin que les multiples boutons aient le meme click event
//  Et dans celui-ci, on demandera une fonction
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', OpenModal);

// Enfin, on crée des Click Events ayant une fonction specifiquement créée
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// On va créer maintenant un Keyboard Event
//      et on va afficher les informations de la key
document.addEventListener('keydown', function (e) {
  console.log(e.key);

//   SI la key est echap ET que modal ne contient pas telle classe
//      on call la fonction qui ferme tout
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
