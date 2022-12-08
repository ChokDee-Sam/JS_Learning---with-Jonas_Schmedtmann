'use strict';


// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
//  FONCTION FLECHEE et SCOPE
//  On va voir que les fonctions fléchées permettent de chercher leur parent
//  Grace à sa plus grande Scope
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------

// Dans ce 1er exemple, on va utiliser le this dans une Method
// Puis on va créer une fonction expression pour appeler encore le this
// Mais comme ce sera un autre enfant, le this sera "Undefined", à cause de son scope

const firstExemple = {
  name: 'Sam',
  year: 1983,

  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);

    const otherCentury = function () {
      console.log(this); //undefined
      // Comme il est Undefined, impossible de faire le Boolean suivant
      // console.log(this.year >=1900 && this.year <= 1999);
    };
    otherCentury();
  },
};
firstExemple.calcAge();

// --------------------------------------------------------------------------

// Dans ce 2eme exemple, on va faire la même chose que dans l'exemple précédent
// Sauf qu'on va créer une sorte de pont, entre le bloc parent et enfant
// afin que le this ne soit pas "Undefined" (donc défini) grace à un Scope plus grand
// C'est une solution pré-ES6

const secondExemple = {
  name: 'Sam',
  year: 1983,

  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);

    // On crée un pont à l'extérieur, qui ira chercher l'info en faisant relai
    // grace à son Scope
    const self = this; //on peut l'appeler 'self' ou 'that'

    const otherCentury = function () {
      console.log(self);
      //   On peut donc utiliser le boolean avec les bonnes infos définies
      //   En utilisant le scope du 'self' et non pas du 'this'
      console.log(self.year >= 1900 && self.year <= 1999);
    };
    otherCentury();
  },
};
secondExemple.calcAge();

// --------------------------------------------------------------------------

// Dans ce 3eme exemple, on va utiliser une fonction fléchée
// Elle ira chercher son parent (même lointain ???)
// C'est une solution ES6

const troisiemeExemple = {
  name: 'Sam',
  year: 1983,

  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);

    const otherCentury = () => {
      console.log(this);
      //   On peut donc utiliser le boolean avec les bonnes infos définies
      //   Grace à la fonction fléchée
      console.log(this.year >= 1900 && this.year <= 1999);
    };
    otherCentury();
  },
};
troisiemeExemple.calcAge();

// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
//  FONCTION FLECHEE et ARGUMENTS
//  On va voir que les fonctions fléchées ne permettent pas de les afficher
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------

// const addFunctionExpression = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// // addFunctionExpression(2, 2);
// console.log(addFunctionExpression(2, 2));
// console.log(addFunctionExpression(2, 2, 2, 2, 2));
// // Affiche uniquement le résultats 2 premiers arguments
// // Mais TOUS LES AUTRES arguments existent dans un array (tableau)

// // --------------------------------------------------------------------------

// const addFunctionArrow = (a, b) => {
//   //        Arguments existe mais ne s'affiche que dans les regular functions
//   //        (fonction expression / Fonction declaration)
//   // console.log(arguments);
//   return a + b;
// };
// console.log(addFunctionArrow(10, 10));
// console.log(addFunctionArrow(10, 10, 10, 10, 10));
// // Affiche uniquement le résultats 2 premiers arguments
// // Mais les arguments n'existent pas en console
// // On obtient un message d'erreur si on souhaite les afficher

// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
//
//