const fullName = "Sam Loy";

const hi = "Hi, I'm" + " " + fullName;
const newHi = `Hi, I'm ${fullName}`;

console.log(hi);
console.log(newHi);
// 

// ------------------------------------------------------------------//
// Conversion
// ------------------------------------------------------------------//

// changement implicite du type de variable
// String
const year = "2000";
console.log(typeof year);
console.log(year);

// Changement momentané
console.log(Number(year)); // changement de type  nombre
console.log(Number(year) + 10); // calcul possible
console.log(Number("Sam")); // changement impossible NaN

// Coercition
console.log("I am " + "100" + " years old");
// la meme chose avec une variable type Number
console.log("I am " + 100 + " years old");
// Le Number devient chiffre momentanément, sans rien faire
console.log("20" - "10");
// Les types String deviennent type Number temporairement
console.log("20" + "10");
// Avec l'operateur +    String reste String, et concatene

// Tous les opérateurs fonctionnent pour faire une coercition type Number
// Seul l'opérateur + ne change pas, et concatene
// 

// ------------------------------------------------------------------//
// Falsy Values
// ------------------------------------------------------------------//

//      0   ''  undefined   null    NaN

// Dans un IF Else, une condition de variable seule deviendra boolean

const kilometers = 0;
// ici, avec zero, c'est une valeur Falsy boolean
if (kilometers) {
    console.log("Let's drive !");
} else {
    console.log("Let's Code !");
}

let city; //Nous ne définissons pas la variable, donc Falsy boolean
// ici, avec zero, c'est une valeur Falsy
if (city) {
    console.log("Nice city !");
} else {
    console.log("where do we go ?");
}
// 

// ------------------------------------------------------------------//
// Equality Operators
// ------------------------------------------------------------------//

//      = atribuer
//      == égalité avec coercition
//      === égalité absolue

//      != inégalité avec coercition
//      !== inégalité absolue
// 

// ------------------------------------------------------------------//
// Logical Operators            &&      ||
// ------------------------------------------------------------------//


// ------------------------------------------------------------------//
// Challenge 3
// ------------------------------------------------------------------//

dolphinsAverage = (96 + 108 + 89) /3
koalasAverage = (88 + 91 + 110) /3

if (dolphinsAverage > koalasAverage) {
    console.log("Dophins win with " + dolphinsAverage + " points")
} else if (koalasAverage > dolphinsAverage) {
console.log("Koalas win with " + koalasAverage + " points")
} else if  (dolphinsAverage === koalasAverage) {
    console.log("it's a draw !")}


// BONUS 1
dolphinsAverage2 = (97 + 112 + 101) /3
koalasAverage2 = (109 + 95 + 123) /3

 if (dolphinsAverage2 > koalasAverage2 && dolphinsAverage2 >= 100) {
 console.log('Dolphins are the CHAMPION  OVER 100 with ' + dolphinsAverage2 + ' points')
} else if (koalasAverage2 > dolphinsAverage2 && koalasAverage2 >=100) {
 console.log('Koalas are CHAMPIONS OVER 100 with ' + koalasAverage2 + ' points')
} else if ((dolphinsAverage2 > koalasAverage2 && dolphinsAverage2 < 100) || (koalasAverage2 > dolphinsAverage2 && koalasAverage2 < 100)) {
    console.log("Both teams lose, because score under 100")
}


// BONUS 2
dolphinsAverage3 = (97 + 112 + 101) /3
koalasAverage3 = (109 + 95 + 106) /3

 if (dolphinsAverage3 > koalasAverage3 && dolphinsAverage3 >= 100) {
 console.log('Dolphins are the CHAMPION  OVER 100 with ' + dolphinsAverage3 + ' points')

} else if (koalasAverage3 > dolphinsAverage3 && koalasAverage3 >=100) {
 console.log('Koalas are CHAMPIONS OVER 100 with ' + koalasAverage3 + ' points')

} else if ((dolphinsAverage3 === koalasAverage3)
                    && (dolphinsAverage3 >= 100 && koalasAverage3 >=100 )) {
                        console.log("We have a DRAW : 2 WINNERS  with " + dolphinsAverage3 + " points")
} else {
    console.log('No one win 🤢')
}