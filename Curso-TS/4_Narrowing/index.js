"use strict";
// 1-type guard
function sum(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
    else {
        console.log('Impossível realizar a soma!');
    }
}
sum('4', '59990');
sum(4, 59990);
// 2-checando se valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === 'sum') {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === 'multiply') {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log('Please, define an operation!');
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], 'sum');
operations([2, 20, 500], 'multiply');
// 3-instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(name) {
        super(name);
    }
}
const paulo = new User('Paulo');
const kenneth = new SuperUser('Kenneth');
console.log(paulo);
console.log(kenneth);
function userAccess(user) {
    if (user instanceof SuperUser) {
        console.log(`Hello ${user.name} welcome to the store admin panel`);
    }
    else if (user instanceof User) {
        console.log(`Hello ${user.name}, you do not have access to this system`);
    }
}
userAccess(kenneth);
userAccess(paulo);
// 4-in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const bruce = new Dog('Bruce');
const rafa = new Dog('Rafa', 'German Shepherd');
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`The dog is of the breed ${dog.breed}`);
    }
    else {
        console.log('The dog is a SRD');
    }
}
showDogDetails(bruce);
showDogDetails(rafa);
// Desafio 3
function users(review) {
    let stars = [1, 2, 3, 4, 5];
    if (typeof review === 'boolean') {
        console.log(`The user is note ${stars[3]}`);
    }
    else if (typeof review === 'number') {
        console.log(`The user is note ${stars[0]}`);
    }
    else {
        console.log(false);
    }
}
users(true);
users(5000);
