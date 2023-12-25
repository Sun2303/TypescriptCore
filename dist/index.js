"use strict";
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let user = [1, 'a', true];
;
let mySize = 3;
console.log(mySize);
function calculateTax(income, taxYear = 2024) {
    if (taxYear < 2023) {
        return income * 1.5;
    }
    return income * 2;
}
console.log(calculateTax(100, 2021));
let employee = {
    id: 1,
    name: 'Sun',
    retire: (date) => {
        console.log(date);
    },
};
let sun = {
    id: 2,
    name: 'Sun CD',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.0;
        ;
    }
    else {
        return parseInt(weight) * 1.5;
    }
}
//# sourceMappingURL=index.js.map