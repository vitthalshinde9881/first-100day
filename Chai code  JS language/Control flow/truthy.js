// const userEmail = "h@hitesh.ai"

// if (userEmail) {
//     console.log("Got user email")
// } else {
//     console.log("Don't have user email");
// }

// falsy values

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy vallues
// "0", 'false', " ", [], {}, function(){}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    // console.log("object is empty");
}

// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15/
// val1 = null ?? 10 ?? 20

// Terniary Operator 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log
("more than 80")
console.log(iceTeaPrice);