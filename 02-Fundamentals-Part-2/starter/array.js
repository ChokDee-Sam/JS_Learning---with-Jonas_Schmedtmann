const friend1 = "Mehdi";
const friend2 = "Sebastien";
const friend3 = "Youssef";

// ---------------------------------------------------------
// Création d'un tableau
// ---------------------------------------------------------

const friends = ["Mehdi", "Sebastien", "Youssef", "Armando"];
console.log(friends);

// ---------------------------------------------------------
// Création d'un autre type de tableau
// ---------------------------------------------------------

const years = new Array(1990, 1996, 2000);
console.log(years);

// ---------------------------------------------------------
// Affichage d'un contenu de tableau
// ---------------------------------------------------------

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

// ---------------------------------------------------------
// Affichage du nombre d'éléments contenus dans un tableau
//              (sans démarrer de zéro)
// ---------------------------------------------------------

console.log(friends.length);

// Quand on utilise des crochets, la liste débute à zéro
// Ici on choisi d'índiquer le nombre d'éléments
// Et on retire 1 car la liste prend en compte le zero
// Du coup, on a la derniere d'une liste -1 pour compenser le zéro
// console.log(friends[friends.length - 1]);

// À l'intérieur de la séquence, [friends.length - 1] est une expression
// Et une Expression produit une valeur (donc va être calculé en premier)
// On ne peut pas mettre une Declaration/Statement à cet endroit, d'où l'Expression

// ce qui donne entre crochet :
// friends.length = 3
//  Mais entre crochet, dans un tableau, la liste commence à zero
//  On fait donc - 1 pour compenser et se coller au listing de tableau
//  Ce qui donne 3 - 1 = 2
console.log(friends[2]);

// ---------------------------------------------------------
// Remplacer un élément de tableau
// ---------------------------------------------------------

// Une Const avec une valeur primitive ne peut être changée (string, number, boolean)
// Un tableau n'est pas une valeur primitive, donc il peut être modifié dans une Const
// Par contre, il ne peut pas être remplacé entièrement par plusieurs data

friends[0] = "Mehdi Garti";
console.log(friends);

// ---------------------------------------------------------
// Ajouter un élement de tableau dans un tableau
// ---------------------------------------------------------
const yearsSpiritual = [1983, 2022];
let Sam = ["Sam", "Loy", 1983, 2022 - yearsSpiritual[0]];
console.log(Sam);

// ---------------------------------------------------------
// Ajouter un tableau entier dans un tableau
// ---------------------------------------------------------

Sam = ["Sam", "Loy", 1983, 2022 - yearsSpiritual[0], friends];
console.log(Sam);

// ---------------------------------------------------------
// Exercice
// ---------------------------------------------------------

// On crée un tableau avec les années où j'ai rencontré mes amis
const yearsNewFriend = [1983, 1990, 1996, 2000];

// On crée une fonction qui va calculer le nombre d'année d'amitié
// En soustrayant l'année de rencontre à l'année actuelle
const calcAgeFriensdship = function (theMeeting) {
    return 2022 - theMeeting;
};

// On crée une variable contenant
// la fonction de calcul du nombre d'année d'amitié
// En allant chercher indépendamment l'année de rencontre dans un tableau
const meetMehdi = `Je connais Mehdi depuis ${calcAgeFriensdship(
    yearsNewFriend[1]
)} ans `;
const meetSebastien = `Je connais Sebastien depuis ${calcAgeFriensdship(
    yearsNewFriend[2]
)} ans`;
const meetYoussef = `Je connais Youssef depuis ${calcAgeFriensdship(
    yearsNewFriend[3]
)} ans`;

// Affichage
console.log(meetMehdi);
console.log(meetSebastien);
console.log(meetYoussef);

// On peut maintenant créer un tableau du resultat de chacun
let friendshipArray = [meetMehdi, meetSebastien, meetYoussef];
console.log(friendshipArray);

// Ou bien de manière moins propre, mais pour l'exemple
friendshipArray = [
    `Je connais Mehdi depuis ${calcAgeFriensdship(yearsNewFriend[1])} ans `,
    meetSebastien,
    calcAgeFriensdship(yearsNewFriend[1]) + "an",
];

console.log(friendshipArray);

// ---------------------------------------------------------
// ---------------------------------------------------------
// BASIC ARRAY OPERATIONS
// ---------------------------------------------------------
// ---------------------------------------------------------

// On va voir divers Method qui s'appliquent aux Tableaux
// Une Method est techniquement des fonctions
// Et nous appelons cette fonction direction sur le tableau

// ----------------------
// Ajout d'element en fin de tableau (.push)
// ----------------------
// Method pour ajouter un élement dans le tableau
console.log(friends);

const newLenght = friends.push("Me");
// Permet d'afficher non pas ce qui a été rajouté
// mais le résultat de cette fonction(method) avec un Return
console.log(newLenght);
console.log(friends);

// ----------------------
// Ajout d'element en début de tableau (.unshift)
// ----------------------
const newLenght2 = friends.unshift("Mathias");
console.log(friends);
console.log(newLenght2);
// Return le résultat de cette fonction

// ----------------------
// Supression d'element en début de tableau (.shift)
// ----------------------
friends.shift();
console.log(friends);

// ----------------------
// Suppression d'element en fin de tableau (.pop)
// ----------------------
friends.pop(); //pas besoin d'arguments
console.log(friends);
const popped = friends.pop();
console.log(popped); //affiche la suppression
console.log(friends);

// ----------------------
// ----------------------
// Affichage de la position d'un élément dans un tableau  (.indexOf)
// ----------------------
console.log(friends.indexOf("Sebastien"));

// ----------------------
// Savoir si un élément est présent dans un tableau (.includes)
// ----------------------
console.log(friends.includes("Habi"));
console.log(friends.includes("Youssef"));

// ----------------------
// Egalité stricte avec la Method .push + .includes
// ----------------------

friends.push(100); // on ajoute un type Number
console.log(friends);
console.log(friends.includes("100")); // on demande un type String
// La Coerciciton ne s'applique pas !!

// ----------------------
// Use Case de la Methode .includes
// ----------------------

if (friends.includes("Mehdi Garti")) {
    console.log(`Tu as un ami qui se nomme Mehdi Garti`);
}
