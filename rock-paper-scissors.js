// This variables are strings
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else if (computerChoice === 2) {
    return "scissors";
  }
  // Happening in the scope of the function
  return computerChoice; // will return a string
}

// console.log("this is the computer choice:", getComputerChoice());

function getHumanChoice() {
  let humanChoice = prompt(
    "Hi user, Whats your choice, Rock, Paper or Scissors"
  );

  humanChoice = humanChoice.toLowerCase();
  console.log("you typed", humanChoice); // verification

  if (humanChoice === "rock") {
    humanChoice = rock;
  } else if (humanChoice === "paper") {
    humanChoice = paper;
  } else if (humanChoice === "scissors") {
    humanChoice = scissors;
  } else {
    return console.log("error");
  }

  return humanChoice; //  Will return a string
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // game logic below

  // rock = 0;
  // paper = 1;
  // scissors = 2;

  // You win if:
  // Rock (0) beats Scissors (2)
  // Paper (1) beats Rock (0)
  // Scissors (2) beats Paper (1)

  if (humanChoice === computerChoice) {
    console.log("Its a Tie");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(
      `You Win!! Player: ${humanChoice} beats Computer choice ${computerChoice}, Congrats!!!`
    );
  } else {
    computerScore++;
    console.log(
      `You lose, Computer choice ${computerChoice} beats your ${humanChoice} choice`
    );
  }
  console.log(humanScore, computerScore); // log the score
}

console.log(playRound(getHumanChoice(), getComputerChoice()));
