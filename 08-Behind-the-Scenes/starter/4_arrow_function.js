'use strict';

// --------------------------------------------------------------------------
// Le piège de la Fonction Flêchée + this : valeur inexistante
// --------------------------------------------------------------------------

// --- On sait que, lorsqu'on crée une fonction flêchée, le 'this' est inexistant dans sa Scope
// ------ De ce fait, il remonte chercher l'information du 'this' chez le parent (ici Global Scope)

const piege_1 = {
  name: 'Sam',
  year: 1983,

  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.name}`); // n'affiche pas le 'this.name' !!
  },
};

piege_1.greet();
console.log(this.name); // rien ne s'affiche dans la console (juste un espace vide)

// --------------------------------------------------------------------------
// Le piège de la Fonction Flêchée + this + 'var'
// --------------------------------------------------------------------------

// --- En activant cette ligne
// ------ Un 'this' d'une fonction flêchée trouvera cette info Parent et l'utilisera
// ------ Ce qui créera un bug chez nous, car on ne voulait pas cette Scope
// ------ Nous savons qu'une 'var' créera sa propriété sur l'Objet Global (Window)
// var name = 'Sam';

const piege_2 = {
  name: 'Sam',
  year: 1983,

  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },

  greet: () => console.log(`Hey ${this.name}`), // n'affiche pas le 'this.name' !!
  // SAUF si on active la variable ligne 33
};

piege_2.greet();
console.log(this.name); // rien ne s'affiche dans la console (juste un espace vide)
// SAUF si on active la variable ligne 33

// --------------------------------------------------------------------------
// La Solution pour éviter ces pièges
// --------------------------------------------------------------------------

// --- Ne pas utiliser de fonction flêchée en tant que Method
// ------ Utiliser une fonction régulière

const piege_3 = {
  name: 'Joe',
  year: 42,

  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },

  greet: function () {
    console.log(this);
    console.log(`Hey ${this.name}`);
  },
};

piege_3.greet();

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
// --------------------------------------------------------------------------
// Bonnes pratiques
// --------------------------------------------------------------------------

// Ne JAMAIS utiliser une fonction flêchée (Method) dans un objet
// En d'autre termes : pas de fonction flêchée pour créer une Method !!

// --- Et pour éviter les erreurs : ne pas utiliser de this dans une Method particulière
// ------ Parce que si on a cette règle de ne jamais utiliser de fonction flêchée en tant que
// ------ Method, alors on aura pas à penser à quel type de fonction utiliser

// --- Toujours utiliser une fonction d'expression normale
// ------ pour éviter de produire ce genre d'erreur

// --- Passer de ça : fonction flêchée
//                greet: () => console.log(`Hey ${this.name}`)

// À ça : fonction régulière
//                greet: function () {
//                  console.log(`Hey ${this.name}`)
//                  }

// --- Ne pas utiliser de 'var'

// Quelle que soit la fonction (flêchée, )
// 5:48 secondes : à complèter...
