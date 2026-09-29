const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    // get random number
    const randmNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randmNumber];
    color.textContent = colors[randmNumber];
})

// function for random number
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}