/**
 * Canva elements defaults
 * Matrix grid size: 480x480
 * Cell number: 256 (16x16)
 * Cell default size: 30x30
 */

// Sets major selectors
const container = document.querySelector('.container');
const gridCells = document.querySelectorAll('.cells');
const optionsBtns = document.querySelectorAll('#rainbow-btn, #black-btn');

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
    // Calculate new size
    let newCellSize = 480 / newSize;
    // Remove existing cells
    while (matrix.hasChildNodes()) {
        matrix.removeChild(matrix.firstChild);
    }
    // Append new resized cells
    for (let i = 0; i < newSize * newSize; i++) {
        let cells = document.createElement('div');
        cells.classList.add('cells');
        cells.style.height = `${newCellSize}px`;
        cells.style.width = `${newCellSize}px`;
        matrix.appendChild(cells);
    }
}

// Resize canva trigger
const sizeButton = document.getElementById('size-btn');
sizeButton.addEventListener('click', () => {
    const newSize = prompt('Desired grid size (from 1 up to 100)');
    newGrid(newSize); // Resize grid canva
});

// Reset grid canva
const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', () => {
    matrix.childNodes.forEach((child) => {
        child.style.backgroundColor = 'white';
    })
});

// Restyle rainbow button
function activateRainbow() {
    // Index [0] being rainbowButton
    for (let i = 0; i < optionsBtns.length; i++) {
        optionsBtns[0].style.borderColor = 'yellow';
        optionsBtns[0].style.color = 'yellow';
        optionsBtns[1].style.borderColor = 'white';
        optionsBtns[1].style.color = 'white';
    }
}

// Restyle black button
function activateBlack() {
    // Index [1] being blackButton
    for (let i = 0; i < optionsBtns.length; i++) {
        optionsBtns[0].style.borderColor = 'white';
        optionsBtns[0].style.color = 'white';
        optionsBtns[1].style.borderColor = 'yellow';
        optionsBtns[1].style.color = 'yellow';
    }
}

// Random color mode
const rainbowButton = document.getElementById('rainbow-btn');
rainbowButton.addEventListener('click', () => {
    activateRainbow(); // Restyle active button
    matrix.addEventListener('mouseover', (event) => {
        // Random color implementation
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        event.target.style.backgroundColor = randomColor;
    });
});

// Black color mode
const blackButton = document.getElementById('black-btn');
blackButton.addEventListener('click', () => {
    activateBlack(); // Restyle active button
    matrix.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'black';
    });
});