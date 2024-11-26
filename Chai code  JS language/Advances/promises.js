// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async tack
//     // DB calls, cryptogrphy, network
//     setTimeout(function(){
//         // console.log('Async task is compelete');
//         resolve()
//     }, 5000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         // console.log("Async task 2");
//         resolve()
//     }, 1000)
// }).then(function(){
//     // console.log("Async 2 resolved")
// })


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "chai", email: "chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     // console.log(user);
// })



// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })


// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function(error) {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("The promise is either resolved or rejected");
//   });


//     promiseFive = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             let error = true
//             if (!error) {
//                 resolve({username: "JavaScript", password: "123"})
//             } else {
//                 reject('ERROR: JS went wrong ')
//             }
//         }, 1000)
//     })

//     async function consumePromiseFive({
//         await promiseFive
//     })

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://api.github.com/users/mojombo');

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error fetching users: ", error);
//     }
// }

// getAllUsers();


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/mojombo');

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }


// }

// getAllUsers()


fetch('https://api.github.com/users/mojombo')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error => console.log(error)))