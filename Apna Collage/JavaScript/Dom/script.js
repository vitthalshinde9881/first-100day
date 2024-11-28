// let newBtn = document.createElement("button");
// newBtn.innerText = "click me"
// console.log(newBtn);

let div = document.querySelector("div");
// div.append(newBtn);

let newHeadline = document.createElement("h1")
newHeadline.innerHTML = "<i>Hi, I am new !</i>";

document.querySelector("body").prepend(newHeadline);

// let para = document.querySelector("p")
// para.remove("p");

// newHeading.remove();


let newBtn = document.createElement("button");
newBtn.innerHTML = "click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);


//Qs
let para = document.querySelector("p");