'use strict';
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
//                       PRIMITIVE VS OBJECTS
//                   PRIMITIVES vs. REFERENCE TYPES
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// REGLE :  --- La Call Stack stocke des petites données (dites Primitives)
//          --- La Heap stocke des donnés 'complexes' (dites Reference Types)
//          --- Copier des données 'complexes' utilise la même zone Adress Value
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
//  --- 7 PRIMITIVES        (Primitive Types)       Que dans la Call Stack
//  Number, String, Boolean, Undefined, Null, Symbol, BigInt
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
//  --- OBJECTS             (Reference Types)       Se réfère à la Heap
//  Object Literal, Arrays, Functions, Many more...
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------

// --- Primitive Values
// ------ Les valeurs qui sont uniquement dans la Call Stack

let age = 30;
let oldAge = age;
age = 31;

console.log(age); // Ok
console.log(oldAge); // Ok

// --------------------------------------------------------------------------
// --------------------------------------------------------------------------

//  --- Reference Values
//  ------ Les valeurs CallStack pointent à l'extérieur (vers la Valeur du Heap)
//  ------ Donc les valeurs CallStack font 'références' à la mémoire du Heap

// --- De ce fait, lorsqu'on copie un Objet (Reference Types)
// ------ On crée une variable qui pointe sur le même Objet
// ------ et donc qui utilise les mêmes valeur + même emplacement mémoire
// ------ (Adress + Value)

// --- Pour faire simple : on crée un nouvel élement simple qui pointe sur un element complexe deja existant
// ------ Donc, dans ce nouvel élément, on copie la référence qui pointe sur le même objet deja existant

// --- Le problème, c'est qu'en modifiant des données copiées
// ------ on modifie également l'original, et inversement (ce qui peut créer des bugs)

// --- Toutes les References Values qu'on voit dans la CallStack viennent de la Heap

const me = {
  name: 'Sam',
  age: 39,
};

const friend = me; // on crée un nouvel élement CallStack qui pointe vers une adresse Heap deja existante
friend.age = 27; // En modifiant l'objet de la Heap à travers ce 2eme CallStack, on change le contenu existant

console.log('Me', me);
console.log('Friend', friend);

// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
//                       LET'S PRACTICE !
//                   PRIMITIVES vs. REFERENCE TYPES
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------

console.log(`---------- Now, let's practice !! ----------`);

// --- Exemple de copie avec des Valeurs Primitives (des variables)
// --- Aucun soucis, car la mémoire se situe dans le CallStack
let lastName = 'William';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName);
console.log(oldLastName);

// --- Exemple de copie avec des Valeurs Références (des objets)
const jessica = {
  firstName: 'Jessica',
  lastName: 'Willams',
  age: 40,
};

const marriedJessica = jessica; // Copie la référence qui pointe sur le même objet
marriedJessica.lastName = 'Davis';

console.log('before marriage : ', jessica);
console.log('after marriage : ', marriedJessica);

// 'marriedJessica' est dans une 'const' (qui est sensée ne pas changer)
// Mais ce qui ne change pas, c'est sa valeur dans la Stack
// Et cette valeur, c'est sa référence dans la Heap (donc l'objet)
// En modifiant l'objet dans la Heap, on ne change donc pas la valeur de la Stack
// Et donc, on ne modifie pas la 'const'

// marriedJessica = {} // erreur, car ce nouvel objet sera stocké ailleurs (donc autre adresse)
// Nous ne pouvons pas assigner un objet completement différent
// C'est à dire à une adresse différente dans la Heap
// Car ce serait vouloir modifier une 'constante' qui possède la référence pointant dessus

// Pour cela, il aura fallu une variable 'let'
// Il y a une énorme différence entre modifier une propriété d'objet et assigner un nouvel objet

console.log(`---------- Now, let's merge !! ----------`);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'], // Objet pour le dernier exemple
};

// Merge l'ensemble en créant un nouvel objet (où toutes les propriétés sont copiées)
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('before marriage : ', jessica2);
console.log('after marriage : ', jessicaCopy);

// Ceci est une copie superficielle, car cela copie uniquement les propriétés du "Premier Niveau"
// Car s'il y a un objet dans un objet, par exemple un tableau, ça serait le même emplacement mémoire

jessicaCopy.family.push('Enfant_1');
jessicaCopy.family.push('Enfant_2');
console.log('before marriage : ', jessica2);
console.log('after marriage : ', jessicaCopy);

// On verra ça plus tard, car c'est beaucoup plus complexe
