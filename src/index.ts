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

//Intersection Type
type Draggable = {
    drag: () => void
};
type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
}

//Literal Type (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

//Nullable Type
function greet(word: string | null | undefined) {
    if (word) {
        console.log(word)
    } else {
        console.log("Hello | xin chào!!!");
    }
}
greet(null);
greet(undefined);
greet("Sun CD");

//Optional Chaining
type Customer = {
    birthDay?: Date
};

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthDay: new Date() };
}

let customer = getCustomer(1);
//First way:
if (customer != null && customer !== undefined) {
    console.log(customer.birthDay);
}

//Second way - Using with Optional property access operator
let customer1 = getCustomer(2);
console.log(customer?.birthDay?.getFullYear())

//Optional element access operator
//customers?.[0]

//Optional call
let log: any = null;
log?.('Sun');

