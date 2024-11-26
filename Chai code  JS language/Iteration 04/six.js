const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    // console.log(item);
    // return item
})

// console.log(values)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

const newNums = myNums.filter( (num)=> {
    // return num > 4

})
//  console.log(newNums)

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

// console.log(newNums);

// 1.

let numbers = [1, 2, 3, 4];
let doubled = [];

for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

console.log(doubled);  // Output: [2, 4, 6, 8]


// 2.

let numbers = [1, 2, 3, 4];

// Using map to double each number
let doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled);  // Output: [2, 4, 6, 8]
