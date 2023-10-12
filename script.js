// Constant tag selectors
const container = document.querySelector('.container');

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

createGrid(16);
