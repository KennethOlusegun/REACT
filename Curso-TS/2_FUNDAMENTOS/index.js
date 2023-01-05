"use strict";
// 1-number
let x = 10;
console.log(x);
x = 16;
console.log(typeof x);
const y = 15.584848;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
// 2-string
const firstName = 'Kenneth';
console.log(firstName.toUpperCase());
let fullName;
const lastName = 'Dornelles';
fullName = `Meu nome é ${firstName} ${lastName}`;
console.log(fullName);
console.log(typeof fullName);
// 3-boolean
let a = false;
console.log(a);
console.log(typeof a);
// 4-inference e annotation
const ann = 'Teste';
let inf = 'Teste';
// ann = 1
// inf = 1
// DESAFIO 2
let b = 12;
let str = b.toString();
const printMyNumber = `Eu vou imprimir o número ${str}`;
console.log(printMyNumber);
