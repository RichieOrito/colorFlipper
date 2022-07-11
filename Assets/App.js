const colors = ["green", "red", "rgba(0,0,255,0.3)", "#1A4D2E", "#FF9F29", "#610C63", "Teal", "rgba(233, 218, 193)"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    //get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}