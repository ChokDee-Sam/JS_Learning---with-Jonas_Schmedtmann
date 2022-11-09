// Utilise des accolades {}
// Contrairement aux tableaux, les objets ont des duo : key/value
// Chaque duo est appelé une "propriété" (la propriété key nomme le duo)
// Contrairement aux objets, l'ordre des propriétés n'est pas important
// car on récupère les informations par la key

// Array = Data structurée (ordre avec beaucoup d'importance)
// Object = Data non-structurée (ordre pas important)  

const Sam = {
    firstName : 'Sam',
    lastName : 'Loy',
    age : 2022-1983,
    job : 'future Web Developer',
    friends : ['Mehdi', 'Sebastien', 'Youssef']
}

//  ----------------------
// Récupérer les donnés
//  ----------------------

// Avec un point .
console.log(Sam.age);
// Avec des accolades (comme dans un tableau)
console.log(Sam['age']);

// Avantage de la recherche aux crochets : 
// permet de rechercher une expression
const nameAdd = 'Name'
console.log(Sam['first' + nameAdd])
console.log(Sam['last' + nameAdd])


const interestedIn = prompt('What do you want to know about Sam ? Choose bteween FirstName, LastName, age, job and friends')
// console.log(interestedIn)
console.log(Sam[interestedIn])
