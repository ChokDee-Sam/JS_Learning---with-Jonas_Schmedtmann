'use strict';

// les variables globales sont toutes 'scannées' avant d'exécuter le code
// Voilà pourquoi elles peuvent être disponibles avant même leur déclaration
// Mais ne seront "Undefined"

// La scope permet de trouver des infos vers l'intérieur, vers les enfants
// Mais JAMAIS vers l'extérieur, de l'enfant vers les parents

// Pour faire simple : on déclare pour les éléments enfants (ou pour sa propre scope)
// Seulement var possède une scope étendue pour envoyer l'info d'un étage vers son parent
// MAIS il est très déconseillé de l'utiliser (sauf cas précis, comme ancien projet codé)

// Function Scope : leur propre bloc ( en strict mode, recommandé)

function calcAge(birthyear) {
  const age = 2022 - birthyear;
  console.log(firstName); // sera recherché en dehors de la scope function

  function printAge() {
    console.log(millenial); //pas d'erreur, car var à une scope étendue

    // Les infos ne sont pas dans cette scope
    // donc le programme ira chercher les infos dans les scopes parents
    let output = `${firstName}, you are ${age}, born in ${birthyear}`;
    // La scope permet de léguer des infos parents vers les enfants (vers l'intérieur)
    // Mais JAMAIS l'inverse, de l'enfant vers les parents (vers l'extérieur)
    console.log(output);

    if (birthyear >= 1900 && birthyear <= 1999) {
      // Plus la scope est proche, plus une variable devient prioritaire
      // Avant d'etendre la recherche dans les scopes parents, la recherche est locale

      // --- Création d'une nouvelle variable avec le même nom qu'une autre
      // --- MAIS dans un scope différent
      const firstName = 'ChokDee'; // donc changement prioritaire dans cette scope locale
      // Avoir 2 variables portant le même nom n'est pas un problème
      // Elles seront definis selon leur scope comme 2 variables différentes

      // Réassigner une variable créée dans une Scope Exterieure
      output = 'NEW OUTPUT';

      const str = `Oh, ${firstName}, you are a Millenial`;
      console.log(str);
      var millenial = true; //
    }
    // console.log(str); //erreur de scoping
    console.log(millenial); //pas d'erreur, car var à une scope étendue
    console.log(output); //pas d'erreur, malgré sa réassignation dans une scope enfant
  }
  printAge();

  return age;
}

const firstName = 'Sam'; // global scope
calcAge(1983);

// console.log(age);    // erreur de variable car l'info ne peut pas aller d'enfant à parent
// console.log(output); //même erreur de scoping
// console.log(printAge()); // même erreur, cette fois ci avec une function
