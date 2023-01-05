"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1-primeiro decorator
function myDecorator() {
    console.log('Starting decorator!');
    return function (target, propertyKey, descriptor) {
        console.log('Running decorator');
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class myClass {
    testing() {
        console.log('Ending method execution');
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing();
// 2-múltiplos decorators
function c() {
    return function (target, propertyKey, descriptor) {
        console.log('Perfomed c.');
    };
}
function a() {
    return function (target, propertyKey, descriptor) {
        console.log('Perfomed a.');
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log('Perfomed b.');
    };
}
class MultipleDecorator {
    testing() {
        console.log('Ending execution');
    }
}
__decorate([
    a(),
    b(),
    c()
], MultipleDecorator.prototype, "testing", null);
const multiple = new MultipleDecorator();
multiple.testing();
// 3-class decorator 
function classDec(constructor) {
    console.log(constructor);
    if (constructor.name === 'User') {
        console.log('Creating user!');
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec
], User);
const kenneth = new User('Kenneth');
console.log(kenneth);
// 4-method of decorator
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `The machine name is:${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const tractor = new Machine('Tractor');
console.log(tractor.showName());
// 5-accessor decorator
class Pokemon {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Pokemon name:${this.name}`;
    }
    get showAge() {
        return `Pokemon age:${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Pokemon.prototype, "showName", null);
const charmander = new Pokemon('Charmander', 15);
console.log(charmander);
// 6-property decorator
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, '0');
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID('5000');
console.log(newItem.id);
// 7-class decorator/exemplo real
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book(150);
const newPen = new Pen(50);
console.log(newBook);
console.log(newPen);
console.log(newBook.createdAt);
// 8-method decorator/exemplo real
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log('User already posted!');
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`User post:${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post('My first post!', newPost.alreadyPosted);
newPost.post('My second post!', newPost.alreadyPosted);
newPost.post('My third post!', newPost.alreadyPosted);
// 9-property decorator/exemplo real
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`The value must be at most ${limit} digits.`);
                return;
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(15)
], Admin.prototype, "username", void 0);
const kennethOl = new Admin('kennethadmin12345');
const leandro = new Admin('Leandro');
console.log(leandro);
