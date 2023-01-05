// 1-tipo de objeto para função com interface 
interface Product{
    name:string
    price:number
    isAvailable:boolean
}
function showProductDetails(product:Product){
    console.log(`The product name is ${product.name} and it costs USD ${product.price}`)
    if(product.isAvailable){
        console.log('The product is available')
    }else {
        console.log('The product is not available')
    }
}
const shirt:Product={
    name:'T-shirt',
    price:19.99,
    isAvailable:true
}
showProductDetails(shirt)
showProductDetails({name:'Sneakers', price:599.00, isAvailable:false})

// 2-propriedade opcional com interface 
interface User{
    email:string
    role?:string
}
function showUserDetails(user:User){
    console.log(`The user has the e-mail: ${user.email}`)
    if(user.role){
        console.log(`The role of this user is: ${user.role}`)
    }
}
const user:User = {email:'kenneth@purplecats.tech', role:'Admin'}
const user2:User = {email:'kennetholusegun@gmail.com'}

showUserDetails(user)
showUserDetails(user2)

// 3-readonly
interface Car{
    brand:string
    readonly wheels:number
}
const hb20:Car={
    brand:'hyun',
    wheels:4
}
console.log(hb20)

// 4-index signature
interface CoordObject{
    [index:string]:number
}
let coords:CoordObject={
    x:100
}
coords.y = 50
console.log(coords)

// 5-extending types
interface Human{
    name:string
    age:number
}
interface SuperHuman extends Human{
    superpowers:string[]
}
const kenneth:Human={
    name:'Kenneth',
    age:24
}
const naruto:SuperHuman={
    name:'Naruto',
    age:25,
    superpowers:['Rasengan', 'Kurama Mode']
}
console.log(kenneth)
console.log(naruto,naruto.superpowers[0])

// 6-intersection types
interface Character{
    name:string
}
interface Gun{
    type:string
    caliber:number
}
type HUmanWithGun = Character & Gun
const silvester:HUmanWithGun={
    name:'Silvester',
    type:'Rocket Launcher',
    caliber:50
} 
console.log(silvester, silvester.type)

// 7-readonly array
let myArray:ReadonlyArray<string>=['Melancia', 'Bergamota', 'Maracujá']
console.log(myArray)
myArray.forEach((item)=>{
    console.log('Fruta:' + item)
})
myArray=myArray.map((item)=>{
    return`Fruta: ${item}`
})
console.log(myArray)

// 8-tuplas
type fiveNumbers = [number, number, number, number, number]
const myNumberArray:fiveNumbers = [10, 200, 3000, 40000, 500000]
console.log(myNumberArray)
type nameAndAge = [string, number]
const anotherUser:nameAndAge = ['Kenneth', 24]
console.log(anotherUser[0])
anotherUser[0] = 'Kenneth Olusegun'
console.log(anotherUser)

// 9-tuplas com readonly
function showNUmbers(numbers:readonly[number, number]){
    console.log(numbers[0])
    console.log(numbers[1])
}
showNUmbers([100, 50000])