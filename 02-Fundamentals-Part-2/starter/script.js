//------------------------------------------------------------
//  STRICT MODE
// indique les erreurs de manière plus précise
//------------------------------------------------------------

'use strict'

const passTest = true;
let hasDriversLicense = false;

if (passTest) hasDriversLicense = true
if(hasDriversLicense) console.log('I can drive :D')
 

//------------------------------------------------------------
//  FUNCTION
//------------------------------------------------------------

function logger () {
  console.log('My name is Sam');
}
// calling, running, invoking function
logger();

//  On va créer une fonction avec des paramètres (entre parentheses)
// On définira la valeur de ces paramètres plus tard, une fois qu'on appelera notre fonction
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
return juice;
// le return permet de renvoyer des choses issues dans la fonction
}

// Appel de la fonction (en entrant les valeurs des parametres apples/oranges) 
// (ces paramètres sont aussi nommés : arguments)
// fruitProcessor(2, 4);

// Si on veut utiliser cette valeur qui return, on doit la stocker dans une variable
// On peut donc appeler une fonction en définissant ses valeurs de paramètres dans une variable
const appleJuice = fruitProcessor(4, 0)
// On peut donc l'afficher
console.log(appleJuice);

// On peut modifier les valeurs de paramètres
const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice);
