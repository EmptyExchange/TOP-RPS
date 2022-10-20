console.log("hello")
function getComputerChoice() {
    const picked = Math.floor(Math.random()*6 +1);
    console.log(picked)
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
console.log(getComputerChoice())
const win = "You Win!";
const lose = "You Lose!";
const tie = "No Winner!";
let playerScore = 0
let computerScore = 0
let roundWinner= ''


const computerSelection = getComputerChoice();
const playerSelection = prompt('Choose your weapon').toLowerCase();

console.log(computerSelection)


function playRound() {
    
    console.log(computerSelection)
    console.log(playerSelection)

    if (playerSelection === computerSelection) {
        roundWinner = 'Tie!'
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')){
                playerScore++
                roundWinner = 'You Win!'
            }
    else {
        computerScore++
        roundWinner = 'Computer Wins!'
    }        

}
playRound()
console.log(playerScore)
console.log(computerScore)
console.log(roundWinner)