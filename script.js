const container = document.querySelector(".container");

function createGrid() {
    for( let i = 0; i < 16; i++ ){
        for( let j = 0; j < 16; j++ ){
            const grid = document.createElement("div");
            grid.classList.add("gridElement");
            container.appendChild(grid);
        }
    }
}

function changeGridElementColor(e) {
    e.target.classList.add("mouseEvent");
}
console.log(createGrid());

const gridElements = Array.from(document.querySelectorAll('.gridElement'));
gridElements.forEach(gridElement => gridElement.addEventListener('mouseover', changeGridElementColor));

console.log(100/18)