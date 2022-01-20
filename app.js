
function computerPlay() {
    let arr = ["rock", "paper", "scissors"];
    let compRandNum = Math.floor(Math.random() * 3);
    computerSelection = arr[compRandNum];
    return computerSelection;
}

rockButton = document.querySelector(".rock");
paperButton = document.querySelector(".paper");
scissorsButton = document.querySelector(".scissors");

resetButton = document.querySelector(".resetButton")

rockButton.addEventListener("click", startGame);
paperButton.addEventListener("click", startGame);
scissorsButton.addEventListener("click", startGame);

resetButton.addEventListener("click", resetGame);


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
roundDetails = document.querySelector(".roundDetails");

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

function startGame() {
    while (!gameOver) {
        playerSelection = this.getAttribute("class");
        computerPlay();
        checkWinner();
        updateDisplay();
        displayGameResult();
        break;
    }

}

function updateDisplay() {
    playerScoreDisplay.textContent = `Player: ${playerScore.toString()}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore.toString()}`;
    roundDetails.textContent = `Player selected ${playerSelection} and Computer selected ${computerSelection}`
    if (gameOver) {
        roundDetails.textContent = "Best of 5";
        gameResult.textContent = "";
        roundResult.textContent = "";
    }
}

function displayGameResult() {
    if (playerScore === 5) {
        gameResult.style.color = "green"
        gameResult.textContent = "You win"
        roundResult.textContent = ""
        gameOver = true;
    } else if (computerScore === 5) {
        gameResult.style.color = "red"
        gameResult.textContent = "You lose"
        roundResult.textContent = ""
        gameOver = true;
    }
}

function resetGame() {
    gameOver = true;
    playerScore = 0;
    computerScore = 0;
    updateDisplay();
    gameOver = false;
}