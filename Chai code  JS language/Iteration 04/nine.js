// const myNums = [1, 2, 3]

// // const myTotal = myNums.reduce(function (acc, currval) {
// //     console.log(`acc: ${acc} and currval: ${currval}`);
// //     return acc + currval 
// // }, 0)/

// // const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)

// // console.log(myTotal);

// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "java course",
//         price: 3000
//     },
//     {
//         itemName: "datascience",
//         price: 12000
//     },
// ]


// console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval

// const priceTopay = shoppingCart.reduce((acc, item) => acc + item.price,0)

// // console.log(priceTopay);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 3000
    },
    {
        itemName: "datascience",
        price: 12000
    },
];

// Use reduce to calculate the total price
const priceTopay = shoppingCart.reduce((acc, item) => {
    // Log accumulator and current item price for each iteration
    console.log(`acc: ${acc} and currval: ${item.price}`);
    return acc + item.price;
}, 0); // Initial accumulator value is 0

console.log(`Total price to pay: ${priceTopay}`);
