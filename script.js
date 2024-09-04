const container = document.getElementById('container');

function makeRows(rowCount) {
    container.innerHTML = "";

    const cellSize = parseFloat((960 / rowCount).toFixed(2));
    container.style.setProperty('--square-size', `${cellSize}px`);

    for (let r = 0; r < rowCount * rowCount; r++) {
        let cell = document.createElement('div');
        cell.classList.add("cell");
        container.appendChild(cell);
    }
}

function handleButtonClick() {
    let newSize = parseInt(prompt("Enter the number of squares per side (max 100): ", 10));

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Please enter a valid number between 1 and 100")
        return;
    }

    makeRows(newSize)
}

document.getElementById('generateGrid').addEventListener('click', handleButtonClick);

makeRows(16)