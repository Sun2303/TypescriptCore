let age: number = 20;
if (age < 50)
    age += 10;
console.log(age);

let user: [number, string, boolean] = [1, 'a', true];

//PascalCase
const enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Large;
console.log(mySize);

function calculateTax(income: number, taxYear = 2024): number {
    if (taxYear < 2023) {
        return income * 1.5;
    }
    return income * 2;
}
console.log(calculateTax(100, 2021));

//Type Aliases
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

//Objects
let employee: Employee = {
    id: 1,
    name: 'Sun',
    retire: (date: Date) => {
        console.log(date);
    },
}

let sun: Employee = {
    id: 2,
    name: 'Sun CD',
    retire: (date: Date) => {
        console.log(date);
    }
}

//Union Type
function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number') {
        return weight * 2.0;;
    } else {
        return parseInt(weight) * 1.5;
    } 
}

