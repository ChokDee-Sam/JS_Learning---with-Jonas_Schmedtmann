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
