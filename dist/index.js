"use strict";
var _a;
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
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(word) {
    if (word) {
        console.log(word);
    }
    else {
        console.log("Hello | xin chào!!!");
    }
}
greet(null);
greet(undefined);
greet("Sun CD");
function getCustomer(id) {
    return id === 0 ? null : { birthDay: new Date() };
}
let customer = getCustomer(1);
if (customer != null && customer !== undefined) {
    console.log(customer.birthDay);
}
let customer1 = getCustomer(2);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthDay) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('Sun');
//# sourceMappingURL=index.js.map