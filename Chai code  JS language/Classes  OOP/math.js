const descripter = Object.getOwnPropertyDescriptor(Math)

//  console.log(Math.PI);
//  Math.PI = 5
//  console.log(Math.PI)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperties(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));