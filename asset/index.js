const container = document.querySelector('#main-grid');
const squares = document.querySelector('grid-item');

// default GRID
const setDefaultGrid = () => {
    setGridSize(20);
    generateGrid(20);
}

const setGridSize = (size) => {
    // console.log(container.offsetWidth + "px");
    let gridWidth = container.offsetWidth/size;
    // console.log(gridWidth);
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    // container.style.gridTemplateRows = `repeat(${size}, ${gridWidth}px)`;

    if(size > 20){
        console.log("more than 20");
    }

}

//create square divs
const generateGrid = (size) =>{
    for(let i = 0; i < (size * size); i++){
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
        items[i].addEventListener('mouseover', (e) => {
            items[i].classList.add("active");
            items[i].style.backgroundColor = "orange";
        });
    }
}




// generateGrid(16, 16);

// reset btns
const resetWrapper = document.getElementById('reset');
const resetBtn = () => {
    const resetBtn = document.createElement("button");
        resetBtn.setAttribute('class', 'reset_btn')
        resetBtn.textContent = 'RESET';
    resetWrapper.appendChild(resetBtn);

    resetBtn.addEventListener('click', clearHover);
}

// clear the hover
const clearHover = () => {
    let items = document.querySelectorAll('.grid-item');
    for(let i = 0; i < items.length; i++){
        items[i].style.backgroundColor = "";
    }
}

// input the size of the grid
const promptWrapper = document.getElementById('prompt');
const promptBtn = () => {   
    const promptBtn = document.createElement("button");
        promptBtn.setAttribute('class', 'prompt_btn');
        promptBtn.textContent = 'GRID SIZE';
    promptWrapper.appendChild(promptBtn);
    promptBtn.addEventListener('click', changeSizeGrid);
}

const changeSizeGrid = () => {
    const setNewSize = prompt("Enter New Grid Size", 100);
    if(setNewSize !== null){
        // console.log("GOOD JOB");
        // setNewSize = parseInt(setNewSize);
        if(setNewSize < 1 || setNewSize > 100 || Number.isNaN(setNewSize)){
            alert("Enter a number from 1-100 range");
            changeSizeGrid();
        } else {
            clearGrid();
            setGridSize(setNewSize);
            generateGrid(setNewSize);
        }
    }
}

function clearGrid() {
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
      container.removeChild(element);
    });
}

window.onload = function() {
    setDefaultGrid();
    resetBtn();
    promptBtn();
}
