function getComputerChoice(){
    //step 1: define the possible choices
    const choices = ["Rock", "Paper", "Scissors"];

    //step 2: generate a random index
    const randomIndex = Math.floor(Math.random() * choices.length);

    //step 3: return the choice at the random index
    return choices[randomIndex];
}

function getHumanChoice(){
    //step 1: prompt the user to enter their choice
    const choice = prompt("Please select your choice (Rock, Paper, or Scissors):");

    //step 2: return the user's choice
    return choice;
}



let humanScore = 0;
let computerScore = 0;

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
        return;
    }

    //step 4: Standardize the humanChoice for comparison
    humanChoice = choicesMap[humanChoice];

    //step 5: determine the winner and increment the scores
    if (humanChoice === computerChoice) {
        console.log("It's a tie: Both chose ${humanChoice}");
    } else if(
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

    //step 6: Log the current scores
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);
 
//function to play 5 rounds of the game
function playGame() {
    let humanScore = 0; 
    let computerScore =0;

    for (let i = 0; i<5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        const result = playRound(humanChoice, computerChoice);
        if (result === "human") {
            humanScore++;
            console.log(`Round ${i+1}: You win! ${humanChoice} beats ${computerChoice}`);
        } else if (result === "computer") {
            computerScore++;
            console.log(`Round ${i+1}: You lose! ${computerChoice} beats ${humanChoice}`);
        } else if (result === "tie") {
            console.log(`Round ${i+1}: It's a tie! Both chose ${humanChoice}`);
        } else {
            console.log(`Round ${i+1}: Invalid choice, round skipped.`);
        }

        //log the current scores after each round
    }
}