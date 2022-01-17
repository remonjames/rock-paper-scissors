
function computerPlay() {
    let arr = ["rock", "paper", "scissors"];
    let compRandNum = Math.floor(Math.random() * 3);
    computerSelection = arr[compRandNum];
    return computerSelection;
}

rockButton = document.querySelector(".rock");
paperButton = document.querySelector(".paper");
scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click", startGame);
paperButton.addEventListener("click", startGame);
scissorsButton.addEventListener("click", startGame);


function checkWinner() {
    if (playerSelection === computerSelection) {
        roundResult.textContent = "Tie"
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissor") {
            roundResult.textContent = "You win this round";
            playerScore++;
        } else {
            roundResult.textContent = "You lost this round";
            computerScore++;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            roundResult.textContent = "You win this round";
            playerScore++;
        } else {
            roundResult.textContent = "You lost this round";
            computerScore++;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            roundResult.textContent = "You win this round";
            playerScore++;
        } else {
            roundResult.textContent = "You lost this round";
            computerScore++;
        }
    }
}
gameResult = document.querySelector(".gameResult");
roundResult = document.querySelector(".roundResult");
playerScoreDisplay = document.querySelector(".playerScoreDisplay");
computerScoreDisplay = document.querySelector(".computerScoreDisplay");
let isGameOver = false;
let playerScore = 0;
let computerScore = 0;

function startGame() {
    if (playerScore !== 5 && computerScore !== 5) {
        playerSelection = this.getAttribute("class");
        computerPlay();
        checkWinner();
        updateDisplay();
    } else {
        displayGameResult();
    }
}

function updateDisplay() {
    playerScoreDisplay.textContent = `Player: ${playerScore.toString()}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore.toString()}`;
}

function displayGameResult() {
    if (playerScore === 5) {
        gameResult.textContent = "You win"
        roundResult.textContent = ""
    } else {
        gameResult.textContent = "You lose"
        roundResult.textContent = ""
    }
}