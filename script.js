const board = document.querySelector('#board');
//const randomColor = ['red' , 'blue', 'orange', 'yellow', 'magenta', 'green'];
const squares_number = 520;

for(let i=0; i < squares_number; i++) {
    const square = document.createElement('div')
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColor(square));

    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
}


function setColor(element) {

    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    //const color = getRandomColor();
    const color = '#' + randomColor;
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000'
}

// function getRandomColor() {
//     const index = Math.floor(Math.random() * colors.length)
//     return colors[index]
// }