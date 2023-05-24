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



document.getElementById("sword").onclick = function() {
    playRound("sword");
    
}
document.getElementById("axe").onclick = function() {
    playRound("axe");
}
document.getElementById("shield").onclick = function() {
    playRound("shield");
}
document.getElementById("closeSwordWin").onclick = function() {
    hideSwordWin();
}
document.getElementById("closeSwordLose").onclick = function() {
    hideSwordLose();
}
document.getElementById("closeSwordTie").onclick = function() {
    hideSwordTie()
}
document.getElementById("closeAxeLose").onclick = function() {
    hideAxeLose();
}
document.getElementById("closeAxeTie").onclick = function() {
    hideAxeTie();
}
document.getElementById("closeAxeWin").onclick = function() {
    hideAxeWin();
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
        toggleAxeLose();
    }   
    if (computerSelection === 'shield' && roundWinner === 'lose') {
        toggleSwordLose();
        
    }
    if (computerSelection === 'axe' && roundWinner === 'lose') {
        alert("The enemy axe smashes through your shield!")
    }
    if (computerSelection === 'sword' && roundWinner === 'tie') {
        toggleSwordTie();
    }
    if (computerSelection === 'shield' && roundWinner === 'tie') {
        alert("Your shields bounce harmlessly off each other")
    }
    if (computerSelection === 'axe' && roundWinner === 'tie'){
        toggleAxeTie();
    }
    if (computerSelection === 'sword' && roundWinner === 'win'){
        alert("You easily deflect the enemies sword and bash him with your shield")
    }
    if (computerSelection === 'shield' && roundWinner === 'win'){
        toggleAxeWin();
    }
    if (computerSelection === 'axe' && roundWinner === 'win'){
       toggleSwordWin();
       
    }
   if (playerScore === 5) {
        alert("You win")
       ;
        
   }
   if (computerScore === 5) {
        alert("You lose")
       ;
   }
}

function toggleSwordWin() {
    var div = document.getElementById("swordWin");    
    var closer = document.getElementById("closeSwordWin");   
    div.style.display = "block";
    closer.style.display = "inline";
}

function hideSwordWin() {
    var hide = document.getElementById("closeSwordWin");
    var stillHide = document.getElementById("swordWin");
    stillHide.style.display = "none";
    hide.style.display = "none"
}
function toggleSwordLose() {
    var div = document.getElementById("swordLose");    
    var closer = document.getElementById("closeSwordLose");   
    div.style.display = "block";
    closer.style.display = "inline";
}
function hideSwordLose() {
    var hide = document.getElementById("closeSwordLose");
    var stillHide = document.getElementById("swordLose");
    stillHide.style.display = "none";
    hide.style.display = "none"
}
function toggleSwordTie() {
    var div = document.getElementById("swordTie");    
    var closer = document.getElementById("closeSwordTie");   
    div.style.display = "block";
    closer.style.display = "inline";
}
function hideSwordTie() {
    var hide = document.getElementById("closeSwordTie");
    var stillHide = document.getElementById("swordTie");
    stillHide.style.display = "none";
    hide.style.display = "none"
}
function toggleAxeLose() {
    var div = document.getElementById("axeLose");    
    var closer = document.getElementById("closeAxeLose");   
    div.style.display = "block";
    closer.style.display = "inline";
}
function hideAxeLose() {
    var hide = document.getElementById("closeAxeLose");
    var stillHide = document.getElementById("axeLose");
    stillHide.style.display = "none";
    hide.style.display = "none"
}
function toggleAxeTie() {
    var div = document.getElementById("axeTie");    
    var closer = document.getElementById("closeAxeTie");   
    div.style.display = "block";
    closer.style.display = "inline";
}
function hideAxeTie() {
    var hide = document.getElementById("closeAxeTie");
    var stillHide = document.getElementById("axeTie");
    stillHide.style.display = "none";
    hide.style.display = "none"
}
function toggleAxeWin() {
    var div = document.getElementById("axeWin");    
    var closer = document.getElementById("closeAxeWin");   
    div.style.display = "block";
    closer.style.display = "inline";
}
function hideAxeWin() {
    var hide = document.getElementById("closeAxeWin");
    var stillHide = document.getElementById("axeWin");
    stillHide.style.display = "none";
    hide.style.display = "none"
}