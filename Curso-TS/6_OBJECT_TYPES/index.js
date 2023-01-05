"use strict";
function showProductDetails(product) {
    console.log(`The product name is ${product.name} and it costs USD ${product.price}`);
    if (product.isAvailable) {
        console.log('The product is available');
    }
    else {
        console.log('The product is not available');
    }
}
const shirt = {
    name: 'T-shirt',
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: 'Sneakers', price: 599.00, isAvailable: false });
function showUserDetails(user) {
    console.log(`The user has the e-mail: ${user.email}`);
    if (user.role) {
        console.log(`The role of this user is: ${user.role}`);
    }
}
const user = { email: 'kenneth@purplecats.tech', role: 'Admin' };
const user2 = { email: 'kennetholusegun@gmail.com' };
showUserDetails(user);
showUserDetails(user2);
const hb20 = {
    brand: 'hyun',
    wheels: 4
};
console.log(hb20);
let coords = {
    x: 100
};
coords.y = 50;
console.log(coords);
const kenneth = {
    name: 'Kenneth',
    age: 24
};
const naruto = {
    name: 'Naruto',
    age: 25,
    superpowers: ['Rasengan', 'Kurama Mode']
};
console.log(kenneth);
console.log(naruto, naruto.superpowers[0]);
const silvester = {
    name: 'Silvester',
    type: 'Rocket Launcher',
    caliber: 50
};
console.log(silvester, silvester.type);
// 7-readonly array
let myArray = ['Melancia', 'Bergamota', 'Maracujá'];
console.log(myArray);
myArray.forEach((item) => {
    console.log('Fruta:' + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [10, 200, 3000, 40000, 500000];
console.log(myNumberArray);
const anotherUser = ['Kenneth', 24];
console.log(anotherUser[0]);
anotherUser[0] = 'Kenneth Olusegun';
console.log(anotherUser);
// 9-tuplas com readonly
function showNUmbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNUmbers([100, 50000]);
