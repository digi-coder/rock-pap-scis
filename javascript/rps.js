function hover(element) {
    element.setAttribute('src', 'images/play-button-push.png');
}

function unhover(element) {
    element.setAttribute('src', 'images/play-button-w.png');
}


//Setup Variables to use later

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');

//Let computer pick a choice
function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let compSelection = Math.floor(Math.random() * choices.length);
    return compChoice = choices[compSelection];
}

//Compare player selection to computer selection, pick a winner 
//for current game session, keep track and update players scores
function playRound(playerSelection) {
    let compChoice = computerPlay();

    if (playerSelection === compChoice) {
        playerScore = ++playerScore; computerScore = ++computerScore;
        return `It\'s a tie! you both chose ${playerSelection}.`;
    } else if (playerSelection === "rock" && compChoice === "paper") {
        computerScore = ++computerScore;
        return `You lose! ${compChoice} beats ${playerSelection}.`;
    } else if (playerSelection === "rock" && compChoice === "scissors") {
        playerScore = ++playerScore;
        return `You Win! ${playerSelection} beats ${compChoice}.`;
    } else if (playerSelection === "paper" && compChoice === "rock") {
        playerScore = ++playerScore;
        return `You Win! ${playerSelection} beats ${compChoice}.`;
    } else if (playerSelection === "paper" && compChoice === "scissors") {
        computerScore = ++computerScore;
        return `You lose! ${compChoice} beats ${playerSelection}.`;
    } else if (playerSelection === "scissors" && compChoice === "rock") {
        computerScore = ++computerScore;
        return `You lose! ${compChoice} beats ${playerSelection}.`;
    } else if (playerSelection === "scissors" && compChoice === "paper") {
        playerScore = ++playerScore;
        return `You Win! ${playerSelection} beats ${compChoice}.`;
    }
    document.getElementById('player-score-total').innerText = playerScore;
    document.getElementById('computer-score-total').innerText = computerScore;
return
}
//At each game session, display player choice and computer choice
//console.log(`Player chose: ${playerSelection}, Computer chose: ${compChoice}`);
//Pull data from the playRound function so that...
//console.log(playRound(playerSelection, compChoice));
//...at each game session, we can display current player score and current computer score


// Computer Score: ${computerScore}`);




if (playerScore === computerScore) {
    console.log(`Final Score: Player Score: ${playerScore}, Computer Score: ${computerScore}. It's a tie!`);
} else if (playerScore > computerScore) {
    console.log(`Final Score: Player Score: ${playerScore}, Computer Score: ${computerScore}. You won!`);
} else if (playerScore < computerScore) {
    console.log(`Final Score: Player Score: ${playerScore}, Computer Score: ${computerScore}. You lost!`);
}

//Rock, Paper, Scissors buttons listener
buttons.forEach(button => {
    button.addEventListener('click', function () {
            playRound(button.value)
        })
})

