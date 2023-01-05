// 1-void
function withoutReturn() {
    console.log('This function has no return')
}
withoutReturn()

// 2-callback como argumento
function greeting(name: string) {
    return `Hello ${name}`
}
function preGreeting(f: (name: string) => string, userName: string) {
    console.log('Preparing the function')

    const greet = f(userName)

    console.log(greet)
}
preGreeting(greeting, 'Kenneth')

// 3-generic function
function firstElement<t>(arr: t[]): t {
    return arr[0]
}
console.log(firstElement([1, 2, 3]))
console.log(firstElement(['a', 'b', 'c']))

function mergeObject<U, T>(obj: U, obj2: T) {
    return {
        ...obj,
        ...obj2
    }
}
const newObject = mergeObject({ name: 'Kenneth' }, { age: 24, job: 'Developer' })
console.log(newObject)

//4-constraints
function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T
    if (+a > +b) {
        biggest = a
    } else {
        biggest = b
    }
    return biggest
}
console.log(biggestNumber(5, 3))
console.log(biggestNumber('12', '500'))

// 5-especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)
}
console.log(mergeArrays([5, 4, 3], [50, 49]))
console.log(mergeArrays<number | string>([50, 49, 48], ['teste', 'teste123']))

// 6-parametros opcionais
function modernGreeting(name: string, greet?: string) {
    
    if (greet) {
        return `Olá ${greet} ${name}, okay??`
    }

    return `Olá ${name}, okay??`
}
console.log(modernGreeting('Kenneth'))
console.log(modernGreeting('Adriana', 'Dra.'))

// 7-parametro default
function defaultSums(n:number, m = 10){
    return n + m
}
console.log(defaultSums(10))
console.log(defaultSums(15,50))

// 8-unknow
function doSomething(x:unknown){
    if(Array.isArray(x)){
        console.log(x[0])
    }else if(typeof x === 'number'){
        console.log('X is a number')
    }
}
doSomething([10, 50, 500])
doSomething('500')

// 9-never
function showErrorMessage(msg:string):never{
    throw new Error(msg)
}
// showErrorMessage('Some error!')

// 10-Rest operator
function sumAll(...n:number[]){
    return n.reduce((number, sum) => sum + number)
}
console.log(sumAll(1, 2, 50, 500, 6000))
console.log(sumAll(50, 500000, 6000))

// 11-DDestructuring em parâmetros
function showProductDetails({name, price}:{name:string, price:number}):string{
    return `The product name is ${name} and it costs USD ${price}`
}
const shirt = {name:'T-shirt', price: 495.99}
console.log(showProductDetails(shirt))