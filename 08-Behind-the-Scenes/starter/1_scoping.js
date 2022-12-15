'use strict';

// La scope permet de chercher des infos vers l'exterieur, vers les parents
// Mais JAMAIS vers l'intérieur, du parent vers l'enfant

// Pour faire simple : on déclare pour les éléments enfants (ou pour sa propre scope)
// Seulement 'var' possède une scope étendue pour envoyer l'info d'un étage enfant vers son parent
// MAIS il est très déconseillé de l'utiliser (sauf cas précis, comme un ancien projet codé)

// les variables globales sont toutes 'scannées' AVANT que chaque ligne de code soit effectuée
// Voilà pourquoi elles peuvent être disponibles AVANT même leur déclaration
// Mais seront "Undefined"

// Function Scope : leur propre bloc ( en strict mode, recommandé)

function calcAge(birthyear) {
  const age = 2022 - birthyear;
  console.log(firstName); // sera recherché en dehors de la scope function (dans une scope globale, donc dispo)

  function printAge() {
    console.log(millenial); //pas d'erreur, car cette var (ligne 48) à une scope étendue (donc UNDEFINED)

    // Les infos ne sont pas dans cette scope
    // donc le programme ira chercher les infos dans les scopes parents
    let output = `${firstName}, you are ${age}, born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1900 && birthyear <= 1999) {
      // Plus la scope est proche, plus une variable devient prioritaire
      // Avant d'etendre la recherche dans les scopes parents, la recherche est locale

      // --- Création d'une nouvelle variable avec le même nom qu'une autre
      // --- MAIS dans un scope différente (parent)
      const firstName = 'ChokDee'; // donc changement prioritaire dans cette scope locale

      // Avoir 2 variables portant le même nom n'est pas un problème
      // Elles seront definis selon leur scope comme 2 variables différentes

      // Réassigner une variable créée dans une Scope Exterieure
      // Ça semble bizarre (info enfant vers parent) mais c'est possible
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
