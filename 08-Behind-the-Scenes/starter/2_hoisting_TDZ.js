'use strict';

// let et const sont dans un TDZ
// du début de la Scope. jusqu'à leur déclaration

console.log(me); // cette 'var' est declaré après, elle sera donc 'Undefined'
// console.log(job); // erreur, car 'let'
// console.log(year); // erreur, car 'const'

var me = 'Sam';
let job = 'Developer React and TypeScript';
const year = 1983;

// -------------------------------------------------
// Functions  :  Déclarative - Expressive - Flêchée
// -------------------------------------------------

// --- La seule manière d'appeler une fonction avant sa déclaration
// ------ c'est d'utiliser une fonction Déclarative

console.log(addDeclarative(2, 3)); // OK (car pas dans une variable)
// console.log(addExpressive(2, 3)); // erreur d'initialisation (car LET)
// console.log(addFlechee(2, 3)); // erreur d'initialisation (car CONST)

// --- Cette fonction est Déclarative
// ------ elle sera donc disponible
function addDeclarative(a, b) {
  return a + b;
}

// --- Cette fonction est créée avec une Const
// ------ elle est donc dans une TDZ jusqu'à son initialisation
let addExpressive = function (a, b) {
  return a + b;
};

// --- Cette fonction est également créée avec une Const
// ------ elle est donc dans une TDZ jusqu'à son initialisation
const addFlechee = (a, b) => a + b;

// -------------------------------------------------
// Fonctions    :   avec Var
// -------------------------------------------------

// Avant son initialisation, Var existera mais sera 'Undefined'
// De ce fait, l'erreur dira que ce n'est pas une fonction
// Ce qui reviendrait à écrire      undefined(5,5)

// console.log(addFlechee2(5,5)); // erreur 'is not a function'
var addExpressive2 = function (a, b) {
  return a + b;
};

// console.log(addExpressive2(5,5)); // erreur 'is not a function'
var addFlechee2 = (a, b) => a + b;

console.log(addFlechee2(5, 5));
console.log(addExpressive2(5, 5));

// -------------------------------------------------
// Exemple      Le danger du 'var'
// -------------------------------------------------
// --- Le Hoisting du var est 'Undefined' (si call avant sa déclaration)
// ------ ça pourrait donc causer une condition indésirable (bug)

console.log(numberProducts); // Undefined
if (!numberProducts) deleteShoppingCart(); //Fonctionnera car 'Undefined'

var numberProducts = 100; // existera avant sa déclaration, en 'Undefined'

function deleteShoppingCart() {
  console.log('All products deleted !');
}

// -------------------------------------------------
// Information concernant 'var' dans Window Object
// -------------------------------------------------

// --- 'Var' devient une propriété de Window Object !!
// ------ 'let' et 'const' ne le deviennent pas

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

console.log(window); // 'x' sera affiché dans l'objet

// -------------------------------------------------
// Éviter les problèmes : utiliser la bonne pratique
// -------------------------------------------------

// --- Déclarer ses variables en haut de chaque Scope
// ------ Utiliser 'Const', ou bien 'Let' en cas de réassignation
// ------ Ne pas utiliser de 'Var'

// --- Déclarer ses fontions, avant toute utilisation
// ------ pour ensuite les appeler

// --- On peut, techniquement, appeler une fonction avant sa déclaration
// ------ mais il ne faut pas le faire, car ça peut induire en erreur
// ------ de plus, ça crée un code moins lisible, moins propre
