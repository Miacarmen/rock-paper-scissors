// Global variables
// create array of choices
let options = ['Rock', 'Paper', 'Scissors'];

// Users wins, losses, and ties, initialized to 0
let wins = 0;
let losses = 0;
let ties = 0;

let playGame = () => {
  // set timeout to delay game start to allow user to read title
  setTimeout(() => {
    // get user's choice
    let userChoice = prompt('Enter Rock, Paper, or Scissors');
    console.log(userChoice);
    // get randomized computer's choice
    let computerChoice = options[Math.floor(Math.random() * options.length)];

    // compare user's choice to computer's choice

    // if userChoice is rock
    if (
      userChoice === 'Rock' ||
      userChoice === 'rock' ||
      userChoice === 'R' ||
      userChoice === 'r'
    ) {
      if (computerChoice === 'Rock') {
        ties++;
        alert('The computer chose ' + computerChoice + '. You tied!');
      } else if (computerChoice === 'Paper') {
        losses++;
        alert('The computer chose ' + computerChoice + '. You lost!');
      } else {
        wins++;
        alert('The computer chose ' + computerChoice + '. You won!');
      }
    }
    // if userChoice is paper
    if (
      userChoice === 'Paper' ||
      userChoice === 'paper' ||
      userChoice === 'P' ||
      userChoice === 'p'
    ) {
      if (computerChoice === 'Rock') {
        wins++;
        alert('The computer chose ' + computerChoice + '. You won!');
      } else if (computerChoice === 'Paper') {
        ties++;
        alert('The computer chose ' + computerChoice + '. You tied!');
      } else {
        losses++;
        alert('The computer chose ' + computerChoice + '. You lost!');
      }
    }
    // if userChoice is scissors
    if (
      userChoice === 'Scissors' ||
      userChoice === 'scissors' ||
      userChoice === 'S' ||
      userChoice === 's'
    ) {
      if (computerChoice === 'Rock') {
        losses++;
        alert('The computer chose ' + computerChoice + '. You lost!');
      } else if (computerChoice === 'Paper') {
        wins++;
        alert('The computer chose ' + computerChoice + '. You won!');
      } else {
        ties++;
        alert('The computer chose ' + computerChoice + '. You tied!');
      }
    }

    // if userChoice is invalid
    // if (
    //   userChoice !== 'Rock' ||
    //   userChoice !== 'rock' ||
    //   userChoice !== 'R' ||
    //   userChoice !== 'r' ||
    //   userChoice !== 'Paper' ||
    //   userChoice !== 'paper' ||
    //   userChoice !== 'P' ||
    //   userChoice !== 'p' ||
    //   userChoice !== 'Scissors' ||
    //   userChoice !== 'scissors' ||
    //   userChoice !== 'S' ||
    //   userChoice !== 's'
    // ) {
    //   alert('Invalid choice! Please try again.');
    // }

    // display wins, losses, and ties
    alert('Wins: ' + wins + ' Losses: ' + losses + ' Ties: ' + ties);

    // ask user if they want to play again
    let playAgain = prompt('Play again? (Y/N)');
    // if yes, call game function again
    if (
      playAgain === 'Y' ||
      playAgain === 'y' ||
      playAgain === 'Yes' ||
      playAgain === 'yes'
    ) {
      playGame();
    } else {
      alert('Thanks for playing!');
    }
  }, 1200);
};

playGame(); // call game function
