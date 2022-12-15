'use strict';

// This est une variable créée selon chaque contexte d'éxécution
// ------ et donc, selon chaque fonction

// Le contexte d'éxécution (Execution Context) a 3 composants :
// - L'environnement de variable
// - La Scope Chain
// - Le THIS

// --- Le THIS prend la valeur du "propriétaire de la fonction"
// ------ dans laquelle il est utilisé
//  Grossièrement, on peut dire qu'il 'pointe' vers le propriétaire de fonction

// --- De ce fait, il n'est pas Statique, mais Dynamique (car contextuel)

// -------------------------------------------------
// Les différentes manières d'appeler une fonction
// -------------------------------------------------

// 1 - Method (fonction attachée à un objet)
// ------ this = L'Objet qui call la Method

const sam = {
  name: 'Sam',
  year: 1983,
  calcAge: function () {
    // Fonction dans un objet = Method
    return 2022 - this.year; // prend la valeur de 'sam.year'
  },
};
console.log(sam.calcAge());

// -------------------------------------------------

// 2 - Simple Function Call
// ------ this = undefined  (en mode strict ! Sinon pointe vers Window)

// -------------------------------------------------

// 3 - Fonction Flêchée
// ------ this = lexical this
// ------ C'est le this de la Fonction Environnante (parent)
// ------ car une Fonction Flêchée n'a pas son propre "this"

// -------------------------------------------------

// 4 - Event Listener
// ------ this = Le DOM Element auquel le Handler est attaché

// -------------------------------------------------

// 5 - new, call, apply, bind
// ------ Plus loin dans les cours...

// -------------------------------------------------
// Ce que le THIS n'est pas
// -------------------------------------------------

// this ne pointe pas vers la fonction elle-même dans laquelle nous l'appelons
// Ainsi que le "Variable Environment" de cette fonction