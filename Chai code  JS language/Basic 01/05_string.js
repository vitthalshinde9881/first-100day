const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log('Hello my name is ${name} and my repo count is $ {repoCount}');

const gameName = new String('hiteshhc')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase(2));
console.log(gameName.charAt('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

url.replace('%20', '-')

console.log(gameName.split('_'));




// 1.'charAt(index)'

let str = "Hello"
console.log(str.charAt(1)) // outputs: "e"

// 2. 'concat()'

let str1 = "Hello";
let str2 = "World";
let result = str1.concat(" ", str2);
console.log(result); // outputs: "Hello World"

// 3. 'indexOf(searchValue)'

let str = "Hello World";
console.log(str.indexOf("0"));  // Outputs: 4

// 4. 'lastIndeOf(searchValue)'

let str = "Hello World";
console.log(str.lastIndexOf("o"))

//5. 'toLowerCase()'
console.log(str.toLowerCase()); // outputs: "hello world"

// .6 'toUpperCase()'
let str = "Hello World";
console.log(str.toUpperCase());  // outputs: "HELLO WORLD"

// 7. 'slice(beginIndex, endIndex)'
let str = "Hello world";
console.log(str.slice(0, 5)); // outputs: "Hello"


// 8. 'trim()'
let str = "     Hello World     ";
console.log(str.trim());    //  outputs: "Hello World"

// 9. 'split(separator)'
let str = "apple,banana,cherry";
let fruits = str.split(",");
console.log(fruits); // outputs: ["apple", "banana", "cherry"]


// 10. replace(searchValue, newValue)'

let str = "Hello World";
let newStr = str.replace("World", "JavaScript");


// 11.'replaceAll(SearchValue, newValue)'

let str = "Hello World, Welcome to the World";
let newStr = str.replaceAll("World", "javaScript");
console.log(newStr); // outputs: "Hello JavaScript, welcome to the javaScript"


// 12. padStart(targetLength, padString)'
let str = "5";
console.log(str.padStart(2, '0')); outputs: "05"


// 13. 'padEnd(targetLength, padString)'
let str = "5";
console.log(str.padEnd(2, '0')); // Outputs: "50"