// ---------------
// Challenge 1 & 2
// ---------------
//
// Data 1
//
const weightMark_1 = 78;
const heightMark_1 = 1.69;
const weightJohn_1 = 92;
const heightJohn_1 = 1.95;

const bmiMark_1 = weightMark_1 / heightMark_1 ** 2;
const bmiJohn_1 = weightJohn_1 / heightJohn_1 ** 2;

let markHigherBMI = bmiMark_1 > bmiJohn_1;
console.log(bmiMark_1, bmiJohn_1, markHigherBMI);

// Challenge 2
if (bmiMark_1 > bmiJohn_1) {
    console.log(
        `Mark's BMI (${bmiMark_1}) is higher than John's (${bmiJohn_1})`
    );
} else {
    console.log(
        `John's BMI (${bmiMJohn_1}) is higher than John's (${bmiMark_1})`
    );
}

// //
// // Data 2
// //
const weightMark_2 = 95;
const heightMark_2 = 1.88;
const weightJohn_2 = 85;
const heightJohn_2 = 1.76;

const bmiMark_2 = weightMark_2 / heightMark_2 ** 2;
const bmiJohn_2 = weightJohn_2 / heightJohn_2 ** 2;

markHigherBMI = bmiMark_2 > bmiJohn_2;
console.log(bmiMark_2, bmiJohn_2, markHigherBMI);

// Challenge 2
if (bmiMark_2 > bmiJohn_2) {
    console.log(
        `Mark's BMI (${bmiMark_2}) is higher than John's (${bmiJohn_2})`
    );
} else {
    console.log(
        `John's BMI (${bmiJohn_2}) is higher than Mark's (${bmiMark_2})`
    );
}