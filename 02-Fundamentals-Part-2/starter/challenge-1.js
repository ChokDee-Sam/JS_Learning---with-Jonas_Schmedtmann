// DATA 1
// Dolphins score :     44, 23, 71
// Koalas score :       65, 54, 49

// Scores Dolphins
let dolphinsScore1 = 44;
let dolphinsScore2 = 23;
let dolphinsScore3 = 71;

// Scores Koalas
let koalasScore1 = 65;
let koalasScore2 = 54;
let koalasScore3 = 49;

let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// console.log(calcAverage(1, 1, 1))

let scoreDolphins = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
let scoreKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win 🐬 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win 🐨 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No teams win...`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);
//
//
// DATA 2
// Dolphins score :     85, 54, 41
// Koalas score :       23, 34, 27
// Scores Dolphins
dolphinsScore1 = 85;
dolphinsScore2 = 54;
dolphinsScore3 = 41;

// Scores Koalas
koalasScore1 = 23;
koalasScore2 = 34;
koalasScore3 = 27;

// calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// pas besoin de la réecrire la fonction

scoreDolphins = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
scoreKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3);
console.log(scoreDolphins, scoreKoalas);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log(`No winner !`);
//     }
// }
// pas besoin de la réecrire la fonction

checkWinner(scoreDolphins, scoreKoalas);
