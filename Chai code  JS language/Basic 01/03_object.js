//  object literals
const JsUser = {
    name: "Hitesh",
    age: 18,
    "full name": "vitthal shinde",
    location: "Jaipur",
    email: "vitthalshinde",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log();(JsUser ["full name"]);
// console.log(JsUser["email"]);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log("Hello JS user");
}