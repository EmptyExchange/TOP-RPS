console.log("hello")
function getComputerChoice() {
    const picked = Math.random()* 6 + 1;
    
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







function playRound() {
    const playerSelection = prompt("Choose your weapon, Rock, Paper, or Scissors");
    
    const computerSelection = getComputerChoice();
    

    
        if (playerSelection.toLowerCase() === "rock" && (computerSelection === "Paper")) {
            alert('Computer chose Paper! ' + lose);
            return lose;
    
         }
        else if (playerSelection.toLowerCase() === "rock" && (computerSelection === "Rock")){
            alert("Computer chose Rock! " + tie);
            return tie;
        }
        else if (playerSelection.toLowerCase() === "rock" && (computerSelection === "Scissors")) {
            alert("Computer chose Scissors. " + win);
            return win;
    
        }
        else if (playerSelection.toLowerCase() === "paper" && (computerSelection === "Paper")) {
            alert("Computer chose Paper! " + tie);
            return tie;
    
        }
        else if (playerSelection.toLowerCase() === "paper" && (computerSelection === "Rock")) {
            alert("Computer chose Rock! " + win);
            return win;
  
        }
        else if (playerSelection.toLowerCase() === "paper" && (computerSelection === "Scissors")) {
            alert("Computer chose Scissors. " + lose);
            return lose;
        }
        else if (playerSelection.toLowerCase() === "scissors" && (computerSelection === "Paper")) {
            alert("Computer chose Paper! " + win);
            return win;
   
        }
        else if (playerSelection.toLowerCase() === "scissors" && (computerSelection === "Rock")) {
            alert("Computer chose Rock! " + lose);
            return lose;
        }
        else if (playerSelection.toLowerCase() === "scissors" && (computerSelection === "Scissors")) {
            alert("Computer chose Scissors. " + tie);
            return tie;
        }
        else  {
            alert("Invalid entry, try again.")
        }
   
}
console.log(playRound());

function wins() {
    if playRound() === win {
        console.log("this working?")
    }
}

