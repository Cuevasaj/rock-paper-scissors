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
  // console.log("you typed", humanChoice); // verification

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

// console.log(playRound(getHumanChoice(), getComputerChoice()));

const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("Its a Tie");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(
        `Score: Human: ${humanScore} Computer: ${computerScore}
        You Win!! Player: ${humanChoice} beats Computer choice ${computerChoice}, Congrats!!!`
      );
    } else {
      computerScore++;
      console.log(
        `
        Score: Human: ${humanScore} Computer: ${computerScore}
        You lose, Computer choice: ${computerChoice} beats your Human: ${humanChoice}.
        `
      );
    }
    // console.log(humanScore, computerScore); // log the score
  }

  for (let i = 0; i < 5; i++) {
    // will play 5 games
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log(
      `You win!! - Score: Human: ${humanScore} Computer: ${computerScore}`
    );
  } else if (computerScore > humanScore) {
    console.log(
      `Computer Wins! - Score: Human: ${humanScore} Computer: ${computerScore}`
    );
  } else {
    console.log(
      `This game is a draw - Score: Human: ${humanScore} Computer: ${computerScore}`
    );
  }
};

playGame();
