console.log("Hello");
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

