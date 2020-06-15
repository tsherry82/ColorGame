let colors = generateRandomColor(6);

const squares = document.querySelectorAll('.square');
let pickedColor = colors[Math.floor(Math.random() * colors.length)];
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.getElementById('message')

colorDisplay.textContent = pickedColor;

squares.forEach((square, color) => {
    const squareColor = colors[color]
    // add initial colors
    square.style.backgroundColor = squareColor;
    // add click event
    square.addEventListener('click', () => {
        clickedColor = square.style.backgroundColor;
        if(clickedColor === pickedColor){
           messageDisplay.textContent = 'Correct';
           changeColors(clickedColor)
        } else {
            square.style.backgroundColor     = "#232323" 
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
    for(var i = 0; i < num; i++){
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

