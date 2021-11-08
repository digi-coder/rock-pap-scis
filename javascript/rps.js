function hover(element) {
    element.setAttribute('src', 'images/play-button-push.png');
}

function unhover(element) {
    element.setAttribute('src', 'images/play-button-w.png');
}

//Scope the whole game into its own function so that variables  
//are not available from the outside.
const game = () => {
    //Setup Variables to use later

    let playerScore = 0;
    let computerScore = 0;
    //const buttons = document.querySelectorAll('input');

    function playRound(playerSelection) {

        const options = document.querySelectorAll("#player-options button");
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function(){
                const computerNumber = Math.floor(Math.random() * 3);
                const compChoice = computerOptions[computerNumber];
                compareHands(this.textContent, compChoice);
            });
        });
    };

    //Compare player selection to computer selection, pick a winner 
    //for current game session, keep track and update players scores
    const compareHands = (playerChoice, compChoice) => {
        const winner = document.querySelector('#winner');
        if (playerChoice === compChoice) {
            playerScore = ++playerScore; computerScore = ++computerScore;
            winner.textContent = `It\'s a tie! you both chose ${playerSelection}.`;
            return;
        } else if (playerChoice === "rock" && compChoice === "paper") {
            computerScore = ++computerScore;
            winner.textContent = `You lose! ${compChoice} beats ${playerSelection}.`;
            return;
        } else if (playerChoice === "rock" && compChoice === "scissors") {
            playerScore = ++playerScore;
            winner.textContent =  `You Win! ${playerSelection} beats ${compChoice}.`;
            return;
        } else if (playerChoice === "paper" && compChoice === "rock") {
            playerScore = ++playerScore;
            winner.textContent =  `You Win! ${playerSelection} beats ${compChoice}.`;
            return;
        } else if (playerChoice === "paper" && compChoice === "scissors") {
            computerScore = ++computerScore;
            winner.textContent =  `You lose! ${compChoice} beats ${playerSelection}.`;
            return;
        } else if (playerChoice === "scissors" && compChoice === "rock") {
            computerScore = ++computerScore;
            winner.textContent =  `You lose! ${compChoice} beats ${playerSelection}.`;
            return;
        } else if (playerChoice === "scissors" && compChoice === "paper") {
            playerScore = ++playerScore;
            winner.textContent =  `You Win! ${playerSelection} beats ${compChoice}.`;
            return;
        }
        document.getElementById('player-score-total').innerText = playerScore;
        document.getElementById('computer-score-total').innerText = computerScore;
        return;
    }

    playRound();

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
    // buttons.forEach(button => {
    //     button.addEventListener('click', function () {
    //         playRound(button.value)
    //     })
    // })
}


//Start the game function
game();
