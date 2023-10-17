// Main container selector
const container = document.querySelector('.container');

// Central grid matrix
const matrix = document.createElement('div');
matrix.classList.add('matrix');
container.appendChild(matrix);

// Generate default grid
function defaultGrid(defaultSize = 16) {
    for (let i = 0; i < defaultSize * defaultSize; i++) {
        let cells = document.createElement('div');
        cells.classList.add('cells');
        matrix.appendChild(cells);
    }
} defaultGrid();

// TODO Change grid size
/**
 * Consists of a total of three steps:
 * 1. Remove all previously added cells
 * 2. Add new number of cells from prompt
 * 3. Style cells with the default style
 */
const sizeButton = document.getElementById('size-btn');
sizeButton.addEventListener('click', () => {
    const newGridSize = prompt('Desired grid size (from 1 up to 100)');
    removeCells(); // Step number #1
    // Step number #2
    createNewGrid(newGridSize); // Step number #3
});

// TODO Random color mode
const rainbowButton = document.getElementById('rainbow-btn');
rainbowButton.addEventListener('click', () => {
    rainbowButton.style.borderColor = 'yellow';
    rainbowButton.style.color = 'yellow';
    blackButton.style.borderColor = 'black';
    blackButton.style.color = 'white';
});

// TODO Black color mode
const blackButton = document.getElementById('black-btn');
blackButton.addEventListener('click', () => {
    blackButton.style.borderColor = 'yellow';
    blackButton.style.color = 'yellow';
    rainbowButton.style.borderColor = 'violet';
    rainbowButton.style.color = 'white';
});

// Reset grid canvas // TODO reset newly generated cells
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
