
const game = () => {
// create array of choices
const options = ["Rock", "Paper", "Scissors"];

// Users wins, losses, and ties, initialized to 0
let wins = 0;
let losses = 0;
let ties = 0;

playGame = () => {
// get user's choice
let userChoice = prompt("Enter Rock, Paper, or Scissors");
// get randomized computer's choice
let computerChoice = options[Math.floor(Math.random() * options.length)];

// compare user's choice to computer's choice  

// if userChoice is invalid
if(userChoice !== 'Rock' && userChoice !== 'Paper' && userChoice !== 'Scissors') {
    alert("Invalid choice! Please try again."); 
}
// if userChoice is rock
if(userChoice === 'Rock') {
    if(computerChoice === 'Rock') {
        ties++;
        alert("The computer chose " + computerChoice + ". You tied!");
    } else if(computerChoice === 'Paper') {
        losses++;
        alert("The computer chose " + computerChoice + ". You lost!");
    } else {
        wins++;
        alert("The computer chose " + computerChoice + ". You won!");
    }
}
// if userChoice is paper
if(userChoice === 'Paper') {
    if(computerChoice === 'Rock') {
        wins++;
        alert("The computer chose " + computerChoice + ". You won!");
    } else if(computerChoice === 'Paper') {
        ties++;
        alert("The computer chose " + computerChoice + ". You tied!");
    } else {
        losses++;
        alert("The computer chose " + computerChoice + ". You lost!");
    }
}
// if userChoice is scissors
if(userChoice === 'Scissors') {
    if(computerChoice === 'Rock') {
        losses++;
        alert("The computer chose " + computerChoice + ". You lost!");
    } else if(computerChoice === 'Paper') {
        wins++;
        alert("The computer chose " + computerChoice + ". You won!");
    } else {
        ties++;
        alert("The computer chose " + computerChoice + ". You tied!");
    }
}


// display wins, losses, and ties
alert("Total wins: " + wins + " Total losses: " + losses + " Total ties: " + ties);
}
// play again or quit
prompt("Play again? (Y/N)");
// if yes, call game function again 
if(prompt === 'Y' || prompt === 'y') {
    playGame();
} else {
    alert("Thanks for playing!");
};  
}



game(); // call game function



