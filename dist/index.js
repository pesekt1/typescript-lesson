"use strict";
var _a;
let number = 1;
number = 10;
console.log(number);
let level;
level = 1;
level = "1";
level = true;
level = {};
function render(document) {
    return document;
}
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => console.log(number / 2));
let user = [1, "Steve"];
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let go = Direction.Up;
console.log(go);
function calculateTax(income, taxYear = 2022) {
    console.log(`Calculating tax for ${taxYear}`);
    let tax = income * 0.4;
    return tax;
}
let tax = calculateTax(400000);
tax === null || tax === void 0 ? void 0 : tax.toString();
function sum(a, b) {
    return a + b;
}
sum(10, 20);
let employee = {
    id: 1,
    name: "Steve",
    printName: () => {
        console.log(employee.name);
    },
};
employee.printName();
let employee2 = {
    id: 2,
    name: "Steve",
    printName: () => {
        console.log(employee.name);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "string")
        return parseInt(weight) * 2.2;
    else
        return weight * 2.2;
}
kgToLbs(10);
kgToLbs("10");
let uiWidget = {
    drag: () => {
        console.log("dragging");
    },
    drop: () => {
        console.log("dropping");
    },
    resize: () => {
        console.log("resizing");
    },
};
uiWidget.drag();
uiWidget.drop();
uiWidget.resize();
let q = 50;
let d = "Up";
let distance = "mm";
function greet(name) {
    if (name)
        console.log(`Hello ${name}`);
}
greet(null);
greet(undefined);
greet("Steve");
function getCustomer(id) {
    console.log(`Fetching customer ${id}`);
    return { birthDate: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthDate) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = (message) => {
    console.log(message);
};
log = null;
log === null || log === void 0 ? void 0 : log("Hello world");
function doSomething(document) {
    if (typeof document === "string")
        console.log(document.toUpperCase());
}
doSomething(null);
function handleDocument(document) {
    if (document instanceof HTMLDivElement) {
        document.style.display = "none";
    }
}
function processEvents() {
    while (true) {
        console.log("processing");
    }
}
function reject(reason) {
    throw new Error(reason);
}
console.log("done");
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this.balance += amount;
    }
}
let account = new Account(1, "Steve", 100);
account.deposit(10);
if (account instanceof Account)
    console.log("Account");
class AccountBetter {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    getBalance() {
        console.log(`Account ID: ${this.id}`);
        return this.balance;
    }
}
let account2 = new AccountBetter(1, "Steve", 100);
//# sourceMappingURL=index.js.map