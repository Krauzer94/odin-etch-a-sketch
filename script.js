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
squares.classList.add('squares');
matrix.appendChild(squares);

// Adding all 32 squares
const temp = [];
for (let i = 0; i <= 32; i++) {
    temp.push(squares);
}

matrix.appendChild(temp);
