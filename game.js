console.log("hello")
function getComputerChoice() {
    const picked = Math.random()* 6 + 1;
    
    if (picked <= 2) {
        return ("rock");
    }
    else if (picked >= 5) {
        return ("paper");
    }
    else {
        return ("scissors");
    }
    

}
const win = "You Win!";
const lose = "You Lose!";
const tie = "No Winner!";
let playerScore = 0
let computerScore = 0
let roundWinner= ''

const computerSelection = getComputerChoice();






function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        roundWinner = 'Tie!'
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') || 
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper'){
                playerScore++
                roundWinner = 'You Win!'
            }

}
