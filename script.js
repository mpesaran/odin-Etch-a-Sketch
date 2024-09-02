const container = document.getElementById('container');

function makeRows(rowCount) {
    for (let r = 0; r < rowCount * rowCount; r++) {
        let row = document.createElement('div');
        row.textContent = r + 1; // Optional: to see numbers in the grid
        row.classList.add("row");
        container.appendChild(row);
    }
}

makeRows(16);