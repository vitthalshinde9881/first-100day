class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(this.name , "is making noice")
    }
}

new myDog = new Animal ("sheru");
console.log(myDog.name);
console.log.speak();