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

// returns true if player wins
function playRound(playerSelection) {
  // should produce a play again button instead
  if (playerScore == 5 || computerScore == 5) {
    resetGame();
    return;
  }

  computerSelection = computerPlay();
  showComputerHand(computerSelection);
  const stat = document.querySelector("#status");

  if (playerSelection === computerSelection) {
    stat.textContent = "Tie round";
    return;
  }

  if (HAND_WINS[playerSelection][computerSelection]) {
    console.log("Player wins");
    stat.textContent = "Player won this round";
    playerScore++;
    console.log(playerScore);
  } else {
    stat.textContent = "Computer won this round";

    console.log("Computer won this round");
    computerScore++;
    console.log(computerScore);
  }

  updateScore();
  checkWin();
}

// shows user the hand that the computer chose
function showComputerHand(hand) {
  const buttons = document.querySelectorAll(".cpu-hand");
  buttons.forEach((button) => {
    if (button.textContent.toLocaleLowerCase() == hand) {
      button.style.color = "red";
      button.style.borderWidth = "thick";
    } else {
      button.style.color = "black";
      button.style.borderWidth = "thin";
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
  const buttons = document.querySelectorAll(".cpu-hand");
  buttons.forEach((button) => {
    button.style.color = "black";
    button.style.borderWidth = "thin";
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

  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playRound(button.textContent.toLowerCase());
    });
  });
}

main();
