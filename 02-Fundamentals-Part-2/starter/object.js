// Utilise des accolades {}
// Contrairement aux tableaux, les objets ont des duo : key/value
// Chaque duo est appelé une "propriété" (la propriété key nomme le duo)
// Contrairement aux objets, l'ordre des propriétés n'est pas important
// car on récupère les informations par la key

// Array = Data avec ordre structurée
// Object = Data avec ordre non-structurée (mais plus détaillé de part la key)

Sam = {
    firstName: "Sam",
    lastName: "Loy",
    age: 2022 - 1983,
    job: "future Web Developer",
    friends: ["Mehdi", "Sebastien", "Youssef"],
};

//  ----------------------
// Récupérer les données
//  ----------------------

// Avec un point .
console.log(Sam.age);
// Avec des accolades (comme dans un tableau)
console.log(Sam["age"]);

// Avantage de la recherche aux crochets :
// permet de rechercher une expression
const nameAdd = "Name";
console.log(Sam["first" + nameAdd]);
console.log(Sam["last" + nameAdd]);

// let interestedIn = prompt(
//     "What do you want to know about Sam ? Choose between FirstName, LastName, age, job and friends"
// );

// // Affiche exactement ce que l'utilisateur a écrit dans le Prompt
// // car on l'a sauvegardé dans une variable
// console.log(interestedIn);

// // Voici ce qui permet un affichage d'EXPRESSION (sorte de concatenation)
// // Par exemple si on a écrit 'job' dans le Prompt, qui est enregistré dans une variable,
// // c'est comme écrire :
// //          console.log(Sam[interestedIn]);
// //          console.log(Sam["job"]);

// // Ce qui revient à la même chose que :
// //          console.log(Sam.job);

// // Écrire la variable après le point ne fonctionne pas
// // car il n'y a pas de propriété d'objet "interestedIn"
// console.log(Sam.interestedIn); //undefined   (bollean : false)
// // Il faudrait donc utiliser les crochets afin de pouvoir rechercher une EXPRESSION

// // Condition qui retire la possibilité d'une expression menant à undefined
// // Si cette condition est true (et donc si elle existe)
// if (Sam[interestedIn]) {
//     console.log(Sam[interestedIn]);
// } else {
//     console.log(
//         "Wrong request ! Choose between FirstName, LastName, age, job and friends"
//     );
// }

//  ----------------------
// Ajouter des données
//  ----------------------

// Avec un point
Sam.location = "Thailand";
// Avec des crochets
Sam["passion"] = "Driving Motorcycle";
// Affichage
console.log(Sam);

//  ----------------------
// Small Exercice
//              Écrire cette phrase : 'Sam a 3 amis fidèles, et son plus ancien se nomme Mehdi'
//                      Sam + 3 + Mehdi doivent être écrit de manière dynamique
//  ----------------------

console.log(
    Sam.firstName +
        " a " +
        Sam.friends.length +
        " amis fidèles, et son plus ancien se nomme " +
        Sam.friends[0]
);

console.log(
    `${Sam.firstName} a ${Sam.friends.length} amis fidèles dont le plus ancien se nomme ${Sam.friends[0]}`
);
console.log(Sam);

//  ----------------------
// Object Method
//  ----------------------

// Toute fonction attachée à un objet est appelée une Methode
// Il faut une EXPRESSION et non une déclaration
// Celui qui apelle la method se situe avant le point
//          Exemple : Sam2.calAgeFuture()

let Sam2 = {
    firstName: "Sam",
    lastName: "Loy", //String Value
    birthYear: 1983, //Number Value
    actualYear: 2022,
    job: "future Web Developer",
    friends: ["Mehdi", "Sebastien", "Youssef"],
    hasDriversLicense: true, // Boolean value

    // Expression Value (une déclaration ne fonctionne pas dans un objet)
    // En appelant la fonction, on écrira la valeur de birthYear
    calcAge: function (birthYear) {
        return 2100 - birthYear;
    },

    // Expression qui va chercher la valeur à l'intérieur de la function
    // 'this' va pointer vers le contenu d'où elle provint (donc l'objet Sam2 en entier)
    calcAgeFuture: function () {
        // Affichage pour mieux comprendre : this pointe vers celui qui appelle cette Method
        // This évite les modifications fastidieuses, les répétitions, et donc les erreurs
        //              console.log(this);
        return 2100 - this.actualYear;
    },

    // Function qui crée un nouveau paramètre dans l'objet
    // Évite les calcules en doubles et permet d'ajouter un paramètre
    calcAgeLast: function () {
        this.age = this.actualYear - this.birthYear;
        return this.age;
    },

    // Ma solution en 6 lignes
    getSummary: function () {
        if (Sam2.hasDriversLicense) {
            Sam2.driving = "he has a driver's licence";
        } else {
            Sam2.driving = "he has no driver's licence";
        }

        return `${this.firstName} is a ${this.age} years old ${this.job}, and ${this.driving}`
        return `${Sam2.firstName} is a ${Sam2.age} years old ${Sam2.job}, and ${Sam2.driving}`
    },

    // Solution du Formateur en 2 lignes !
        getSummaryFormateur: function () {
        return `${this.firstName} is a ${this.age} years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`

        ;
    },
};

// 2 manières de l'écrire (point ou crochets)
console.log(Sam2.calcAge(1983));
console.log(Sam2["calcAge"](1983));

// Évitez les répétitions et utiliser les infos deja contenues dans l'objet
console.log(Sam2.calcAge(Sam2.birthYear));
console.log(Sam2["calcAge"](Sam2.birthYear));

// Celui qui apelle la method se situe avant le point (donc Sam2)
console.log(Sam2.calcAgeFuture());

// Fonction qui a ajouté une nouvelle propriété dans l'objet
console.log(Sam2.calcAgeLast());
// On peut donc consulter la propriété sans refaire des calculs
console.log(Sam2.age);

// On peut observer que la dernière propriété 'age' est inclus dans l'objet
console.log(Sam2);

//  ----------------------
// Small Exercice
//              Écrire cette phrase : 'Sam is a 39 years old future developer, and he has a driver's license'
//                      Sam + 39 + future developer + he has a driver's licence
//                              doivent être écrit de manière dynamique
//  ----------------------

//DEGUEULASSE ! (et faux)
// console.log(`${Sam2.firstName} is a ${Sam2.age} years old ${Sam2.job}, and ${Sam2.driving()}`) 

// PASSABLE
console.log(Sam2.getSummary());

// OPTIMISÉ
console.log(Sam2.getSummaryFormateur());


// ---------------------
// Les Tableaux/Arrays sont aussi des objets, mais un type d'objet spécial
// C'est pourquoi ils peuvent avoir des méthodes