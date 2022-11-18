// Variable initialisation   Tant que TRUE       Action avant l'arrêt
console.log("------ BOUCLE FOR : 3 FOIS ------");

for (let nomDeVariable = 1; nomDeVariable <= 3; nomDeVariable++) {
    console.log(`Je pousse ma répétition : ${nomDeVariable}`);
}

// Création d'un tableau (Array)
const Sam = [
    "Sam",
    "Loy",
    1983,
    "Future Developer",
    ["Mehdi", "Sebastien", "Youssef"],
    true,
];

// ------------------------
// AFFICHER DES INFORMATIONS (dans un tableau existant)
// ------------------------
console.log("------ AFFICHER DES INFORMATIONS ------");

// En démarrant de zéro, on va incrémenter en +1
// jusqu'à s'arrêter à la fin de la longueur du tableau Sam
for (let i = 0; i < Sam.length; i++) {
    console.log(Sam[i], typeof Sam[i]);
}
// Et l'incrémentation se passe dans le numéro de propriété du tableau
// Avec, juste après, le typeOf de chaque information

// ------------------------
// CAPTURER DES INFORMATIONS (dans un nouveau tableau vide)
// ------------------------
console.log("------ CAPTURER DES INFORMATIONS : EXEMPLE 1 ------");
// On va créer une variable de tableau vide (pour ensuite intégrer des infos automatiquement)
const newTableau = [];

// On reprend le code de la boucle précédente
for (let i = 0; i < Sam.length; i++) {
    console.log(Sam[i], typeof Sam[i]);

    // On va maintenant intégrer une valeur i dans le tableau 'types' vide
    // qui aura pour ordre de 0 à la fin de Sam.lenght
    //      et, qui capturera chaque TypeOf de chaque ligne du tableau Sam,
    //      dans chaque ligne du nouveau tableau
    // newTableau[i] = typeof Sam[i];

    // Autre possibilité plus propre
    newTableau.push(typeof Sam[i]);
}

// On affiche
console.log(newTableau);

// ------------------------//
// Autre exemple
console.log("------ CAPTURER DES INFORMATIONS : EXEMPLE 2 ------");

// On crée un tableau avec des dates + un tableau vide
const years = [1983, 1990, 1998, 2022];
const age = [];

// On met en place notre boucle +1 de la longueur du tableau Years
for (let i = 0; i < years.length; i++) {
    // À chaque tour de boucle, on copie une data issue du premier tableau dans notre tableau vide

    age.push(2022 - years[i]);
    // On soustrait cette nouvelle data copiée à l'année 2022
}

// On affiche
console.log(age);

// ------------------------//
// CONDITION
// Oblige une condition pour séquencer la boucle
// ------------------------//
console.log("------ CONDITION ------");

for (let i = 0; i < Sam.length; i++) {
    if (typeof Sam[i] === "object") {
        console.log(Sam[i], typeof Sam[i]);
    }
}

// ------------------------//
// CONTINUE
// Ignore des types d'éléments dans la séquence de boucle
// Stop l'itération actuelle, pour passer à la suivante
// ------------------------//
console.log("----- CONTINUE ------");

for (let i = 0; i < Sam.length; i++) {
    if (typeof Sam[i] !== "string") continue;
    console.log(Sam[i], typeof Sam[i]);
}

// ------------------------//
// BREAK
// Interrompt la séquence de boucle
// ------------------------//
console.log("----- BREAK ------");

for (let i = 0; i < Sam.length; i++) {
    if (typeof Sam[i] === "number") break;
    console.log(Sam[i], typeof Sam[i]);
}

// ---------------------------------------------
// ---------------------------------------------

// ------------------------//
// BOUCLER À L'ENVERS
// ------------------------//

console.log("------ BOUCLE À L'ENVERS ------");

const Seb = [
    "Sebastien",
    "Monnier",
    1984,
    "Truck Driver",
    ["Vincent", "Karim", "Sam"],
];

for (let i = Seb.length - 1; i >= 0; i--) {
    console.log(i, Seb[i]);
}

// ------------------------//
// BOUCLER DANS UNE BOUCLE
// ------------------------//
console.log("------ BOUCLE DANS UNE BOUCLE ------");

for (let serie = 1; serie <= 3; serie++) {
    console.log(`---------- Starting Serie ${serie}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Serie ${serie} : Dancing repetition ${rep} 🤸‍♂️`);
    }
}

// ---------------------------------------------
// ---------------------------------------------

// ------------------------//
// BOUCLE WHILE
// ------------------------//
// Quand on ne connait pas le nombre de fois que la boucle sera exécutée
// Quand on ne connait pas à l'avance combien d'itération la boucle aura
// Ne dépend pas d'un compteur

// exemple de comparaison : Boucle For
for (let exemple = 1; exemple <= 5; exemple++) {
    console.log(`----------  Boucle - FOR :  ${exemple}`);
}

// Boucle While
let exemple = 1;
while (exemple <= 5) {
    console.log(`----------  Boucle - WHILE :  ${exemple}`);
    exemple++;
}

// Exemple de boucle While : lancé de dés
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`Congratulations ! You rolled a ${dice}`);
    }
}
