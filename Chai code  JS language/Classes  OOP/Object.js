/* 
function multipleBy5(num) {
    return num * 5;
}

multipleBy5.power = 2;

console.log(multipleBy5(5));        // Corrected function name
console.log(multipleBy5.power);     // Accessing the custom property
console.log(multipleBy5.prototype); // Accessing the prototype property
*/

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increament = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = createUser("chai",25)
const tea = createUser("tea", 250)

chai.printMe()