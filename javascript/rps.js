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
    let pScore = 0;
    let cScore = 0;
    let tScore = 0;

    const playRound = () => {

        const options = document.querySelectorAll("#player-options button");
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function () {
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const compChoice = computerOptions[computerNumber];
                compareHands(this.textContent, compChoice);
                // console.log(this.textContent, compChoice);
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('#player-score-total');
        const computerScore = document.querySelector('#computer-score-total');
        const tieScore = document.querySelector('#game-ties-value p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
        tieScore.textContent = tScore;
    };

    //Compare player selection to computer selection, pick a winner 
    //for current game session, keep track and update players scores
    const compareHands = (playerChoice, compChoice) => {
        console.log(playerChoice, compChoice);
        const winner = document.querySelector('#winner p');
        
        if (playerChoice === compChoice) {
            pooop
            winner.textContent = `It\'s a tie! You both chose ${playerChoice}.`;
            tScore++;
            updateScore();
            return;
        } 
        
        if (playerChoice === "rock" && compChoice === "paper") {
            cScore++;
            winner.textContent = `You lose! ${compChoice} beats ${playerChoice}.`;
            updateScore();
            return;
        } else if (playerChoice === "rock" && compChoice === "scissors") {
            pScore++;
            winner.textContent = `You Win! ${playerChoice} beats ${compChoice}.`;
            updateScore();
            return;
        } else if (playerChoice === "paper" && compChoice === "rock") {
            pScore++;
            winner.textContent = `You Win! ${playerChoice} beats ${compChoice}.`;
            updateScore();
            return;
        } else if (playerChoice === "paper" && compChoice === "scissors") {
            cScore++;
            winner.textContent = `You lose! ${compChoice} beats ${playerChoice}.`;
            return;
        } else if (playerChoice === "scissors" && compChoice === "rock") {
            cScore++;
            winner.textContent = `You lose! ${compChoice} beats ${playerChoice}.`;
            updateScore();
            return;
        } else if (playerChoice === "scissors" && compChoice === "paper") {
            pScore++;
            winner.textContent = `You Win! ${playerChoice} beats ${compChoice}.`;
            updateScore();
            return;
        };
    };

    playRound();

    //At each game session, display player choice and computer choice
    //console.log(`Player chose: ${playerSelection}, Computer chose: ${compChoice}`);
    //Pull data from the playRound function so that...
    //console.log(playRound(playerSelection, compChoice));
    //...at each game session, we can display current player score and current computer score

    // Computer Score: ${computerScore}`);

    // if (playerScore === computerScore) {
    //     console.log(`Final Score: Player Score: ${playerScore}, Computer Score: ${computerScore}. It's a tie!`);
    // } else if (playerScore > computerScore) {
    //     console.log(`Final Score: Player Score: ${playerScore}, Computer Score: ${computerScore}. You won!`);
    // } else if (playerScore < computerScore) {
    //     console.log(`Final Score: Player Score: ${playerScore}, Computer Score: ${computerScore}. You lost!`);
    // }

};

//Start the game function
game();
