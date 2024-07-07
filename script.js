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
}

console.log(getHumanChoice());
