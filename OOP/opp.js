//  How to work constructor

let person = {name:"vitthal",age:24,city:"Jalna"};

console.log(person.city);

let rectangle = {
    length : 5,
    breadth : 7,
    area : function(){
        return this.length*this.breadth;
    }
}

console.log("This is the area of rectangle",rectangle.area());
console.log(rectangle.length);
console.log(rectangle.breadth);
