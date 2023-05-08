// get the buttons and result element
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultDiv = document.getElementById("result");

// define the choices array
const choices = ["rock", "paper", "scissors"];

// add event listeners to the buttons
rockBtn.addEventListener("click", playGame);
paperBtn.addEventListener("click", playGame);
scissorsBtn.addEventListener("click", playGame);

// initialize scores
let playerScore = 0;
let computerScore = 0;

// play the game function
function playGame(event) {
	// get the player's choice
	const playerChoice = event.target.id;

	// generate a random computer choice
	const randomNum = Math.floor(Math.random() * 3);
	const computerChoice = choices[randomNum];

	// determine the winner
	let winner;
	if (playerChoice === computerChoice) {
		winner = "Tie";
	} else if (
		(playerChoice === "rock" && computerChoice === "scissors") ||
		(playerChoice === "paper" && computerChoice === "rock") ||
		(playerChoice === "scissors" && computerChoice === "paper")
	) {
		winner = "Player";
		playerScore += 1;
	} else {
		winner = "Computer";
		computerScore += 1;
	}

	// display the result using innerHTML
	resultDiv.innerHTML = `Player chose ${playerChoice}, computer chose ${computerChoice}. ${winner} wins!`;
	
	// display the result using alert window
	alert(`Player chose ${playerChoice}, computer chose ${computerChoice}. ${winner} wins!`);

	// update scores
	document.getElementById("player-score").innerHTML = Math.round(playerScore);
	document.getElementById("computer-score").innerHTML = Math.round(computerScore);
}
