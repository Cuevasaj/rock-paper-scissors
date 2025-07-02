const rock = 0;
const paper = 1;
const scissors = 2;

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return "Rock";
  } else if (computerChoice === 1) {
    return "Paper";
  } else if (computerChoice === 2) {
    return "Scissors";
  } else "error";

  return computerChoice;
}

console.log(getComputerChoice());

function getHumanChoice() {
  let humanChoice = prompt(
    "Hi user, Whats your choice, Rock, Paper or Scissor"
  );
  return console.log("you selected", humanChoice);
}

getHumanChoice();
