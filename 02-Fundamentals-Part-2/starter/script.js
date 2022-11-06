//------------------------------------------------------------
//  STRICT MODE
// indique les erreurs de manière plus précise
//------------------------------------------------------------

"use strict";

const passTest = true;
let hasDriversLicense = false;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

//------------------------------------------------------------
//  FUNCTION
//------------------------------------------------------------

function logger() {
    console.log("My name is Sam");
}
// calling, running, invoking function
logger();

//  On va créer une fonction avec des paramètres (entre parentheses)
// On définira la valeur de ces paramètres plus tard, une fois qu'on appelera notre fonction
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
    // le return permet de renvoyer des choses issues dans la fonction
    // et permet de sortir de la fonction en l'arrêtant
}

// Appel de la fonction (en entrant les valeurs des parametres apples/oranges)
// (ces paramètres sont aussi nommés : arguments)
// fruitProcessor(2, 4);

// Si on veut utiliser cette valeur qui return, on doit la stocker dans une variable
// On peut donc appeler une fonction en définissant ses valeurs de paramètres dans une variable
const appleJuice = fruitProcessor(4, 0);
// On peut donc l'afficher
console.log(appleJuice);

// On peut modifier les valeurs de paramètres
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//------------------------------------------------------------
//  FUNCTION DECLARATION VS EXPRESSION
//------------------------------------------------------------

// parametre = placeholder qui recevra une valeur    
// argument = valeur brute (sans placeholder, utilisés à l'extérieur de la fonction, lors de l'appel)

// Ce sont des sortes de variables locales, existantes uniquement à l'intérieur d'une fonction

// Function DECLARATION
// Permet d'être appelées avant qu'elles soient définies dans le code
// Donc la const age1 peut être écrite en amont, pour ensuite plus tard avoir la fonction
// (même si ce n'est pas une bonne idée dans de nombreux cas)
function calcAge1(birthYear) {
    return 2022 - birthYear;
}
const age1 = calcAge1(1983);

// Function EXPRESSION = produit une valeur (string, number, boolean)
// Donc on peut stocker cette valeur dans une variable
// C'est une fonction sans nom, anonyme
const calcAge2 = function (birthYear) {
    return 2100 - birthYear;
};
const age2 = calcAge2(1983);

// Affichage dans la console
console.log(age1, age2);

//------------------------------------------------------------
//  FUNCTION ARROW
//------------------------------------------------------------

// Plus courte à écrire
// Pas besoin de return (return automatiquement si 1 ligne)

// birthYear => 2022 - birthday
// on la stock dans une variable
const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(1983);

// affichage dans le log
console.log(age3);

// -----------------------------------------

// création direct d'une fonction flechee dans une variable
let yearsUntilRetirement = (birthYear) => {
    const age = 2022 - birthYear;
    let retirement = 65 - age;
    return retirement;
};
// Affichage
console.log(yearsUntilRetirement(1983));

// -----------------------------------------

// Fonction flechée avec deux paramètres
yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    let retirement = 65 - age;
    return ` ${firstName} retires in ${retirement} years `;
};

console.log(yearsUntilRetirement(1983, "Jonas"));
console.log(yearsUntilRetirement(2000, "Nok"));

//------------------------------------------------------------
//  CALLING A FUNCTION INSIDE A FUNCTION
//------------------------------------------------------------

// On reprend l'exemple de la fonction fruitProcessor plus haut
// Et on ajoute une fonction dans celle-ci

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange`;
    return juice;
}

// affichage
console.log(fruitProcessor(2, 3));

// Possibilité d'enregistrer le tout dans une variable
const newJuice = fruitProcessor(2,3)
console.log(newJuice)