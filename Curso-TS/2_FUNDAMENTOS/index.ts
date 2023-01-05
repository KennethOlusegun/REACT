// 1-number
let x: number = 10

console.log(x)

x = 16 

console.log(typeof x)

const y:number = 15.584848

console.log(typeof y)

console.log(y)

console.log(y.toPrecision(3))

// 2-string
const firstName:string = 'Kenneth'

console.log(firstName.toUpperCase())

let fullName:string

const lastName:string = 'Dornelles'

fullName = `Meu nome é ${firstName} ${lastName}`

console.log(fullName)

console.log(typeof fullName)

// 3-boolean
let a:boolean = false

console.log(a)
console.log(typeof a)

// 4-inference e annotation
const ann:string = 'Teste'

let inf = 'Teste'

// ann = 1
// inf = 1


// DESAFIO 2

let b: number = 12
let str: string = b.toString()
const printMyNumber:string = `Eu vou imprimir o número ${str}`
console.log(printMyNumber)