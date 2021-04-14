// Get HTML Elements
let canvas = document.getElementById("pixelCanvas");
let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWidth");
let sizePicker = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");

// Event Listener
color.addEventListener("click", function() {});

// Form Grid
sizePicker.onsubmit = function(event) {
    event.preventDefault();
    clearGrid();
    makeGrid();
};

// Make Grid
function makeGrid() {
    for (let r = 0; r < height.value; r++) {
        const row = canvas.insertRow(r);
        for (let c = 0; c < width.value; c++) {
            const cell = row.insertCell(c);
            cell.addEventListener("click", fillSquare);
        }
    }
}

// Clear Grid
function clearGrid() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

// Filling the Grid with selected colors
function fillSquare() {
    this.setAttribute("style", `background-color: ${color.value}`);
}