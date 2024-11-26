//  Dates


let myDate = new Date();
console.log(myDate.toSpring());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreateDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocalString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()


// '${newDate.getDay()} and the time '

newDate.toLocaleString('default', {
    weekday: "long",
})



