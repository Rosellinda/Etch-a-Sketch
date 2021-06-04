const container = document.querySelector('#main-grid');

// Functions that creates GRID
const generateGrid = (rows, cols) => {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(let i = 0; i < (rows * cols); i++){
        let square = document.createElement("div");
            square.classList.add('grid-item');
        container.appendChild(square);
    }
    hoverColor();
}

// functions that changes div color upon being hovered
const hoverColor = () => {
    // Get all the elements with .grid-item (not just the first one
    let items = document.querySelectorAll('.grid-item'); 
    for(let i = 0; i < items.length; i++){
        items[i].addEventListener('mouseover', () => {
            items[i].style.backgroundColor = "orange";
        });
    }
}

generateGrid(16, 16);