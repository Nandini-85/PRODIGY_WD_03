// script.js
let currentPlayer = "X";
let gameActive = true;
const gameState = ["", "", "", "", "", "", "", "", ""];
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('resetButton');

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(cell, index));
});

resetButton.addEventListener('click', resetGame);

function handleCellClick(cell, index) {
    if (gameState[index] !== "" || !gameActive) {
        return;
    }
    
    gameState[index] = currentPlayer;
    cell.textContent = currentPlayer;
    
    if (checkWinner()) {
        gameActive = false;
        alert(`${currentPlayer} has won!`);
    } else if (!gameState.includes("")) {
        gameActive = false;
        alert("It's a draw!");
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWinner() {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return gameState[index] === currentPlayer;
        });
    });
}

function resetGame() {
    currentPlayer = "X";
    gameActive = true;
    gameState.fill("");
    cells.forEach(cell => {
        cell.textContent = "";
    });
}
