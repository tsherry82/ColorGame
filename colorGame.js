let numSquares = 6;
let colors = generateRandomColor(numSquares);
const squares = document.querySelectorAll('.square');
const h1 = document.querySelector('h1');
let pickedColor = colors[Math.floor(Math.random() * colors.length)];
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.getElementById('message');
const reset = document.querySelector('#reset');
const mode = document.querySelectorAll('.mode');

mode.forEach(e => {
    e.addEventListener('click', () => {
        mode[0].classList.remove('selected');
        mode[1].classList.remove('selected');
        e.classList.add('selected');
        e.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
        resetGame();
    })
});

function resetGame() {
    reset.textContent = 'New Colors';
    h1.style.backgroundColor = "steelBlue";
    colors = generateRandomColor(numSquares);
    pickedColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = '';
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
}

reset.addEventListener('click', () => {
    resetGame();
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

