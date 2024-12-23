let humanScore = 0;
let computerScore = 0;

//Get computer's choice
function getComputerChoice() {
    let choiceIndex = Math.floor( Math.random() * 3);
    switch (choiceIndex) {
        case 0: 
            return "rock";

        case 1: 
            return "paper";

        default: 
            return "scissors";
    
    }
}


 //Get human's choice
 function getHumanChoice() {
    let humanInput = prompt("Let's play Rock-Paper-Scissors! Please choose one: rock, paper, or scissors?");
    humanInput = humanInput.toLowerCase();
    while (humanInput === "" ||
        (humanInput !== "rock" && 
         humanInput !== "paper" && 
         humanInput !== "scissors")) {
        alert("Invalid! Please enter rock, paper or scissors");

        humanInput = prompt("Let's play Rock-Paper-Scissors! Please choose one: rock, paper, or scissors?");
        humanInput = humanInput.toLowerCase();
    }
    return humanInput;
 }

 //Play 5 rounds
 function playGame() {
    
    for (let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound( humanChoice, computerChoice);

        console.log(`Round ${i + 1}: Human score = ${humanScore}, Computer score = ${computerScore}`)
    }
    logWinner();
}


function playRound(humanChoice, computerChoice) {
    console.log(`\nHuman: ${humanChoice}`)
    console.log(`Computer: ${computerChoice}`)

    let humanChoiceCase = humanChoice.toLowerCase();
    if (humanChoiceCase === computerChoice){
        console.log(`It's a tie!`);
    } else if (
        (humanChoiceCase === "rock" && computerChoice === "scissors") ||
        (humanChoiceCase === "paper" && computerChoice === "rock") ||
        (humanChoiceCase === "scissors" && computerChoice === "paper") 
    ) {
        console.log(`You win! ${humanChoiceCase} beats ${computerChoice}.`)
        humanScore++
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoiceCase}.`)
        computerScore++
    }
 }

 function logWinner() {
    console.log(`\nFinal score: Human - ${humanScore}, Computer - ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Game over! The computer won.");
    } else {
        console.log("It's a tie game!");
    }
 }

playGame();

