// Main section selectors
const container = document.querySelector('.container');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

// Matrix for all 16x16 squares
const matrix = document.createElement('div');
matrix.classList.add('main-matrix');
container.appendChild(matrix);

// Internal squares
const squares = document.createElement('div');
// squares.classList.add('squares');
// matrix.appendChild(squares);

// Create a grid of variable elements
function gridCreate(size) {
    for (let rows = 0; rows <= size; rows++) {
        for (let cols = 0; cols <= size; cols++) {
            // Append the squares into the grid
        }
    }
}

// gridCreate(16);
