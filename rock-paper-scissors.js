const rock = 0;
const paper = 1;
const scissors = 2;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if ((computerChoice = 0)) {
    return "Rock";
  } else if ((computerChoice = 1)) {
    return "Paper";
  } else if ((computerChoice = 2)) {
    return "Scissors";
  }

  return computerChoice;
}

// console.log(getComputerChoice()); //

function getHumanChoice() {
  let humanChoice = prompt(
    "Hi user, Whats your choice, Rock, Paper or Scissor"
  );

  humanChoice = humanChoice.toLowerCase();
  console.log("you typed", humanChoice);

  if (humanChoice === "rock") {
    humanChoice = rock;
  } else if (humanChoice === "paper") {
    humanChoice = paper;
  } else if (humanChoice === "scissors") {
    humanChoice = scissors;
  } else {
    return console.log("error");
  }

  return humanChoice;
}

// getHumanChoice(); //

let humanScore;
let computerScore;

function playRound(humanChoice, computerChoice) {
  humanChoice;
  computerChoice;
  return playRound();
}
