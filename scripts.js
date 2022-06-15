const SELECTION = ["rock", "paper", "scissors"];
const HAND_WINS = {
  rock: { paper: false, scissors: true },
  paper: { scissors: false, rock: true },
  scissors: { rock: false, paper: true },
};

let playerScore = 0;
let computerScore = 0;
let round = 0;

// select random hand choice
let computerPlay = () =>
  SELECTION[Math.floor(Math.random() * SELECTION.length)];

function playRound(playerSelection) {
  // should produce a play again button instead
  if (playerScore == 5 || computerScore == 5) {
    resetGame();
    return;
  }

  showHand(playerSelection, ".player-hand");

  computerSelection = computerPlay();
  showHand(computerSelection, ".cpu-hand");
  const stat = document.querySelector("#status");

  if (playerSelection === computerSelection) {
    stat.textContent = "Tie round";
    return;
  }

  if (HAND_WINS[playerSelection][computerSelection]) {
    stat.textContent = "Player won this round";
    playerScore++;
  } else {
    stat.textContent = "Computer won this round";
    computerScore++;
  }

  updateScore();
  checkWin();
}

// animates button chosen
function showHand(hand, selector) {
  const buttons = document.querySelectorAll(selector);
  buttons.forEach((button) => {
    if (button.id.includes(hand)) {
      button.classList.add("chosen");
    } else {
      button.classList.remove("chosen");
    }
  });
}

function updateScore() {
  const humanScore = document.querySelector("#player-score");
  const cpuScore = document.querySelector("#computer-score");

  humanScore.textContent = "Player: " + playerScore;
  cpuScore.textContent = "Computer: " + computerScore;
}

function checkWin() {
  const stat = document.querySelector("#status");

  if (playerScore == 5 || computerScore == 5) {
    playerScore > computerScore
      ? (stat.textContent = "Player won")
      : (stat.textContent = "Computer won");
  }

  return;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  document.querySelector("#status").textContent = "Player vs Computer";

  // remove coloring from previous rounds
  const cpuButtons = document.querySelectorAll(".cpu-hand");
  cpuButtons.forEach((button) => {
    button.classList.remove("chosen");
  });

  const playerButtons = document.querySelectorAll(".player-hand");
  playerButtons.forEach((button) => {
    button.classList.remove("chosen");
  });
  updateScore();
}

function getPlayerSelection() {
  while (true) {
    // no more prompts
    let playerChoice = prompt(
      "Please choose your hand: rock, paper, or scissors"
    );

    let loweredPlayerChoice = playerChoice.toLowerCase();

    // checks if user input is valid
    if (SELECTION.includes(loweredPlayerChoice)) {
      return loweredPlayerChoice;
    } else {
      alert("Please choose from the choices of rock, paper, or scissors");
    }
  }
}

function main() {
  //   game();

  const rockButton = document.querySelector("#rock-btn");
  const paperButton = document.querySelector("#paper-btn");
  const scissorsButton = document.querySelector("#scissors-btn");

  rockButton.addEventListener("click", () => {
    playRound("rock");
  });

  paperButton.addEventListener("click", () => {
    playRound("paper");
  });

  scissorsButton.addEventListener("click", () => {
    playRound("scissors");
  });
}

main();
