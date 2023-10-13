// Constant element selectors
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
        // cells.setAttribute('onmouseover', 'mouseOver()');
        matrix.appendChild(cells);
    }
}

// Grid size scale
createGrid(16);

// Hover color event
container.addEventListener('mouseover', function (event) {
    if(event.target.matches('.cells')) {
        // Black testing color
        event.target.setAttribute('style', 'background-color: black');
    }
});
