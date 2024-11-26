//  array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "nijar"]


const myArra2 = new Array (1, 2, 3, 4, 5)
console.log(myArr[1]);

//  Array methods


//  myArr.push(6)
//  myArr.push(7)
//  myArr.pop()

//myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
//  console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log( newArr);

// slice, splice 

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);


/* Basic Array Methods
1. Creation and Initialization
Array Constructor: new Array() creates an array.
Array Literal: const arr = [1, 2, 3]; is the preferred way to create arrays.

2. Accessing Elements
Length: array.length returns the number of elements in the array.
Indexing: Access elements using array[index], where indexing starts at 0. */


// 3.   Adding Element

const fruits = ['Apple', 'Banana'] 
fruits.push('Orange');  // ['Apple','Banana', 'Orange']

fruits.unshift('Mango'); // ['Mango', 'Apple', 'Banana', 'Orange']

// 4. Removing Elements

const lastFruit = fruits.pop();  // Removes 'Mango'

const firstFruit = fruits.shift();  //  Remove 'Mango'

// 5. Modifing Elements 

fruits.splice(1, 1, 'kiwi');  // Removes 'Apple' and adds 'kiwi' at index 1

