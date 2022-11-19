// Remember, we're gonna use strict mode in all scripts now!
'use strict';


// PROCESS FOR FIX BUG

const measureKelvin = function () {
const measurement = {
  type : 'temp',
  unit: 'celcius',
// -------------------- 2) FIX THE BUG --------------------
// On ajoute Number pour faire en sorte que le type soit bon
value: Number(prompt('Degrees Celcius'))

// Ancienne ligne qui induisait l'erreur
// value: prompt('Degrees Celcius')
  }

// Bonus
// console.log(measurement.value);
// console.warn(measurement.value);
// console.error(measurement.value);

// -------------------- 2) FIND WHY --------------------
// on appelle l'objet en entier pour voir la value, le nombre est un type String
// Ce qui est écrit dans le Prompt devient de type String
// Et donc, lorsqu'on veut measurement.value en tant que nombre, c'est un String
// Voilà pourquoi il se concatene avec 273

// Meilleure manière de visualiser les longs objets sous forme de tableau
console.table(measurement)
// console.log(measurement)

const kelvin = measurement.value + 273
return kelvin
}

// -------------------- 1) IDENTIFY THE BUG (type string) --------------------
console.log(measureKelvin())

// Permet d'afficher automatiquement le debugger dans le navigateur
// debugger




