console.log("hello")
function getComputerChoice() {
    const picked = Math.floor(Math.random()*6 +1);

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

document.getElementById("rock").onclick = function() {
   playRound("rock");
}
document.getElementById("scissors").onclick = function() {
    playRound("scissors");
}
document.getElementById("paper").onclick = function() {
    playRound("paper");
}



function playRound(playerSelection) {
   
    const computerSelection = getComputerChoice();
    alert("played round")
console.log(computerSelection)
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
    alert(roundWinner)     

}







console.log(playerScore)
console.log(computerScore)
console.log(roundWinner)
