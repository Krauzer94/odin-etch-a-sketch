// Constant element selectors
const container = document.querySelector('.container');
const sizeButton = document.getElementById('size-btn');

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

// Default 16x16 grid
createGrid(16);

// Default size initializer
if (gridSize = undefined) { gridSize = 16 }

console.log(gridSize); // TODO Logs actual gridSize

// Change grid-size prompt
sizeButton.addEventListener('click', () => {
    const gridSize = prompt('Enter desired grid size: ');
    createGrid(gridSize);
    console.log(gridSize);
});

// Hover color event
container.addEventListener('mouseover', function (event) {
    if (event.target.matches('.cells')) {
        // Black testing color
        event.target.setAttribute('style', 'background-color: black');
    }
});
