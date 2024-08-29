let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let val = Math.random(); // chooses random value between 0 and 1, choice is = split thirds.

    if (val >= 0.66) {
        return "paper";
    } else if (val >= 0.33 && val < 0.66) {
        return "rock";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    return choice.toLowerCase(); //allows for standardized input no matter what human enters.
}

function playRound(humanChoice, computerChoice) {
    let winner;

    // logic for all human wins, if computer beats human else statement triggers.
    if (humanChoice === "rock" && computerChoice === "scissors") {
        winner = humanChoice;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        winner = humanChoice;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        winner = humanChoice;
    } else if (humanChoice === computerChoice) {
        winner = 0; // sets default value for tie scenario
    } else {
        winner = computerChoice;
    }

    // logic for win display.
    if (winner == humanChoice) {
        humanScore++;
        return console.log(`You win! ${humanChoice} beats ${computerChoice}.`); 
    } else if (winner == 0) {
        return console.log(`It's a tie!`);
    } else {
        computerScore++;
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

function playGame() {
    console.log("First to three, wins!");
    
    for (let i = 0; i < 99; i++) {
        //calls for choice on each loop iteration.
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        //starts game on each iteration
        playRound(humanSelection, computerSelection);

        //checks for winner on each iteration and breaks loop if either score is equal to 3
        if (humanScore == 3) {
            console.log(`You won the game! Congratulations!`);
            break;
        } else if (computerScore == 3) {
            console.log(`You lose! Maybe try a little harder next time?`);
            break;
        } else {
            console.log(`Round ${i}! FIGHT!`);
        }
    }
}

playGame();

