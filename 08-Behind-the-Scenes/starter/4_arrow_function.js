'use strict';

// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
//       LES 2 GRANDS PIÈGES DU 'THIS'    + LA SOLUTION
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// REGLE : Une fonction flêchée ne possède pas son propre 'this'
//         De ce fait, le contenu du 'this' sera vide
//         (même s'il cherchera l'info dans une scope parent)
// --------------------------------------------------------------------------
// 
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
    console.log(`Hey ${this.name}`); // n'affiche pas le 'this.name'
  },
};

piege_1.greet();
console.log(`Voici le this.name : ${this.name}`); // rien ne s'affiche dans la console (juste un espace vide)

// --------------------------------------------------------------------------
// Le piège de la Fonction Flêchée + this + 'var' ayant le même nom
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// REGLE : Une fonction flêchée ne possède pas son propre 'this'
//         De ce fait, le contenu du 'this' sera vide
//         Il va remonter chercher l'information chez un parent avec 'var' portant le même nom
// --------------------------------------------------------------------------
// 
// --- En activant la ligne 53,
// ------ Un 'this' d'une fonction flêchée trouvera cette info Parent 'var' et l'utilisera
// ------ De ce fait, tous les lignes avec un 'this' qui pointent vers 'rien' changeront
// ------ Ce qui créera un bug chez nous, car on ne voulait pas de cette Scope avec Var
// ------ Nous savons qu'une 'var' créera sa propriété sur l'Objet Global (Window)

// var name = 'Sam'; // attention au cache du navigateur pour revenir à l'état initial
const piege_2 = {
  name: 'Sam',
  year: 1983,

  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },

  greet: () => console.log(`Hey ${this.name}`), // n'affiche pas le 'this.name' !!
  // SAUF si on active la variable ligne 53
};

piege_2.greet();
console.log(this.name); // rien ne s'affiche dans la console (juste un espace vide)
// SAUF si on active la variable ligne 53

// --------------------------------------------------------------------------
// La Solution pour éviter ces pièges
// --------------------------------------------------------------------------

// --- Ne pas utiliser de fonction flêchée en tant que Method
// ------ Utiliser une fonction régulière

const piege_3 = {
  name: 'Joe',
  year: 1942,

  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },

  greet: function () {
    console.log(this);
    console.log(`Hey ${this.name}`);
  },
};

piege_3.calcAge();
piege_3.greet();

// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
//      GÉRER LE 'THIS' dans une FONCTION, elle-même dans une METHOD
//              OBJET > FONCTION (METHOD) > FONCTION > THIS
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// REGLE : Dans une méthode, si on crée une fonction et qu'on l'appelle : THIS = undefined
//          Il faudra :
//            - soit créer "artificiellement" un parent contenant l'information pour le 'this'
//            - soit créer une fonction flêchée qui remontera chercher un parent pour le 'this'
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------

// Dans ce 1er exemple, on va utiliser le 'this' dans une Method
// Puis, dans la Method, on va créer une fonction expression pour "encore" appeler le 'this'
// Mais comme ce sera un autre enfant, le 'this' sera "Undefined", à cause de son scope
// Grossièrement, il faut remonter de 2 parents pour accéder au contenu du 'this'

const firstExemple = {
  name: 'Method > Fonction Expression > this : Undefined',
  year: 1983,

  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year); // Affiche l'âge correctement

    const otherCentury = function () {
      console.log(this); //undefined
      // Comme il est Undefined, impossible de faire le Boolean suivant
      // console.log(this.year >=1900 && this.year <= 1999);
    };
    otherCentury();
  },
};
firstExemple.calcAge(); // va afficher le this (const) + l'age + 'Undefined'

// --------------------------------------------------------------------------
// SOLUTION PRÉ ES6 :
// Créer un pont avec 'self' ou 'that'
// --------------------------------------------------------------------------

// Dans ce 2eme exemple, on va faire la même chose que dans l'exemple précédent
// Sauf qu'on va créer une sorte de pont, entre le bloc parent et enfant
// afin que le this ne soit pas "Undefined", grace à un Scope plus grand
// C'est une solution pré-ES6 ()

const secondExemple = {
  name: 'Pré ES6 : Self ou That',
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
      //   En utilisant le scope du parent avec 'self' (et non pas 'this')
      console.log(self.year >= 1900 && self.year <= 1999);
    };
    otherCentury();
  },
};
secondExemple.calcAge();

// --------------------------------------------------------------------------
// SOLUTION MODERNE ES6 :
// La fonction flêchée n'a pas son propre 'this'
// Elle va donc remonter chercher l'info jusqu'à une Scope Parent
// --------------------------------------------------------------------------

// Donc, une fonction flêchée héritera toujours du 'this' d'une Scope Parent

const troisiemeExemple = {
  name: 'ES6 : la fonction flêchée',
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
//  FONCTION EXPRESSION / DECLARATION et ARGUMENTS
//  Permet de stocker des arguments supplémentaires (sous forme de tableaux)
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------

const addFunctionExpression = function (a, b) {
  console.log(arguments); // les arguments 'existent' sous forme de tableau
  return a + b;
};

// Affiche uniquement le résultats 2 premiers arguments
console.log(addFunctionExpression(2, 2));
// Mais TOUS LES AUTRES arguments existent dans un array (tableau)
console.log(addFunctionExpression(2, 2, 2, 2, 2));

// --------------------------------------------------------------------------

const addFunctionArrow = (a, b) => {
  // Arguments 'inexistants' en fonction flêchée 
  // console.log(arguments); // erreur 'is not defined'
  return a + b;
};
console.log(addFunctionArrow(10, 10));
console.log(addFunctionArrow(10, 10, 10, 10, 10));
// Affiche uniquement le résultats 2 premiers arguments
// Mais les arguments n'existent pas en console
// On obtient un message d'erreur si on souhaite les afficher

// --------------------------------------------------------------------------
// Bonnes pratiques
// --------------------------------------------------------------------------

// // --- Connaitre exactement les différents types de fonctions (par rapport au this)
// // ------ afin de déterminer celle qui sera la plus adaptée au besoin / contexte

// // Ne JAMAIS utiliser une fonction flêchée (Method) dans un objet (sauf si besoin particulier??)
// // En d'autre termes : pas de fonction flêchée pour créer une Method !!

// // --- Toujours utiliser une fonction d'expression régulière
// // ------ pour éviter de produire ce genre d'erreur

// // --- Ne pas utiliser de 'var'
