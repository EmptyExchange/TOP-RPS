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

alert("5 games will be played. Will you be victorious?") 





function playRound() {
   
    const computerSelection = getComputerChoice();
    const playerSelection = prompt('Choose your weapon').toLowerCase();
    console.log(computerSelection)
    console.log(playerSelection)
    if (playerSelection === '') {
        alert("COWARD! CHOOSE A WEAPON! FIGHT!")
    }

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



function game() {
    for ( let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore === computerScore){
        alert("The game was a draw! No Winner!")
    }
    else if (playerScore > computerScore){
        alert("You did it! You Win!")
    }
    else {
        alert("You failed! Computer wins!")
    }
}

game();
console.log(playerScore)
console.log(computerScore)
console.log(roundWinner)
