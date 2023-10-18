/**
 * Canva elements defaults
 * Matrix grid size: 480x480
 * Cell number: 256 (16x16)
 * Cell default size: 30x30
 */

// Sets major selectors
const container = document.querySelector('.container');
const gridCells = document.querySelectorAll('.cells');
const newGridCells = document.querySelectorAll('.new-cells'); // ?? Not used yet

// Central grid matrix
const matrix = document.createElement('div');
matrix.classList.add('matrix');
container.appendChild(matrix);

// Generate default grid
function defaultGrid() {
    for (let i = 0; i < 256; i++) {
        let cells = document.createElement('div');
        cells.classList.add('cells');
        matrix.appendChild(cells);
    }
} defaultGrid();

// Resize grid canva
function newGrid(newSize) {
    // Calculate new flex-basis
    let newFlexBasis = 480 / newSize;

    // Remove existing cells
    while (matrix.hasChildNodes()) {
        matrix.removeChild(matrix.firstChild);
    }

    // Append new resized cells
    for (let i = 0; i < newSize * newSize; i++) {
        let cells = document.createElement('div');
        cells.classList.toggle('new-cells');
        cells.style.flexBasis = `${newFlexBasis}px`;
        matrix.appendChild(cells);
    }
}

// Resize canva trigger
const sizeButton = document.getElementById('size-btn');
sizeButton.addEventListener('click', () => {
    const newSize = prompt('Desired grid size (from 1 up to 100)');
    newGrid(newSize); // Append resized cells
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

// Reset grid canvas // ?? New cells don't reset
const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', () => {
    gridCells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    })
});

// Hover color event // !! Behavior after resizing
matrix.addEventListener('mouseover', function (event) {
    if (event.target.matches('.cells') || event.target.matches('.new-cells')) {
        event.target.setAttribute('style', 'background-color: black');
    }
});