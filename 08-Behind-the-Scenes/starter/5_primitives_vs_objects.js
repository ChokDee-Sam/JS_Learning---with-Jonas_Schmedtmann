'use strict';
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
//                       PRIMITIVE VS OBJECTS
//                   PRIMITIVES vs. REFERENCE TYPES
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// REGLE :  --- La Call Stack stocke des petites données (dites Primitives)
//          --- La Heap stocke des donnés complexes (dites Reference Types)
//          --- Copier des données complexes utilise la même zone Adress Value
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

console.log(age);
console.log(oldAge);

// --------------------------------------------------------------------------
// --------------------------------------------------------------------------

//  --- Reference Values
//  ------ Les valeurs CallStack pointent à l'extérieur (vers la Valeur du Heap)
//  ------ Donc les valeurs CallStack font 'références' à la mémoire du Heap

// --- De ce fait, lorsqu'on copie un Objet (Reference Types)
// ------ On crée une variable qui pointe sur le même Objet
// ------ et donc qui utilise les mêmes valeur + même emplacement mémoire
// ------ (Adress + Value)

// --- Le problème, c'estqu'en modifiant des données copiées
// ------ on modifie également l'original, et inversement (ce qui peut créer des bugs)

// --- Toutes les References Values qu'on voit dans la CallStack viennent de la Heap

const me = {
  name: 'Sam',
  age: 39,
};

const friend = me;
friend.age = 27;

console.log('Me', me);
console.log('Friend', friend);
