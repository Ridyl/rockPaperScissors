function getComputerChoice() {
    let val = Math.random();

    if (val >= 0.66) {
        return "Paper!";
    } else if (val >= 0.33 && val < 0.66) {
        return "Rock!";
    } else {
        return "Scissors!";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
}

let humanScore = 0;
let computerScore = 0;


console.log(getComputerChoice());