let colors = generateRandomColor(6);

const squares = document.querySelectorAll('.square');
const h1 = document.querySelector('h1');
let pickedColor = colors[Math.floor(Math.random() * colors.length)];
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.getElementById('message');
const reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    reset.textContent = 'New Colors';
    h1.style.backgroundColor = "#232323";
    colors = generateRandomColor(6);
    pickedColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.textContent = pickedColor;

squares.forEach((square, color) => {
    const squareColor = colors[color]
    square.style.backgroundColor = squareColor;
})

})

colorDisplay.textContent = pickedColor;

squares.forEach((square, color) => {
    const squareColor = colors[color]
    // add initial colors
    square.style.backgroundColor = squareColor;
    // add click event
    square.addEventListener('click', () => {
        clickedColor = square.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct';
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            reset.textContent = 'Play again!'
        } else {
            square.style.backgroundColor = "#232323"
            messageDisplay.textContent = 'Try again';
        }
    })
});

const changeColors = (newColor) => {
    squares.forEach(square => {
        square.style.backgroundColor = newColor
    });
}

function generateRandomColor(num) {
    // add num random colors to array
    const arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }

    return arr;
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

