// ------------------------------------------------------------------//
// SWITCH
// ------------------------------------------------------------------//

const day = 'monday'

switch (day) {
    case 'monday' :           // day === monday
    console.log('Good Monday');
    console.log('Have a good week ✌');
    break;

    case 'tuesday' : 
    console.log('You are the best, you can do it 😎');
    break;

    case 'wednesday' : 
    case 'thursday' : 
    console.log('This is realy nice 👍');
    break;

    case 'friday' : 
    console.log('Tonight : Party Time 🎶');
    break;

    case 'saturday' : 
    case 'sunday' : 
    console.log('Have a good weekend 😊');
    break;
    default:
      console.log('Not a valid day');
}

// la même chose en IF ELSE
if (day === 'wednesday' || day === 'thursday' )  {
  console.log('Thank you !');
} 

// ------------------------------------------------------------------//
// Statements and Expressions
// ------------------------------------------------------------------//

// statements = full sentences qui traduisent des actions (declarations)
// expression = produit des valeurs

// ------------------------------------------------------------------//
// Ternary operator
// ------------------------------------------------------------------//

let age = 11

// ternaire en 1 ligne
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink)

// if else en 6 lignes
let newDrink ;
if (age>= 18 ) {
  newDrink = 'wine'
} else {
  newDrink = 'water'
}
console.log(newDrink)

console.log(`I like to drink ${drink}`);
console.log(`I like to drink ${newDrink}`);
// possibilité d'insertion d'une ternaire dans un template literal
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

//  IMPOSSIBILITÉ d'INSERTION  de IF ELSE dans un template literal
// console.log(`I like to drink ${if (age>= 18 ) {
//   newDrink = 'wine'
// } else {
//   newDrink = 'water'
// }}`);



// ------------------------------------------------------------------//
// CHALLENGE 4
// ------------------------------------------------------------------//

// Prices : 275, 40, 430

const bill = 275
const tip = bill >=50 && bill <=300 ? (bill *15) / 100 : (bill *20) / 100;
console.log(`The bill was ${bill}, the tip was ${tip}, and the totale value ${bill + tip}`)
    
// Autre Solution
       // const bill = 275
       // let tip;
  	   // let tipCalcul = bill >=50 && bill <=300 ? tip = (bill*20) /100 : tip = (bill *15) /100
       // totalValue = bill + tip  
       // console.log(`The bill was ${bill}, the tip was ${tip}, and the totale value ${totalValue}`)
