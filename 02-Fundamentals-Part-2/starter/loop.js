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
for (i = 0; i < Sam.length; i++) {
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
for (i = 0; i < Sam.length; i++) {
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

for (i = 0; i < Sam.length; i++) {
    if (typeof Sam[i] === "object") {
        console.log(Sam[i], typeof Sam[i]);
    }
}

// ------------------------//
// CONTINUE
// Ignore des types d'éléments dans la séquence de boucle
// ------------------------//
console.log("----- CONTINUE ------");

for (i = 0; i < Sam.length; i++) {
    if (typeof Sam[i] !== 'string') continue;
    console.log(Sam[i], typeof Sam[i]);
}

// ------------------------//
// BREAK
// Interrompt la séquence de boucle
// ------------------------//
console.log("----- BREAK ------");

for (i = 0; i < Sam.length; i++) {
    if (typeof Sam[i] === 'number') break;
    console.log(Sam[i], typeof Sam[i]);
}

