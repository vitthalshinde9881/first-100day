// // [{}, {}, {}]

//1 
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

//2

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
    
} 

//3
//  Maps 
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of array")
map.set('Fr', "France")
map.set('IN', "india")
// console.log(map);

//4
for (const key of map) {
    console.log(key, ':-', value);
}

//5
const myObject = {
    'game1': 'NFS',
    'game2': 'Spinderman'
}

for (const [key, value] of myObject) {
         // console.log(key, ':-', value);

}