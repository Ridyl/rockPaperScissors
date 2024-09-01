//GAME LOGIC

let humanScore = 0;
let computerScore = 0;

function scoreCounter(ticker, tocker) {
    if (ticker == 1 && tocker == 0) {
        humanScore++;
        updateScore(1, 0);
    } else if (ticker == 0 && tocker == 1) {
        computerScore++;
        updateScore(0, 1);
    }

    if (humanScore === 3) {
        winner('player');
    } else if (computerScore === 3) {
        winner('computer');
    }
}


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

function getHumanChoice(num) {
    if (num === 1) {
        return "scissors";
    } else if (num === 2) {
        return "rock";
    } else if (num === 3) {
        return "paper";
    }
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
        scoreCounter(1, 0);
        roundWinner('human', humanChoice, computerChoice); 
    } else if (winner == 0) {
        roundWinner('tie', humanChoice, computerChoice); 
    } else {
        scoreCounter(0, 1);
        roundWinner('computer', humanChoice, computerChoice); 
    }
}

function playGame(click) {
    console.log("First to three, wins!");
    
    //calls for computerChoice
    const humanSelection = click;
    const computerSelection = getComputerChoice();

    //starts game on each iteration
    playRound(humanSelection, computerSelection);

}



//DOM

//Creating score board
const choiceContainer = document.querySelector('.choices');
const playerBoard = document.createElement('p');
const computerBoard = document.createElement('p');

playerBoard.textContent = "Player Score: " + humanScore;
choiceContainer.appendChild(playerBoard);

computerBoard.textContent = "Computer Score: " + computerScore;
choiceContainer.appendChild(computerBoard);

function updateScore(ticker, tocker) {
    if (ticker == 1) {
        playerBoard.textContent = "Player Score: " + humanScore;
        choiceContainer.appendChild(playerBoard);
    }

    if (tocker == 1) {
        computerBoard.textContent = "Computer Score: " + computerScore;
        choiceContainer.appendChild(computerBoard);
    }
}

//Creating each player option button
const buttonContainer = document.querySelector('.buttons');

const scissorsButton = document.createElement('button');
scissorsButton.textContent = "Scissors";
scissorsButton.setAttribute('id', 'scissors');
buttonContainer.appendChild(scissorsButton);

const rockButton = document.createElement('button');
rockButton.textContent = "Rock";
rockButton.setAttribute('id', 'rock');
buttonContainer.appendChild(rockButton);

const paperButton = document.createElement('button');
paperButton.textContent = "Paper";
paperButton.setAttribute('id', 'paper');
buttonContainer.appendChild(paperButton);

//Button functionality
buttonContainer.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.id) {
        case 'scissors':
            playGame(getHumanChoice(1));
            break;
        case 'rock':
            playGame(getHumanChoice(2));
            break;
        case 'paper':
            playGame(getHumanChoice(3));
            break;
    }
});
//round winner
const roundDisplay = document.querySelector('.round');

function roundWinner(roundWinner, humanChoice, computerChoice) {
    const roundUpdater = document.createElement('h3');

    if (roundWinner == 'human') {
        roundUpdater.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        roundDisplay.appendChild(roundUpdater);
    } else if (roundWinner == 'computer') {
        roundUpdater.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        roundDisplay.appendChild(roundUpdater);
    } else {
        roundUpdater.textContent = `It's a tie`;
        roundDisplay.appendChild(roundUpdater);
    }
}

//winner display
const winnerDisplay = document.querySelector('.winner');

function winner(winner) {
    const actualWinner = document.createElement('h1');

    if (winner == 'player') {
        actualWinner.textContent = "You won the game! Congratulations!";
        winnerDisplay.appendChild(actualWinner);

    } else if (winner == 'computer') {
        actualWinner.textContent = "You lose. Maybe try a little harder next time?";
        winnerDisplay.appendChild(actualWinner);
    }
}
