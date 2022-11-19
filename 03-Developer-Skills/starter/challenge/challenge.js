// PROCESS

// 1) Comprendre le problème
// Créer une suite de contaténations, incluant des valeurs de tableaux, de boucles, et de texte
// Faire en sorte que 0 Day n'existe pas
// Day doit pouvoir être au singulier ou au pluriel, selon le contexte

//  2) Diviser en sous-problèmes
// Créer les tableaux
// Créer une fonction
// Créer une boucle de la longueur du paramètre de fonction
// Y inclure une variable 'vide' (ou avec les 3 petits points)
// Cette variable se remplira via la concaténation à chaque tours de boucle
// Indexer [i]+1 pour retirer les 0 Day
// Inclure une condition dans la String, pour le singulier/pluriel de Day
// Après la boucle, afficher le résultat de l'ensemble des tours de boucles (les concaténations)

let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];
let printForecast = function (arr) {
    // debugger // Si besoin

    // On va faire une boucle pour rajouter plusieurs chaines de caractères, à une chaine de caractères qui grandira à chaque itération
    // Et on affichera uniquement le résultat final de ces multiples concaténations

    // L'équivalent de zéro, pour une String, c'est une String vide ""
    // Mais ici on peut mettre les 3 points
    let str = "... ";
    for (let i = 0; i < arr.length; i++) {
        // le premier tour sera une concatenation du vide + le premier element
        str += `${arr[i]}ºC in ${i + 1} ${[i] + 1 <= 1 ? "day" : "days"} ... `;
        // str = str + `${arr[i]}ºC in ${i + 1} ${[i]+1 <=1 ? "day" : "days"} ... `;
        // le tour suivant sera uniquement :
        //      le premier élément qui a remplacer le vide + le deuxieme element
    }
    // On affiche en une fois le résultat de plusieurs tours
    console.log(str);
};

printForecast(data1);
