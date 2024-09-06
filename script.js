const container = document.getElementById('container');

function makeRows(rowCount) {
    container.innerHTML = "";
    const containerWidth = parseFloat(getComputedStyle(container).width);
    const cellSize = parseFloat((960 / rowCount).toFixed(2));


    console.log(containerWidth)
    for (let r = 0; r < rowCount * rowCount; r++) {
        let cell = document.createElement('div');
        cell.style.minWidth = `${cellSize}px`;
        cell.style.minHeight = `${cellSize}px`;
        cell.style.opacity = 0;

        container.appendChild(cell);
    }
    const divs = container.querySelectorAll("div");

    divs.forEach((div) => {
        div.addEventListener("mouseenter", hoverOnDivs);
    });
}

function handleButtonClick() {
    let newSize = parseInt(prompt("Enter the number of squares per side (max 100): ", 10));

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Please enter a valid number between 1 and 100")
        return;
    }
    makeRows(newSize)
}

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num
}

function setRandomColor() {
    return `rgb(${random(0, 255)} , ${random(0, 255)} , ${random(0, 255)})`;
}


function hoverOnDivs(event) {
    let div = event.target;
    div.style.backgroundColor = setRandomColor();

    let currentOpacity = parseFloat(div.style.opacity);
    currentOpacity = Math.min(currentOpacity + 0.1, 1);
    div.style.opacity = currentOpacity;
}

document.getElementById('generateGrid').addEventListener('click', handleButtonClick);

makeRows(16)