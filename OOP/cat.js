let catPrototype = {
    speak : function(){
        console.log(this.name ,  "it is mou maou mau")
    }
}

let cat = Object.create(catPrototype);
cat.name = "lucy";
cat.speak();
