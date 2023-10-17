// Main container selector
const container = document.querySelector('.container');

// Central grid matrix
const matrix = document.createElement('div');
matrix.classList.add('matrix');
container.appendChild(matrix);

// 16x16 cells generation
function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        let cells = document.createElement('div');
        cells.classList.add('cells');
        matrix.appendChild(cells);
    }
}

// Default 16x16 grid
createGrid(16);

// Default size initializer
if (gridSize = undefined) { gridSize = 16 }

// Change grid size //! Resize cell divs
const sizeButton = document.getElementById('size-btn');
sizeButton.addEventListener('click', () => {
    const gridSize = prompt('Enter the desired size (minimum of 1x1)\n(default  is 16x16 and the max is 100x100)');
    createGrid(gridSize);
});

// Random color mode //? CSS random colors
const rainbowButton = document.getElementById('rainbow-btn');
rainbowButton.addEventListener('click', () => {
    rainbowButton.style.borderColor = 'yellow';
    rainbowButton.style.color = 'yellow';
    blackButton.style.borderColor = 'black';
    blackButton.style.color = 'white';
});

// Black color mode
const blackButton = document.getElementById('black-btn');
blackButton.addEventListener('click', () => {
    blackButton.style.borderColor = 'yellow';
    blackButton.style.color = 'yellow';
    rainbowButton.style.borderColor = 'violet';
    rainbowButton.style.color = 'white';
});

// Reset grid canvas
const resetButton = document.getElementById('reset-btn');
const gridCells = document.querySelectorAll('.cells');
resetButton.addEventListener('click', () => {
    gridCells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    })
});

// Hover color event
container.addEventListener('mouseover', function (event) {
    if (event.target.matches('.cells')) {
        event.target.setAttribute('style', 'background-color: black');
    }
});
