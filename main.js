// // Global variables
// // create array of choices
// let options = ['Rock', 'Paper', 'Scissors'];

// // Users wins, losses, and ties, initialized to 0
// let wins = 0;
// let losses = 0;
// let ties = 0;

// let playGame = () => {
//   // set timeout to delay game start to allow user to read title
//   setTimeout(() => {
//     // get user's choice
//     let userChoice = prompt('Enter Rock, Paper, or Scissors');
//     console.log(userChoice);
//     // get randomized computer's choice
//     let computerChoice = options[Math.floor(Math.random() * options.length)];

//     // compare user's choice to computer's choice

//     // if userChoice is rock
//     if (
//       userChoice === 'Rock' ||
//       userChoice === 'rock' ||
//       userChoice === 'R' ||
//       userChoice === 'r'
//     ) {
//       if (computerChoice === 'Rock') {
//         ties++;
//         alert('The computer chose ' + computerChoice + '. You tied!');
//       } else if (computerChoice === 'Paper') {
//         losses++;
//         alert('The computer chose ' + computerChoice + '. You lost!');
//       } else {
//         wins++;
//         alert('The computer chose ' + computerChoice + '. You won!');
//       }
//     }
//     // if userChoice is paper
//     if (
//       userChoice === 'Paper' ||
//       userChoice === 'paper' ||
//       userChoice === 'P' ||
//       userChoice === 'p'
//     ) {
//       if (computerChoice === 'Rock') {
//         wins++;
//         alert('The computer chose ' + computerChoice + '. You won!');
//       } else if (computerChoice === 'Paper') {
//         ties++;
//         alert('The computer chose ' + computerChoice + '. You tied!');
//       } else {
//         losses++;
//         alert('The computer chose ' + computerChoice + '. You lost!');
//       }
//     }
//     // if userChoice is scissors
//     if (
//       userChoice === 'Scissors' ||
//       userChoice === 'scissors' ||
//       userChoice === 'S' ||
//       userChoice === 's'
//     ) {
//       if (computerChoice === 'Rock') {
//         losses++;
//         alert('The computer chose ' + computerChoice + '. You lost!');
//       } else if (computerChoice === 'Paper') {
//         wins++;
//         alert('The computer chose ' + computerChoice + '. You won!');
//       } else {
//         ties++;
//         alert('The computer chose ' + computerChoice + '. You tied!');
//       }
//     }

//     // if userChoice is invalid
//     // if (
//     //   userChoice !== 'Rock' ||
//     //   userChoice !== 'rock' ||
//     //   userChoice !== 'R' ||
//     //   userChoice !== 'r' ||
//     //   userChoice !== 'Paper' ||
//     //   userChoice !== 'paper' ||
//     //   userChoice !== 'P' ||
//     //   userChoice !== 'p' ||
//     //   userChoice !== 'Scissors' ||
//     //   userChoice !== 'scissors' ||
//     //   userChoice !== 'S' ||
//     //   userChoice !== 's'
//     // ) {
//     //   alert('Invalid choice! Please try again.');
//     // }

//     // display wins, losses, and ties
//     alert('Wins: ' + wins + ' Losses: ' + losses + ' Ties: ' + ties);

//     // ask user if they want to play again
//     let playAgain = prompt('Play again? (Y/N)');
//     // if yes, call game function again
//     if (
//       playAgain === 'Y' ||
//       playAgain === 'y' ||
//       playAgain === 'Yes' ||
//       playAgain === 'yes'
//     ) {
//       playGame();
//     } else {
//       alert('Thanks for playing!');
//     }
//   }, 1200);
// };

// playGame(); // call game function

// const choices = ["R", "P", "S"];
// let wins = 0;
// let losses = 0;
// let ties = 0;

// const playRPS = () => {
//   const userChoice = prompt("Enter R for Rock, P for Paper, S for Scissors: ").toUpperCase();
//   if (!choices.includes(userChoice)) {
//     alert("Invalid choice, try again.");
//     return playRPS();
//   }
//   const computerChoice = choices[Math.floor(Math.random() * choices.length)];
//   if (userChoice === computerChoice) {
//     alert("Tie.");
//     ties += 1;
//   } else if (
//     (userChoice === "R" && computerChoice === "S") ||
//     (userChoice === "P" && computerChoice === "R") ||
//     (userChoice === "S" && computerChoice === "P")
//   ) {
//     alert("You win.");
//     wins += 1;
//   } else {
//     alert("You lose.");
//     losses += 1;
//   }
//   alert(`Wins: ${wins} Losses: ${losses} Ties: ${ties}`);
//   const playAgain = prompt("Play Again? (Y/N)").toUpperCase();
//   if (playAgain === "Y") {
//     playRPS();
//   }
// };

// playRPS();


// Gloabl variables
// array of user choices
const choices = ['R', 'P', 'S'];
let wins = 0;
let losses = 0;
let ties = 0;

// function to get randomized computer choice
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// function to compaire user choice to computer choice
function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    ties++;
    return 'Tie';
  }
  if (userChoice === 'R' && computerChoice === 'S') {
    wins++;
    return 'You Win';
  }
  if (userChoice === 'P' && computerChoice === 'R') {
    wins++;
    return 'You Win';
  }
  if (userChoice === 'S' && computerChoice === 'P') {
    wins++;
    return 'You Win';
  }
  losses++;
  return 'You Lose';
}

// function to play game and display results on screen
function playRPS() {
  // variable to store user choice input value
  const userChoice = document.getElementById('user-choice').value;
  // validator to check if user input is one of the choices
  if (userChoice !== "R" && userChoice !== "P" && userChoice !== "S") {
    alert("Not a valid choice, please try again");
    return;
  }
  // variable to store result of invoking getComputerChoice function
  const computerChoice = getComputerChoice();
  // variable to store result of invoking getResult function
  const result = getResult(userChoice, computerChoice);

  // display results on screen
  document.getElementById('result').style.display = 'block';
  document.getElementById('result').innerHTML = `
  Result: ${result}!<br>
    You chose ${userChoice}, computer chose ${computerChoice}.<br>
    Wins: ${wins}, Losses: ${losses}, Ties: ${ties}
  `;
}
