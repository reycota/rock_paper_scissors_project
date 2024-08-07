let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    //step 1: define the possible choices
    const choices = ["Rock", "Paper", "Scissors"];

    //step 2: generate a random index
    const randomIndex = Math.floor(Math.random() * choices.length);

    //step 3: return the choice at the random index
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice){
    //step 1: make the humanChoice case-insensitive
    humanChoice = humanChoice.toLowerCase();

    //step 2: define a mapping for valid choices to standard form
    const choicesMap = {
        "rock": "Rock",
        "paper": "Paper",
        "scissors": "Scissors"
    };

    //step 3: validate the human choice
    if (!choicesMap[humanChoice]) {
        console.log("Invalid choice! Please choose Rock, Paper, or Scissors.");
        return null;
    }

    //step 4: Standardize the humanChoice for comparison
    humanChoice = choicesMap[humanChoice];

    //step 5: determine the winner and return the result
    if (humanChoice === computerChoice) {
        return "tie";
    } else if(
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "human";
    } else {
        return "computer";
    }

}

function handleButtonClick (humanChoice){
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    if (result === "human"){
        humanScore++;
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else if (result === "computer"){
        computerScore++;
        resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;

    } else if (result === "tie"){
        resultDiv.textContent = `It's a tie! Both chose ${humanChoice}.`;
    } else {
        resultDiv.textContent = `Invalid choice, round skipped.`;
    }

    scoreDiv.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        declareWinner();
    }
}

//function to declare winner
function declareWinner() {
    if (humanScore ===5){
        resultDiv.textContent = `Congratulation! You won the game!`;
    } else {
        resultDiv.textContent = `Sorry! The computer won the game!`;
    }

    humanScore = 0;
    computerScore = 0;
}

//setup event listenters for buttons

document.getElementById(`rock`).addEventListener(`click`,() => handleButtonClick(`rock`));
document.getElementById(`paper`).addEventListener(`click`,() => handleButtonClick(`paper`));
document.getElementById(`scissors`).addEventListener(`click`,() => handleButtonClick(`scissors`));

const resultDiv = document.getElementById(`result`);
const scoreDiv = document.getElementById(`score`);

//start the game
playGame();
 