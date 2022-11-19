const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

let lowestTemp;
let highestTemps;
let amplitudeTemp;

// Problem 1

const calcTempAmplitude = function (temp) {
    lowestTemp = temp[0];
    highestTemps = temp[0];

    for (let i = 0; i < temp.length; i++) {
        const curTemp = temp[i];
        if (typeof curTemp !== "number") continue;

        console.log("______ boucle______");
        console.log(`LowestTemp = ${lowestTemp}`);
        console.log(`HighestTemp = ${highestTemps}`);
        console.log(`CurTemp = ${curTemp}`);

        if (curTemp < lowestTemp) {
            lowestTemp = curTemp;
        }
        if (curTemp > highestTemps) {
            highestTemps = curTemp;
        }
    }
    console.log(`_______ Résultat final`);
    console.log(lowestTemp);
    console.log(highestTemps);

    return highestTemps - lowestTemp;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2

const calcTempAmplitudeNew = function (temp1, temp2) {
    console.log("--------------- DEUXIEME PROBLEME À REGLER");

    const allTemps = temp1.concat(temp2);
    console.log(allTemps);

    lowestTemp = allTemps[0];
    highestTemps = allTemps[0];

    for (let i = 0; i < allTemps.length; i++) {
        const curTemp = allTemps[i];
        if (typeof curTemp !== "number") continue;

        console.log("______ boucle______");
        console.log(`LowestTemp = ${lowestTemp}`);
        console.log(`HighestTemp = ${highestTemps}`);
        console.log(`CurTemp = ${curTemp}`);

        if (curTemp < lowestTemp) {
            lowestTemp = curTemp;
        }
        if (curTemp > highestTemps) {
            highestTemps = curTemp;
        }
    }
    console.log(`_______ Résultat final 2`);
    console.log(lowestTemp);
    console.log(highestTemps);

    return highestTemps - lowestTemp;
};

const amplitudeNew = calcTempAmplitudeNew([7, 5, 1], [9, -1, 5]);
console.log(amplitudeNew);
