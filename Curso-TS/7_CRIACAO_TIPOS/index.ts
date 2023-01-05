import { type } from "@testing-library/user-event/dist/type"

// 1-generics
function showData<T>(arg:T):string{
    return `The data is:${arg}`
}
console.log(showData(5))
console.log(showData('Testing generics'))

// 2-constraint generics
function showProductName<T extends {name:string}>(obj:T){
    return `The product name is:${obj.name}`
}
const myObj={name:'Door', color:'Black'}
const otherProduct={name:'Car', wheels:4, engine:1.0}
const thirdObj={price:19.99, category:'Clothing'}
console.log(showProductName(myObj))
console.log(showProductName(otherProduct))
// console.log(showProductName(thirdObj))

// 3-interfaces com generics
interface MyObject<T, U>{
    name:string
    wheels:T
    engine:U
}
type Car=MyObject<number, number>
type Pen=MyObject<boolean, boolean>
const myCar:Car={name:'Kicks', wheels:4, engine:1.6}
const myPen:Pen={name:'BIC Pen', wheels:false, engine:true}
console.log(myCar)
console.log(myPen)

// 4-type parameters
function getSomeKey<T, K extends keyof T>(obj:T, key:K){
    return `The key ${key} is present in the object and has the value of ${obj[key]}`
}
const server={
    hdd:'2TB',
    ram:'32GB'
}
console.log(getSomeKey(server, 'ram'))

// 5-keyof type operator
type Character = {name:string, age:number, hasDriveLicense:boolean}
type C = keyof Character
function showCharName(obj:Character, name:C):string{
    return `${obj[name]}`
}
const myChar:Character = {
    name:'Kenneth',
    age:24,
    hasDriveLicense:true
}
const myChar2:Character = {
    name:'Érika',
    age:17,
    hasDriveLicense:false
}
console.log(showCharName(myChar2, 'name'))
console.log(showCharName(myChar, 'hasDriveLicense'))

// 6-typeof type operator
const userName:string = 'Kenneth'
const userName2:typeof userName = 'Paulo'
type x = typeof userName
const userName3:x = 'José'
console.log(userName)

// 7-indexed access types
type Truck = {km:number, kg:number, description:string}
type Km = Truck['km']
const newTruck:Truck = {
    km:10000,
    kg:7000,
    description:'Truck for heavy loads'
}
function showKm(km:Km){
    console.log(`The vehicle has mileage of:${km}`)
}
showKm(newTruck.km)
const newCar = {
    km:500,
    kg:2000
}
showKm(newCar.km)

// 8-conditional types
interface A {}
interface B extends A {}
interface Teste {
    showName():string
}
type myType = B extends A ? number : string
const someVar:myType = 500
// const someVar2:myType = 'Testing'
type myTypeB = Teste extends {showNumber:number} ? string : boolean

// 9-template literals type
type testA = 'text'
type CustomType = `some ${testA}`
const testing:CustomType = 'some text'
type a1 = 'testing'
type a2 = 'union'
type a3 = `${a1}` | `${a2}`