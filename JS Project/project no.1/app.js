const colors = ["green","red", "regba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B ", "C", "E", "F" ];

//   //

btn.addEventListener("click", function () {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    // console.log(hexColor);

    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor;
});
    function getRandomNumber() {
        return Math.floor(Math.random() * hex.length);
    }



btn.addEventListener("click", function () {
    const reandomNumber = getRandomNumber();
    //  console.log(randomNumber);

    document.body.style.background = colors[reandomNumber];
    color.textContent = colors[reandomNumber];
});

    function getElementById() {
        return Math.floor(Math.random() * colors.length);
    }