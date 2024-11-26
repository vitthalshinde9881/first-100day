// Primitive

const { useInsertionEffect } = require("react");

// 7 types : string, Number, Boolean, null, undefine, symbol, BigInt

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 35656565;


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "vitthal", "shinde"]
let myObj = {
    name: "hitesh",
    age: 22,
}


const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);


// =========================================

//  Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharycom"

let anothername = myYoutubename
anothrname = "chaiaurcode"

console.log(myYoutubename);
console.log.apply(anothername);

let user = {
    email: "user@google.com"
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"


console.log(userOne.email);
console.log(userTwo.email);