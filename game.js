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
let tieScore = 0
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
        tieScore ++;
        roundWinner = 'tie'
    }
    else if ((playerSelection === 'shield' && computerSelection === 'sword') || 
            (playerSelection === 'axe' && computerSelection === 'shield') ||
            (playerSelection === 'sword' && computerSelection === 'axe')){
               playerScore++
                roundWinner = 'win'
            }
    else {
        computerScore++
        roundWinner = 'lose'
    }   
    if (computerSelection === 'sword' && roundWinner === 'lose') {
        alert("The enemy easily dodges your slow axe and slashes you! ")
    }   
    if (computerSelection === 'shield' && roundWinner === 'lose') {
        alert("Your sword bounces harmlessly off the enemy shield as he bashes you in the face")
        
    }
    if (computerSelection === 'axe' && roundWinner === 'lose') {
        alert("The enemy axe smashes through your shield!")
    }
    if (computerSelection === 'sword' && roundWinner === 'tie') {
        alert("Your swords bounce harmlessly off each other")
    }
    if (computerSelection === 'shield' && roundWinner === 'tie') {
        alert("Your shields bounce harmlessly off each other")
    }
    if (computerSelection === 'axe' && roundWinner === 'tie'){
        alert("Your axes bounce harmlessly off each other")
    }
    if (computerSelection === 'sword' && roundWinner === 'win'){
        alert("You easily deflect the enemies sword and bash him with your shield")
    }
    if (computerSelection === 'shield' && roundWinner === 'win'){
        alert("Your axe smashes though the enemy shield and continues into his body")
    }
    if (computerSelection === 'axe' && roundWinner === 'win'){
        alert("You dodge the enemy axe and slice him with your sword")
    }
   if (playerScore === 5) {
        alert("You win")
        buttonDirector();
        
   }
   if (computerScore === 5) {
        alert("You lose")
        buttonDirector();
   }
}

function buttonDirector() {
    
        document.getElementById("restartButton").innerHTML = '<button onclick="window.location.reload()">Would you like to battle again?</button>';
   }


    

