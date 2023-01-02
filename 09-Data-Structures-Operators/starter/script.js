'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

// On déstructure le tableau de gauche par rapport au coté droit (arr)
const [x, y, z] = arr; // Entre crochet, la 1ère 'const' prend la 1ère donnée de 'arr', et ainsi de suite
// Ça ressemble à un tableau, mais ça ne l'est pas. C'est juste la mission de déstructuration
console.log(x);
console.log(y);
console.log(z);

let [first, second] = restaurant.categories;
console.log(first, second);

// On peut sauter un élément de tableau, par exemple ici, avoir le 1er et 3ème
[first, , second] = restaurant.categories; // On saute l'élément du milieu, le 2ème
console.log(first, second);

// Switching variables
let [main, secondary] = restaurant.categories;
console.log('--- Do you want an ' + main, secondary + ' ? ---');
[main, secondary] = [secondary, main]; // Switch variables
console.log('--- WELCOME to the ' + main, secondary + ' ---');

// On affiche la method
console.log(restaurant.order(2, 0));

// On assigne à 2 constantes les valeurs résultantes d'une Method
const [starter, mainCourse] = restaurant.order(2, 0); // création de 2 'const' sur un simple appel de fonction
console.log(starter, mainCourse);

// Imbriqué (Nested)
const nested = [2, 4, [5, 6]];
console.log(nested);
// Déstructuration imbriquée (déstructuration dans une déstructuration)
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Valeurs par défaut
let [p, q, r] = [8, 9]; // 'r' sera Undefined
console.log(p, q, r); 

[p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 'r' sera '1'
