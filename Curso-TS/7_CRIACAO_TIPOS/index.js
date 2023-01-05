"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1-generics
function showData(arg) {
    return `The data is:${arg}`;
}
console.log(showData(5));
console.log(showData('Testing generics'));
// 2-constraint generics
function showProductName(obj) {
    return `The product name is:${obj.name}`;
}
const myObj = { name: 'Door', color: 'Black' };
const otherProduct = { name: 'Car', wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: 'Clothing' };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = { name: 'Kicks', wheels: 4, engine: 1.6 };
const myPen = { name: 'BIC Pen', wheels: false, engine: true };
console.log(myCar);
console.log(myPen);
// 4-type parameters
function getSomeKey(obj, key) {
    return `The key ${key} is present in the object and has the value of ${obj[key]}`;
}
const server = {
    hdd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: 'Kenneth',
    age: 24,
    hasDriveLicense: true
};
const myChar2 = {
    name: 'Érika',
    age: 17,
    hasDriveLicense: false
};
console.log(showCharName(myChar2, 'name'));
console.log(showCharName(myChar, 'hasDriveLicense'));
// 6-typeof type operator
const userName = 'Kenneth';
const userName2 = 'Paulo';
const userName3 = 'José';
console.log(userName);
const newTruck = {
    km: 10000,
    kg: 7000,
    description: 'Truck for heavy loads'
};
function showKm(km) {
    console.log(`The vehicle has mileage of:${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 500,
    kg: 2000
};
showKm(newCar.km);
const someVar = 500;
const testing = 'some text';
