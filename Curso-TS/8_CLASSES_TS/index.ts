// 1-campos em classe
class User {
    name!:string
    age!:number
}
const kenneth = new User()
kenneth.name ='Kenneth'
kenneth.age =24
console.log(kenneth)

// 2-constructor
class NewUser {
    name
    age
    job

    constructor(name:string, age:number, job?:string){
        this.name = name
        this.age = age
        this.job = job
    }
}
const kennethOlusegun = new NewUser('Kenneth', 24, 'Developer')
const paulo = new NewUser('Paulo', 64)
console.log(kennethOlusegun)
console.log(paulo)

// 3-campos readonly
class Car {
    name
    readonly wheels = 4

    constructor(name:string){
        this.name = name
    }
}
const kicks = new Car('Kicks22/23')
console.log(kicks)

// 4-herança e super
class Machine {
    name

    constructor(name:string){
        this.name = name
    }
}
const tractor = new Machine('Tractor')

class KillerMachine extends Machine{
    guns

    constructor(name:string, guns:number){
        super(name)
        this.guns = guns
    }
}
const destroyer = new KillerMachine('Destroyer',4)
console.log(tractor)
console.log(destroyer)

// 5-métodos
class Dwarf {
    name 

    constructor(name:string){
        this.name = name
    }
    greeting(){
        console.log('I will destroy you!')
    }
}
const tolkien = new Dwarf('Tolkien')
console.log(tolkien.name)
tolkien.greeting()

// 6-this
class Truck {
    model
    hp

    constructor(model:string, hp:number){
     this.model = model
     this.hp = hp   
    }
    showDetails(){
        console.log(`Model truck:${this.model} ,which has ${this.hp} horsepower`)
    }
}
const volvo = new Truck('Volvo', 500)
const volkswagen = new Truck('Volkswagen', 700)
volvo.showDetails()
volkswagen.showDetails()

// 7-getters
class Person {
    name 
    surname

    constructor(name:string, surname:string){
        this.name = name
        this.surname = surname
    }
    get fullName(){
        return `The name is ${this.name} ${this.surname}`
    }
}
const kennethOlusegun1 = new Person('Kenneth Olusegun', 'Dornelles de Jesus')
console.log(kennethOlusegun1)

// 8-setter
class Coords {
    x!:number
    y!:number

    set fillX(x:number){
        if(x === 0){
            return
        }
        this.x = x
        console.log('X successfully inserted')
    }

    set fillY(y:number){
        if(y === 0){
            return
        }
        this.y = y
        console.log('Y successfully inserted')
    }

    get getCoords(){
        return `X:${this.x} and Y:${this.y}`
    }
}
const myCoords = new Coords()
myCoords.fillX = 50
myCoords.fillY = 100
console.log(myCoords)
console.log(myCoords.getCoords)

// 9-herança de interfaces
interface showTitle {
    itemTitle():string
}

class blogPost implements showTitle {
    title

    constructor(title:string){
        this.title = title
    }

    itemTitle(){
        return `The post title is:${this.title}`
    }
}
const myPost = new blogPost('Hello World')
console.log(myPost.itemTitle())

class TestingInterface implements showTitle {
    title

    constructor(title:string){
        this.title = title
    }

    itemTitle(){
        return `The title is:${this.title}`
    }
}

// 10-override de métodos
class Base {
    someMethod(){
        console.log('Something')
    }
}
class News extends Base {
    someMethod(){
        console.log('Testing other things')
    }
}
const myObject = new News()
myObject.someMethod()

// 11-public
class C {
    x = 10
}

class D {

}
const cInstance = new C()
console.log(cInstance.x)
const dInstance = new D()
console.log(dInstance)

// 12-protected
class E {
    protected x = 10

    protected protectedMethod(){
        console.log('This method is protected')
    }
}

class F extends E {
    showX(){
        console.log(`X:${this.x}`)
    }

    showProtectedMethod(){
        this.protectedMethod()
    }
}
const fInstance = new F()
fInstance.showX()
fInstance.showProtectedMethod()

// 13-private
class PrivateClass {
    private name = 'Private'

    showName(){
        return this.name
    }

    private privateMethod(){
        console.log('Private method!')
    }

    showPrivateMethod(){
        this.privateMethod()
    }
}
const pObj = new PrivateClass()
console.log(pObj.showName())
console.log(pObj.showPrivateMethod())

/* class TestingPrivate extends PrivateClass {
     myMethod(){
         this.showPrivateMethod()
    }
 }*/

// 14-static members
class StaticMembers {
    static prop = 'Static test'

    static staticMethod(){
        console.log('This is a static method')
    }
}
console.log(StaticMembers.prop)
StaticMembers.staticMethod()

// 15-generic class
class Item<T, U> {
    first
    second

    constructor(first:T, second:U){
        this.first = first
        this.second = second
    }

    get showFirst(){
        return `The first is: ${this.first}`
    }
}
const newItem = new Item('Box', 'surprise')
console.log(newItem)
console.log(newItem.showFirst)
console.log(typeof newItem.first)
const secondItem = new Item(12, true)
console.log(secondItem.showFirst)
console.log(typeof secondItem.first)

// 16-parameter properties
class ParameterProperties {
    constructor(public name:string, private qty:number, private price:number){
        this.name = name
        this.qty = qty
        this.price = price
    }

    get showQty(){
        return `Total amount:${this.qty}`
    }

    get showPrice(){
        return `Total price:${this.price}`
    }
}
const newShirt = new ParameterProperties('Polo shirt', 5, 50.99)
console.log(newShirt.name, newShirt.showPrice, newShirt.showQty)

// 17-class expressions
const myClass = class<T> {
    name

    constructor(name:T){
        this.name = name
    }
}
const person = new myClass('Kenneth')
console.log(person)
console.log(person.name)

// 18-abstract class
abstract class AbstractClass {
    abstract showName():void
}
// const newObj = new AbstractClass()

class AbstractExample extends AbstractClass {
    name:string

    constructor(name:string){
        super()
        this.name = name
    }

    showName(){
        console.log(`The name is:${this.name}`)
    }
}
const newAbstractObject = new AbstractExample('Kenneth Olusegun')
newAbstractObject.showName()

// 19-relações entre classes 
class Dog {
    name!:string
}

class Cat {
    name!:string
}
const puppy:Dog = new Cat()
console.log(puppy)