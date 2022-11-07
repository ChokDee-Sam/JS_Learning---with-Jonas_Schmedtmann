let tip = Number;

// Function Declarative
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        tip = (bill * 15) / 100;
        // console.log(`The bill is ${bill} dollars : the tip is ${tip} dollars`);
        // return "tip 15% = " + tip + " dollars ";
        return tip;
    } else {
        tip = (bill * 20) / 100;
        // console.log(`The bill is ${bill} dollars : the tip is ${tip} dollars`);
        // return "tip 20% = " + tip + " dollars ";
        return tip;
    }
}
// console.log(calcTip(100));

// Tableau des factures
const bills = [125, 555, 44];

// Tableau des pourboires
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips[0]);
console.log(tips[1]);
console.log(tips[2]);

console.log(bills);
console.log(tips);


// Total
const totals = [
    bills[0] + tips[0] + ' dollars = total price',
    bills[1] + tips[1] + ' dollars = total price',
    bills[2] + tips[2] + ' dollars = total price',
];
console.log(totals[0]);
console.log(totals[1]);
console.log(totals[2]);

// Function Expression (dans une variable / ANONYME)
// const calcTip2 = function(bill)  {
//     if (bill >= 50 && bill <= 300) {
//         tip = (bill * 15) / 100;
//         console.log(bill, tip);
//         // return tip;
//     } else {
//         tip = (bill * 20) / 100;
//         console.log(bill, tip);

//     }
// }
// calcTip2(1000);

// Function Arrow
// const calcTip3 = (bill)=>  {
//     if (bill >= 50 && bill <= 300) {
//         tip = (bill * 15) / 100;
//         console.log(bill, tip);
//         return tip;
//     } else {
//         tip = (bill * 20) / 100;
//         console.log(bill, tip);

//     }
// }
// calcTip3(1000);
