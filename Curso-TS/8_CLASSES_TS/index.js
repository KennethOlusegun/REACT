"use strict";
// 1-campos em classe
class User {
}
const kenneth = new User();
kenneth.name = 'Kenneth';
kenneth.age = 24;
console.log(kenneth);
// 2-constructor
class NewUser {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
}
const kennethOlusegun = new NewUser('Kenneth', 24, 'Developer');
const paulo = new NewUser('Paulo', 64);
console.log(kennethOlusegun);
console.log(paulo);
// 3-campos readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const kicks = new Car('Kicks22/23');
console.log(kicks);
// 4-herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const tractor = new Machine('Tractor');
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine('Destroyer', 4);
console.log(tractor);
console.log(destroyer);
// 5-métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log('I will destroy you!');
    }
}
const tolkien = new Dwarf('Tolkien');
console.log(tolkien.name);
tolkien.greeting();
// 6-this
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Model truck:${this.model} ,which has ${this.hp} horsepower`);
    }
}
const volvo = new Truck('Volvo', 500);
const volkswagen = new Truck('Volkswagen', 700);
volvo.showDetails();
volkswagen.showDetails();
// 7-getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return `The name is ${this.name} ${this.surname}`;
    }
}
const kennethOlusegun1 = new Person('Kenneth Olusegun', 'Dornelles de Jesus');
console.log(kennethOlusegun1);
// 8-setter
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log('X successfully inserted');
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log('Y successfully inserted');
    }
    get getCoords() {
        return `X:${this.x} and Y:${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 50;
myCoords.fillY = 100;
console.log(myCoords);
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `The post title is:${this.title}`;
    }
}
const myPost = new blogPost('Hello World');
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `The title is:${this.title}`;
    }
}
// 10-override de métodos
class Base {
    someMethod() {
        console.log('Something');
    }
}
class News extends Base {
    someMethod() {
        console.log('Testing other things');
    }
}
const myObject = new News();
myObject.someMethod();
// 11-public
class C {
    constructor() {
        this.x = 10;
    }
}
class D {
}
const cInstance = new C();
console.log(cInstance.x);
const dInstance = new D();
console.log(dInstance);
// 12-protected
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log('This method is protected');
    }
}
class F extends E {
    showX() {
        console.log(`X:${this.x}`);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethod();
// 13-private
class PrivateClass {
    constructor() {
        this.name = 'Private';
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log('Private method!');
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObj = new PrivateClass();
console.log(pObj.showName());
console.log(pObj.showPrivateMethod());
/* class TestingPrivate extends PrivateClass {
     myMethod(){
         this.showPrivateMethod()
    }
 }*/
// 14-static members
class StaticMembers {
    static staticMethod() {
        console.log('This is a static method');
    }
}
StaticMembers.prop = 'Static test';
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 15-generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `The first is: ${this.first}`;
    }
}
const newItem = new Item('Box', 'surprise');
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first);
const secondItem = new Item(12, true);
console.log(secondItem.showFirst);
console.log(typeof secondItem.first);
// 16-parameter properties
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Total amount:${this.qty}`;
    }
    get showPrice() {
        return `Total price:${this.price}`;
    }
}
const newShirt = new ParameterProperties('Polo shirt', 5, 50.99);
console.log(newShirt.name, newShirt.showPrice, newShirt.showQty);
// 17-class expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const person = new myClass('Kenneth');
console.log(person);
console.log(person.name);
// 18-abstract class
class AbstractClass {
}
// const newObj = new AbstractClass()
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`The name is:${this.name}`);
    }
}
const newAbstractObject = new AbstractExample('Kenneth Olusegun');
newAbstractObject.showName();
// 19-relações entre classes 
class Dog {
}
class Cat {
}
const puppy = new Cat();
console.log(puppy);
