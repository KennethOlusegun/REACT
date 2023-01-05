// 1-primeiro decorator
function myDecorator() {
    console.log('Starting decorator!')
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('Running decorator')
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
    }
}

class myClass {
    @myDecorator()
    testing() {
        console.log('Ending method execution')
    }
}
const myObj = new myClass()
myObj.testing()

// 2-múltiplos decorators
function c() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('Perfomed c.')
    }
}

function a() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('Perfomed a.')
    }
}

function b() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('Perfomed b.')
    }
}


class MultipleDecorator {
    @a()
    @b()
    @c()
    testing() {
        console.log('Ending execution')
    }
}
const multiple = new MultipleDecorator()
multiple.testing()

// 3-class decorator 
function classDec(constructor: Function) {
    console.log(constructor)
    if (constructor.name === 'User') {
        console.log('Creating user!')
    }
}

@classDec
class User {
    name

    constructor(name: string) {
        this.name = name
    }
}
const kenneth = new User('Kenneth')
console.log(kenneth)

// 4-method of decorator
function enumerable(value: boolean) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = value
    }
}

class Machine {
    name

    constructor(name: string) {
        this.name = name
    }

    @enumerable(false)
    showName() {
        console.log(this)
        return `The machine name is:${this.name}`
    }
}
const tractor = new Machine('Tractor')
console.log(tractor.showName())

// 5-accessor decorator
class Pokemon {
    name?
    age?

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    @enumerable(true)
    get showName() {
        return `Pokemon name:${this.name}`
    }

    get showAge() {
        return `Pokemon age:${this.age}`
    }
}
const charmander = new Pokemon('Charmander', 15)
console.log(charmander)

// 6-property decorator
function formatNumber() {
    return function (target: object, propertyKey: string) {
        let value: string

        const getter = function () {
            return value
        }

        const setter = function (newVal: string) {
            value = newVal.padStart(5, '0')
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        })
    }
}

class ID {
    @formatNumber()
    id

    constructor(id: string) {
        this.id = id
    }
}
const newItem = new ID('5000')
console.log(newItem.id)

// 7-class decorator/exemplo real
function createdDate(created: Function) {
    created.prototype.createdAt = new Date()
}

@createdDate
class Book {
    id
    createdAt?: Date

    constructor(id: number) {
        this.id = id
    }
}

@createdDate
class Pen {
    id

    constructor(id: number) {
        this.id = id
    }
}
const newBook = new Book(150)
const newPen = new Pen(50)
console.log(newBook)
console.log(newPen)
console.log(newBook.createdAt)

// 8-method decorator/exemplo real
function checkIfUserPosted() {
    return function (
        target: Object,
        key: string | Symbol,
        descriptor: PropertyDescriptor
    ) {
        const childFunction = descriptor.value
        console.log(childFunction)
        descriptor.value = function (...args: any[]) {
            if (args[1] === true) {
                console.log('User already posted!')
                return null
            } else {
                return childFunction.apply(this, args)
            }
        }
        return descriptor
    }
}

class Post {
    alreadyPosted = false

    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean) {
        this.alreadyPosted = true
        console.log(`User post:${content}`)
    }
}
const newPost = new Post()
newPost.post('My first post!', newPost.alreadyPosted)
newPost.post('My second post!', newPost.alreadyPosted)
newPost.post('My third post!', newPost.alreadyPosted)

// 9-property decorator/exemplo real
function Max(limit: number) {
    return function (target: Object, propertyKey: string) {
        let value: string

        const getter = function () {
            return value
        }

        const setter = function (newVal: string) {
            if (newVal.length > limit) {
                console.log(`The value must be at most ${limit} digits.`)
                return
            } else {
                value = newVal
            }
        }
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        })
    }
}

class Admin {
    @Max(15)
    username

    constructor(username: string) {
        this.username = username
    }
}
const kennethOl = new Admin('kennethadmin12345')
const leandro = new Admin('Leandro')
console.log(leandro)