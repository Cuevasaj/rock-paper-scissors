let humanScore = 0;
let computerScore = 0;

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

// computer logic
const computerChoiceMap = {
  // key -> value
  [0]: rock,
  [1]: paper,
  [2]: scissors,
};

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  const value = computerChoiceMap[computerChoice];
  return value;
}

const button = document.querySelectorAll(".choice-btn");
button.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    // console.log(`You clicked ${button.textContent}`);
  });
});

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    document.querySelector(".final-score").textContent = "It's a Tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    document.querySelector(".player-score").textContent = humanScore;
    document.querySelector(
      ".final-score"
    ).textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    document.querySelector(".computer-score").textContent = computerScore;
    document.querySelector(
      ".final-score"
    ).textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  if (humanScore >= 5) {
    document.querySelector(".final-score").textContent = "You win the game!";

    const buttons = document.querySelectorAll(".choice-btn");
    buttons.forEach((button) => {
      button.disabled = true;
    });
  } else if (computerScore >= 5) {
    document.querySelector(".final-score").textContent =
      "Computer wins the game!";

    const buttons = document.querySelectorAll(".choice-btn");
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
}
