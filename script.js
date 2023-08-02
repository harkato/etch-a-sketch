const container = document.querySelector(".container");

function changeGridElementColor(e) {
    e.target.classList.add("mouseEvent");
}

function newGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    let gridSize = prompt("Number of squares per side for the new grid (Max: 100)", "16");
    gridSize = parseInt(gridSize, 10);
    let gridWidth = 100/gridSize;

    if (!isNaN(gridSize) && gridSize < 100) {
        let maxRow = gridSize;
        let maxCol = gridSize;
        for( let i = 0; i < maxRow; i++ ){
            for( let j = 0; j < maxCol; j++ ){
                const grid = document.createElement("div");
                grid.classList.add("gridElement");
                container.appendChild(grid);
            }
        }
        const gridElements = Array.from(document.querySelectorAll('.gridElement'));
        gridElements.forEach( (gridElement) => {
            gridElement.style.flex = `0 0 ${gridWidth}%`;
            gridElement.style.paddingTop = `${gridWidth}%`;
        })
        gridElements.forEach(gridElement => gridElement.addEventListener('mouseover', changeGridElementColor));
    }

}


const button = document.getElementById("button");
button.addEventListener("click", newGrid);


