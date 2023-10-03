// Main section selector
const container = document.querySelector('.container');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

// Matrix for all 16x16
const matrix = document.createElement('div');
matrix.classList.add('main-matrix');
container.appendChild(matrix);

// Styling using JS
container.style.backgroundColor = "#1E1E1E";
container.style.display = "flex";
container.style.justifyContent = "center";
header.style.backgroundColor = "#303030";
footer.style.backgroundColor = "#303030";
