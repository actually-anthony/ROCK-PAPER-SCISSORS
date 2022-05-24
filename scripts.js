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
	// tie
	if (playerSelection === computerSelection) {
		return;
	}

	if (HAND_WINS[playerSelection][computerSelection]) {
		playerScore++;
	} else {
		computerScore++;
	}
}

/**
 *
 * @param {boolean} win
 * @param {string} playerSelection
 * @param {string} computerSelection
 */
function printOutcome(win, playerSelection, computerSelection) {
	if (win) {
		console.log(
			"Player wins with %s, beating Computer with %s",
			playerSelection,
			computerSelection
		);
	} else {
		console.log(
			"Player loses with %s, lost to Computer with %s",
			playerSelection,
			computerSelection
		);
	}
}

// plays the game for 5 rounds and keeps track of the score
function game() {
	// prompt user for input

	for (let i = 0; i < 5; i++) {
		let playerSelection = getPlayerSelection();
		let computerSelection = computerPlay();

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
}

function getPlayerSelection() {
	while (true) {
		let playerChoice = prompt(
			"Please choose your hand: rock, paper, or scissors"
		);

		let loweredPlayerChoice = playerChoice.toLowerCase();

		// console.log("Transformed %s -> %s", playerChoice, loweredPlayerChoice);

		// checks if user input is valid
		if (SELECTION.includes(loweredPlayerChoice)) {
			console.log("%s is in SELECTION", playerChoice);
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
