// 1
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2
const tips = [];
const total = [];

// 3
const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        tip = (bill * 15) / 100;
        return tip;
    } else {
        tip = (bill * 20) / 100;
        return tip;
    }
};

// Version perso
for (let i = 0; i < bills.length; i++) {
    // tips.push(calcTip(bills[i]));
    tips[i] = calcTip(bills[i]);
    total[i] = bills[i] + tips[i];
}

// Version formateur
// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     total.push(tip + bills[i]);
// }
//

console.log(total);
