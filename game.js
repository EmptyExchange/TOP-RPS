console.log("hello")
function getComputerChoice() {
    const picked = Math.random()* 6 + 1;
    console.log(picked)
    if (picked <= 2) {
        return ("Rock");
    }
    else if (picked >= 5) {
        return ("Paper");
    }
    else {
        return ("Scissors");
    }
    

}
const computerSelection = getComputerChoice();



const playerSelection = prompt("Choose your weapon, Rock, Paper, or Scissors");
console.log(playerSelection)
function playRound() {

    console.log(playerSelection)
if (playerSelection.toLowerCase() === "rock" && (computerSelection === "Paper")) {
    alert("Computer chose Paper! You Lose!");
    
}
else if (playerSelection.toLowerCase() === "rock" && (computerSelection === "Rock")) {
    alert("Computer chose Rock! No winner!");
}
else if (playerSelection.toLowerCase() === "rock" && (computerSelection === "Scissors")) {
    alert("Computer chose Scissors. You Win!");
}
}
playRound();
