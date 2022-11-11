// BMI = mass / height ** 2
// BMI = mass / (height * height)
// mass in kg       height in metter

const Marks = {
    firstName: "Marks",
    lastName: "Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    },
};

const John = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    },
};
// -------------------------------------------------------------------

// Solution 1
// Appel des 2 Method qui créeront chacune 1 nouvelle propriété d'objet
Marks.calcBMI();
John.calcBMI();

// Comparaison brute de ces 2 paramètres d'objets
if (Marks.BMI > John.BMI) {
    console.log(
        `v1 : ${Marks.firstName} ${Marks.lastName}'s BMI (${Marks.BMI}) is higher than ${John.firstName}'s (${John.BMI})`
    );
} else {
    console.log(
        `v1 : ${John.firstName} ${John.lastName}'s BMI (${John.BMI}) is higher than ${Marks.firstName}'s (${Marks.BMI})`
    );
}

// 
// 
// -------------------------------------------------------------------
// 
// Ma Solution 2 
// Tout dans une fonction, à l'intérieur d'une variable

//      On crée une variable, contenant notre fonction avec 2 paramètres
//      On call notre Method qui créée un paramètre dans les 2 objects extérieurs
//      On appelle notre fonction avec les 2 paramètres(issus des objets) dans une variable qui sauvegarde les résultats
let compareBMI = (firstBMI, secondBMI) => {
    Marks.calcBMI();
    John.calcBMI();
    if (firstBMI > secondBMI) {
        console.log(
            `v2 : ${Marks.firstName} ${Marks.lastName}'s BMI (${Marks.BMI}) is higher than ${John.firstName}'s (${John.BMI})`
        );
    } else {
        console.log(
            `v2 : ${John.firstName} ${John.lastName}'s BMI (${John.BMI}) is higher than ${Marks.firstName}'s (${Marks.BMI})`
        );
    }
};

const callBMI = compareBMI(Marks.BMI, John.BMI);
