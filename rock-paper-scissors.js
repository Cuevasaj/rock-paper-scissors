const rock = 0;
const paper = 1;
const scissors = 2;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3); // Will return a rang from 0 to 2

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
