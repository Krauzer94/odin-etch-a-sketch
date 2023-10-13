// Constant element selectors
const container = document.querySelector('.container');
const gridCells = document.querySelectorAll('.cells');

// Central grid matrix
const matrix = document.createElement('div');
matrix.classList.add('matrix');
container.appendChild(matrix);

// 16x16 cells generation
function createGrid(size) {
    for (let rows = 0; rows < size * size; rows++) {
        let cells = document.createElement('div');
        cells.classList.add('cells');
        matrix.appendChild(cells);
    }
}

// Grid size scale
createGrid(16);

// Hover color change
gridCells.forEach((cell) => (
    cell.addEventListener('mouseover', () => {
        cell.setAttribute('style', 'background-color: black');
    })
));
