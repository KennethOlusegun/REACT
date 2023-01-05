// 1-arrays
let numbers: number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers)
console.log(numbers[2])

// numbers = 'teste'

const names: string[] = ['Kenneth', 'Paulo']

// names.push(5)

console.log(names[0])

// 2-outra sintaxe array
const nums: Array<number> = [100, 500, 1000]

nums.push(300)

console.log(nums)

// 3- any
const arr1: any = [1, 'Teste', true, [], { name: 'Kenneth' }]

console.log(arr1)

arr1.push(500)

console.log(arr1)

// 4-tipo de parametro de função
function average(a: number, b: number) {
    console.log(a + b / 2)
}

average(50, 500)

// 5- retorno de função
function greeting(name: string): string {
    return `Hello ${name}`
}

console.log(greeting('Kenneth'))

// 6- função anonima
setTimeout(function () {

    const sallary: number = 2600

    //console.log(parseFloat(sallary))
    console.log(sallary)

}, 2000)

// 7-tipos de objetos
function parseCoordinates(coord: { x: number, y: number }) {
    console.log('X cordinates' + coord.x)
    console.log('Y cordinates' + coord.y)
}

const objCoord = { x: 329, y: 84.2 }

parseCoordinates(objCoord)

const personObj: { name: string, surname: string } = { name: 'Kenneth', surname: 'Jesus' }

console.log(personObj)

// 8-props opcionais
function showNumbers(a: number, b: number, c?: number) {
    console.log(`A: ${a}`)
    console.log(`B: ${b}`)
    if (c) {
        console.log(`C: ${c}`)
    }
}

showNumbers(1, 5, 500)
showNumbers(4, 1000)

// 9-validando argumento opcional
function advancedGreeting(firstName:string, lastName?:string){
    if(lastName !== undefined){
        return `Hello, ${firstName} ${lastName}, okay?`
    }
    return `Hello ${firstName}, okay?`
}

console.log(advancedGreeting('Kenneth', 'Jesus'))
console.log(advancedGreeting('Kenneth'))

// 10-union types
function showBalance(balance:string | number){
    console.log(`O saldo da conta é R$${balance}`)
}

showBalance(100)
showBalance('5000')

const arr2:Array<number | string | boolean> = [1, 'Teste', true]
console.log(arr2)

// 11-avançando em union types
function shoeUserRole(role:boolean | string){
    if(typeof role === 'boolean'){
        return 'Usuário não aprovado!'
    }
    return `A função do usuário é: ${role}`
}

console.log(shoeUserRole(false))
console.log(shoeUserRole('Admin'))

// 12-type alias
function showId(id:string | number){
    console.log(`O ID é: ${id}`)
}

showId(1)
showId('200')

// 13-Interfaces
interface Point{
    x:number
    y:number
    z:number
}
function showCoord(obj:Point){
    console.log(`x:${obj.x} y:${obj.y} z:${obj.z}`)
}
const coordObj:Point = {
    x:10,
    y:15,
    z:20
}
showCoord(coordObj)

// 14-Interface x TYpe alias
interface Person {
    name:string
    age:number
}
const somePerson:Person = {name:'Kenneth', age:24}
console.log(somePerson)

type personType = {
    name:string
    age:number
}

const somePerson1:personType = {name:'Paulo', age:64}
console.log(somePerson1)

// 15-literal types
let testando: 'testando'
testando = 'testando'
console.log(testando)
function showDirection(direction:'left'|'right'|'center'){
    console.log(`A direcão é: ${direction}`)
}
showDirection('left')
//showDirection('top')

// 16-non null assertion operators
const p = document.getElementById('some-p')
console.log(p!.innerText)

// 17-bigint
let n:bigint

n = 1000n

console.log(n + 5000n /2n)

// 18-symbol
let symbolA:symbol = Symbol('a')
let symbolB:symbol = Symbol('a')

// eslint-disable-next-line eqeqeq
console.log(symbolA == symbolB)
console.log(symbolA === symbolB)