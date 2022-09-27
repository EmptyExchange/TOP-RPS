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
const win = "You Win!";
const lose = "You Lose!";
const tie = "No Winner!";



for (let i = 0; i <= 4; i++) {

playRound();
}

function playRound() {
    const playerSelection = prompt("Choose your weapon, Rock, Paper, or Scissors");
    
const computerSelection = getComputerChoice();

    
if (playerSelection.toLowerCase() === "rock" && (computerSelection === "Paper")) {
    alert('Computer chose Paper! ' + lose);
    
}
else if (playerSelection.toLowerCase() === "rock" && (computerSelection === "Rock")) {
    alert("Computer chose Rock! " + tie);
}
else if (playerSelection.toLowerCase() === "rock" && (computerSelection === "Scissors")) {
    alert("Computer chose Scissors. " + win);
    
}
else if (playerSelection.toLowerCase() === "paper" && (computerSelection === "Paper")) {
    alert("Computer chose Paper! " + tie);
    
}
else if (playerSelection.toLowerCase() === "paper" && (computerSelection === "Rock")) {
    alert("Computer chose Rock! " + win);
  
}
else if (playerSelection.toLowerCase() === "paper" && (computerSelection === "Scissors")) {
    alert("Computer chose Scissors. " + lose);
}
else if (playerSelection.toLowerCase() === "scissors" && (computerSelection === "Paper")) {
    alert("Computer chose Paper! " + win);
   
    
}
else if (playerSelection.toLowerCase() === "scissors" && (computerSelection === "Rock")) {
    alert("Computer chose Rock! " + lose);
}
else if (playerSelection.toLowerCase() === "scissors" && (computerSelection === "Scissors")) {
    alert("Computer chose Scissors. " + tie);
}
  else  {
    alert("Invalid entry, try again.")
  }}




