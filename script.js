function getComputerChoice(){
    //step 1: define the possible choices
    const choices = ["Rock", "Paper", "Scissors"];
    //step 2: generate a random index
    const randomIndex = Math.floor(Math.random() * choices.length);
    //step 3: return the choice at the random index
    return choices[randomIndex];
}

console.log();
