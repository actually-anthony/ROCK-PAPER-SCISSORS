const SELECTION = ["rock", "paper", "scissors"];
const HAND_WINS = {
	rock: { paper: false, scissors: true },
	paper: { scissors: false, rock: true },
	scissors: { rock: false, paper: true },
};

let playerScore = 0;
let computerScore = 0;

// select random hand choice
let computerPlay = () =>
	SELECTION[Math.floor(Math.random() * SELECTION.length)];

// returns true if player wins
function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		console.log("TIE");
		return;
	}

	if (HAND_WINS[playerSelection][computerSelection]) {
		console.log("Player wins");
		playerScore++;
	} else {
		console.log("Computer wins");
		computerScore++;
	}
}

function printWinner() {
	if (playerScore == computerScore) {
		console.log("No winner, tied game");
	} else if (playerScore > computerScore) {
		console.log("Player wins");
	} else {
		console.log("Computer wins");
	}
}

// plays the game for 5 rounds and keeps track of the score
function game() {
	let playerSelection = "";
	let computerSelection = "";

	for (let i = 0; i < 5; i++) {
		playerSelection = getPlayerSelection();
		computerSelection = computerPlay();

		console.log("Player: %s", playerSelection);
		console.log("Computer: %s", computerSelection);

		playRound(playerSelection, computerSelection);

		console.log(
			"Round %i: Player score: %i Computer score: %i",
			i + 1,
			playerScore,
			computerScore
		);
	}

	printWinner();
}

function getPlayerSelection() {
	while (true) {
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
	game();
}

main();
