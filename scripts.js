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
  computerSelection = computerPlay();
  showComputerHand(computerSelection);

  if (playerSelection === computerSelection) {
    console.log("TIE");
    return;
  }

  if (HAND_WINS[playerSelection][computerSelection]) {
    console.log("Player wins");
    playerScore++;
    console.log(playerScore);
  } else {
    console.log("Computer wins");
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
    } else {
      button.style.color = "black";
    }
  });
}

function updateScore() {
  const humanScore = document.querySelector("#player-score");
  const cpuScore = document.querySelector("#computer-score");

  humanScore.textContent = "Player: " + playerScore;
  cpuScore.textContent = "Computer: " + computerScore;
}

// plays the game for 5 rounds and keeps track of the score
function game() {
  let playerSelection = "";
  let computerSelection = "";

  for (let i = 0; i < 5; i++) {
    // TODO: playerSelection is based off buttons
    playerSelection = getPlayerSelection();
    computerSelection = computerPlay();

    console.log("Player: %s", playerSelection);
    console.log("Computer: %s", computerSelection);

    playRound(playerSelection);

    console.log(
      "Round %i: Player score: %i Computer score: %i",
      i + 1,
      playerScore,
      computerScore
    );
  }

  printWinner();
}

function checkWin() {
  console.log("checking");
  // the alert happens after updateScore in code, but it happens before
  // when testing, so the UI doesn't update to 5 even if it shows a win
  if (playerScore == 5 || computerScore == 5) {
    playerScore > computerScore ? alert("Player Won") : alert("Computer Won");
    resetGame();
  }

  return;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  round = 0;

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
