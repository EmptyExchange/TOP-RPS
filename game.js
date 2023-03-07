console.log("hello")
function getComputerChoice() {
    const picked = Math.floor(Math.random()*6 +1);

    if (picked <= 2) {
        return ("shield");
    }
    else if (picked >= 5) {
        return ("axe");
    }
    else {
        return ("sword");
    }
    

}

const win = "You Win!";
const lose = "You Lose!";
const tie = "No Winner!";
let playerScore = 0
let computerScore = 0
let roundWinner= ''

document.getElementById("shield").onclick = function() {
   playRound("shield");
}
document.getElementById("sword").onclick = function() {
    playRound("sword");
}
document.getElementById("axe").onclick = function() {
    playRound("axe");
}



function playRound(playerSelection) {
   
    const computerSelection = getComputerChoice();
    
console.log(computerSelection)
    if (playerSelection === computerSelection) {
        roundWinner = 'Tie!'
    }
    else if ((playerSelection === 'shield' && computerSelection === 'sword') || 
            (playerSelection === 'axe' && computerSelection === 'shield') ||
            (playerSelection === 'sword' && computerSelection === 'axe')){
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
