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
let computer = getComputerChoice();

let playerSelection = prompt("Choose your weapon, Rock, Paper, or Scissors");

if (playerSelection.toLowerCase() === "rock" && (computer === "Paper")) {
    alert("Computer chose Paper! You Lose!");
    
}
else if (playerSelection.toLowerCase() === "rock" && (computer === "Rock")) {
    alert("Computer chose Rock! No winner!");
}
else if (playerSelection.toLowerCase() === "rock" && (computer === "Scissors")) {
    alert("Computer chose Scissors. You Win!");
}